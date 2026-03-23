import { Package, ShoppingCart, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { STAGE_LABELS, useMishi } from "../store/store";

export default function SecondaryAdminPage() {
  const {
    adminLevel,
    navigate,
    orders,
    products,
    silverRate,
    setSilverRate,
    updateProduct,
    approveOrder,
  } = useMishi();
  const [rate, setRate] = useState(String(silverRate));
  const [tab, setTab] = useState<"orders" | "products" | "rate">("orders");

  if (adminLevel !== "secondary" && adminLevel !== "primary")
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="glass-card p-10 text-center">
          <Star className="text-yellow-400 mx-auto mb-3" size={40} />
          <p className="text-gray-300">
            Secondary Admin (Shrimati Ji) access required.
          </p>
          <button
            onClick={() => navigate("login")}
            className="btn-gold px-8 py-3 mt-4"
          >
            Login
          </button>
        </div>
      </div>
    );

  const pendingOrders = orders.filter((o) => !o.isApproved);

  return (
    <div className="min-h-screen pt-24 px-6 pb-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="text-yellow-400" size={28} />
        <div>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.2rem",
            }}
            className="gold-gradient"
          >
            Welcome, Shrimati Ji
          </h1>
          <p className="text-gray-400 text-sm">
            Inventory Management &amp; Order Approvals
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        {[
          {
            icon: <Package size={22} />,
            label: "Total Products",
            value: String(products.filter((p) => p.isActive).length),
          },
          {
            icon: <ShoppingCart size={22} />,
            label: "Pending Approval",
            value: String(pendingOrders.length),
          },
          {
            icon: <Star size={22} />,
            label: "Live Silver Rate",
            value: `₹${silverRate}/g`,
          },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-5 flex items-center gap-4">
            <div className="gold-text">{stat.icon}</div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest">
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.5rem",
                }}
                className="text-amber-100"
              >
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        {(
          [
            ["orders", "Orders"],
            ["products", "Products"],
            ["rate", "Silver Rate"],
          ] as const
        ).map(([k, l]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`px-5 py-2 text-sm rounded-lg transition-all ${tab === k ? "btn-gold" : "btn-outline-gold"}`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Orders */}
      {tab === "orders" && (
        <div className="space-y-4">
          {orders.length === 0 && (
            <div className="glass-card p-8 text-center text-gray-400">
              No orders yet
            </div>
          )}
          {[...orders].reverse().map((o) => (
            <div key={o.id} className="glass-card p-5">
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <p className="text-amber-100 font-semibold">Order #{o.id}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(o.placedAt).toLocaleDateString("en-IN")}{" "}
                    &nbsp;·&nbsp; {STAGE_LABELS[o.stage]}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="gold-text font-bold">
                    ₹{o.totalAmount.toLocaleString("en-IN")}
                  </p>
                  {!o.isApproved ? (
                    <button
                      onClick={() => approveOrder(o.id)}
                      className="btn-gold text-xs py-1.5 px-4"
                    >
                      Approve
                    </button>
                  ) : (
                    <span className="text-xs text-green-400 border border-green-700 px-3 py-1 rounded-full">
                      Approved ✓
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Products */}
      {tab === "products" && (
        <div className="space-y-3">
          {products.map((p) => (
            <div key={p.id} className="glass-card p-4 flex gap-4 items-center">
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-14 h-14 object-cover rounded flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-amber-100">{p.name}</p>
                <p className="text-xs text-gray-400">
                  {p.category === "silver" ? "Sterling Silver" : "Ethnic Wear"}{" "}
                  &nbsp;·&nbsp; Stock: {p.stock}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => updateProduct(p.id, { stock: p.stock + 5 })}
                  className="text-xs btn-outline-gold py-1 px-3"
                >
                  +5 Stock
                </button>
                <button
                  onClick={() => updateProduct(p.id, { isActive: !p.isActive })}
                  className={`text-xs px-3 py-1 rounded border ${p.isActive ? "border-red-500 text-red-400" : "border-green-500 text-green-400"}`}
                >
                  {p.isActive ? "Deactivate" : "Activate"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Silver Rate */}
      {tab === "rate" && (
        <div className="glass-card p-8 max-w-md">
          <h3
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-xl text-amber-100 mb-2"
          >
            Update Silver Rate
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            This rate is used to calculate final price for all Sterling Silver
            ornaments.
          </p>
          <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2">
            Rate per gram (₹)
          </label>
          <input
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            type="number"
            className="w-full bg-transparent text-yellow-400 text-3xl font-bold outline-none p-3 text-center"
            style={{
              border: "1px solid rgba(212,175,55,0.4)",
              borderRadius: "8px",
            }}
          />
          <button
            onClick={() => setSilverRate(Number.parseInt(rate) || silverRate)}
            className="btn-gold w-full py-3 mt-4"
          >
            Update Live Silver Rate
          </button>
          <p className="text-xs text-gray-600 mt-3 text-center">
            Current: ₹{silverRate}/gram
          </p>
        </div>
      )}
    </div>
  );
}
