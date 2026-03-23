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
      const scrollOffset = scrollY * 0.2;
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
      mouseOffsetRef.current = { x: dx * -14, y: dy * -10 };
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
      label: "MISHI Legacy",
      sub: "Our story, our roots, our vision",
      img: "/assets/generated/mishi-hero-lion-lioness-cliff-guardians.dim_1920x900.jpg",
      isLegacy: true,
    },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #f0e8ff 0%, #e0f4f8 50%, #d0f0f5 100%)",
        minHeight: "100vh",
      }}
    >
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
        {/* Parallax background — Lion & Lioness Guardians on cliff under golden sunrise */}
        <img
          ref={bgImgRef}
          src="/assets/generated/mishi-hero-lion-lioness-cliff-guardians.dim_1920x900.jpg"
          alt="Lion and Lioness Guardians on cliff under golden sunrise — MISHI"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "115%",
            height: "115%",
            objectFit: "cover",
            objectPosition: "center 40%",
            filter: "brightness(1.05) saturate(1.2)",
            transition: "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        />

        {/* Lavender-to-teal gradient overlay — 30% opacity max */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(180,140,220,0.12) 0%, rgba(100,190,210,0.08) 55%, rgba(60,190,190,0.15) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Very soft vignette — reduced to 30% for text readability only */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(60,20,100,0.10) 0%, transparent 70%)",
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
          {/* MISHI logo — transparent PNG, golden wreath floats directly on hero background */}
          <img
            src="/assets/generated/mishi-logo-pure-transparent.dim_800x800.png"
            alt="MISHI SM Wreath Logo"
            style={{
              height: 90,
              width: 90,
              objectFit: "contain",
              display: "block",
              margin: "0 auto 0.75rem",
              background: "transparent",
              border: "none",
              boxShadow: "none",
              filter:
                "drop-shadow(0 0 12px rgba(255,215,0,0.95)) drop-shadow(0 2px 8px rgba(60,0,100,0.8))",
            }}
          />
          <h1
            className="mishi-brand-title"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1,
              marginBottom: "0.5rem",
              letterSpacing: "0.05em",
              fontFamily: '"Great Vibes", "Dancing Script", cursive',
              color: "#FFD700",
              filter:
                "drop-shadow(0 0 20px rgba(255,215,0,0.9)) drop-shadow(0 4px 16px rgba(60,0,100,0.7))",
            }}
          >
            MISHI
          </h1>
          <p
            className="tagline-elegant"
            style={{
              fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
              letterSpacing: "0.25em",
              marginTop: "0.5rem",
              color: "rgba(255,255,255,0.92)",
              fontFamily: "Georgia, serif",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            Where Love Unites Empires
          </p>
        </div>
      </section>

      {/* ═══════════ 3 CATEGORY CARDS ═══════════ */}
      <section
        data-section="jewelry"
        style={{
          padding: "5rem 1.5rem 5rem",
          maxWidth: 1200,
          margin: "0 auto",
          background: "linear-gradient(180deg, #f5eeff 0%, #e8f8fb 100%)",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "0.65rem",
            letterSpacing: "0.45em",
            color: "#2ab8c8",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
          }}
        >
          Our Collections
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#3d1a6b",
            textAlign: "center",
            marginBottom: "0.6rem",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          The Royal Treasury
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.88rem",
            color: "#8b6f4e",
            fontFamily: "'Cormorant Garamond', serif",
            marginBottom: "3rem",
            fontStyle: "italic",
          }}
        >
          Handcrafted with love, designed for royalty
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.75rem",
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
                borderRadius: 24,
                border: "1.5px solid rgba(80,200,200,0.35)",
                cursor: "pointer",
                background: "#ffffff",
                textAlign: "left",
                padding: 0,
                boxShadow:
                  "0 4px 20px rgba(80,200,200,0.12), 0 1px 4px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(255,255,255,0.95), inset 0 2px 25px rgba(255,255,255,0.6)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-8px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 20px 50px rgba(80,200,200,0.22), 0 0 20px rgba(100,220,220,0.3), 0 4px 12px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.95), inset 0 2px 25px rgba(255,255,255,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 20px rgba(80,200,200,0.12), 0 1px 4px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(255,255,255,0.95), inset 0 2px 25px rgba(255,255,255,0.6)";
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "24px 24px 0 0",
                  aspectRatio: "4/3",
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
              </div>
              <div
                style={{
                  padding: "1.4rem 1.6rem 1.6rem",
                  background: "#ffffff",
                  borderTop: "1px solid rgba(80,200,200,0.12)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.35rem",
                    color: "#1a3a4a",
                    fontWeight: 600,
                    marginBottom: "0.3rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {cat.label}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#8b6f4e",
                    fontFamily: "Inter, sans-serif",
                    marginBottom: "1rem",
                    fontStyle: "italic",
                  }}
                >
                  {cat.sub}
                </p>
                <span
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.22em",
                    color: "#2ab8c8",
                    textTransform: "uppercase",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Explore <span style={{ fontSize: "0.9rem" }}>→</span>
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
            "linear-gradient(90deg, rgba(240,232,255,0), rgba(80,200,200,0.08), rgba(240,232,255,0))",
          borderTop: "1px solid rgba(80,200,200,0.15)",
          borderBottom: "1px solid rgba(80,200,200,0.15)",
        }}
      >
        <p
          style={{
            fontSize: "0.82rem",
            fontFamily: "Inter, sans-serif",
            color: "#8b6f4e",
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
          <span style={{ color: "#2ab8c8", fontWeight: 600 }}>
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
              fontSize: "0.65rem",
              letterSpacing: "0.45em",
              color: "#2ab8c8",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            }}
          >
            Handpicked
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#1a3a4a",
              textAlign: "center",
              marginBottom: "3rem",
              fontWeight: 400,
              fontStyle: "italic",
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
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "1px solid rgba(80,200,200,0.2)",
                    background: "#ffffff",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    boxShadow:
                      "0 2px 12px rgba(80,200,200,0.08), inset 0 0 0 1px rgba(255,255,255,0.9), inset 0 2px 20px rgba(255,255,255,0.5)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(-4px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 12px 32px rgba(80,200,200,0.18), 0 0 12px rgba(80,200,200,0.2), inset 0 0 0 1px rgba(255,255,255,0.9), inset 0 2px 20px rgba(255,255,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 2px 12px rgba(80,200,200,0.08), inset 0 0 0 1px rgba(255,255,255,0.9), inset 0 2px 20px rgba(255,255,255,0.5)";
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
                  <div
                    style={{
                      padding: "1rem 1.1rem 1.2rem",
                      background: "#ffffff",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.64rem",
                        letterSpacing: "0.2em",
                        color: "#2ab8c8",
                        textTransform: "uppercase",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {p.category === "silver"
                        ? "Sterling Silver"
                        : "Ethnic Wear"}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1rem",
                        color: "#1a3a4a",
                        marginTop: "0.3rem",
                        marginBottom: "0.5rem",
                        fontWeight: 600,
                      }}
                    >
                      {p.name}
                    </h3>
                    <p
                      style={{
                        color: "#3d0070",
                        fontWeight: 800,
                        marginBottom: "0.75rem",
                        fontSize: "1rem",
                        letterSpacing: "0.02em",
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
                        color: "#2ab8c8",
                        background: "transparent",
                        border: "1.5px solid rgba(42,184,200,0.4)",
                        borderRadius: 8,
                        cursor: "pointer",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
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
                color: "#ffffff",
                background:
                  "linear-gradient(135deg, #2ab8c8, #4dc9c9, #2ab8c8)",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                boxShadow: "0 4px 20px rgba(42,184,200,0.35)",
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
