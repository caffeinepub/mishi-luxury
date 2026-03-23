import { ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import { getProductPrice, useMishi } from "../store/store";

export default function CartPage() {
  const {
    cart,
    products,
    silverRate,
    removeFromCart,
    updateCartQty,
    placeOrder,
    navigate,
    isLoggedIn,
  } = useMishi();
  const [address, setAddress] = useState("");
  const [ordered, setOrdered] = useState(false);
  const [orderId, setOrderId] = useState(0);

  const enriched = cart.map((ci) => {
    const p = products.find((pr) => pr.id === ci.productId);
    const price = p ? getProductPrice(p, silverRate) : 0;
    return { ...ci, product: p, price };
  });

  const total = enriched.reduce((s, i) => s + i.price * i.quantity, 0);

  const handleOrder = () => {
    if (!isLoggedIn) {
      navigate("login");
      return;
    }
    if (!address.trim()) return;
    const id = placeOrder(address);
    setOrderId(id);
    setOrdered(true);
  };

  if (ordered)
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center px-6">
        <div className="glass-card p-12 text-center max-w-md w-full">
          <div className="text-6xl mb-4">👑</div>
          <h2
            style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem" }}
            className="gold-gradient mb-3"
          >
            Order Placed!
          </h2>
          <p className="text-gray-300 mb-2">
            Your royal order{" "}
            <span className="gold-text font-semibold">#{orderId}</span> has been
            received.
          </p>
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.1rem",
              fontStyle: "italic",
            }}
            className="text-gray-400 mb-8"
          >
            Our artisans have been notified. Your order will be crafted with
            utmost care.
          </p>
          <button
            type="button"
            onClick={() => navigate("orders")}
            className="btn-gold w-full py-3 mb-3"
          >
            Track My Order
          </button>
          <button
            type="button"
            onClick={() => navigate("shop")}
            className="btn-outline-gold w-full py-3"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );

  if (cart.length === 0)
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center px-6">
        <div className="glass-card p-12 text-center">
          <ShoppingBag size={48} className="text-gray-600 mx-auto mb-4" />
          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-2xl text-amber-100 mb-2"
          >
            Your Cart is Empty
          </h2>
          <p className="text-gray-400 mb-6">
            Add royal pieces to your collection
          </p>
          <button
            type="button"
            onClick={() => navigate("shop")}
            className="btn-gold px-8 py-3"
          >
            Explore Collection
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen pt-24 px-6 pb-20 max-w-5xl mx-auto">
      <h1
        style={{ fontFamily: "Playfair Display, serif", fontSize: "3rem" }}
        className="gold-gradient mb-8"
      >
        Royal Cart
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {enriched.map(
            (item, i) =>
              item.product && (
                // biome-ignore lint/suspicious/noArrayIndexKey: pre-existing pattern
                <div key={i} className="glass-card p-4 flex gap-4">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: "1.2rem",
                      }}
                      className="text-amber-100"
                    >
                      {item.product.name}
                    </h3>
                    {item.selectedSize && (
                      <p className="text-xs text-gray-400">
                        Size: {item.selectedSize}
                      </p>
                    )}
                    <p className="gold-text font-semibold mt-1">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center glass-card rounded overflow-hidden">
                        <button
                          type="button"
                          onClick={() =>
                            updateCartQty(
                              item.productId,
                              item.quantity - 1,
                              item.selectedSize,
                            )
                          }
                          className="px-3 py-1 text-yellow-400 hover:bg-yellow-400/10"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-amber-100 text-sm">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateCartQty(
                              item.productId,
                              item.quantity + 1,
                              item.selectedSize,
                            )
                          }
                          className="px-3 py-1 text-yellow-400 hover:bg-yellow-400/10"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.productId, item.selectedSize)
                        }
                        className="text-gray-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="gold-text font-bold">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              ),
          )}
        </div>

        <div className="space-y-4">
          <div className="glass-card p-6">
            <h3
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-amber-100 text-xl mb-4"
            >
              Order Summary
            </h3>
            <div className="space-y-2 mb-4">
              {enriched.map(
                (item, i) =>
                  item.product && (
                    // biome-ignore lint/suspicious/noArrayIndexKey: pre-existing pattern
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-gray-400">
                        {item.product.name} ×{item.quantity}
                      </span>
                      <span className="text-amber-100">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  ),
              )}
              <div className="royal-divider" />
              <div className="flex justify-between font-bold">
                <span className="gold-text">Total</span>
                <span className="gold-text text-lg">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-amber-100 text-lg mb-3"
            >
              Delivery Address
            </h3>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your royal palace address..."
              rows={3}
              className="w-full bg-transparent text-amber-100 text-sm outline-none resize-none placeholder-gray-600"
              style={{
                border: "1px solid rgba(212,175,55,0.3)",
                borderRadius: "8px",
                padding: "10px",
              }}
            />
            <button
              type="button"
              onClick={handleOrder}
              disabled={!address.trim()}
              className="btn-gold w-full py-3 mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Place Royal Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
