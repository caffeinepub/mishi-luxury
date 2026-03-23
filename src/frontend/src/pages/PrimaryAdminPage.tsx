import {
  BarChart3,
  Crown,
  Edit3,
  Package,
  PlusCircle,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import {
  type OrderStage,
  Product,
  STAGE_LABELS,
  useMishi,
} from "../store/store";

const _STAGES: OrderStage[] = [
  "orderPlaced",
  "artisanCrafting",
  "qualityCheck",
  "royalDispatch",
  "palaceDelivery",
];

export default function PrimaryAdminPage() {
  const {
    adminLevel,
    navigate,
    orders,
    products,
    silverRate,
    setSilverRate,
    addProduct,
    updateProduct,
    advanceOrderStage,
    approveOrder,
  } = useMishi();
  const [tab, setTab] = useState<"analytics" | "orders" | "products" | "add">(
    "analytics",
  );
  const [rate, setRate] = useState(String(silverRate));
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    category: "silver" as "silver" | "ethnic",
    basePrice: "",
    silverWeight: "",
    imageUrl: "",
    stock: "10",
  });
  const [sizes, setSizes] = useState("");

  if (adminLevel !== "primary")
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="glass-card p-10 text-center">
          <Crown className="text-yellow-400 mx-auto mb-3" size={40} />
          <p className="text-gray-300">Primary Admin access required.</p>
          <button
            onClick={() => navigate("login")}
            className="btn-gold px-8 py-3 mt-4"
          >
            Login as Admin
          </button>
        </div>
      </div>
    );

  const approved = orders
    .filter((o) => o.isApproved)
    .reduce((s, o) => s + o.totalAmount, 0);
  const pending = orders.filter((o) => !o.isApproved).length;
  const delivered = orders.filter((o) => o.stage === "palaceDelivery").length;

  const handleAddProduct = () => {
    const sizeList =
      newProduct.category === "ethnic"
        ? sizes
            .split(",")
            .map((s) => ({ size: s.trim(), stock: 5 }))
            .filter((s) => s.size)
        : [];
    addProduct({
      name: newProduct.name,
      description: newProduct.description,
      category: newProduct.category,
      price: Number.parseInt(newProduct.basePrice) || 0,
      basePrice: Number.parseInt(newProduct.basePrice) || undefined,
      silverWeight:
        newProduct.category === "silver"
          ? Number.parseInt(newProduct.silverWeight) || undefined
          : undefined,
      sizes: sizeList,
      imageUrl:
        newProduct.imageUrl ||
        `https://picsum.photos/seed/mishiadmin${Date.now()}/400/500`,
      stock: Number.parseInt(newProduct.stock) || 10,
      isActive: true,
    });
    setNewProduct({
      name: "",
      description: "",
      category: "silver",
      basePrice: "",
      silverWeight: "",
      imageUrl: "",
      stock: "10",
    });
    setSizes("");
    alert("Product added!");
  };

  const tabs = [
    { key: "analytics", label: "Analytics", icon: <BarChart3 size={16} /> },
    { key: "orders", label: "Orders", icon: <ShoppingCart size={16} /> },
    { key: "products", label: "Products", icon: <Package size={16} /> },
    { key: "add", label: "Add Product", icon: <PlusCircle size={16} /> },
  ] as const;

  return (
    <div className="min-h-screen pt-24 px-6 pb-20 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Crown className="text-yellow-400" size={32} />
        <div>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.5rem",
            }}
            className="gold-gradient"
          >
            Primary Admin
          </h1>
          <p className="text-gray-400 text-sm">
            Full command over MISHI Luxury
          </p>
        </div>
      </div>

      {/* Silver Rate */}
      <div className="glass-card p-5 mb-6 flex flex-wrap items-center gap-4">
        <span className="text-sm text-gray-400 tracking-widest uppercase">
          Live Silver Rate:
        </span>
        <input
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="bg-transparent border-b border-yellow-400 text-yellow-400 font-bold text-xl outline-none w-24 text-center"
        />
        <span className="text-gray-400 text-sm">₹/gram</span>
        <button
          onClick={() => setSilverRate(Number.parseInt(rate) || silverRate)}
          className="btn-gold text-sm py-2 px-5"
        >
          Update Rate
        </button>
        <span className="text-xs text-gray-500">
          Prices across all Sterling Silver items update immediately
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all ${
              tab === t.key ? "btn-gold" : "btn-outline-gold"
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {/* Analytics Tab */}
      {tab === "analytics" && (
        <div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: <TrendingUp size={24} />,
                label: "Total Revenue",
                value: `₹${approved.toLocaleString("en-IN")}`,
                sub: "Approved orders",
              },
              {
                icon: <ShoppingCart size={24} />,
                label: "Total Orders",
                value: String(orders.length),
                sub: "All time",
              },
              {
                icon: <Crown size={24} />,
                label: "Pending Approval",
                value: String(pending),
                sub: "Needs action",
              },
              {
                icon: <Package size={24} />,
                label: "Delivered",
                value: String(delivered),
                sub: "Palace Delivery",
              },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6">
                <div className="gold-text mb-3">{stat.icon}</div>
                <p className="text-gray-400 text-xs uppercase tracking-widest">
                  {stat.label}
                </p>
                <p
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "2rem",
                  }}
                  className="text-amber-100 my-1"
                >
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>
          <div className="glass-card p-6">
            <h3
              className="text-amber-100 font-semibold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Product Overview
            </h3>
            <p className="text-gray-400 text-sm">
              Total Products:{" "}
              <span className="gold-text">{products.length}</span> &nbsp;·&nbsp;
              Active:{" "}
              <span className="text-green-400">
                {products.filter((p) => p.isActive).length}
              </span>{" "}
              &nbsp;·&nbsp; Silver Items:{" "}
              <span className="text-yellow-400">
                {products.filter((p) => p.category === "silver").length}
              </span>{" "}
              &nbsp;·&nbsp; Ethnic Wear:{" "}
              <span className="text-purple-400">
                {products.filter((p) => p.category === "ethnic").length}
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {tab === "orders" && (
        <div className="space-y-4">
          {orders.length === 0 && (
            <div className="glass-card p-8 text-center text-gray-400">
              No orders yet
            </div>
          )}
          {[...orders].reverse().map((o) => (
            <div key={o.id} className="glass-card p-5">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <p className="text-amber-100 font-semibold">Order #{o.id}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(o.placedAt).toLocaleDateString("en-IN")}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Ship to: {o.shippingAddress}
                  </p>
                </div>
                <div className="text-right">
                  <p className="gold-text font-bold text-lg">
                    ₹{o.totalAmount.toLocaleString("en-IN")}
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded mt-1 inline-block ${o.isApproved ? "bg-green-900/50 text-green-400" : "bg-yellow-900/30 text-yellow-400"}`}
                  >
                    {o.isApproved ? "Approved" : "Pending"}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs text-gray-400 mr-2 self-center">
                  Stage:{" "}
                  <span className="gold-text">{STAGE_LABELS[o.stage]}</span>
                </span>
                {!o.isApproved && (
                  <button
                    onClick={() => approveOrder(o.id)}
                    className="btn-gold text-xs py-1 px-3"
                  >
                    Approve
                  </button>
                )}
                {o.stage !== "palaceDelivery" && (
                  <button
                    onClick={() => advanceOrderStage(o.id)}
                    className="btn-outline-gold text-xs py-1 px-3"
                  >
                    Advance Stage
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Products Tab */}
      {tab === "products" && (
        <div className="space-y-3">
          {products.map((p) => (
            <div key={p.id} className="glass-card p-4 flex gap-4 items-center">
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-amber-100 font-medium">{p.name}</p>
                <p className="text-xs text-gray-400">
                  {p.category === "silver" ? "Sterling Silver" : "Ethnic Wear"}{" "}
                  &nbsp;·&nbsp; Stock: {p.stock}
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => updateProduct(p.id, { isActive: !p.isActive })}
                  className={`text-xs px-3 py-1 rounded border ${p.isActive ? "border-red-500 text-red-400 hover:bg-red-900/30" : "border-green-500 text-green-400 hover:bg-green-900/30"}`}
                >
                  {p.isActive ? "Deactivate" : "Activate"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Product Tab */}
      {tab === "add" && (
        <div className="glass-card p-8 max-w-xl">
          <h3
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-xl text-amber-100 mb-6"
          >
            Add New Product
          </h3>
          <div className="space-y-4">
            {[
              {
                label: "Product Name",
                key: "name",
                type: "text",
                placeholder: "e.g. Royal Silver Bangle",
              },
              {
                label: "Description",
                key: "description",
                type: "text",
                placeholder: "Describe the piece...",
              },
              {
                label: "Base Price (₹)",
                key: "basePrice",
                type: "number",
                placeholder: "e.g. 5000",
              },
              {
                label: "Image URL",
                key: "imageUrl",
                type: "text",
                placeholder: "https://... (optional)",
              },
              {
                label: "Stock",
                key: "stock",
                type: "number",
                placeholder: "10",
              },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-xs text-gray-400 uppercase tracking-widest block mb-1">
                  {f.label}
                </label>
                <input
                  value={(newProduct as Record<string, string>)[f.key]}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, [f.key]: e.target.value })
                  }
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full bg-transparent text-amber-100 outline-none text-sm p-3"
                  style={{
                    border: "1px solid rgba(212,175,55,0.3)",
                    borderRadius: "8px",
                  }}
                />
              </div>
            ))}
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-widest block mb-1">
                Category
              </label>
              <select
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    category: e.target.value as "silver" | "ethnic",
                  })
                }
                className="w-full bg-gray-900 text-amber-100 outline-none text-sm p-3 rounded-lg"
                style={{ border: "1px solid rgba(212,175,55,0.3)" }}
              >
                <option value="silver">Sterling Silver Ornaments</option>
                <option value="ethnic">Royal Ethnic Wear</option>
              </select>
            </div>
            {newProduct.category === "silver" && (
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-widest block mb-1">
                  Silver Weight (grams)
                </label>
                <input
                  value={newProduct.silverWeight}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      silverWeight: e.target.value,
                    })
                  }
                  type="number"
                  placeholder="e.g. 15"
                  className="w-full bg-transparent text-amber-100 outline-none text-sm p-3"
                  style={{
                    border: "1px solid rgba(212,175,55,0.3)",
                    borderRadius: "8px",
                  }}
                />
              </div>
            )}
            {newProduct.category === "ethnic" && (
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-widest block mb-1">
                  Sizes (comma-separated)
                </label>
                <input
                  value={sizes}
                  onChange={(e) => setSizes(e.target.value)}
                  placeholder="XS, S, M, L, XL"
                  className="w-full bg-transparent text-amber-100 outline-none text-sm p-3"
                  style={{
                    border: "1px solid rgba(212,175,55,0.3)",
                    borderRadius: "8px",
                  }}
                />
              </div>
            )}
            <button
              onClick={handleAddProduct}
              className="btn-gold w-full py-3 mt-2"
            >
              <PlusCircle size={16} className="inline mr-2" />
              Add Product
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
