import { useState } from "react";
import InvoiceModal from "../components/InvoiceModal";
import {
  type OrderStage,
  STAGE_ICONS,
  STAGE_LABELS,
  useMishi,
} from "../store/store";

const STAGES: OrderStage[] = [
  "orderPlaced",
  "artisanCrafting",
  "qualityCheck",
  "royalDispatch",
  "palaceDelivery",
];

export default function OrdersPage() {
  const { orders, navigate, isLoggedIn } = useMishi();
  const [invoiceOrderId, setInvoiceOrderId] = useState<number | null>(null);

  if (!isLoggedIn)
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="glass-card p-10 text-center">
          <p className="text-gray-400 mb-4">Please login to view your orders</p>
          <button
            type="button"
            onClick={() => navigate("login")}
            className="btn-gold px-8 py-3"
          >
            Login
          </button>
        </div>
      </div>
    );

  if (orders.length === 0)
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="glass-card p-12 text-center">
          <div className="text-5xl mb-4">👑</div>
          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-2xl text-amber-100 mb-3"
          >
            No Royal Orders Yet
          </h2>
          <p className="text-gray-400 mb-6">
            Your regal shopping journey awaits
          </p>
          <button
            type="button"
            onClick={() => navigate("shop")}
            className="btn-gold px-8 py-3"
          >
            Shop Now
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen pt-24 px-6 pb-20 max-w-4xl mx-auto">
      {invoiceOrderId !== null && (
        <InvoiceModal
          orderId={invoiceOrderId}
          onClose={() => setInvoiceOrderId(null)}
        />
      )}

      <p className="text-xs tracking-[0.4em] text-yellow-400 uppercase mb-2">
        Royal Tracking
      </p>
      <h1
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
        }}
        className="gold-gradient mb-10"
      >
        My Orders
      </h1>
      <div className="space-y-8">
        {[...orders].reverse().map((order) => {
          const stageIdx = STAGES.indexOf(order.stage);
          return (
            <div
              key={order.id}
              className="glass-card p-6"
              data-ocid={`orders.item.${order.id}`}
            >
              <div
                className="flex justify-between items-start mb-4"
                style={{ flexWrap: "wrap", gap: 12 }}
              >
                <div>
                  <h3
                    style={{ fontFamily: "Playfair Display, serif" }}
                    className="text-amber-100 text-xl"
                  >
                    Order #{order.id}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {new Date(order.placedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="gold-text font-bold text-lg">
                    ₹{order.totalAmount.toLocaleString("en-IN")}
                  </p>
                  <span
                    className={`text-xs px-3 py-1 rounded-full mt-1 inline-block ${
                      order.isApproved
                        ? "bg-green-900/50 text-green-400 border border-green-700"
                        : "bg-yellow-900/30 text-yellow-400 border border-yellow-700"
                    }`}
                  >
                    {order.isApproved ? "Approved" : "Pending Approval"}
                  </span>
                </div>
              </div>

              {/* QR + Invoice row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 20,
                  padding: "12px 16px",
                  background: "rgba(212,175,55,0.05)",
                  borderRadius: 8,
                  border: "1px solid rgba(212,175,55,0.15)",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(`ORDER_${order.id}`)}`}
                  alt="Order QR"
                  loading="eager"
                  width={80}
                  height={80}
                  style={{
                    borderRadius: 6,
                    border: "1px solid rgba(212,175,55,0.3)",
                    flexShrink: 0,
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div style={{ flex: 1 }}>
                  <p className="text-gray-400 text-xs mb-1">
                    Scan QR or view full invoice
                  </p>
                  <button
                    type="button"
                    data-ocid="orders.invoice.primary_button"
                    onClick={() => setInvoiceOrderId(order.id)}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(240,208,96,0.15))",
                      border: "1px solid rgba(212,175,55,0.4)",
                      borderRadius: "6px",
                      padding: "6px 14px",
                      color: "#D4AF37",
                      fontSize: "13px",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    📄 View Invoice / QR
                  </button>
                </div>
              </div>

              {/* Royal Timeline */}
              <div className="relative">
                <div
                  className="absolute top-6 left-0 right-0 h-0.5"
                  style={{ background: "rgba(212,175,55,0.2)" }}
                />
                <div
                  className="absolute top-6 left-0 h-0.5 transition-all duration-1000"
                  style={{
                    width: `${(stageIdx / (STAGES.length - 1)) * 100}%`,
                    background: "linear-gradient(90deg, #D4AF37, #F0D060)",
                  }}
                />

                <div className="relative flex justify-between">
                  {STAGES.map((stage, idx) => {
                    const done = idx < stageIdx;
                    const active = idx === stageIdx;
                    return (
                      <div
                        key={stage}
                        className="flex flex-col items-center gap-2"
                        style={{ width: "20%" }}
                      >
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border-2 relative z-10 transition-all ${
                            done
                              ? "border-green-400 bg-green-900/50"
                              : active
                                ? "border-yellow-400 bg-yellow-400/20"
                                : "border-gray-700 bg-gray-900"
                          }`}
                          style={
                            active
                              ? { boxShadow: "0 0 20px rgba(212,175,55,0.5)" }
                              : {}
                          }
                        >
                          {STAGE_ICONS[stage]}
                        </div>
                        <p
                          className={`text-center text-xs leading-tight ${
                            done
                              ? "text-green-400"
                              : active
                                ? "text-yellow-400 font-semibold"
                                : "text-gray-600"
                          }`}
                          style={{ maxWidth: "70px" }}
                        >
                          {STAGE_LABELS[stage]}
                        </p>
                        {done && (
                          <span className="text-xs text-green-500">✓</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className="mt-6 p-3 rounded-lg text-center text-sm"
                style={{
                  background: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                <span className="text-gray-400">Current Status: </span>
                <span className="gold-text font-semibold">
                  {STAGE_ICONS[order.stage]} {STAGE_LABELS[order.stage]}
                </span>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                📦 {order.shippingAddress}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
