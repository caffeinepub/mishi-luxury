import { useState } from "react";
import { getProductPrice, useMishi } from "../store/store";

export default function ShopPage() {
  const {
    products,
    silverRate,
    addToCart,
    toggleWishlist,
    wishlist,
    navigate,
  } = useMishi();
  const [cat, setCat] = useState<"all" | "silver" | "ethnic">("all");
  const filtered = products.filter(
    (p) => p.isActive && (cat === "all" || p.category === cat),
  );

  return (
    <div className="min-h-screen pt-24 px-6 pb-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.4em] text-yellow-400 uppercase mb-2">
          The Royal Treasury
        </p>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
          }}
          className="gold-gradient"
        >
          Our Collections
        </h1>
        <div className="royal-divider w-48 mx-auto mt-4" />
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-4 mb-10">
        {(["all", "silver", "ethnic"] as const).map((c) => (
          <button
            type="button"
            key={c}
            onClick={() => setCat(c)}
            className={`px-6 py-2 text-sm tracking-widest uppercase transition-all rounded-full ${
              cat === c ? "btn-gold" : "btn-outline-gold"
            }`}
          >
            {c === "all"
              ? "All Pieces"
              : c === "silver"
                ? "Sterling Silver"
                : "Ethnic Wear"}
          </button>
        ))}
      </div>

      {/* Silver Rate Banner */}
      {(cat === "all" || cat === "silver") && (
        <div className="glass-card p-3 text-center mb-8">
          <span className="text-xs tracking-widest text-gray-400 uppercase">
            Live Silver Rate ·{" "}
          </span>
          <span className="gold-text font-semibold">₹{silverRate}/gram</span>
          <span className="text-xs text-gray-500 ml-2">
            · Prices update in real-time
          </span>
        </div>
      )}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => {
          const price = getProductPrice(p, silverRate);
          const wished = wishlist.includes(p.id);
          return (
            <div
              key={p.id}
              className="glass-card overflow-hidden group"
              style={{
                boxShadow:
                  "0 4px 20px rgba(80,200,200,0.12), inset 0 0 0 1px rgba(255,255,255,0.9), inset 0 2px 20px rgba(255,255,255,0.5)",
                borderRadius: "16px",
                background: "#ffffff",
              }}
            >
              <button
                type="button"
                className="relative overflow-hidden cursor-pointer w-full"
                style={{ aspectRatio: "4/5", display: "block" }}
                onClick={() => navigate(`product-${p.id}`)}
              >
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(p.id);
                  }}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(10,10,15,0.8)",
                    border: "1px solid rgba(212,175,55,0.5)",
                  }}
                >
                  <span>{wished ? "❤️" : "🤍"}</span>
                </button>
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,10,15,0.95), transparent)",
                  }}
                >
                  <span className="text-xs tracking-widest text-yellow-400 uppercase">
                    {p.category === "silver"
                      ? "Sterling Silver · 925"
                      : "Royal Ethnic Wear"}
                  </span>
                </div>
              </button>
              <div className="p-5">
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.3rem",
                  }}
                  className="text-amber-100 mb-1 cursor-pointer hover:text-yellow-400"
                  onClick={() => navigate(`product-${p.id}`)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && navigate(`product-${p.id}`)
                  }
                >
                  {p.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {p.description}
                </p>
                {p.category === "silver" && p.silverWeight && (
                  <p className="text-xs text-gray-500 mb-2">
                    {p.silverWeight}g × ₹{silverRate} + base ={" "}
                    <span style={{ color: "#3d0070", fontWeight: 700 }}>
                      ₹{price.toLocaleString("en-IN")}
                    </span>
                  </p>
                )}
                <div className="flex items-center justify-between">
                  {/* PRICE — Deep Royal Purple override */}
                  <span
                    className="gold-text font-bold text-lg"
                    style={{
                      color: "#3d0070",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      WebkitTextFillColor: "#3d0070",
                    }}
                  >
                    ₹{price.toLocaleString("en-IN")}
                  </span>
                  <button
                    type="button"
                    onClick={() => addToCart(p.id, 1)}
                    className="btn-gold text-xs py-2 px-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
