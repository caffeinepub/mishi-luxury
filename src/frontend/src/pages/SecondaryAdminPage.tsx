import { Package, Save, ShoppingCart, Sparkles, Star } from "lucide-react";
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
  const [tab, setTab] = useState<"orders" | "products" | "rate" | "cms">(
    "orders",
  );

  // CMS fields
  const [silverAbout, setSilverAbout] = useState(
    () =>
      localStorage.getItem("mishi-cms-silver-about") ||
      "MISHI Sterling Silver — 925 hallmarked, artisan crafted with a 300-year heritage of Indian jewellery making.",
  );
  const [categoryTag, setCategoryTag] = useState(
    () =>
      localStorage.getItem("mishi-cms-category-tag") ||
      "Where Heritage Meets Hallmark",
  );
  const [cmsSaved, setCmsSaved] = useState(false);

  if (adminLevel !== "secondary" && adminLevel !== "primary")
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="glass-card p-10 text-center">
          <Star className="text-cyan-400 mx-auto mb-3" size={40} />
          <p className="text-gray-300">
            Secondary Admin (Shrimati Ji) access required.
          </p>
          <button
            type="button"
            onClick={() => navigate("vault")}
            className="btn-gold px-8 py-3 mt-4"
          >
            Login
          </button>
        </div>
      </div>
    );

  const pendingOrders = orders.filter((o) => !o.isApproved);

  const saveCms = () => {
    localStorage.setItem("mishi-cms-silver-about", silverAbout);
    localStorage.setItem("mishi-cms-category-tag", categoryTag);
    setCmsSaved(true);
    setTimeout(() => setCmsSaved(false), 3000);
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="text-cyan-400" size={28} />
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
          // biome-ignore lint/suspicious/noArrayIndexKey: pre-existing pattern
          <div key={i} className="glass-card p-5 flex items-center gap-4">
            <div className="text-cyan-400">{stat.icon}</div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest">
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.5rem",
                }}
                className="text-blue-100"
              >
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {(
          [
            ["orders", "Orders"],
            ["products", "Products"],
            ["rate", "Silver Rate"],
            ["cms", "Content"],
          ] as const
        ).map(([k, l]) => (
          <button
            type="button"
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
                  <p className="text-blue-100 font-semibold">Order #{o.id}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(o.placedAt).toLocaleDateString("en-IN")}{" "}
                    &nbsp;·&nbsp; {STAGE_LABELS[o.stage]}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-cyan-400 font-bold">
                    ₹{o.totalAmount.toLocaleString("en-IN")}
                  </p>
                  {!o.isApproved ? (
                    <button
                      type="button"
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
                <p className="text-blue-100">{p.name}</p>
                <p className="text-xs text-gray-400">
                  {p.category === "silver" ? "Sterling Silver" : "Ethnic Wear"}{" "}
                  &nbsp;·&nbsp; Stock: {p.stock}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => updateProduct(p.id, { stock: p.stock + 5 })}
                  className="text-xs btn-outline-gold py-1 px-3"
                >
                  +5 Stock
                </button>
                <button
                  type="button"
                  onClick={() => updateProduct(p.id, { isActive: !p.isActive })}
                  className={`text-xs px-3 py-1 rounded border ${
                    p.isActive
                      ? "border-red-500 text-red-400"
                      : "border-green-500 text-green-400"
                  }`}
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
            className="text-xl text-blue-100 mb-2"
          >
            Update Silver Rate
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            This rate is used to calculate final price for all Sterling Silver
            ornaments.
          </p>
          <label
            htmlFor="silver-rate"
            className="text-xs text-gray-400 uppercase tracking-widest block mb-2"
          >
            Rate per gram (₹)
          </label>
          <input
            id="silver-rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            type="number"
            className="w-full bg-transparent text-cyan-400 text-3xl font-bold outline-none p-3 text-center"
            style={{
              border: "1px solid rgba(14,116,144,0.4)",
              borderRadius: "8px",
            }}
          />
          <button
            type="button"
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

      {/* CMS Tab */}
      {tab === "cms" && (
        <div className="space-y-6 max-w-2xl">
          <div className="glass-card p-6">
            <h3
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-lg text-blue-100 mb-4"
            >
              Content Management
            </h3>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="silver-about"
                  className="text-xs text-gray-400 uppercase tracking-widest block mb-2"
                >
                  About MISHI Silver
                </label>
                <textarea
                  id="silver-about"
                  data-ocid="cms.silver_about.textarea"
                  value={silverAbout}
                  onChange={(e) => setSilverAbout(e.target.value)}
                  rows={3}
                  className="w-full bg-transparent text-blue-100 outline-none text-sm p-3 resize-none"
                  style={{
                    border: "1px solid rgba(14,116,144,0.3)",
                    borderRadius: "8px",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="category-tag"
                  className="text-xs text-gray-400 uppercase tracking-widest block mb-2"
                >
                  Category Tagline
                </label>
                <input
                  id="category-tag"
                  data-ocid="cms.category_tag.input"
                  type="text"
                  value={categoryTag}
                  onChange={(e) => setCategoryTag(e.target.value)}
                  className="w-full bg-transparent text-blue-100 outline-none text-sm p-3"
                  style={{
                    border: "1px solid rgba(14,116,144,0.3)",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>

            {cmsSaved && (
              <p
                data-ocid="cms.success_state"
                className="text-green-400 text-sm mt-4 text-center"
              >
                ✓ Changes saved and published!
              </p>
            )}

            <button
              type="button"
              data-ocid="cms.save.primary_button"
              onClick={saveCms}
              className="btn-gold w-full py-3 mt-4 flex items-center justify-center gap-2"
            >
              <Save size={16} /> Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
