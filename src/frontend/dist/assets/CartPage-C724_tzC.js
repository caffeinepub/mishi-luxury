import { c as createLucideIcon, u as useMishi, r as reactExports, g as getProductPrice, j as jsxRuntimeExports, S as ShoppingBag } from "./index-Q3wwUWeA.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function CartPage() {
  const {
    cart,
    products,
    silverRate,
    removeFromCart,
    updateCartQty,
    placeOrder,
    navigate,
    isLoggedIn
  } = useMishi();
  const [address, setAddress] = reactExports.useState("");
  const [ordered, setOrdered] = reactExports.useState(false);
  const [orderId, setOrderId] = reactExports.useState(0);
  const enriched = cart.map((ci) => {
    const p = products.find((pr) => pr.id === ci.productId);
    const price = p ? getProductPrice(p, silverRate) : 0;
    return { ...ci, product: p, price };
  });
  const total = enriched.reduce((s, i) => s + i.price * i.quantity, 0);
  const handleOrder = () => {
    if (!isLoggedIn) {
      navigate("login");
      return;
    }
    if (!address.trim()) return;
    const id = placeOrder(address);
    setOrderId(id);
    setOrdered(true);
  };
  if (ordered)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pt-24 flex items-center justify-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-12 text-center max-w-md w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: "👑" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          style: { fontFamily: "Playfair Display, serif", fontSize: "2rem" },
          className: "gold-gradient mb-3",
          children: "Order Placed!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-300 mb-2", children: [
        "Your royal order",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "gold-text font-semibold", children: [
          "#",
          orderId
        ] }),
        " has been received."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          style: {
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1.1rem",
            fontStyle: "italic"
          },
          className: "text-gray-400 mb-8",
          children: "Our artisans have been notified. Your order will be crafted with utmost care."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate("orders"),
          className: "btn-gold w-full py-3 mb-3",
          children: "Track My Order"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate("shop"),
          className: "btn-outline-gold w-full py-3",
          children: "Continue Shopping"
        }
      )
    ] }) });
  if (cart.length === 0)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pt-24 flex items-center justify-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 48, className: "text-gray-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          style: { fontFamily: "Playfair Display, serif" },
          className: "text-2xl text-amber-100 mb-2",
          children: "Your Cart is Empty"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-6", children: "Add royal pieces to your collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate("shop"),
          className: "btn-gold px-8 py-3",
          children: "Explore Collection"
        }
      )
    ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pt-24 px-6 pb-20 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h1",
      {
        style: { fontFamily: "Playfair Display, serif", fontSize: "3rem" },
        className: "gold-gradient mb-8",
        children: "Royal Cart"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2 space-y-4", children: enriched.map(
        (item, i) => item.product && // biome-ignore lint/suspicious/noArrayIndexKey: pre-existing pattern
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.product.imageUrl,
              alt: item.product.name,
              className: "w-20 h-24 object-cover rounded-lg"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                style: {
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.2rem"
                },
                className: "text-amber-100",
                children: item.product.name
              }
            ),
            item.selectedSize && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400", children: [
              "Size: ",
              item.selectedSize
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "gold-text font-semibold mt-1", children: [
              "₹",
              item.price.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center glass-card rounded overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => updateCartQty(
                      item.productId,
                      item.quantity - 1,
                      item.selectedSize
                    ),
                    className: "px-3 py-1 text-yellow-400 hover:bg-yellow-400/10",
                    children: "-"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 text-amber-100 text-sm", children: item.quantity }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => updateCartQty(
                      item.productId,
                      item.quantity + 1,
                      item.selectedSize
                    ),
                    className: "px-3 py-1 text-yellow-400 hover:bg-yellow-400/10",
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => removeFromCart(item.productId, item.selectedSize),
                  className: "text-gray-500 hover:text-red-400 transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "gold-text font-bold", children: [
            "₹",
            (item.price * item.quantity).toLocaleString("en-IN")
          ] }) })
        ] }, i)
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: { fontFamily: "Playfair Display, serif" },
              className: "text-amber-100 text-xl mb-4",
              children: "Order Summary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4", children: [
            enriched.map(
              (item, i) => item.product && // biome-ignore lint/suspicious/noArrayIndexKey: pre-existing pattern
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400", children: [
                  item.product.name,
                  " ×",
                  item.quantity
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-100", children: [
                  "₹",
                  (item.price * item.quantity).toLocaleString("en-IN")
                ] })
              ] }, i)
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "royal-divider" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "gold-text text-lg", children: [
                "₹",
                total.toLocaleString("en-IN")
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: { fontFamily: "Playfair Display, serif" },
              className: "text-amber-100 text-lg mb-3",
              children: "Delivery Address"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: address,
              onChange: (e) => setAddress(e.target.value),
              placeholder: "Enter your royal palace address...",
              rows: 3,
              className: "w-full bg-transparent text-amber-100 text-sm outline-none resize-none placeholder-gray-600",
              style: {
                border: "1px solid rgba(212,175,55,0.3)",
                borderRadius: "8px",
                padding: "10px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleOrder,
              disabled: !address.trim(),
              className: "btn-gold w-full py-3 mt-3 disabled:opacity-50 disabled:cursor-not-allowed",
              children: "Place Royal Order"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  CartPage as default
};
