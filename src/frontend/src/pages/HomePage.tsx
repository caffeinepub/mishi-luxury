import { useEffect, useRef } from "react";
import { getProductPrice, useMishi } from "../store/store";

export default function HomePage() {
  const { navigate, products, silverRate, addToCart } = useMishi();
  const featured = products.filter((p) => p.isActive).slice(0, 4);

  const heroRef = useRef<HTMLElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);
  const mouseOffsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const applyTransform = () => {
      const scrollY = window.scrollY;
      const { x: xBg, y: yBg } = mouseOffsetRef.current;
      const scrollOffset = scrollY * 0.25;
      if (bgImgRef.current) {
        bgImgRef.current.style.transform = `translate(calc(-50% + ${xBg}px), calc(-50% + ${yBg - scrollOffset}px))`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (e.clientX - rect.left - cx) / cx;
      const dy = (e.clientY - rect.top - cy) / cy;
      mouseOffsetRef.current = { x: dx * -18, y: dy * -12 };
      applyTransform();
    };

    const handleScroll = () => applyTransform();

    hero.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categories = [
    {
      id: "silver",
      label: "Sterling Silver",
      sub: "925 hallmarked jewellery",
      img: "/assets/generated/mishi-necklace.dim_400x500.jpg",
    },
    {
      id: "ethnic",
      label: "Royal Ethnic Wear",
      sub: "Heritage weaves & bespoke sizing",
      img: "/assets/generated/mishi-lehenga.dim_400x500.jpg",
    },
    {
      id: "legacy",
      label: "The MISHI Legacy",
      sub: "Our story, our roots, our vision",
      img: "/assets/generated/hero-lion-lioness-sunrise.dim_1920x900.jpg",
      isLegacy: true,
    },
  ];

  return (
    <div style={{ background: "#0a0d16", minHeight: "100vh" }}>
      {/* ═══════════ HERO ═══════════ */}
      <section
        ref={heroRef}
        data-section="hero"
        style={{
          position: "relative",
          height: "92vh",
          minHeight: 520,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Parallax background */}
        <img
          ref={bgImgRef}
          src="/assets/generated/mishi-hero-royal-pair.dim_1920x900.jpg"
          alt="Lion and Lioness - MISHI Royal Pair"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "115%",
            height: "115%",
            objectFit: "cover",
            objectPosition: "center 35%",
            filter: "brightness(0.72) saturate(1.3)",
            transition: "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        />
        {/* Purple-gold atmospheric gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(8,5,18,0.15) 0%, rgba(60,30,100,0.1) 40%, rgba(8,5,18,0.88) 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Edge vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 88% 82% at 50% 48%, transparent 48%, rgba(6,3,14,0.8) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Center brand text */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "0 1.5rem",
          }}
        >
          {/* Logo watermark */}
          <img
            src="/assets/generated/mishi-logo-golden-clean-transparent.dim_400x200.png"
            alt="MISHI Logo"
            style={{
              height: 72,
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 16px rgba(212,175,55,0.5))",
              marginBottom: "0.75rem",
            }}
          />
          <h1
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(5rem, 15vw, 11rem)",
              lineHeight: 1.0,
              background:
                "linear-gradient(135deg, #c9a84c 0%, #f5d98b 25%, #d4af37 45%, #fceab0 60%, #b8860b 80%, #e8c84a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(212,175,55,0.45))",
              margin: "0 0 0.5rem",
            }}
          >
            Mishi
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.8rem, 2vw, 1.05rem)",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#c4b5fd",
              marginBottom: "2rem",
            }}
          >
            Where Love Unites Empires
          </p>
          <div
            style={{
              width: 160,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, #d4af37, transparent)",
              margin: "0 auto 1.5rem",
            }}
          />
          <p
            style={{
              color: "rgba(192,232,239,0.75)",
              fontSize: "0.82rem",
              letterSpacing: "0.06em",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Sterling Silver Ornaments &amp; Royal Ethnic Wear
          </p>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            opacity: 0.45,
          }}
        >
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.35em",
              color: "#d4af37",
              textTransform: "uppercase",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 40,
              background: "linear-gradient(to bottom, #d4af37, transparent)",
            }}
          />
        </div>
      </section>

      {/* ═══════════ 3 CATEGORY CARDS ═══════════ */}
      <section
        data-section="jewelry"
        style={{
          padding: "4rem 1.5rem 5rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "0.68rem",
            letterSpacing: "0.42em",
            color: "#d4af37",
            textTransform: "uppercase",
            marginBottom: "0.6rem",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Our Collections
        </p>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#c0e8ef",
            textAlign: "center",
            marginBottom: "3rem",
            fontWeight: 400,
          }}
        >
          The Royal Treasury
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.id}
              data-ocid={`category.${cat.id}.button`}
              onClick={() =>
                cat.isLegacy ? navigate("legacy") : navigate("shop")
              }
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 20,
                aspectRatio: "4/5",
                border: "1px solid rgba(212,175,55,0.22)",
                cursor: "pointer",
                background: "#111520",
                textAlign: "left",
                padding: 0,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-6px) scale(1.01)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 16px 48px rgba(212,175,55,0.2), 0 0 0 1px rgba(212,175,55,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0) scale(1)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              <img
                src={cat.img}
                alt={cat.label}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.55,
                  transition: "opacity 0.4s ease, transform 0.6s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(8,5,18,0.96) 0%, rgba(8,5,18,0.3) 55%, transparent 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  padding: "1.8rem 1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.45rem",
                    color: "#c0e8ef",
                    fontWeight: 500,
                    marginBottom: "0.4rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {cat.label}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#7a9aaa",
                    fontFamily: "Inter, sans-serif",
                    marginBottom: "1rem",
                  }}
                >
                  {cat.sub}
                </p>
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.25em",
                    color: "#d4af37",
                    textTransform: "uppercase",
                    fontFamily: "Inter, sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Explore <span>→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════ SILVER RATE BAND ═══════════ */}
      <div
        style={{
          padding: "0.9rem 1.5rem",
          textAlign: "center",
          background:
            "linear-gradient(90deg, rgba(10,4,24,0), rgba(212,175,55,0.07), rgba(10,4,24,0))",
          borderTop: "1px solid rgba(212,175,55,0.15)",
          borderBottom: "1px solid rgba(212,175,55,0.15)",
        }}
      >
        <p
          style={{
            fontSize: "0.82rem",
            fontFamily: "Inter, sans-serif",
            color: "#7a8a90",
          }}
        >
          <span
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Live Silver Rate{" "}
          </span>
          <span style={{ color: "#d4af37", fontWeight: 600 }}>
            ₹{silverRate}/gram
          </span>
          <span style={{ fontSize: "0.68rem", marginLeft: 10 }}>
            · Reflected in all silver prices
          </span>
        </p>
      </div>

      {/* ═══════════ FEATURED PRODUCTS ═══════════ */}
      {featured.length > 0 && (
        <section
          data-section="products"
          style={{ padding: "5rem 1.5rem", maxWidth: 1280, margin: "0 auto" }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "0.68rem",
              letterSpacing: "0.42em",
              color: "#d4af37",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Handpicked
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#c0e8ef",
              textAlign: "center",
              marginBottom: "3rem",
              fontWeight: 400,
            }}
          >
            Royal Selections
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {featured.map((p, idx) => {
              const price = getProductPrice(p, silverRate);
              return (
                <button
                  type="button"
                  key={p.id}
                  data-ocid={`products.item.${idx + 1}`}
                  onClick={() => navigate(`product-${p.id}`)}
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(14,116,144,0.2)",
                    background: "#0f1420",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </div>
                  <div style={{ padding: "1rem 1.1rem 1.2rem" }}>
                    <span
                      style={{
                        fontSize: "0.64rem",
                        letterSpacing: "0.2em",
                        color: "#d4af37",
                        textTransform: "uppercase",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {p.category === "silver"
                        ? "Sterling Silver"
                        : "Ethnic Wear"}
                    </span>
                    <h3
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: "1rem",
                        color: "#d0eaf3",
                        marginTop: "0.3rem",
                        marginBottom: "0.5rem",
                        fontWeight: 500,
                      }}
                    >
                      {p.name}
                    </h3>
                    <p
                      style={{
                        color: "#d4af37",
                        fontWeight: 600,
                        marginBottom: "0.75rem",
                        fontSize: "0.95rem",
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
                      style={{
                        width: "100%",
                        padding: "0.5rem",
                        fontSize: "0.7rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#d4af37",
                        background: "transparent",
                        border: "1px solid rgba(212,175,55,0.4)",
                        borderRadius: 8,
                        cursor: "pointer",
                        fontFamily: "Inter, sans-serif",
                        transition: "all 0.25s ease",
                      }}
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
              style={{
                padding: "0.85rem 2.5rem",
                fontSize: "0.78rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#0a0d16",
                background:
                  "linear-gradient(135deg, #c9a84c, #f5d98b, #d4af37)",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
              }}
            >
              View Full Collection
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
