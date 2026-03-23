import { getProductPrice, useMishi } from "../store/store";

export default function HomePage() {
  const {
    navigate,
    products,
    silverRate,
    toggleWishlist,
    wishlist,
    addToCart,
  } = useMishi();
  const featured = products.filter((p) => p.isActive).slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/assets/generated/mishi-hero-lion.dim_1920x1080.jpg"
          alt="MISHI Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.45)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.6) 60%, rgba(10,10,15,1) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-yellow-400 mb-4 uppercase">
            Est. 2025 · Mission 2028
          </p>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(4rem, 10vw, 9rem)",
              fontWeight: 900,
              lineHeight: 0.9,
            }}
            className="gold-gradient mb-6"
          >
            MISHI
          </h1>
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontStyle: "italic",
            }}
            className="text-amber-100 mb-3"
          >
            Where Royalty Meets Craftsmanship
          </p>
          <div className="royal-divider w-64 mx-auto" />
          <p className="text-gray-300 text-sm tracking-wide mb-10 max-w-xl mx-auto">
            Sterling Silver Ornaments &amp; Royal Ethnic Wear — crafted for
            those who wear their legacy
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("shop")}
              className="btn-gold px-8 py-3 text-sm tracking-widest uppercase"
            >
              Explore Collection
            </button>
            <button
              onClick={() => navigate("legacy")}
              className="btn-outline-gold px-8 py-3 text-sm tracking-widest uppercase"
            >
              Our Legacy
            </button>
          </div>
        </div>
        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-yellow-400 to-transparent" />
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-center text-xs tracking-[0.4em] text-yellow-400 uppercase mb-3">
          Our Collections
        </p>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
          }}
          className="text-center text-amber-100 mb-12"
        >
          The Royal Treasury
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              cat: "silver",
              label: "Sterling Silver Ornaments",
              sub: "925 hallmarked · artisan crafted",
              img: "https://picsum.photos/seed/mishicat1/800/500",
              tag: "Pure Silver",
            },
            {
              cat: "ethnic",
              label: "Royal Ethnic Wear",
              sub: "Heritage weaves · bespoke sizing",
              img: "https://picsum.photos/seed/mishicat2/800/500",
              tag: "Ethnic Heritage",
            },
          ].map((c) => (
            <button
              key={c.cat}
              onClick={() => navigate("shop")}
              className="glass-card relative overflow-hidden group text-left"
              style={{ aspectRatio: "16/9" }}
            >
              <img
                src={c.img}
                alt={c.label}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.3) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-xs tracking-widest text-yellow-400 uppercase">
                  {c.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.8rem",
                  }}
                  className="text-amber-100 mt-1 mb-2"
                >
                  {c.label}
                </h3>
                <p className="text-gray-400 text-sm">{c.sub}</p>
                <div className="mt-4 text-yellow-400 text-sm tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                  Discover <span>→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Silver Rate Banner */}
      <div
        className="py-4 px-6 text-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(212,175,55,0.1), rgba(212,175,55,0.2), rgba(212,175,55,0.1))",
          borderTop: "1px solid rgba(212,175,55,0.3)",
          borderBottom: "1px solid rgba(212,175,55,0.3)",
        }}
      >
        <p className="text-sm tracking-widest">
          <span className="text-gray-400 uppercase text-xs">
            Today's Live Silver Rate ·{" "}
          </span>
          <span className="gold-text font-semibold">₹{silverRate}/gram</span>
          <span className="text-gray-500 text-xs ml-3">
            (Reflected in all Sterling Silver prices)
          </span>
        </p>
      </div>

      {/* Featured Products */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <p className="text-center text-xs tracking-[0.4em] text-yellow-400 uppercase mb-3">
          Handpicked
        </p>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
          className="text-center text-amber-100 mb-12"
        >
          Royal Selections
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => {
            const price = getProductPrice(p, silverRate);
            const wished = wishlist.includes(p.id);
            return (
              <div
                key={p.id}
                className="glass-card overflow-hidden group cursor-pointer"
                onClick={() => navigate(`product-${p.id}`)}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4/5" }}
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
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(10,10,15,0.7)",
                      border: "1px solid rgba(212,175,55,0.5)",
                    }}
                  >
                    <span className="text-sm">{wished ? "❤️" : "🤍"}</span>
                  </button>
                  <div
                    className="absolute bottom-0 left-0 right-0 p-3"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,10,15,0.95), transparent)",
                    }}
                  >
                    <span className="text-xs tracking-widest text-yellow-400 uppercase">
                      {p.category === "silver"
                        ? "Sterling Silver"
                        : "Ethnic Wear"}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3
                    className="text-amber-100 font-medium mb-1"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.1rem",
                    }}
                  >
                    {p.name}
                  </h3>
                  {p.category === "silver" && p.silverWeight && (
                    <p className="text-xs text-gray-500 mb-1">
                      {p.silverWeight}g silver · Rate ₹{silverRate}/g
                    </p>
                  )}
                  <p className="gold-text font-semibold mb-3">
                    ₹{price.toLocaleString("en-IN")}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(p.id, 1);
                    }}
                    className="w-full btn-outline-gold text-xs py-2 tracking-wider uppercase"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("shop")}
            className="btn-gold px-10 py-3 tracking-widest uppercase text-sm"
          >
            View Full Collection
          </button>
        </div>
      </section>

      {/* Legacy Teaser */}
      <section
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(75,0,130,0.15), rgba(10,10,15,0), rgba(212,175,55,0.05))",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] text-yellow-400 uppercase mb-4">
            A Story of Vision
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
            className="text-amber-100 mb-6"
          >
            The MISHI Legacy
          </h2>
          <div className="royal-divider" />
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.3rem",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
            className="text-gray-300 mb-8"
          >
            "Born from an unwavering dream, MISHI is more than a brand — it is a
            dynasty in the making. Founded on the twin pillars of Purity and
            Heritage, we craft each piece as if it were destined for a palace."
          </p>
          <button
            onClick={() => navigate("legacy")}
            className="btn-gold px-10 py-3 tracking-widest uppercase text-sm"
          >
            Read Our Story
          </button>
        </div>
      </section>
    </div>
  );
}
