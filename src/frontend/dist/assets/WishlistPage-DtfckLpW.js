import { u as useMishi, j as jsxRuntimeExports, H as Heart, g as getProductPrice, S as ShoppingBag } from "./index-CtulIDhY.js";
function WishlistPage() {
  const {
    wishlist,
    products,
    silverRate,
    toggleWishlist,
    addToCart,
    navigate
  } = useMishi();
  const items = products.filter((p) => wishlist.includes(p.id));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pt-24 px-6 pb-20 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.4em] text-yellow-400 uppercase mb-2", children: "Your Curated Collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "h1",
        {
          style: {
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 6vw, 3.5rem)"
          },
          className: "gold-gradient flex items-center justify-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { fill: "#D4AF37", color: "#D4AF37", size: 40 }),
            " My Royal Favorites"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "royal-divider w-48 mx-auto mt-4" })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-12 text-center max-w-md mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 48, className: "text-gray-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          style: { fontFamily: "Playfair Display, serif" },
          className: "text-xl text-amber-100 mb-2",
          children: "Your favorites await"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-6", children: "Save pieces that speak to your royal soul" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate("shop"),
          className: "btn-gold px-8 py-3",
          children: "Browse Collection"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: items.map((p) => {
      const price = getProductPrice(p, silverRate);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card overflow-hidden group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative overflow-hidden cursor-pointer",
            style: { aspectRatio: "4/5" },
            onClick: () => navigate(`product-${p.id}`),
            onKeyDown: (e) => e.key === "Enter" && navigate(`product-${p.id}`),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: p.imageUrl,
                  alt: p.name,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 16, fill: "#ef4444", color: "#ef4444" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-widest text-yellow-400 uppercase", children: p.category === "silver" ? "Sterling Silver" : "Ethnic Wear" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.2rem"
              },
              className: "text-amber-100 my-1",
              children: p.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "gold-text font-bold mb-3", children: [
            "₹",
            price.toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => addToCart(p.id, 1),
              className: "w-full btn-outline-gold text-xs py-2 flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 14 }),
                " Add to Cart"
              ]
            }
          )
        ] })
      ] }, p.id);
    }) })
  ] });
}
export {
  WishlistPage as default
};
