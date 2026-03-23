import { Heart, ShoppingBag } from "lucide-react";
import { getProductPrice, useMishi } from "../store/store";

export default function WishlistPage() {
  const {
    wishlist,
    products,
    silverRate,
    toggleWishlist,
    addToCart,
    navigate,
  } = useMishi();
  const items = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="min-h-screen pt-24 px-6 pb-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.4em] text-yellow-400 uppercase mb-2">
          Your Curated Collection
        </p>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
          }}
          className="gold-gradient flex items-center justify-center gap-3"
        >
          <Heart fill="#D4AF37" color="#D4AF37" size={40} /> My Royal Favorites
        </h1>
        <div className="royal-divider w-48 mx-auto mt-4" />
      </div>

      {items.length === 0 ? (
        <div className="glass-card p-12 text-center max-w-md mx-auto">
          <Heart size={48} className="text-gray-600 mx-auto mb-4" />
          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-xl text-amber-100 mb-2"
          >
            Your favorites await
          </h2>
          <p className="text-gray-400 mb-6">
            Save pieces that speak to your royal soul
          </p>
          <button
            onClick={() => navigate("shop")}
            className="btn-gold px-8 py-3"
          >
            Browse Collection
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((p) => {
            const price = getProductPrice(p, silverRate);
            return (
              <div key={p.id} className="glass-card overflow-hidden group">
                <div
                  className="relative overflow-hidden cursor-pointer"
                  style={{ aspectRatio: "4/5" }}
                  onClick={() => navigate(`product-${p.id}`)}
                >
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
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
                    <Heart size={16} fill="#ef4444" color="#ef4444" />
                  </button>
                </div>
                <div className="p-4">
                  <span className="text-xs tracking-widest text-yellow-400 uppercase">
                    {p.category === "silver"
                      ? "Sterling Silver"
                      : "Ethnic Wear"}
                  </span>
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.2rem",
                    }}
                    className="text-amber-100 my-1"
                  >
                    {p.name}
                  </h3>
                  <p className="gold-text font-bold mb-3">
                    ₹{price.toLocaleString("en-IN")}
                  </p>
                  <button
                    onClick={() => addToCart(p.id, 1)}
                    className="w-full btn-outline-gold text-xs py-2 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
