import { u as useMishi, j as jsxRuntimeExports, X } from "./index-CtulIDhY.js";
function InvoiceModal({ orderId, onClose }) {
  const { orders, products, phone } = useMishi();
  const order = orders.find((o) => o.id === orderId);
  if (!order) return null;
  const invoiceNumber = `INV-${orderId}-${order.placedAt}`;
  const orderUrl = `https://mishiluxury.app/orders/${orderId}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(orderUrl)}`;
  const enrichedItems = order.items.map((ci) => {
    const p = products.find((pr) => pr.id === ci.productId);
    return { ...ci, product: p, subtotal: ((p == null ? void 0 : p.price) ?? 0) * ci.quantity };
  });
  const handlePrint = () => window.print();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "invoice-overlay",
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflowY: "auto"
      },
      "data-ocid": "invoice.modal",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "invoice-content",
            style: {
              background: "#fff",
              color: "#1a1a1a",
              borderRadius: "12px",
              padding: "40px",
              maxWidth: "700px",
              width: "100%",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "no-print",
                  "data-ocid": "invoice.close_button",
                  style: {
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
                    cursor: "pointer"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    textAlign: "center",
                    marginBottom: 32,
                    borderBottom: "2px solid #D4AF37",
                    paddingBottom: 20
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: "/assets/uploads/Snapchat-1589822426-4-1.jpg",
                        alt: "MISHI",
                        loading: "eager",
                        fetchPriority: "high",
                        style: {
                          height: 60,
                          objectFit: "contain",
                          mixBlendMode: "multiply",
                          marginBottom: 8
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h1",
                      {
                        style: {
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 28,
                          color: "#4a2070",
                          margin: 0
                        },
                        children: "MISHI LUXURY"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontFamily: "'Cormorant Garamond', serif",
                          color: "#D4AF37",
                          fontSize: 13,
                          marginTop: 4,
                          letterSpacing: "0.15em"
                        },
                        children: "Mission 2028 — Where Love Unites Empires"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 24,
                    flexWrap: "wrap",
                    gap: 12
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontWeight: 700, fontSize: 18, color: "#1a1a1a" }, children: "INVOICE" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#666", fontSize: 13, marginTop: 4 }, children: invoiceNumber }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "#666", fontSize: 13 }, children: [
                        "Date:",
                        " ",
                        new Date(order.placedAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "right" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontWeight: 600, fontSize: 13, color: "#1a1a1a" }, children: "Bill To:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#444", fontSize: 13 }, children: phone || "Royal Customer" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#444", fontSize: 12, maxWidth: 200 }, children: order.shippingAddress })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "table",
                {
                  style: {
                    width: "100%",
                    borderCollapse: "collapse",
                    marginBottom: 24
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "tr",
                      {
                        style: {
                          background: "#f0e8ff",
                          borderBottom: "2px solid #D4AF37"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "th",
                            {
                              style: {
                                padding: "10px 12px",
                                textAlign: "left",
                                fontSize: 13,
                                fontWeight: 700
                              },
                              children: "Item"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "th",
                            {
                              style: {
                                padding: "10px 12px",
                                textAlign: "center",
                                fontSize: 13,
                                fontWeight: 700
                              },
                              children: "Qty"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "th",
                            {
                              style: {
                                padding: "10px 12px",
                                textAlign: "right",
                                fontSize: 13,
                                fontWeight: 700
                              },
                              children: "Unit Price"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "th",
                            {
                              style: {
                                padding: "10px 12px",
                                textAlign: "right",
                                fontSize: 13,
                                fontWeight: 700
                              },
                              children: "Subtotal"
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: enrichedItems.map((item, i) => {
                      var _a, _b;
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "tr",
                        {
                          style: {
                            borderBottom: "1px solid #eee",
                            background: i % 2 === 0 ? "#fff" : "#faf8ff"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "10px 12px", fontSize: 13 }, children: ((_a = item.product) == null ? void 0 : _a.name) || `Product #${item.productId}` }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "td",
                              {
                                style: {
                                  padding: "10px 12px",
                                  fontSize: 13,
                                  textAlign: "center"
                                },
                                children: item.quantity
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "td",
                              {
                                style: {
                                  padding: "10px 12px",
                                  fontSize: 13,
                                  textAlign: "right"
                                },
                                children: [
                                  "₹",
                                  (((_b = item.product) == null ? void 0 : _b.price) ?? 0).toLocaleString("en-IN")
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "td",
                              {
                                style: {
                                  padding: "10px 12px",
                                  fontSize: 13,
                                  textAlign: "right"
                                },
                                children: [
                                  "₹",
                                  item.subtotal.toLocaleString("en-IN")
                                ]
                              }
                            )
                          ]
                        },
                        i
                      );
                    }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tfoot", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "tr",
                      {
                        style: { borderTop: "2px solid #D4AF37", background: "#f0e8ff" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "td",
                            {
                              colSpan: 3,
                              style: {
                                padding: "12px",
                                fontWeight: 700,
                                fontSize: 15,
                                color: "#4a2070"
                              },
                              children: "Total Amount"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "td",
                            {
                              style: {
                                padding: "12px",
                                fontWeight: 700,
                                fontSize: 15,
                                color: "#4a2070",
                                textAlign: "right"
                              },
                              children: [
                                "₹",
                                order.totalAmount.toLocaleString("en-IN")
                              ]
                            }
                          )
                        ]
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 16
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 12, color: "#666", marginBottom: 8 }, children: "Order Status" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontWeight: 600, fontSize: 14, color: "#4a2070" }, children: [
                        "#",
                        orderId,
                        " —",
                        " ",
                        order.stage === "palaceDelivery" ? "✅ Delivered" : `🔄 ${order.stage}`
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 11, color: "#999", marginTop: 20 }, children: "Thank you for choosing MISHI Luxury" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 11, color: "#D4AF37", fontStyle: "italic" }, children: "Mission 2028 — Where Love Unites Empires" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: qrUrl,
                          alt: "QR Code",
                          loading: "eager",
                          width: 120,
                          height: 120,
                          style: {
                            border: "2px solid #D4AF37",
                            borderRadius: 8,
                            display: "block"
                          },
                          onError: (e) => {
                            e.target.style.display = "none";
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 11, color: "#666", marginTop: 6 }, children: "Scan to track order" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "no-print",
                  style: {
                    display: "flex",
                    gap: 12,
                    marginTop: 28,
                    justifyContent: "center"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: handlePrint,
                        "data-ocid": "invoice.primary_button",
                        style: {
                          background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                          color: "#1a1a1a",
                          border: "none",
                          borderRadius: "8px",
                          padding: "10px 24px",
                          fontWeight: 700,
                          fontSize: 14,
                          cursor: "pointer"
                        },
                        children: "🖨️ Print Invoice"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: onClose,
                        "data-ocid": "invoice.secondary_button",
                        style: {
                          background: "rgba(0,0,0,0.08)",
                          color: "#333",
                          border: "1px solid #ccc",
                          borderRadius: "8px",
                          padding: "10px 24px",
                          fontWeight: 600,
                          fontSize: 14,
                          cursor: "pointer"
                        },
                        children: "Close"
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media print {
          .invoice-overlay { position: static; background: none; padding: 0; }
          .invoice-content { box-shadow: none; border-radius: 0; }
          .no-print { display: none !important; }
        }
      ` })
      ]
    }
  );
}
export {
  InvoiceModal as I
};
