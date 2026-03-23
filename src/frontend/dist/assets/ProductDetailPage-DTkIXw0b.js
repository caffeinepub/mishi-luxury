import { c as createLucideIcon, u as useMishi, r as reactExports, j as jsxRuntimeExports, g as getProductPrice, S as ShoppingBag, H as Heart } from "./index-Q3wwUWeA.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
function ProductDetailPage({
  productId
}) {
  const {
    products,
    silverRate,
    addToCart,
    toggleWishlist,
    wishlist,
    navigate
  } = useMishi();
  const p = products.find((pr) => pr.id === productId);
  const [qty, setQty] = reactExports.useState(1);
  const [size, setSize] = reactExports.useState();
  const [added, setAdded] = reactExports.useState(false);
  if (!p)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pt-24 text-center text-gray-400", children: "Product not found" });
  const price = getProductPrice(p, silverRate);
  const wished = wishlist.includes(p.id);
  const handleAdd = () => {
    addToCart(p.id, qty, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pt-24 px-6 pb-20 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => navigate("shop"),
        className: "flex items-center gap-2 text-gray-400 hover:text-yellow-400 mb-8 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 }),
          " Back to Shop"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "glass-card overflow-hidden",
          style: { aspectRatio: "4/5" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.imageUrl,
              alt: p.name,
              className: "w-full h-full object-cover",
              loading: "lazy",
              decoding: "async"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.4em] text-yellow-400 uppercase mb-3", children: p.category === "silver" ? "Sterling Silver · 925 Hallmarked" : "Royal Ethnic Wear" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            style: {
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)"
            },
            className: "text-amber-100 mb-4",
            children: p.name
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "royal-divider" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            style: {
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.15rem",
              lineHeight: 1.8
            },
            className: "text-gray-300 mb-6",
            children: p.description
          }
        ),
        p.category === "silver" && p.silverWeight && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 uppercase tracking-widest mb-2", children: "Price Breakdown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Base Craftsmanship" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-100", children: [
                "₹",
                (p.basePrice || 0).toLocaleString("en-IN")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400", children: [
                p.silverWeight,
                "g × ₹",
                silverRate,
                " (Live Rate)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-100", children: [
                "₹",
                (p.silverWeight * silverRate).toLocaleString("en-IN")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "royal-divider" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text font-semibold", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "gold-text font-bold text-lg", children: [
                "₹",
                price.toLocaleString("en-IN")
              ] })
            ] })
          ] })
        ] }),
        p.category === "ethnic" && p.sizes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 uppercase tracking-widest mb-3", children: "Select Size" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: p.sizes.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setSize(s.size),
              disabled: s.stock === 0,
              className: `px-4 py-2 text-sm border rounded-md transition-all ${size === s.size ? "border-yellow-400 text-yellow-400 bg-yellow-400/10" : s.stock === 0 ? "border-gray-700 text-gray-600 cursor-not-allowed" : "border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"}`,
              children: s.size
            },
            s.size
          )) })
        ] }),
        p.category !== "ethnic" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl gold-text font-bold mb-6", children: [
          "₹",
          price.toLocaleString("en-IN")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center glass-card rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setQty(Math.max(1, qty - 1)),
                className: "px-4 py-2 text-yellow-400 hover:bg-yellow-400/10 transition-colors",
                children: "-"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-2 text-amber-100", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setQty(qty + 1),
                className: "px-4 py-2 text-yellow-400 hover:bg-yellow-400/10 transition-colors",
                children: "+"
              }
            )
          ] }),
          p.category === "ethnic" && p.sizes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl gold-text font-bold", children: [
            "₹",
            price.toLocaleString("en-IN")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleAdd,
              className: "flex-1 btn-gold flex items-center justify-center gap-2 py-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 18 }),
                added ? "Added! ✓" : "Add to Royal Cart"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => toggleWishlist(p.id),
              className: "w-12 h-12 flex items-center justify-center glass-card hover:border-red-400 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Heart,
                {
                  size: 20,
                  fill: wished ? "#ef4444" : "none",
                  color: wished ? "#ef4444" : "#D4AF37"
                }
              )
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  ProductDetailPage as default
};
