import AccessControl "./authorization/access-control";
import Map "mo:core/Map";
import Buffer "mo:base/Buffer";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";
import Time "mo:base/Time";
import Prim "mo:prim";
import Runtime "mo:core/Runtime";

persistent actor {

  // ─── ACCESS CONTROL ──────────────────────────────────────────────────────

  transient let accessControlState = AccessControl.initState();

  public shared ({ caller }) func _initializeAccessControlWithSecret(userSecret : Text) : async () {
    switch (Prim.envVar<system>("CAFFEINE_ADMIN_TOKEN")) {
      case (null) { Runtime.trap("CAFFEINE_ADMIN_TOKEN not set"); };
      case (?adminToken) {
        AccessControl.initialize(accessControlState, caller, adminToken, userSecret);
      };
    };
  };

  public query ({ caller }) func getCallerUserRole() : async AccessControl.UserRole {
    AccessControl.getUserRole(accessControlState, caller);
  };

  public shared ({ caller }) func assignCallerUserRole(user : Principal, role : AccessControl.UserRole) : async () {
    AccessControl.assignRole(accessControlState, caller, user, role);
  };

  public query ({ caller }) func isCallerAdmin() : async Bool {
    AccessControl.isAdmin(accessControlState, caller);
  };

  // ─── TYPES ───────────────────────────────────────────────────────────────

  public type ProductCategory = { #silverOrnament; #ethnicWear };

  public type SizeStock = { size : Text; stock : Nat };

  public type Product = {
    id : Nat;
    name : Text;
    description : Text;
    category : ProductCategory;
    price : Nat;
    silverWeight : ?Nat;
    basePrice : ?Nat;
    sizes : [SizeStock];
    imageUrl : Text;
    stock : Nat;
    isActive : Bool;
  };

  public type OrderStage = {
    #orderPlaced;
    #artisanCrafting;
    #qualityCheck;
    #royalDispatch;
    #palaceDelivery;
  };

  public type OrderItem = {
    productId : Nat;
    productName : Text;
    quantity : Nat;
    selectedSize : ?Text;
    priceAtOrder : Nat;
  };

  public type Order = {
    id : Nat;
    customerId : Principal;
    items : [OrderItem];
    totalAmount : Nat;
    shippingAddress : Text;
    stage : OrderStage;
    placedAt : Int;
    isApproved : Bool;
  };

  public type CartItem = {
    productId : Nat;
    quantity : Nat;
    selectedSize : ?Text;
  };

  public type CustomerProfile = {
    principal : Principal;
    name : Text;
    phone : Text;
    address : Text;
    isSecondaryAdmin : Bool;
  };

  // ─── STATE ───────────────────────────────────────────────────────────────

  stable var silverRatePerGram : Nat = 9500;
  stable var nextProductId : Nat = 1;
  stable var nextOrderId : Nat = 1;

  transient let products = Map.empty<Nat, Product>();
  transient let orders = Map.empty<Nat, Order>();
  transient let carts = Map.empty<Principal, [CartItem]>();
  transient let wishlists = Map.empty<Principal, [Nat]>();
  transient let profiles = Map.empty<Principal, CustomerProfile>();
  transient let secondaryAdmins = Map.empty<Principal, Bool>();

  // ─── HELPERS ─────────────────────────────────────────────────────────────

  func isSecondaryAdmin(caller : Principal) : Bool {
    switch (secondaryAdmins.get(caller)) {
      case (?v) v;
      case null false;
    };
  };

  func canManageInventory(caller : Principal) : Bool {
    AccessControl.isAdmin(accessControlState, caller) or isSecondaryAdmin(caller);
  };

  // ─── PROFILE ─────────────────────────────────────────────────────────────

  public shared ({ caller }) func upsertProfile(name : Text, phone : Text, address : Text) : async () {
    let isSecAdmin = switch (profiles.get(caller)) {
      case (?p) p.isSecondaryAdmin;
      case null false;
    };
    profiles.add(caller, { principal = caller; name; phone; address; isSecondaryAdmin = isSecAdmin });
  };

  public query ({ caller }) func getMyProfile() : async ?CustomerProfile {
    profiles.get(caller);
  };

  // ─── SECONDARY ADMIN MANAGEMENT ──────────────────────────────────────────

  public shared ({ caller }) func grantSecondaryAdmin(user : Principal) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) { Runtime.trap("Unauthorized"); };
    secondaryAdmins.add(user, true);
    switch (profiles.get(user)) {
      case (?p) { profiles.add(user, { p with isSecondaryAdmin = true }); };
      case null {};
    };
  };

  public shared ({ caller }) func revokeSecondaryAdmin(user : Principal) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) { Runtime.trap("Unauthorized"); };
    secondaryAdmins.add(user, false);
  };

  public query ({ caller }) func getMyAdminLevel() : async Text {
    if (AccessControl.isAdmin(accessControlState, caller)) { "primary" }
    else if (isSecondaryAdmin(caller)) { "secondary" }
    else { "customer" };
  };

  // ─── SILVER RATE ─────────────────────────────────────────────────────────

  public query func getSilverRate() : async Nat {
    silverRatePerGram;
  };

  public shared ({ caller }) func updateSilverRate(rateInPaise : Nat) : async () {
    if (not canManageInventory(caller)) { Runtime.trap("Unauthorized"); };
    silverRatePerGram := rateInPaise;
  };

  // ─── PRODUCTS ────────────────────────────────────────────────────────────

  public shared ({ caller }) func addProduct(
    name : Text,
    description : Text,
    category : ProductCategory,
    basePrice : Nat,
    silverWeight : ?Nat,
    sizes : [SizeStock],
    imageUrl : Text,
    stock : Nat
  ) : async Nat {
    if (not canManageInventory(caller)) { Runtime.trap("Unauthorized"); };
    let finalPrice = switch (silverWeight) {
      case (?w) basePrice + (w * silverRatePerGram / 100);
      case null basePrice;
    };
    let product : Product = {
      id = nextProductId;
      name; description; category;
      price = finalPrice;
      silverWeight;
      basePrice = if (silverWeight != null) ?basePrice else null;
      sizes; imageUrl; stock;
      isActive = true;
    };
    products.add(nextProductId, product);
    nextProductId += 1;
    nextProductId - 1;
  };

  public shared ({ caller }) func updateProduct(
    id : Nat,
    name : Text,
    description : Text,
    basePrice : Nat,
    silverWeight : ?Nat,
    sizes : [SizeStock],
    imageUrl : Text,
    stock : Nat,
    isActive : Bool
  ) : async () {
    if (not canManageInventory(caller)) { Runtime.trap("Unauthorized"); };
    switch (products.get(id)) {
      case null { Runtime.trap("Product not found"); };
      case (?p) {
        let finalPrice = switch (silverWeight) {
          case (?w) basePrice + (w * silverRatePerGram / 100);
          case null basePrice;
        };
        products.add(id, { p with name; description; price = finalPrice; silverWeight; basePrice = if (silverWeight != null) ?basePrice else null; sizes; imageUrl; stock; isActive });
      };
    };
  };

  public query func getProducts() : async [Product] {
    let buf = Buffer.Buffer<Product>(16);
    for ((_, p) in products.entries()) {
      if (p.isActive) { buf.add(p); };
    };
    Buffer.toArray(buf);
  };

  public query func getAllProductsAdmin() : async [Product] {
    let buf = Buffer.Buffer<Product>(16);
    for ((_, p) in products.entries()) { buf.add(p); };
    Buffer.toArray(buf);
  };

  public query func getProduct(id : Nat) : async ?Product {
    products.get(id);
  };

  public query func getProductsByCategory(cat : ProductCategory) : async [Product] {
    let buf = Buffer.Buffer<Product>(16);
    for ((_, p) in products.entries()) {
      if (p.isActive and p.category == cat) { buf.add(p); };
    };
    Buffer.toArray(buf);
  };

  // ─── CART ─────────────────────────────────────────────────────────────────

  public query ({ caller }) func getCart() : async [CartItem] {
    switch (carts.get(caller)) {
      case (?items) items;
      case null [];
    };
  };

  public shared ({ caller }) func addToCart(productId : Nat, quantity : Nat, selectedSize : ?Text) : async () {
    let current = switch (carts.get(caller)) { case (?c) c; case null []; };
    var found = false;
    let updated = Buffer.Buffer<CartItem>(16);
    for (item in current.vals()) {
      if (item.productId == productId and item.selectedSize == selectedSize) {
        found := true;
        updated.add({ item with quantity = item.quantity + quantity });
      } else {
        updated.add(item);
      };
    };
    if (not found) {
      updated.add({ productId; quantity; selectedSize });
    };
    carts.add(caller, Buffer.toArray(updated));
  };

  public shared ({ caller }) func removeFromCart(productId : Nat, selectedSize : ?Text) : async () {
    let current = switch (carts.get(caller)) { case (?c) c; case null []; };
    let filtered = Buffer.Buffer<CartItem>(16);
    for (item in current.vals()) {
      if (not (item.productId == productId and item.selectedSize == selectedSize)) {
        filtered.add(item);
      };
    };
    carts.add(caller, Buffer.toArray(filtered));
  };

  public shared ({ caller }) func clearCart() : async () {
    carts.add(caller, []);
  };

  // ─── ORDERS ───────────────────────────────────────────────────────────────

  public shared ({ caller }) func placeOrder(shippingAddress : Text) : async Nat {
    let cartItems = switch (carts.get(caller)) { case (?c) c; case null [] };
    if (cartItems.size() == 0) { Runtime.trap("Cart is empty"); };
    var total : Nat = 0;
    let orderItems = Buffer.Buffer<OrderItem>(16);
    for (ci in cartItems.vals()) {
      switch (products.get(ci.productId)) {
        case null {};
        case (?p) {
          total += p.price * ci.quantity;
          orderItems.add({ productId = p.id; productName = p.name; quantity = ci.quantity; selectedSize = ci.selectedSize; priceAtOrder = p.price });
        };
      };
    };
    let order : Order = {
      id = nextOrderId;
      customerId = caller;
      items = Buffer.toArray(orderItems);
      totalAmount = total;
      shippingAddress;
      stage = #orderPlaced;
      placedAt = Time.now();
      isApproved = false;
    };
    orders.add(nextOrderId, order);
    carts.add(caller, []);
    nextOrderId += 1;
    nextOrderId - 1;
  };

  public query ({ caller }) func getMyOrders() : async [Order] {
    let buf = Buffer.Buffer<Order>(16);
    for ((_, o) in orders.entries()) {
      if (o.customerId == caller) { buf.add(o); };
    };
    Buffer.toArray(buf);
  };

  public query ({ caller }) func getAllOrders() : async [Order] {
    if (not canManageInventory(caller)) { Runtime.trap("Unauthorized"); };
    let buf = Buffer.Buffer<Order>(16);
    for ((_, o) in orders.entries()) { buf.add(o); };
    Buffer.toArray(buf);
  };

  public shared ({ caller }) func updateOrderStage(orderId : Nat, stage : OrderStage) : async () {
    if (not canManageInventory(caller)) { Runtime.trap("Unauthorized"); };
    switch (orders.get(orderId)) {
      case null { Runtime.trap("Order not found"); };
      case (?o) { orders.add(orderId, { o with stage }); };
    };
  };

  public shared ({ caller }) func approveOrder(orderId : Nat, approve : Bool) : async () {
    if (not canManageInventory(caller)) { Runtime.trap("Unauthorized"); };
    switch (orders.get(orderId)) {
      case null { Runtime.trap("Order not found"); };
      case (?o) {
        orders.add(orderId, { o with
          isApproved = approve;
          stage = if (approve) #artisanCrafting else o.stage;
        });
      };
    };
  };

  // ─── WISHLIST ─────────────────────────────────────────────────────────────

  public query ({ caller }) func getWishlist() : async [Product] {
    let ids = switch (wishlists.get(caller)) { case (?w) w; case null [] };
    let buf = Buffer.Buffer<Product>(16);
    for (id in ids.vals()) {
      switch (products.get(id)) {
        case (?p) { if (p.isActive) buf.add(p); };
        case null {};
      };
    };
    Buffer.toArray(buf);
  };

  public shared ({ caller }) func addToWishlist(productId : Nat) : async () {
    let current = switch (wishlists.get(caller)) { case (?w) w; case null [] };
    var exists = false;
    for (id in current.vals()) { if (id == productId) { exists := true; }; };
    if (not exists) {
      let buf = Buffer.Buffer<Nat>(16);
      for (id in current.vals()) { buf.add(id); };
      buf.add(productId);
      wishlists.add(caller, Buffer.toArray(buf));
    };
  };

  public shared ({ caller }) func removeFromWishlist(productId : Nat) : async () {
    let current = switch (wishlists.get(caller)) { case (?w) w; case null [] };
    let buf = Buffer.Buffer<Nat>(16);
    for (id in current.vals()) { if (id != productId) { buf.add(id); }; };
    wishlists.add(caller, Buffer.toArray(buf));
  };

  // ─── ANALYTICS (Primary Admin Only) ──────────────────────────────────────

  public query ({ caller }) func getAnalytics() : async {
    totalRevenue : Nat;
    totalOrders : Nat;
    pendingApproval : Nat;
    delivered : Nat;
  } {
    if (not AccessControl.isAdmin(accessControlState, caller)) { Runtime.trap("Unauthorized"); };
    var revenue : Nat = 0;
    var total : Nat = 0;
    var pending : Nat = 0;
    var delivered : Nat = 0;
    for ((_, o) in orders.entries()) {
      total += 1;
      if (o.isApproved) { revenue += o.totalAmount; };
      if (not o.isApproved) { pending += 1; };
      switch (o.stage) {
        case (#palaceDelivery) { delivered += 1; };
        case (_) {};
      };
    };
    { totalRevenue = revenue; totalOrders = total; pendingApproval = pending; delivered };
  };

};
