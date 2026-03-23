import { Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Message {
  role: "bot" | "user";
  text: string;
}

const getReply = (input: string): string => {
  const t = input.toLowerCase();
  if (t.includes("order"))
    return "Your royal orders are being crafted with the finest artisans. Please visit My Orders for live tracking of each stage of your regal journey.";
  if (t.includes("silver") || t.includes("purity") || t.includes("sterling"))
    return "MISHI Sterling Silver is hallmarked 92.5% pure (925). Each piece is crafted by master artisans who have honed their skills over generations. The current silver rate is updated daily and reflected in every product.";
  if (t.includes("return") || t.includes("refund"))
    return "We offer a gracious 7-day return policy for all unworn, undamaged items. Simply reach out to our Royal Concierge and we shall arrange a seamless return fit for royalty.";
  if (t.includes("size") || t.includes("fit"))
    return "Our Royal Ethnic Wear follows standard Indian sizing from XS to XXL. For men's Sherwanis, we offer sizes 36 to 44 chest. When in doubt, size up for that regal drape.";
  if (t.includes("price") || t.includes("cost"))
    return "Our Sterling Silver pieces are dynamically priced based on the daily silver rate, ensuring you always pay a fair, market-accurate price. Ethnic Wear prices are fixed and reflect the finest craftsmanship.";
  if (t.includes("hello") || t.includes("hi") || t.includes("namaste"))
    return "Namaste! I am your MISHI Royal Butler, at your service. How may I assist you on your royal shopping journey today?";
  return "Namaste! I am your MISHI Royal Butler. I am here to assist you with order tracking, silver purity, sizing, returns, and more. What royal query may I address for you?";
};

export default function MishiButler() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Message[]>([
    {
      role: "bot",
      text: "Namaste! I am your MISHI Royal Butler 🦁 May I guide you through the MISHI Empire? Ask me about orders, silver purity, sizing, or returns.",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional scroll trigger
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMsgs((prev) => [...prev, { role: "user", text: userMsg }]);
    setTimeout(() => {
      setMsgs((prev) => [...prev, { role: "bot", text: getReply(userMsg) }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          style={{
            width: "320px",
            height: "420px",
            display: "flex",
            flexDirection: "column",
            background: "rgba(180, 140, 255, 0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "2px solid rgba(255, 215, 0, 0.7)",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.3), 0 0 40px rgba(180,140,255,0.4)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
          data-ocid="butler.dialog"
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 16px",
              background: "rgba(160, 100, 240, 0.4)",
              borderBottom: "1px solid rgba(255,215,0,0.4)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "1.5rem" }}>🦁</span>
              <div>
                <p
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "#FFD700",
                    margin: 0,
                    textShadow: "0 0 8px rgba(255,215,0,0.5)",
                  }}
                >
                  MISHI Butler
                </p>
                {/* Subtitle — high contrast white */}
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.95)",
                    margin: 0,
                  }}
                >
                  Royal Assistant · Always Available
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              data-ocid="butler.close_button"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.7)",
                display: "flex",
                alignItems: "center",
                padding: "4px",
                borderRadius: "4px",
                transition: "color 0.2s",
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {msgs.map((m, i) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: pre-existing pattern
                key={i}
                style={{
                  display: "flex",
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    padding: "8px 12px",
                    borderRadius: "12px",
                    fontSize: "0.8125rem",
                    maxWidth: "85%",
                    lineHeight: 1.5,
                    color: m.role === "user" ? "#fff" : "#1a0535",
                    background:
                      m.role === "user"
                        ? "linear-gradient(135deg, #D4AF37, #B8960C)"
                        : "rgba(255, 255, 255, 0.92)",
                    border:
                      m.role === "bot"
                        ? "1px solid rgba(100,60,180,0.3)"
                        : "none",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "10px 12px",
              display: "flex",
              gap: "8px",
              background: "rgba(80,40,160,0.3)",
              borderTop: "1px solid rgba(255,215,0,0.3)",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask your Butler..."
              data-ocid="butler.input"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.8125rem",
              }}
            />
            <button
              type="button"
              onClick={send}
              data-ocid="butler.submit_button"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #B8960C)",
                border: "none",
                cursor: "pointer",
                padding: "6px 8px",
                borderRadius: "8px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        data-ocid="butler.open_modal_button"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          background: "linear-gradient(135deg, #D4AF37, #B8960C)",
          boxShadow: "0 0 25px rgba(212,175,55,0.6)",
          border: "2px solid rgba(240,208,96,0.8)",
          cursor: "pointer",
        }}
        title="MISHI Royal Butler"
      >
        🦁
      </button>
    </div>
  );
}
