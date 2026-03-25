import { X } from "lucide-react";
import { useMishi } from "../store/store";

interface InvoiceModalProps {
  orderId: number;
  onClose: () => void;
}

export default function InvoiceModal({ orderId, onClose }: InvoiceModalProps) {
  const { orders, products, phone } = useMishi();
  const order = orders.find((o) => o.id === orderId);

  if (!order) return null;

  const invoiceNumber = `INV-${orderId}-${order.placedAt}`;
  const orderUrl = `https://mishiluxury.app/orders/${orderId}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(orderUrl)}`;

  const enrichedItems = order.items.map((ci) => {
    const p = products.find((pr) => pr.id === ci.productId);
    return { ...ci, product: p, subtotal: (p?.price ?? 0) * ci.quantity };
  });

  const handlePrint = () => window.print();

  return (
    <div
      className="invoice-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflowY: "auto",
      }}
      data-ocid="invoice.modal"
    >
      <div
        className="invoice-content"
        style={{
          background: "#fff",
          color: "#1a1a1a",
          borderRadius: "12px",
          padding: "40px",
          maxWidth: "700px",
          width: "100%",
          position: "relative",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        {/* Close button — hidden on print */}
        <button
          type="button"
          onClick={onClose}
          className="no-print"
          data-ocid="invoice.close_button"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(0,0,0,0.1)",
            border: "none",
            borderRadius: "50%",
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <X size={16} />
        </button>

        {/* Invoice Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 32,
            borderBottom: "2px solid #D4AF37",
            paddingBottom: 20,
          }}
        >
          <img
            src="/assets/uploads/Snapchat-1589822426-4-1.jpg"
            alt="MISHI"
            loading="eager"
            fetchPriority="high"
            style={{
              height: 60,
              objectFit: "contain",
              mixBlendMode: "multiply",
              marginBottom: 8,
            }}
          />
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 28,
              color: "#4a2070",
              margin: 0,
            }}
          >
            MISHI LUXURY
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#D4AF37",
              fontSize: 13,
              marginTop: 4,
              letterSpacing: "0.15em",
            }}
          >
            Mission 2028 — Where Love Unites Empires
          </p>
        </div>

        {/* Invoice Meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 24,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <p style={{ fontWeight: 700, fontSize: 18, color: "#1a1a1a" }}>
              INVOICE
            </p>
            <p style={{ color: "#666", fontSize: 13, marginTop: 4 }}>
              {invoiceNumber}
            </p>
            <p style={{ color: "#666", fontSize: 13 }}>
              Date:{" "}
              {new Date(order.placedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontWeight: 600, fontSize: 13, color: "#1a1a1a" }}>
              Bill To:
            </p>
            <p style={{ color: "#444", fontSize: 13 }}>
              {phone || "Royal Customer"}
            </p>
            <p style={{ color: "#444", fontSize: 12, maxWidth: 200 }}>
              {order.shippingAddress}
            </p>
          </div>
        </div>

        {/* Items Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: 24,
          }}
        >
          <thead>
            <tr
              style={{
                background: "#f0e8ff",
                borderBottom: "2px solid #D4AF37",
              }}
            >
              <th
                style={{
                  padding: "10px 12px",
                  textAlign: "left",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Item
              </th>
              <th
                style={{
                  padding: "10px 12px",
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Qty
              </th>
              <th
                style={{
                  padding: "10px 12px",
                  textAlign: "right",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Unit Price
              </th>
              <th
                style={{
                  padding: "10px 12px",
                  textAlign: "right",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {enrichedItems.map((item, i) => (
              <tr
                // biome-ignore lint/suspicious/noArrayIndexKey: invoice static list
                key={i}
                style={{
                  borderBottom: "1px solid #eee",
                  background: i % 2 === 0 ? "#fff" : "#faf8ff",
                }}
              >
                <td style={{ padding: "10px 12px", fontSize: 13 }}>
                  {item.product?.name || `Product #${item.productId}`}
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  {item.quantity}
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                    fontSize: 13,
                    textAlign: "right",
                  }}
                >
                  ₹{(item.product?.price ?? 0).toLocaleString("en-IN")}
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                    fontSize: 13,
                    textAlign: "right",
                  }}
                >
                  ₹{item.subtotal.toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr
              style={{ borderTop: "2px solid #D4AF37", background: "#f0e8ff" }}
            >
              <td
                colSpan={3}
                style={{
                  padding: "12px",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#4a2070",
                }}
              >
                Total Amount
              </td>
              <td
                style={{
                  padding: "12px",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#4a2070",
                  textAlign: "right",
                }}
              >
                ₹{order.totalAmount.toLocaleString("en-IN")}
              </td>
            </tr>
          </tfoot>
        </table>

        {/* QR Code + Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>
              Order Status
            </p>
            <p style={{ fontWeight: 600, fontSize: 14, color: "#4a2070" }}>
              #{orderId} —{" "}
              {order.stage === "palaceDelivery"
                ? "✅ Delivered"
                : `🔄 ${order.stage}`}
            </p>
            <p style={{ fontSize: 11, color: "#999", marginTop: 20 }}>
              Thank you for choosing MISHI Luxury
            </p>
            <p style={{ fontSize: 11, color: "#D4AF37", fontStyle: "italic" }}>
              Mission 2028 — Where Love Unites Empires
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={qrUrl}
              alt="QR Code"
              loading="eager"
              width={120}
              height={120}
              style={{
                border: "2px solid #D4AF37",
                borderRadius: 8,
                display: "block",
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <p style={{ fontSize: 11, color: "#666", marginTop: 6 }}>
              Scan to track order
            </p>
          </div>
        </div>

        {/* Action Buttons — hidden on print */}
        <div
          className="no-print"
          style={{
            display: "flex",
            gap: 12,
            marginTop: 28,
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            onClick={handlePrint}
            data-ocid="invoice.primary_button"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #F0D060)",
              color: "#1a1a1a",
              border: "none",
              borderRadius: "8px",
              padding: "10px 24px",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            🖨️ Print Invoice
          </button>
          <button
            type="button"
            onClick={onClose}
            data-ocid="invoice.secondary_button"
            style={{
              background: "rgba(0,0,0,0.08)",
              color: "#333",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px 24px",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>

      <style>{`
        @media print {
          .invoice-overlay { position: static; background: none; padding: 0; }
          .invoice-content { box-shadow: none; border-radius: 0; }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}
