import { useEffect, useRef } from "react";
import { getProductPrice, useMishi } from "../store/store";

export default function HomePage() {
  const { navigate, products, silverRate, addToCart } = useMishi();
  const featured = products.filter((p) => p.isActive).slice(0, 4);

  const heroRef = useRef<HTMLElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);
  const atmoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (e.clientX - rect.left - cx) / cx;
      const dy = (e.clientY - rect.top - cy) / cy;
      const xBg = dx * -15;
      const yBg = dy * -10;
      const xAtmo = dx * -7;
      const yAtmo = dy * -5;
      if (bgImgRef.current) {
        bgImgRef.current.style.transform = `translate(calc(-50% + ${xBg}px), calc(-50% + ${yBg}px))`;
      }
      if (atmoRef.current) {
        atmoRef.current.style.transform = `translate(calc(-50% + ${xAtmo}px), calc(-50% + ${yAtmo}px))`;
      }
    };
    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background layer — moves at full parallax speed */}
        <img
          ref={bgImgRef}
          src="/assets/generated/mishi-hero-lion.dim_1920x1080.jpg"
          alt="MISHI Hero"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "112%",
            height: "112%",
            objectFit: "cover",
            filter: "brightness(0.40) saturate(1.15)",
            transition: "transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        />
        {/* Atmospheric depth layer — moves at half speed */}
        <div
          ref={atmoRef}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "112%",
            height: "112%",
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(6,182,212,0.09) 0%, rgba(196,181,253,0.06) 55%, transparent 100%)",
            transition: "transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
            pointerEvents: "none",
          }}
        />
        {/* Fixed depth vignette — bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,11,18,0.2) 0%, rgba(8,11,18,0.5) 55%, rgba(8,11,18,1) 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Fixed depth vignette — edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 85% at 50% 50%, transparent 52%, rgba(4,6,12,0.85) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Establishment label */}
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.45em",
              color: "#5eead4",
              textTransform: "uppercase",
              marginBottom: "1.2rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
            }}
          >
            Est. 2025 · Mission 2028
          </p>

          {/* MISHI — metallic gold cursive signature */}
          <h1
            className="mishi-brand-title"
            style={{
              fontSize: "clamp(5rem, 14vw, 12rem)",
              lineHeight: 1.0,
              marginBottom: "0.6rem",
            }}
          >
            Mishi
          </h1>

          {/* Tagline — elegant uppercase spaced lavender */}
          <p
            className="tagline-lavender"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.75rem, 2vw, 1.1rem)",
              textTransform: "uppercase",
              fontStyle: "normal",
              marginBottom: "2rem",
            }}
          >
            Where Love Unites Empires
          </p>

          <div className="royal-divider w-56 mx-auto" />

          <p
            style={{
              color: "#9abbc8",
              fontSize: "0.82rem",
              letterSpacing: "0.04em",
              lineHeight: 1.7,
              maxWidth: "36rem",
              margin: "0 auto 2.5rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Sterling Silver Ornaments &amp; Royal Ethnic Wear — crafted for
            those who wear their legacy
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0.45 }}
        >
          <span
            style={{
              fontSize: "0.65rem",
              color: "#7aacb8",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Scroll
          </span>
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(to bottom, #06b6d4, transparent)",
            }}
          />
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p
          style={{
            textAlign: "center",
            fontSize: "0.7rem",
            letterSpacing: "0.4em",
            color: "#06b6d4",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Our Collections
        </p>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#c0e8ef",
            textAlign: "center",
            marginBottom: "3rem",
          }}
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
              type="button"
              key={c.cat}
              data-ocid={`category.${c.cat}.button`}
              onClick={() => navigate("shop")}
              className="glass-card relative overflow-hidden group text-left"
              style={{ aspectRatio: "16/9" }}
            >
              <img
                src={c.img}
                alt={c.label}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: 0.5,
                  transition:
                    "opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,11,18,0.95) 0%, rgba(8,11,18,0.25) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 p-8">
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.25em",
                    color: "#06b6d4",
                    textTransform: "uppercase",
                  }}
                >
                  {c.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.8rem",
                    color: "#c0e8ef",
                    marginTop: "0.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {c.label}
                </h3>
                <p style={{ color: "#7a9aaa", fontSize: "0.875rem" }}>
                  {c.sub}
                </p>
                <div
                  style={{
                    marginTop: "1rem",
                    color: "#06b6d4",
                    fontSize: "0.8rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  Discover <span>→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Silver Rate Banner */}
      <div
        style={{
          padding: "1rem 1.5rem",
          textAlign: "center",
          background:
            "linear-gradient(90deg, rgba(14,116,144,0.05), rgba(14,116,144,0.14), rgba(14,116,144,0.05))",
          borderTop: "1px solid rgba(14,116,144,0.22)",
          borderBottom: "1px solid rgba(14,116,144,0.22)",
        }}
      >
        <p style={{ fontSize: "0.875rem", letterSpacing: "0.04em" }}>
          <span
            style={{
              color: "#5a7a88",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {"Today's Live Silver Rate · "}
          </span>
          <span style={{ color: "#06b6d4", fontWeight: 600 }}>
            ₹{silverRate}/gram
          </span>
          <span
            style={{
              color: "#3d5a65",
              fontSize: "0.7rem",
              marginLeft: "0.75rem",
            }}
          >
            (Reflected in all Sterling Silver prices)
          </span>
        </p>
      </div>

      {/* Featured Products */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <p
          style={{
            textAlign: "center",
            fontSize: "0.7rem",
            letterSpacing: "0.4em",
            color: "#06b6d4",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Handpicked
        </p>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#c0e8ef",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          Royal Selections
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p, idx) => {
            const price = getProductPrice(p, silverRate);
            return (
              <button
                type="button"
                key={p.id}
                data-ocid={`products.item.${idx + 1}`}
                className="glass-card overflow-hidden group cursor-pointer text-left w-full"
                onClick={() => navigate(`product-${p.id}`)}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4/5" }}
                >
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105"
                    style={{
                      transition:
                        "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-3"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(8,11,18,0.95), transparent)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        color: "#06b6d4",
                        textTransform: "uppercase",
                      }}
                    >
                      {p.category === "silver"
                        ? "Sterling Silver"
                        : "Ethnic Wear"}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.1rem",
                      color: "#d0eaf3",
                      marginBottom: "0.25rem",
                      fontWeight: 500,
                    }}
                  >
                    {p.name}
                  </h3>
                  {p.category === "silver" && p.silverWeight && (
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#4a6a78",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {p.silverWeight}g silver · Rate ₹{silverRate}/g
                    </p>
                  )}
                  <p
                    style={{
                      color: "#06b6d4",
                      fontWeight: 600,
                      marginBottom: "0.75rem",
                    }}
                  >
                    ₹{price.toLocaleString("en-IN")}
                  </p>
                  <button
                    type="button"
                    data-ocid={`products.cart.button.${idx + 1}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(p.id, 1);
                    }}
                    className="w-full btn-outline-gold text-xs py-2 tracking-wider uppercase"
                  >
                    Add to Cart
                  </button>
                </div>
              </button>
            );
          })}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button
            type="button"
            data-ocid="home.shop_all.primary_button"
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
            "linear-gradient(135deg, rgba(14,116,144,0.08), rgba(8,11,18,0), rgba(124,58,237,0.05))",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              color: "#06b6d4",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            A Story of Vision
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#c0e8ef",
              marginBottom: "1.5rem",
            }}
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
              color: "#a8c8d4",
              marginBottom: "2rem",
            }}
          >
            "Born from an unwavering dream, MISHI is more than a brand — it is a
            dynasty in the making. Founded on the twin pillars of Purity and
            Heritage, we craft each piece as if it were destined for a palace."
          </p>
          <button
            type="button"
            data-ocid="home.legacy.primary_button"
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
