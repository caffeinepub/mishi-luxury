import { c as createLucideIcon, u as useMishi, r as reactExports, j as jsxRuntimeExports, a as STAGE_LABELS } from "./index-Q3wwUWeA.js";
import { P as Package, S as ShoppingCart, a as Save } from "./shopping-cart-QB85XOdh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function SecondaryAdminPage() {
  const {
    adminLevel,
    navigate,
    orders,
    products,
    silverRate,
    setSilverRate,
    updateProduct,
    approveOrder
  } = useMishi();
  const [rate, setRate] = reactExports.useState(String(silverRate));
  const [tab, setTab] = reactExports.useState(
    "orders"
  );
  const [silverAbout, setSilverAbout] = reactExports.useState(
    () => localStorage.getItem("mishi-cms-silver-about") || "MISHI Sterling Silver — 925 hallmarked, artisan crafted with a 300-year heritage of Indian jewellery making."
  );
  const [categoryTag, setCategoryTag] = reactExports.useState(
    () => localStorage.getItem("mishi-cms-category-tag") || "Where Heritage Meets Hallmark"
  );
  const [cmsSaved, setCmsSaved] = reactExports.useState(false);
  if (adminLevel !== "secondary" && adminLevel !== "primary")
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pt-24 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "text-cyan-400 mx-auto mb-3", size: 40 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "Secondary Admin (Shrimati Ji) access required." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate("vault"),
          className: "btn-gold px-8 py-3 mt-4",
          children: "Login"
        }
      )
    ] }) });
  const pendingOrders = orders.filter((o) => !o.isApproved);
  const saveCms = () => {
    localStorage.setItem("mishi-cms-silver-about", silverAbout);
    localStorage.setItem("mishi-cms-category-tag", categoryTag);
    setCmsSaved(true);
    setTimeout(() => setCmsSaved(false), 3e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pt-24 px-6 pb-20 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "text-cyan-400", size: 28 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            style: {
              fontFamily: "Playfair Display, serif",
              fontSize: "2.2rem"
            },
            className: "gold-gradient",
            children: "Welcome, Shrimati Ji"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: "Inventory Management & Order Approvals" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-6 mb-8", children: [
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 22 }),
        label: "Total Products",
        value: String(products.filter((p) => p.isActive).length)
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 22 }),
        label: "Pending Approval",
        value: String(pendingOrders.length)
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 22 }),
        label: "Live Silver Rate",
        value: `₹${silverRate}/g`
      }
    ].map((stat, i) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: pre-existing pattern
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cyan-400", children: stat.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs uppercase tracking-widest", children: stat.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontFamily: "Playfair Display, serif",
                fontSize: "1.5rem"
              },
              className: "text-blue-100",
              children: stat.value
            }
          )
        ] })
      ] }, i)
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mb-6 flex-wrap", children: [
      ["orders", "Orders"],
      ["products", "Products"],
      ["rate", "Silver Rate"],
      ["cms", "Content"]
    ].map(([k, l]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setTab(k),
        className: `px-5 py-2 text-sm rounded-lg transition-all ${tab === k ? "btn-gold" : "btn-outline-gold"}`,
        children: l
      },
      k
    )) }),
    tab === "orders" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-8 text-center text-gray-400", children: "No orders yet" }),
      [...orders].reverse().map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-blue-100 font-semibold", children: [
            "Order #",
            o.id
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-sm", children: [
            new Date(o.placedAt).toLocaleDateString("en-IN"),
            " ",
            " ·  ",
            STAGE_LABELS[o.stage]
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-cyan-400 font-bold", children: [
            "₹",
            o.totalAmount.toLocaleString("en-IN")
          ] }),
          !o.isApproved ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => approveOrder(o.id),
              className: "btn-gold text-xs py-1.5 px-4",
              children: "Approve"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-green-400 border border-green-700 px-3 py-1 rounded-full", children: "Approved ✓" })
        ] })
      ] }) }, o.id))
    ] }),
    tab === "products" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 flex gap-4 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: p.imageUrl,
          alt: p.name,
          className: "w-14 h-14 object-cover rounded flex-shrink-0"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400", children: [
          p.category === "silver" ? "Sterling Silver" : "Ethnic Wear",
          " ",
          " ·  Stock: ",
          p.stock
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => updateProduct(p.id, { stock: p.stock + 5 }),
            className: "text-xs btn-outline-gold py-1 px-3",
            children: "+5 Stock"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => updateProduct(p.id, { isActive: !p.isActive }),
            className: `text-xs px-3 py-1 rounded border ${p.isActive ? "border-red-500 text-red-400" : "border-green-500 text-green-400"}`,
            children: p.isActive ? "Deactivate" : "Activate"
          }
        )
      ] })
    ] }, p.id)) }),
    tab === "rate" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-8 max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          style: { fontFamily: "Playfair Display, serif" },
          className: "text-xl text-blue-100 mb-2",
          children: "Update Silver Rate"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mb-6", children: "This rate is used to calculate final price for all Sterling Silver ornaments." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "label",
        {
          htmlFor: "silver-rate",
          className: "text-xs text-gray-400 uppercase tracking-widest block mb-2",
          children: "Rate per gram (₹)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "silver-rate",
          value: rate,
          onChange: (e) => setRate(e.target.value),
          type: "number",
          className: "w-full bg-transparent text-cyan-400 text-3xl font-bold outline-none p-3 text-center",
          style: {
            border: "1px solid rgba(14,116,144,0.4)",
            borderRadius: "8px"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setSilverRate(Number.parseInt(rate) || silverRate),
          className: "btn-gold w-full py-3 mt-4",
          children: "Update Live Silver Rate"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-600 mt-3 text-center", children: [
        "Current: ₹",
        silverRate,
        "/gram"
      ] })
    ] }),
    tab === "cms" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          style: { fontFamily: "Playfair Display, serif" },
          className: "text-lg text-blue-100 mb-4",
          children: "Content Management"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "silver-about",
              className: "text-xs text-gray-400 uppercase tracking-widest block mb-2",
              children: "About MISHI Silver"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              id: "silver-about",
              "data-ocid": "cms.silver_about.textarea",
              value: silverAbout,
              onChange: (e) => setSilverAbout(e.target.value),
              rows: 3,
              className: "w-full bg-transparent text-blue-100 outline-none text-sm p-3 resize-none",
              style: {
                border: "1px solid rgba(14,116,144,0.3)",
                borderRadius: "8px"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "category-tag",
              className: "text-xs text-gray-400 uppercase tracking-widest block mb-2",
              children: "Category Tagline"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "category-tag",
              "data-ocid": "cms.category_tag.input",
              type: "text",
              value: categoryTag,
              onChange: (e) => setCategoryTag(e.target.value),
              className: "w-full bg-transparent text-blue-100 outline-none text-sm p-3",
              style: {
                border: "1px solid rgba(14,116,144,0.3)",
                borderRadius: "8px"
              }
            }
          )
        ] })
      ] }),
      cmsSaved && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          "data-ocid": "cms.success_state",
          className: "text-green-400 text-sm mt-4 text-center",
          children: "✓ Changes saved and published!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "cms.save.primary_button",
          onClick: saveCms,
          className: "btn-gold w-full py-3 mt-4 flex items-center justify-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 16 }),
            " Save Changes"
          ]
        }
      )
    ] }) })
  ] });
}
export {
  SecondaryAdminPage as default
};
