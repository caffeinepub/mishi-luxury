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
  // Fallback heuristic based on scroll position
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
  const [minimized, setMinimized] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [section, setSection] = useState<Section>("hero");
  const [posY, setPosY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetYRef = useRef(0);
  const currentYRef = useRef(0);

  // Smooth lerp scroll-follow animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewH = window.innerHeight;
      const docH = document.body.scrollHeight;
      const progress = scrollY / Math.max(docH - viewH, 1);
      // Guides travel from top-center to bottom-center of viewport
      targetYRef.current = progress * (viewH - 480);
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
        style={{
          position: "fixed",
          bottom: 100,
          right: 16,
          zIndex: 45,
          padding: "0.5rem 1rem",
          background: "rgba(10,8,22,0.92)",
          border: "1px solid rgba(212,175,55,0.4)",
          borderRadius: 20,
          color: "#d4af37",
          fontSize: "0.72rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          cursor: "pointer",
          fontFamily: "Inter, sans-serif",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          transition: "all 0.2s ease",
        }}
      >
        ✨ Show Guides
      </button>
    );
  }

  return (
    <div
      ref={containerRef}
      data-ocid="founders.panel"
      style={{
        position: "fixed",
        right: 0,
        top: 80,
        transform: `translateY(${posY}px)`,
        zIndex: 45,
        width: minimized ? 80 : 240,
        transition: "width 0.35s cubic-bezier(0.4,0,0.2,1)",
        pointerEvents: "auto",
      }}
    >
      {/* Main card */}
      <div
        style={{
          background: "rgba(10,8,22,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(212,175,55,0.4)",
          borderRight: "none",
          borderRadius: minimized ? "12px 0 0 12px" : "16px 0 0 16px",
          overflow: "hidden",
          boxShadow:
            "0 8px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,175,55,0.08), inset 0 1px 0 rgba(212,175,55,0.1)",
        }}
      >
        {/* Header controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: minimized ? "center" : "space-between",
            padding: "0.55rem 0.7rem",
            borderBottom: minimized
              ? "none"
              : "1px solid rgba(212,175,55,0.12)",
          }}
        >
          {!minimized && (
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                color: "#d4af37",
                textTransform: "uppercase",
              }}
            >
              Live Guides
            </span>
          )}
          <div style={{ display: "flex", gap: 4 }}>
            <button
              type="button"
              data-ocid="founders.minimize.button"
              onClick={() => setMinimized((v) => !v)}
              title={minimized ? "Expand" : "Minimize"}
              style={{
                background: "none",
                border: "1px solid rgba(212,175,55,0.3)",
                borderRadius: 4,
                color: "#d4af37",
                fontSize: "0.65rem",
                cursor: "pointer",
                padding: "2px 6px",
                lineHeight: 1.4,
                transition: "background 0.15s",
              }}
            >
              {minimized ? "+" : "−"}
            </button>
            {!minimized && (
              <button
                type="button"
                data-ocid="founders.close.button"
                onClick={() => setVisible(false)}
                title="Close"
                style={{
                  background: "none",
                  border: "1px solid rgba(212,175,55,0.2)",
                  borderRadius: 4,
                  color: "#7a9aaa",
                  fontSize: "0.65rem",
                  cursor: "pointer",
                  padding: "2px 6px",
                  lineHeight: 1.4,
                  transition: "background 0.15s",
                }}
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Characters area */}
        {!minimized && (
          <div style={{ padding: "0 0 0.75rem" }}>
            {/* Speech bubble */}
            {bubbleOpen && (
              <div
                data-ocid="founders.popover"
                style={{
                  margin: "0.5rem 0.6rem",
                  background: "rgba(20,10,42,0.96)",
                  border: "1px solid rgba(212,175,55,0.45)",
                  borderRadius: 10,
                  padding: "0.75rem 0.8rem",
                  position: "relative",
                }}
              >
                {/* Tail */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -8,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "7px solid transparent",
                    borderRight: "7px solid transparent",
                    borderTop: "8px solid rgba(212,175,55,0.45)",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontStyle: "italic",
                    fontSize: "0.8rem",
                    color: "#f5d98b",
                    lineHeight: 1.6,
                    marginBottom: "0.65rem",
                  }}
                >
                  {BUBBLE_MESSAGES[section]}
                </p>
                <div style={{ display: "flex", gap: "0.35rem" }}>
                  <button
                    type="button"
                    data-ocid="founders.collections.button"
                    onClick={() => {
                      setBubbleOpen(false);
                      navigate("shop");
                    }}
                    style={{
                      flex: 1,
                      fontSize: "0.58rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#d4af37",
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.4)",
                      borderRadius: 5,
                      padding: "0.3rem 0.35rem",
                      cursor: "pointer",
                      fontFamily: "Inter, sans-serif",
                      transition: "background 0.15s",
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
                      fontSize: "0.58rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#c4b5fd",
                      background: "rgba(196,181,253,0.06)",
                      border: "1px solid rgba(196,181,253,0.35)",
                      borderRadius: 5,
                      padding: "0.3rem 0.35rem",
                      cursor: "pointer",
                      fontFamily: "Inter, sans-serif",
                      transition: "background 0.15s",
                    }}
                  >
                    Our Legacy
                  </button>
                </div>
              </div>
            )}

            {/* Anime character illustrations */}
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
                padding: "0 0.4rem",
                gap: 4,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              {/* Mohit */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src="/assets/generated/mohit-anime-guide-transparent.dim_400x700.png"
                  alt="Mohit - MISHI Co-founder"
                  style={{
                    width: "100%",
                    maxWidth: 100,
                    height: "auto",
                    objectFit: "contain",
                    objectPosition: "bottom",
                    filter:
                      "drop-shadow(0 4px 16px rgba(0,188,188,0.3)) drop-shadow(0 0 8px rgba(212,175,55,0.2))",
                    animation: "floatMohit 3.2s ease-in-out infinite",
                    transformOrigin: "bottom center",
                  }}
                />
              </div>
              {/* Shivani */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src="/assets/generated/shivani-anime-guide-transparent.dim_400x700.png"
                  alt="Shivani - MISHI Co-founder"
                  style={{
                    width: "100%",
                    maxWidth: 100,
                    height: "auto",
                    objectFit: "contain",
                    objectPosition: "bottom",
                    filter:
                      "drop-shadow(0 4px 16px rgba(180,100,220,0.35)) drop-shadow(0 0 8px rgba(212,175,55,0.2))",
                    animation: "floatShivani 3.8s ease-in-out infinite",
                    transformOrigin: "bottom center",
                  }}
                />
              </div>
            </button>

            {/* Founder names */}
            <div
              style={{
                textAlign: "center",
                marginTop: "0.5rem",
                padding: "0 0.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "1.35rem",
                  lineHeight: 1.2,
                  background:
                    "linear-gradient(135deg, #c9a84c 0%, #f5d98b 40%, #d4af37 70%, #e8c84a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 8px rgba(212,175,55,0.35))",
                }}
              >
                Mohit &amp; Shivani
              </p>
              <p
                style={{
                  fontSize: "0.56rem",
                  letterSpacing: "0.18em",
                  color: "rgba(196,181,253,0.5)",
                  textTransform: "uppercase",
                  fontFamily: "Inter, sans-serif",
                  marginTop: "0.2rem",
                }}
              >
                Tap to speak with us
              </p>
            </div>
          </div>
        )}

        {/* Minimized avatar strip */}
        {minimized && (
          <button
            type="button"
            onClick={() => {
              setMinimized(false);
              setBubbleOpen(true);
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              padding: "0.4rem 0.2rem 0.6rem",
              gap: 4,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <img
              src="/assets/generated/mohit-anime-guide-transparent.dim_400x700.png"
              alt="M"
              style={{
                width: 36,
                height: 36,
                objectFit: "contain",
                borderRadius: "50%",
              }}
            />
            <img
              src="/assets/generated/shivani-anime-guide-transparent.dim_400x700.png"
              alt="S"
              style={{
                width: 36,
                height: 36,
                objectFit: "contain",
                borderRadius: "50%",
              }}
            />
          </button>
        )}
      </div>

      <style>{`
        @keyframes floatMohit {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes floatShivani {
          0%, 100% { transform: translateY(-4px) rotate(1deg); }
          50% { transform: translateY(4px) rotate(-0.5deg); }
        }
      `}</style>
    </div>
  );
}
