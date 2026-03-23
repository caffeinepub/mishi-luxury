import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { getProductPrice, useMishi } from "../store/store";

export default function ProductDetailPage({
  productId,
}: { productId: number }) {
  const {
    products,
    silverRate,
    addToCart,
    toggleWishlist,
    wishlist,
    navigate,
  } = useMishi();
  const p = products.find((pr) => pr.id === productId);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState<string | undefined>();
  const [added, setAdded] = useState(false);

  if (!p)
    return (
      <div className="min-h-screen pt-24 text-center text-gray-400">
        Product not found
      </div>
    );

  const price = getProductPrice(p, silverRate);
  const wished = wishlist.includes(p.id);

  const handleAdd = () => {
    addToCart(p.id, qty, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-20 max-w-6xl mx-auto">
      <button
        type="button"
        onClick={() => navigate("shop")}
        className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 mb-8 transition-colors"
      >
        <ArrowLeft size={18} /> Back to Shop
      </button>
      <div className="grid md:grid-cols-2 gap-12">
        <div
          className="glass-card overflow-hidden"
          style={{ aspectRatio: "4/5" }}
        >
          <img
            src={p.imageUrl}
            alt={p.name}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs tracking-[0.4em] text-yellow-400 uppercase mb-3">
            {p.category === "silver"
              ? "Sterling Silver · 925 Hallmarked"
              : "Royal Ethnic Wear"}
          </span>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
            className="text-amber-100 mb-4"
          >
            {p.name}
          </h1>
          <div className="royal-divider" />
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.15rem",
              lineHeight: 1.8,
            }}
            className="text-gray-300 mb-6"
          >
            {p.description}
          </p>

          {p.category === "silver" && p.silverWeight && (
            <div className="glass-card p-4 mb-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                Price Breakdown
              </p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Base Craftsmanship</span>
                  <span className="text-amber-100">
                    ₹{(p.basePrice || 0).toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">
                    {p.silverWeight}g × ₹{silverRate} (Live Rate)
                  </span>
                  <span className="text-amber-100">
                    ₹{(p.silverWeight * silverRate).toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="royal-divider" />
                <div className="flex justify-between">
                  <span className="gold-text font-semibold">Total</span>
                  <span className="gold-text font-bold text-lg">
                    ₹{price.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          )}

          {p.category === "ethnic" && p.sizes.length > 0 && (
            <div className="mb-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                Select Size
              </p>
              <div className="flex flex-wrap gap-2">
                {p.sizes.map((s) => (
                  <button
                    type="button"
                    key={s.size}
                    onClick={() => setSize(s.size)}
                    disabled={s.stock === 0}
                    className={`px-4 py-2 text-sm border rounded-md transition-all ${
                      size === s.size
                        ? "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                        : s.stock === 0
                          ? "border-gray-700 text-gray-600 cursor-not-allowed"
                          : "border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
                    }`}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {p.category !== "ethnic" && (
            <p className="text-2xl gold-text font-bold mb-6">
              ₹{price.toLocaleString("en-IN")}
            </p>
          )}

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center glass-card rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-4 py-2 text-yellow-400 hover:bg-yellow-400/10 transition-colors"
              >
                -
              </button>
              <span className="px-4 py-2 text-amber-100">{qty}</span>
              <button
                type="button"
                onClick={() => setQty(qty + 1)}
                className="px-4 py-2 text-yellow-400 hover:bg-yellow-400/10 transition-colors"
              >
                +
              </button>
            </div>
            {p.category === "ethnic" && p.sizes.length > 0 && (
              <p className="text-2xl gold-text font-bold">
                ₹{price.toLocaleString("en-IN")}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 btn-gold flex items-center justify-center gap-2 py-3"
            >
              <ShoppingBag size={18} />
              {added ? "Added! ✓" : "Add to Royal Cart"}
            </button>
            <button
              type="button"
              onClick={() => toggleWishlist(p.id)}
              className="w-12 h-12 flex items-center justify-center glass-card hover:border-red-400 transition-colors"
            >
              <Heart
                size={20}
                fill={wished ? "#ef4444" : "none"}
                color={wished ? "#ef4444" : "#D4AF37"}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
