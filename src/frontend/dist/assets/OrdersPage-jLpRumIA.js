import { u as useMishi, j as jsxRuntimeExports, b as STAGE_ICONS, a as STAGE_LABELS } from "./index-Q3wwUWeA.js";
const STAGES = [
  "orderPlaced",
  "artisanCrafting",
  "qualityCheck",
  "royalDispatch",
  "palaceDelivery"
];
function OrdersPage() {
  const { orders, navigate, isLoggedIn } = useMishi();
  if (!isLoggedIn)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pt-24 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-4", children: "Please login to view your orders" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate("login"),
          className: "btn-gold px-8 py-3",
          children: "Login"
        }
      )
    ] }) });
  if (orders.length === 0)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pt-24 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "👑" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          style: { fontFamily: "Playfair Display, serif" },
          className: "text-2xl text-amber-100 mb-3",
          children: "No Royal Orders Yet"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-6", children: "Your regal shopping journey awaits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate("shop"),
          className: "btn-gold px-8 py-3",
          children: "Shop Now"
        }
      )
    ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pt-24 px-6 pb-20 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.4em] text-yellow-400 uppercase mb-2", children: "Royal Tracking" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h1",
      {
        style: {
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(2rem, 6vw, 3.5rem)"
        },
        className: "gold-gradient mb-10",
        children: "My Orders"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: [...orders].reverse().map((order) => {
      const stageIdx = STAGES.indexOf(order.stage);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h3",
              {
                style: { fontFamily: "Playfair Display, serif" },
                className: "text-amber-100 text-xl",
                children: [
                  "Order #",
                  order.id
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mt-1", children: new Date(order.placedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric"
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "gold-text font-bold text-lg", children: [
              "₹",
              order.totalAmount.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-xs px-3 py-1 rounded-full mt-1 inline-block ${order.isApproved ? "bg-green-900/50 text-green-400 border border-green-700" : "bg-yellow-900/30 text-yellow-400 border border-yellow-700"}`,
                children: order.isApproved ? "Approved" : "Pending Approval"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-6 left-0 right-0 h-0.5",
              style: { background: "rgba(212,175,55,0.2)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-6 left-0 h-0.5 transition-all duration-1000",
              style: {
                width: `${stageIdx / (STAGES.length - 1) * 100}%`,
                background: "linear-gradient(90deg, #D4AF37, #F0D060)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-between", children: STAGES.map((stage, idx) => {
            const done = idx < stageIdx;
            const active = idx === stageIdx;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col items-center gap-2",
                style: { width: "20%" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-12 h-12 rounded-full flex items-center justify-center text-xl border-2 relative z-10 transition-all ${done ? "border-green-400 bg-green-900/50" : active ? "border-yellow-400 bg-yellow-400/20" : "border-gray-700 bg-gray-900"}`,
                      style: active ? { boxShadow: "0 0 20px rgba(212,175,55,0.5)" } : {},
                      children: STAGE_ICONS[stage]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `text-center text-xs leading-tight ${done ? "text-green-400" : active ? "text-yellow-400 font-semibold" : "text-gray-600"}`,
                      style: { maxWidth: "70px" },
                      children: STAGE_LABELS[stage]
                    }
                  ),
                  done && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-green-500", children: "✓" })
                ]
              },
              stage
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-6 p-3 rounded-lg text-center text-sm",
            style: {
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Current Status: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "gold-text font-semibold", children: [
                STAGE_ICONS[order.stage],
                " ",
                STAGE_LABELS[order.stage]
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 mt-3", children: [
          "📦 ",
          order.shippingAddress
        ] })
      ] }, order.id);
    }) })
  ] });
}
export {
  OrdersPage as default
};
