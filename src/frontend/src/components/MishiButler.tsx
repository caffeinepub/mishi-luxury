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
      text: "Namaste! I am your MISHI Royal Butler 🦁 How may I serve you today? Ask me about orders, silver purity, sizing, or returns.",
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
          className="glass-card w-80 flex flex-col"
          style={{
            height: "420px",
            boxShadow: "0 0 40px rgba(212,175,55,0.3)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between p-4"
            style={{ borderBottom: "1px solid rgba(212,175,55,0.3)" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🦁</span>
              <div>
                <p
                  className="gold-text font-semibold text-sm"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  MISHI Butler
                </p>
                <p className="text-xs text-gray-400">
                  Royal Assistant · Always Available
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-yellow-400"
            >
              <X size={16} />
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
            {msgs.map((m, i) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: pre-existing pattern
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-xl text-sm max-w-[85%] ${
                    m.role === "user" ? "text-black" : "text-amber-100"
                  }`}
                  style={{
                    background:
                      m.role === "user"
                        ? "linear-gradient(135deg, #D4AF37, #B8960C)"
                        : "rgba(75,0,130,0.4)",
                    border:
                      m.role === "bot"
                        ? "1px solid rgba(212,175,55,0.3)"
                        : "none",
                    lineHeight: 1.5,
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
            className="p-3 flex gap-2"
            style={{ borderTop: "1px solid rgba(212,175,55,0.3)" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask your Butler..."
              className="flex-1 bg-transparent text-amber-100 text-sm outline-none placeholder-gray-500"
            />
            <button
              type="button"
              onClick={send}
              className="btn-gold p-2 rounded-lg"
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
        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
        style={{
          background: "linear-gradient(135deg, #D4AF37, #B8960C)",
          boxShadow: "0 0 25px rgba(212,175,55,0.6)",
          border: "2px solid rgba(240,208,96,0.8)",
        }}
        title="MISHI Royal Butler"
      >
        🦁
      </button>
    </div>
  );
}
