import { u as useMishi, r as reactExports, j as jsxRuntimeExports, g as getProductPrice } from "./index-Q3wwUWeA.js";
function ShopPage() {
  const {
    products,
    silverRate,
    addToCart,
    toggleWishlist,
    wishlist,
    navigate
  } = useMishi();
  const [cat, setCat] = reactExports.useState("all");
  const filtered = products.filter(
    (p) => p.isActive && (cat === "all" || p.category === cat)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pt-24 px-6 pb-20 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.4em] text-yellow-400 uppercase mb-2", children: "The Royal Treasury" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          style: {
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)"
          },
          className: "gold-gradient",
          children: "Our Collections"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "royal-divider w-48 mx-auto mt-4" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-4 mb-10", children: ["all", "silver", "ethnic"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setCat(c),
        className: `px-6 py-2 text-sm tracking-widest uppercase transition-all rounded-full ${cat === c ? "btn-gold" : "btn-outline-gold"}`,
        children: c === "all" ? "All Pieces" : c === "silver" ? "Sterling Silver" : "Ethnic Wear"
      },
      c
    )) }),
    (cat === "all" || cat === "silver") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs tracking-widest text-gray-400 uppercase", children: [
        "Live Silver Rate ·",
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "gold-text font-semibold", children: [
        "₹",
        silverRate,
        "/gram"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 ml-2", children: "· Prices update in real-time" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8", children: filtered.map((p) => {
      const price = getProductPrice(p, silverRate);
      const wished = wishlist.includes(p.id);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass-card overflow-hidden group",
          style: {
            boxShadow: "0 4px 20px rgba(80,200,200,0.12), inset 0 0 0 1px rgba(255,255,255,0.9), inset 0 2px 20px rgba(255,255,255,0.5)",
            borderRadius: "16px",
            background: "#ffffff"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "relative overflow-hidden cursor-pointer w-full",
                style: { aspectRatio: "4/5", display: "block" },
                onClick: () => navigate(`product-${p.id}`),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: p.imageUrl,
                      alt: p.name,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                      loading: "lazy",
                      decoding: "async"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        toggleWishlist(p.id);
                      },
                      className: "absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center",
                      style: {
                        background: "rgba(10,10,15,0.8)",
                        border: "1px solid rgba(212,175,55,0.5)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: wished ? "❤️" : "🤍" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute bottom-0 left-0 right-0 px-4 py-3",
                      style: {
                        background: "linear-gradient(to top, rgba(10,10,15,0.95), transparent)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-widest text-yellow-400 uppercase", children: p.category === "silver" ? "Sterling Silver · 925" : "Royal Ethnic Wear" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  style: {
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.3rem"
                  },
                  className: "text-amber-100 mb-1 cursor-pointer hover:text-yellow-400",
                  onClick: () => navigate(`product-${p.id}`),
                  onKeyDown: (e) => e.key === "Enter" && navigate(`product-${p.id}`),
                  children: p.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mb-3 line-clamp-2", children: p.description }),
              p.category === "silver" && p.silverWeight && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 mb-2", children: [
                p.silverWeight,
                "g × ₹",
                silverRate,
                " + base =",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#3d0070", fontWeight: 700 }, children: [
                  "₹",
                  price.toLocaleString("en-IN")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "gold-text font-bold text-lg",
                    style: {
                      color: "#3d0070",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      WebkitTextFillColor: "#3d0070"
                    },
                    children: [
                      "₹",
                      price.toLocaleString("en-IN")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => addToCart(p.id, 1),
                    className: "btn-gold text-xs py-2 px-4",
                    children: "Add to Cart"
                  }
                )
              ] })
            ] })
          ]
        },
        p.id
      );
    }) })
  ] });
}
export {
  ShopPage as default
};
