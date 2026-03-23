import { useEffect, useRef, useState } from "react";
import FounderModel3D from "../components/FounderModel3D";
import { getProductPrice, useMishi } from "../store/store";

export default function HomePage() {
  const { navigate, products, silverRate, addToCart } = useMishi();
  const featured = products.filter((p) => p.isActive).slice(0, 4);

  const heroRef = useRef<HTMLElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);
  const atmoRef = useRef<HTMLDivElement>(null);
  const mouseOffsetRef = useRef({ x: 0, y: 0 });

  const [bubbleVisible, setBubbleVisible] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const applyTransform = () => {
      const scrollY = window.scrollY;
      const { x: xBg, y: yBg } = mouseOffsetRef.current;
      const scrollOffset = scrollY * 0.3;
      if (bgImgRef.current) {
        bgImgRef.current.style.transform = `translate(calc(-50% + ${xBg}px), calc(-50% + ${yBg - scrollOffset}px))`;
      }
      if (atmoRef.current) {
        const xAtmo = xBg * 0.47;
        const yAtmo = yBg * 0.5 - scrollOffset * 0.5;
        atmoRef.current.style.transform = `translate(calc(-50% + ${xAtmo}px), calc(-50% + ${yAtmo}px))`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (e.clientX - rect.left - cx) / cx;
      const dy = (e.clientY - rect.top - cy) / cy;
      mouseOffsetRef.current = { x: dx * -15, y: dy * -10 };
      applyTransform();
    };

    const handleScroll = () => {
      applyTransform();
    };

    hero.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
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
          src="/assets/generated/hero-lion-lioness-sunrise.dim_1920x900.jpg"
          alt="MISHI Royal Pair — The Lion and Lioness at Sunrise"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "112%",
            height: "112%",
            objectFit: "cover",
            filter: "brightness(0.42) saturate(1.25)",
            transition: "transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        />
        {/* Atmospheric depth layer — warm purple-gold glow */}
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
              "radial-gradient(ellipse 70% 55% at 50% 62%, rgba(240,168,48,0.08) 0%, rgba(107,63,160,0.07) 55%, transparent 100%)",
            transition: "transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
            pointerEvents: "none",
          }}
        />
        {/* Vignette — bottom: warm deep purple */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,8,24,0.2) 0%, rgba(13,8,24,0.5) 55%, rgba(13,8,24,0.95) 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Vignette — edges: warm dark purple */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 85% at 50% 50%, transparent 52%, rgba(8,4,18,0.85) 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Sunrise horizon warmth glow at bottom */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "35%",
            background:
              "linear-gradient(to top, rgba(200,128,10,0.06) 0%, rgba(107,63,160,0.04) 60%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.45em",
              color: "#c8a050",
              textTransform: "uppercase",
              marginBottom: "1.2rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
            }}
          >
            Est. 2025 · Mission 2028
          </p>
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
              color: "#c8a050",
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
              background:
                "linear-gradient(to bottom, #d4af37, rgba(107,63,160,0.4), transparent)",
            }}
          />
        </div>
      </section>

      {/* Categories */}
      <section
        className="py-20 px-6 max-w-6xl mx-auto"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(61,31,110,0.04) 50%, transparent 100%)",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "0.7rem",
            letterSpacing: "0.4em",
            color: "#c8a050",
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
                    "linear-gradient(to top, rgba(13,8,24,0.95) 0%, rgba(13,8,24,0.25) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 p-8">
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.25em",
                    color: "#c8a050",
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
                    color: "#d4af37",
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
            "linear-gradient(90deg, rgba(61,31,110,0.04), rgba(212,175,55,0.08), rgba(61,31,110,0.04))",
          borderTop: "1px solid rgba(212,175,55,0.18)",
          borderBottom: "1px solid rgba(212,175,55,0.18)",
        }}
      >
        <p style={{ fontSize: "0.875rem", letterSpacing: "0.04em" }}>
          <span
            style={{
              color: "#7a8a90",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {"Today's Live Silver Rate · "}
          </span>
          <span style={{ color: "#d4af37", fontWeight: 600 }}>
            ₹{silverRate}/gram
          </span>
          <span
            style={{
              color: "#4a5a65",
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
            color: "#c8a050",
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
                        "linear-gradient(to top, rgba(13,8,24,0.95), transparent)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        color: "#d4af37",
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
                      color: "#d4af37",
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
            "linear-gradient(135deg, rgba(61,31,110,0.12), rgba(13,8,24,0), rgba(212,175,55,0.06))",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              color: "#c8a050",
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

      {/* ═══════════════════════════════════════════════ */}
      {/* FOUNDERS SECTION — Interactive 3D Royal Guides */}
      {/* ═══════════════════════════════════════════════ */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(13,8,24,1) 0%, rgba(20,8,35,0.98) 100%)",
          borderTop: "1px solid rgba(212,175,55,0.2)",
          padding: "6rem 1.5rem",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <p
            style={{
              textAlign: "center",
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              color: "#c8a050",
              textTransform: "uppercase",
              marginBottom: "3.5rem",
            }}
          >
            The Visionaries
          </p>

          <div
            className="flex flex-col md:flex-row items-center justify-center"
            style={{ gap: "4rem" }}
          >
            {/* ── LEFT: 3D Interactive Founders + speech bubble ── */}
            <div
              className="relative flex flex-col items-center"
              data-ocid="founders.panel"
            >
              {/* Speech bubble */}
              {bubbleVisible && (
                <div
                  data-ocid="founders.popover"
                  style={{
                    position: "absolute",
                    bottom: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "clamp(240px, 60vw, 320px)",
                    background: "rgba(13,5,28,0.94)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(212,175,55,0.45)",
                    borderRadius: "16px",
                    padding: "1.4rem 1.4rem 1.2rem",
                    boxShadow:
                      "0 0 32px rgba(212,175,55,0.15), 0 0 64px rgba(107,63,160,0.12), 0 8px 32px rgba(0,0,0,0.6)",
                    zIndex: 20,
                    animation: "fadeInUp 0.28s ease",
                  }}
                >
                  {/* Pointer triangle */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: -9,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 0,
                      borderLeft: "9px solid transparent",
                      borderRight: "9px solid transparent",
                      borderTop: "9px solid rgba(212,175,55,0.45)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: -7,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 0,
                      borderLeft: "8px solid transparent",
                      borderRight: "8px solid transparent",
                      borderTop: "8px solid rgba(13,5,28,0.94)",
                    }}
                  />

                  <p
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1rem",
                      fontStyle: "italic",
                      color: "#d4af37",
                      lineHeight: 1.65,
                      marginBottom: "1rem",
                      textAlign: "center",
                    }}
                  >
                    Welcome to MISHI! Let us guide you through our Royal
                    Vault...
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      type="button"
                      data-ocid="founders.collections.button"
                      onClick={() => {
                        setBubbleVisible(false);
                        navigate("shop");
                      }}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.72rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#d4af37",
                        background: "transparent",
                        border: "1px solid rgba(212,175,55,0.5)",
                        borderRadius: "6px",
                        padding: "0.45rem 1rem",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Collections
                    </button>
                    <button
                      type="button"
                      data-ocid="founders.legacy.button"
                      onClick={() => {
                        setBubbleVisible(false);
                        navigate("legacy");
                      }}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.72rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#c4b5fd",
                        background: "transparent",
                        border: "1px solid rgba(196,181,253,0.45)",
                        borderRadius: "6px",
                        padding: "0.45rem 1rem",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Our Legacy
                    </button>
                  </div>
                </div>
              )}

              {/* 3D Interactive Model */}
              <FounderModel3D onInteract={() => setBubbleVisible((v) => !v)} />

              {/* Label below 3D model */}
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.65rem",
                  letterSpacing: "0.35em",
                  color: "#c8a050",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Your Royal Guides
              </p>
            </div>

            {/* ── RIGHT: Founder Names ── */}
            <div
              className="flex flex-col items-center md:items-start"
              style={{ maxWidth: 400 }}
              data-ocid="founders.card"
            >
              {/* Our Founders title */}
              <h2
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "2.2rem",
                  fontWeight: 600,
                  color: "#d4af37",
                  marginBottom: "1rem",
                  textAlign: "center",
                  letterSpacing: "0.04em",
                }}
              >
                Our Founders
              </h2>

              {/* Gold divider */}
              <div
                style={{
                  width: "100%",
                  maxWidth: 260,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, #d4af37, #f0a830, #d4af37, transparent)",
                  marginBottom: "2rem",
                  alignSelf: "center",
                }}
              />

              {/* Founder names with metallic gold gradient */}
              <div
                style={{
                  filter: "drop-shadow(0 0 12px rgba(212,175,55,0.4))",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "Great Vibes, cursive",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    lineHeight: 1.2,
                    background:
                      "linear-gradient(135deg, #c9a84c 0%, #f5d98b 25%, #d4af37 45%, #fceab0 60%, #b8860b 80%, #e8c84a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Mohit Gujrati
                </p>

                <p
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontStyle: "italic",
                    fontSize: "1.2rem",
                    color: "#d4af37",
                    lineHeight: 1.8,
                    display: "block",
                  }}
                >
                  &amp;
                </p>

                <p
                  style={{
                    fontFamily: "Great Vibes, cursive",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    lineHeight: 1.2,
                    background:
                      "linear-gradient(135deg, #c9a84c 0%, #f5d98b 25%, #d4af37 45%, #fceab0 60%, #b8860b 80%, #e8c84a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Shivani Rana
                </p>
              </div>

              {/* Attire description */}
              <div
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  alignSelf: "center",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                    color: "#9abbc8",
                    letterSpacing: "0.03em",
                  }}
                >
                  🤴 Navy-Teal Velvet Kurta · Gold Zari · Ivory Shawl
                </p>
                <p
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                    color: "#c4b5fd",
                    letterSpacing: "0.03em",
                  }}
                >
                  👸 Teal-Gold Saree · Maang Tikka · Jhumkas · Layered Necklace
                </p>
              </div>

              {/* Tagline */}
              <p
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontStyle: "italic",
                  fontSize: "1rem",
                  color: "#c4b5fd",
                  marginTop: "1.5rem",
                  textAlign: "center",
                  letterSpacing: "0.04em",
                  alignSelf: "center",
                }}
              >
                The Visionaries Behind the Royal Vault
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
