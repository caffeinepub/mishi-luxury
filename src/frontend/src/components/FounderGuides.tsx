import { useEffect, useRef, useState } from "react";
import { useMishi } from "../store/store";

type Section =
  | "hero"
  | "jewelry"
  | "ethnic"
  | "legacy"
  | "products"
  | "default";

const BUBBLE_MESSAGES: Record<Section, string> = {
  hero: "Welcome to MISHI! Let us guide you through our Royal Vault...",
  jewelry: "This is our Royal Vault, handpicked for your elegance.",
  ethnic: "Discover our heritage weaves — crafted for modern royalty.",
  legacy: "Every stitch, every gem carries the story of our legacy.",
  products: "This piece represents the strength of our legacy.",
  default: "Welcome to MISHI! Let us guide you through our Royal Vault...",
};

function detectSection(scrollY: number): Section {
  const sections = document.querySelectorAll("section[data-section]");
  let current: Section = "default";
  for (const el of sections) {
    const rect = el.getBoundingClientRect();
    const mid = rect.top + rect.height / 2;
    if (mid < window.innerHeight * 0.65) {
      current = (el.getAttribute("data-section") as Section) ?? "default";
    }
  }
  if (sections.length === 0) {
    if (scrollY < 400) return "hero";
    if (scrollY < 1200) return "jewelry";
    if (scrollY < 2000) return "products";
    return "legacy";
  }
  return current;
}

export default function FounderGuides() {
  const { navigate } = useMishi();
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [section, setSection] = useState<Section>("hero");
  const [posY, setPosY] = useState(0);
  const rafRef = useRef<number | null>(null);
  const targetYRef = useRef(0);
  const currentYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewH = window.innerHeight;
      const docH = document.body.scrollHeight;
      const progress = scrollY / Math.max(docH - viewH, 1);
      targetYRef.current = progress * (viewH - 200);
      setSection(detectSection(scrollY));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    const animate = () => {
      currentYRef.current += (targetYRef.current - currentYRef.current) * 0.08;
      setPosY(currentYRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!visible) {
    return (
      <button
        type="button"
        data-ocid="founders.show_guides.button"
        onClick={() => setVisible(true)}
        title="Meet your guides"
        style={{
          position: "fixed",
          bottom: 88,
          right: 16,
          zIndex: 45,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #b8860b, #d4a017)",
          border: "2px solid rgba(255,248,200,0.8)",
          color: "#fff8e8",
          fontSize: "1.1rem",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(184,134,11,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ✨
      </button>
    );
  }

  /* ── EXPANDED PANEL ── */
  if (expanded) {
    return (
      <div
        data-ocid="founders.panel"
        style={{
          position: "fixed",
          right: 0,
          top: 80,
          transform: `translateY(${posY}px)`,
          zIndex: 45,
          width: 220,
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            background: "rgba(253,250,244,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(184,134,11,0.3)",
            borderRight: "none",
            borderRadius: "14px 0 0 14px",
            overflow: "visible",
            boxShadow:
              "0 8px 32px rgba(184,134,11,0.15), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.45rem 0.6rem",
              borderBottom: "1px solid rgba(184,134,11,0.12)",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "#b8860b",
                textTransform: "uppercase",
              }}
            >
              Your Guides
            </span>
            <div style={{ display: "flex", gap: 3 }}>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                title="Minimize"
                style={{
                  background: "none",
                  border: "1px solid rgba(184,134,11,0.3)",
                  borderRadius: 4,
                  color: "#b8860b",
                  fontSize: "0.62rem",
                  cursor: "pointer",
                  padding: "1px 5px",
                  lineHeight: 1.4,
                }}
              >
                −
              </button>
              <button
                type="button"
                data-ocid="founders.close.button"
                onClick={() => setVisible(false)}
                title="Close"
                style={{
                  background: "none",
                  border: "1px solid rgba(184,134,11,0.2)",
                  borderRadius: 4,
                  color: "#8b6f4e",
                  fontSize: "0.62rem",
                  cursor: "pointer",
                  padding: "1px 5px",
                  lineHeight: 1.4,
                }}
              >
                ×
              </button>
            </div>
          </div>

          {/* Speech bubble */}
          {bubbleOpen && (
            <div
              data-ocid="founders.popover"
              style={{
                margin: "0.35rem 0.45rem",
                background: "rgba(255,252,240,0.98)",
                border: "1px solid rgba(184,134,11,0.35)",
                borderRadius: 9,
                padding: "0.5rem 0.55rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "0.75rem",
                  color: "#5a3e28",
                  lineHeight: 1.5,
                  marginBottom: "0.5rem",
                }}
              >
                {BUBBLE_MESSAGES[section]}
              </p>
              <div style={{ display: "flex", gap: "0.3rem" }}>
                <button
                  type="button"
                  data-ocid="founders.collections.button"
                  onClick={() => {
                    setBubbleOpen(false);
                    navigate("shop");
                  }}
                  style={{
                    flex: 1,
                    fontSize: "0.55rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#b8860b",
                    background: "rgba(184,134,11,0.07)",
                    border: "1px solid rgba(184,134,11,0.35)",
                    borderRadius: 5,
                    padding: "0.25rem 0.3rem",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Collections
                </button>
                <button
                  type="button"
                  data-ocid="founders.legacy.button"
                  onClick={() => {
                    setBubbleOpen(false);
                    navigate("legacy");
                  }}
                  style={{
                    flex: 1,
                    fontSize: "0.55rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#8b6f4e",
                    background: "rgba(139,111,78,0.06)",
                    border: "1px solid rgba(139,111,78,0.3)",
                    borderRadius: 5,
                    padding: "0.25rem 0.3rem",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Our Legacy
                </button>
              </div>
            </div>
          )}

          {/* Characters */}
          <button
            type="button"
            data-ocid="founders.characters.button"
            onClick={() => setBubbleOpen((v) => !v)}
            style={{
              display: "flex",
              width: "100%",
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: "4px 2px 0",
              gap: 0,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/generated/mohit-anime-guide-transparent.dim_400x700.png"
              alt="Mohit"
              style={{
                width: 90,
                height: 120,
                objectFit: "contain",
                objectPosition: "bottom",
                flexShrink: 0,
                marginRight: "-8px",
                filter: "drop-shadow(0 2px 8px rgba(184,134,11,0.25))",
                animation: "floatMohit 3.2s ease-in-out infinite",
                transformOrigin: "bottom center",
                zIndex: 1,
                position: "relative",
              }}
            />
            <img
              src="/assets/generated/shivani-anime-guide-transparent.dim_400x700.png"
              alt="Shivani"
              style={{
                width: 90,
                height: 120,
                objectFit: "contain",
                objectPosition: "bottom",
                flexShrink: 0,
                filter: "drop-shadow(0 2px 8px rgba(107,79,138,0.3))",
                animation: "floatShivani 3.8s ease-in-out infinite",
                transformOrigin: "bottom center",
                zIndex: 2,
                position: "relative",
              }}
            />
          </button>

          <div style={{ textAlign: "center", padding: "0.3rem 0.4rem 0.5rem" }}>
            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "0.95rem",
                lineHeight: 1.2,
                background:
                  "linear-gradient(135deg, #7a5200 0%, #b8860b 40%, #d4a017 70%, #8b6200 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mohit &amp; Shivani
            </p>
            <p
              style={{
                fontSize: "0.5rem",
                letterSpacing: "0.12em",
                color: "rgba(139,111,78,0.65)",
                textTransform: "uppercase",
                fontFamily: "Inter, sans-serif",
                marginTop: "0.15rem",
              }}
            >
              Tap to speak with us
            </p>
          </div>
        </div>

        <style>{`
          @keyframes floatMohit {
            0%, 100% { transform: translateY(0px) rotate(-0.8deg); }
            50% { transform: translateY(-5px) rotate(0.8deg); }
          }
          @keyframes floatShivani {
            0%, 100% { transform: translateY(-2px) rotate(0.8deg); }
            50% { transform: translateY(3px) rotate(-0.5deg); }
          }
        `}</style>
      </div>
    );
  }

  /* ── MINIMIZED FLOATING ICON (default) — matches MOVANI 'Our Legacy' sleek widget ── */
  return (
    <div
      data-ocid="founders.icon"
      style={{
        position: "fixed",
        right: 16,
        bottom: 88,
        zIndex: 45,
        pointerEvents: "auto",
      }}
    >
      <button
        type="button"
        data-ocid="founders.expand.button"
        onClick={() => setExpanded(true)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          background: "rgba(253,250,244,0.97)",
          border: "1.5px solid rgba(184,134,11,0.3)",
          borderRadius: 20,
          padding: "8px 10px 6px",
          cursor: "pointer",
          boxShadow:
            "0 6px 24px rgba(184,134,11,0.18), 0 2px 8px rgba(0,0,0,0.06)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "scale(1.06) translateY(-2px)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 10px 32px rgba(184,134,11,0.28)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 6px 24px rgba(184,134,11,0.18), 0 2px 8px rgba(0,0,0,0.06)";
        }}
        title="Meet Mohit & Shivani"
      >
        {/* Stacked avatar thumbnails */}
        <div style={{ position: "relative", width: 44, height: 52 }}>
          <img
            src="/assets/generated/mohit-anime-guide-transparent.dim_400x700.png"
            alt="Mohit"
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 26,
              height: 40,
              objectFit: "contain",
              objectPosition: "bottom",
              filter: "drop-shadow(0 1px 4px rgba(184,134,11,0.2))",
              animation: "floatMini 3s ease-in-out infinite",
            }}
          />
          <img
            src="/assets/generated/shivani-anime-guide-transparent.dim_400x700.png"
            alt="Shivani"
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: 26,
              height: 44,
              objectFit: "contain",
              objectPosition: "bottom",
              filter: "drop-shadow(0 1px 4px rgba(107,79,138,0.25))",
              animation: "floatMini2 3.5s ease-in-out infinite",
            }}
          />
        </div>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.58rem",
            fontStyle: "italic",
            color: "#b8860b",
            letterSpacing: "0.08em",
            marginTop: 3,
            whiteSpace: "nowrap",
          }}
        >
          Our Guides
        </p>
      </button>
      <button
        type="button"
        onClick={() => setVisible(false)}
        title="Hide guides"
        style={{
          position: "absolute",
          top: -6,
          right: -6,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "rgba(253,250,244,0.95)",
          border: "1px solid rgba(184,134,11,0.25)",
          color: "#8b6f4e",
          fontSize: "0.65rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        }}
      >
        ×
      </button>

      <style>{`
        @keyframes floatMini {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes floatMini2 {
          0%, 100% { transform: translateY(-2px); }
          50% { transform: translateY(2px); }
        }
      `}</style>
    </div>
  );
}
