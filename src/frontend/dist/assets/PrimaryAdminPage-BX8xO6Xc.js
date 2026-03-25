import { c as createLucideIcon, u as useMishi, r as reactExports, j as jsxRuntimeExports, b as STAGE_LABELS } from "./index-CtulIDhY.js";
import { S as ShoppingCart, P as Package, a as Save } from "./shopping-cart-I_E7Jko3.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
];
const CirclePlus = createLucideIcon("circle-plus", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
];
const Crown = createLucideIcon("crown", __iconNode$2);
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
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
function PrimaryAdminPage() {
  const {
    adminLevel,
    navigate,
    orders,
    products,
    silverRate,
    setSilverRate,
    addProduct,
    updateProduct,
    advanceOrderStage,
    approveOrder
  } = useMishi();
  const [tab, setTab] = reactExports.useState("analytics");
  const [rate, setRate] = reactExports.useState(String(silverRate));
  const [newProduct, setNewProduct] = reactExports.useState({
    name: "",
    description: "",
    category: "silver",
    basePrice: "",
    silverWeight: "",
    imageUrl: "",
    stock: "10"
  });
  const [sizes, setSizes] = reactExports.useState("");
  const [cmsTagline, setCmsTagline] = reactExports.useState(
    () => localStorage.getItem("mishi-cms-tagline") || "Where Royalty Meets Craftsmanship"
  );
  const [cmsSubTagline, setCmsSubTagline] = reactExports.useState(
    () => localStorage.getItem("mishi-cms-subtagline") || "Sterling Silver Ornaments & Royal Ethnic Wear — crafted for those who wear their legacy"
  );
  const [cmsAbout, setCmsAbout] = reactExports.useState(
    () => localStorage.getItem("mishi-cms-about") || "Born from an unwavering dream, MISHI is more than a brand — it is a dynasty in the making. Founded on the twin pillars of Purity and Heritage."
  );
  const [cmsContact, setCmsContact] = reactExports.useState(
    () => localStorage.getItem("mishi-cms-contact") || "mishiofficial1701@gmail.com · Instagram: @mishiluxury"
  );
  const [cmsPrimaryCode, setCmsPrimaryCode] = reactExports.useState(
    () => localStorage.getItem("mishi-cms-primary-code") || "PYARADUDU"
  );
  const [cmsSecondaryCode, setCmsSecondaryCode] = reactExports.useState(
    () => localStorage.getItem("mishi-cms-secondary-code") || "SHRIMATIJI"
  );
  const [cmsSaved, setCmsSaved] = reactExports.useState(false);
  if (adminLevel !== "primary")
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pt-24 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "text-cyan-400 mx-auto mb-3", size: 40 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "Primary Admin access required." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate("vault"),
          className: "btn-gold px-8 py-3 mt-4",
          children: "Login as Admin"
        }
      )
    ] }) });
  const approved = orders.filter((o) => o.isApproved).reduce((s, o) => s + o.totalAmount, 0);
  const pending = orders.filter((o) => !o.isApproved).length;
  const delivered = orders.filter((o) => o.stage === "palaceDelivery").length;
  const handleAddProduct = () => {
    const sizeList = newProduct.category === "ethnic" ? sizes.split(",").map((s) => ({ size: s.trim(), stock: 5 })).filter((s) => s.size) : [];
    addProduct({
      name: newProduct.name,
      description: newProduct.description,
      category: newProduct.category,
      price: Number.parseInt(newProduct.basePrice) || 0,
      basePrice: Number.parseInt(newProduct.basePrice) || void 0,
      silverWeight: newProduct.category === "silver" ? Number.parseInt(newProduct.silverWeight) || void 0 : void 0,
      sizes: sizeList,
      imageUrl: newProduct.imageUrl || `https://picsum.photos/seed/mishiadmin${Date.now()}/400/500`,
      stock: Number.parseInt(newProduct.stock) || 10,
      isActive: true
    });
    setNewProduct({
      name: "",
      description: "",
      category: "silver",
      basePrice: "",
      silverWeight: "",
      imageUrl: "",
      stock: "10"
    });
    setSizes("");
    alert("Product added!");
  };
  const saveAllCms = () => {
    localStorage.setItem("mishi-cms-tagline", cmsTagline);
    localStorage.setItem("mishi-cms-subtagline", cmsSubTagline);
    localStorage.setItem("mishi-cms-about", cmsAbout);
    localStorage.setItem("mishi-cms-contact", cmsContact);
    localStorage.setItem("mishi-cms-primary-code", cmsPrimaryCode);
    localStorage.setItem("mishi-cms-secondary-code", cmsSecondaryCode);
    setCmsSaved(true);
    setTimeout(() => setCmsSaved(false), 3e3);
  };
  const tabs = [
    { key: "analytics", label: "Analytics", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { size: 16 }) },
    { key: "orders", label: "Orders", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 16 }) },
    { key: "products", label: "Products", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 16 }) },
    { key: "add", label: "Add Product", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { size: 16 }) },
    { key: "cms", label: "CMS", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 16 }) }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pt-24 px-6 pb-20 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "text-cyan-400", size: 32 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            style: {
              fontFamily: "Playfair Display, serif",
              fontSize: "2.5rem"
            },
            className: "gold-gradient",
            children: "Primary Admin"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: "Full command over MISHI Luxury" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 mb-6 flex flex-wrap items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-400 tracking-widest uppercase", children: "Live Silver Rate:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: rate,
          onChange: (e) => setRate(e.target.value),
          className: "bg-transparent border-b border-cyan-400 text-cyan-400 font-bold text-xl outline-none w-24 text-center"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: "₹/gram" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setSilverRate(Number.parseInt(rate) || silverRate),
          className: "btn-gold text-sm py-2 px-5",
          children: "Update Rate"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500", children: "Prices across all Sterling Silver items update immediately" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-6 flex-wrap", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setTab(t.key),
        className: `flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all ${tab === t.key ? "btn-gold" : "btn-outline-gold"}`,
        children: [
          t.icon,
          t.label
        ]
      },
      t.key
    )) }),
    tab === "analytics" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 24 }),
          label: "Total Revenue",
          value: `₹${approved.toLocaleString("en-IN")}`,
          sub: "Approved orders"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 24 }),
          label: "Total Orders",
          value: String(orders.length),
          sub: "All time"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 24 }),
          label: "Pending Approval",
          value: String(pending),
          sub: "Needs action"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 24 }),
          label: "Delivered",
          value: String(delivered),
          sub: "Palace Delivery"
        }
      ].map((stat, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: pre-existing pattern
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cyan-400 mb-3", children: stat.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs uppercase tracking-widest", children: stat.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontFamily: "Playfair Display, serif",
                fontSize: "2rem"
              },
              className: "text-blue-100 my-1",
              children: stat.value
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-xs", children: stat.sub })
        ] }, i)
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "text-blue-100 font-semibold mb-4",
            style: { fontFamily: "Playfair Display, serif" },
            children: "Product Overview"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-sm", children: [
          "Total Products:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-400", children: products.length }),
          " ",
          " ·  Active:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: products.filter((p) => p.isActive).length }),
          " ",
          " ·  Silver Items:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-400", children: products.filter((p) => p.category === "silver").length }),
          " ",
          " ·  Ethnic Wear:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400", children: products.filter((p) => p.category === "ethnic").length })
        ] })
      ] })
    ] }),
    tab === "orders" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-8 text-center text-gray-400", children: "No orders yet" }),
      [...orders].reverse().map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-blue-100 font-semibold", children: [
              "Order #",
              o.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: new Date(o.placedAt).toLocaleDateString("en-IN") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 text-sm mt-1", children: [
              "Ship to: ",
              o.shippingAddress
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-cyan-400 font-bold text-lg", children: [
              "₹",
              o.totalAmount.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-xs px-2 py-1 rounded mt-1 inline-block ${o.isApproved ? "bg-green-900/50 text-green-400" : "bg-yellow-900/30 text-yellow-400"}`,
                children: o.isApproved ? "Approved" : "Pending"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-400 mr-2 self-center", children: [
            "Stage:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-400", children: STAGE_LABELS[o.stage] })
          ] }),
          !o.isApproved && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => approveOrder(o.id),
              className: "btn-gold text-xs py-1 px-3",
              children: "Approve"
            }
          ),
          o.stage !== "palaceDelivery" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => advanceOrderStage(o.id),
              className: "btn-outline-gold text-xs py-1 px-3",
              children: "Advance Stage"
            }
          )
        ] })
      ] }, o.id))
    ] }),
    tab === "products" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 flex gap-4 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: p.imageUrl,
          alt: p.name,
          className: "w-16 h-16 object-cover rounded-lg flex-shrink-0"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100 font-medium", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-400", children: [
          p.category === "silver" ? "Sterling Silver" : "Ethnic Wear",
          " ",
          " ·  Stock: ",
          p.stock
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => updateProduct(p.id, { isActive: !p.isActive }),
          className: `text-xs px-3 py-1 rounded border ${p.isActive ? "border-red-500 text-red-400 hover:bg-red-900/30" : "border-green-500 text-green-400 hover:bg-green-900/30"}`,
          children: p.isActive ? "Deactivate" : "Activate"
        }
      ) })
    ] }, p.id)) }),
    tab === "add" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-8 max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          style: { fontFamily: "Playfair Display, serif" },
          className: "text-xl text-blue-100 mb-6",
          children: "Add New Product"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        [
          {
            label: "Product Name",
            key: "name",
            type: "text",
            placeholder: "e.g. Royal Silver Bangle"
          },
          {
            label: "Description",
            key: "description",
            type: "text",
            placeholder: "Describe the piece..."
          },
          {
            label: "Base Price (₹)",
            key: "basePrice",
            type: "number",
            placeholder: "e.g. 5000"
          },
          {
            label: "Image URL",
            key: "imageUrl",
            type: "text",
            placeholder: "https://... (optional)"
          },
          {
            label: "Stock",
            key: "stock",
            type: "number",
            placeholder: "10"
          }
        ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: f.key,
              className: "text-xs text-gray-400 uppercase tracking-widest block mb-1",
              children: f.label
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: f.key,
              value: newProduct[f.key],
              onChange: (e) => setNewProduct({ ...newProduct, [f.key]: e.target.value }),
              type: f.type,
              placeholder: f.placeholder,
              className: "w-full bg-transparent text-blue-100 outline-none text-sm p-3",
              style: {
                border: "1px solid rgba(14,116,144,0.3)",
                borderRadius: "8px"
              }
            }
          )
        ] }, f.key)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "add-category",
              className: "text-xs text-gray-400 uppercase tracking-widest block mb-1",
              children: "Category"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "add-category",
              value: newProduct.category,
              onChange: (e) => setNewProduct({
                ...newProduct,
                category: e.target.value
              }),
              className: "w-full bg-gray-900 text-blue-100 outline-none text-sm p-3 rounded-lg",
              style: { border: "1px solid rgba(14,116,144,0.3)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "silver", children: "Sterling Silver Ornaments" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ethnic", children: "Royal Ethnic Wear" })
              ]
            }
          )
        ] }),
        newProduct.category === "silver" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "silver-weight",
              className: "text-xs text-gray-400 uppercase tracking-widest block mb-1",
              children: "Silver Weight (grams)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "silver-weight",
              value: newProduct.silverWeight,
              onChange: (e) => setNewProduct({
                ...newProduct,
                silverWeight: e.target.value
              }),
              type: "number",
              placeholder: "e.g. 15",
              className: "w-full bg-transparent text-blue-100 outline-none text-sm p-3",
              style: {
                border: "1px solid rgba(14,116,144,0.3)",
                borderRadius: "8px"
              }
            }
          )
        ] }),
        newProduct.category === "ethnic" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "sizes-input",
              className: "text-xs text-gray-400 uppercase tracking-widest block mb-1",
              children: "Sizes (comma-separated)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "sizes-input",
              value: sizes,
              onChange: (e) => setSizes(e.target.value),
              placeholder: "XS, S, M, L, XL",
              className: "w-full bg-transparent text-blue-100 outline-none text-sm p-3",
              style: {
                border: "1px solid rgba(14,116,144,0.3)",
                borderRadius: "8px"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: handleAddProduct,
            className: "btn-gold w-full py-3 mt-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { size: 16, className: "inline mr-2" }),
              "Add Product"
            ]
          }
        )
      ] })
    ] }),
    tab === "cms" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-2xl", children: [
      cmsSaved && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "cms.success_state",
          className: "glass-card p-4 text-center",
          style: { borderColor: "rgba(34,197,94,0.5)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-400 font-medium", children: "✓ Changes saved and published!" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            style: { fontFamily: "Playfair Display, serif" },
            className: "text-lg text-blue-100 mb-1",
            children: "Website Content"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-xs mb-5", children: "Edit homepage text and brand messaging" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "cms-tagline",
                className: "text-xs text-gray-400 uppercase tracking-widest block mb-2",
                children: "Hero Main Tagline"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "cms-tagline",
                "data-ocid": "cms.tagline.input",
                type: "text",
                value: cmsTagline,
                onChange: (e) => setCmsTagline(e.target.value),
                className: "w-full bg-transparent text-blue-100 outline-none text-sm p-3",
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
                htmlFor: "cms-subtagline",
                className: "text-xs text-gray-400 uppercase tracking-widest block mb-2",
                children: "Hero Sub-Tagline"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "cms-subtagline",
                "data-ocid": "cms.subtagline.textarea",
                value: cmsSubTagline,
                onChange: (e) => setCmsSubTagline(e.target.value),
                rows: 2,
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
                htmlFor: "cms-about",
                className: "text-xs text-gray-400 uppercase tracking-widest block mb-2",
                children: "About Us Text"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "cms-about",
                "data-ocid": "cms.about.textarea",
                value: cmsAbout,
                onChange: (e) => setCmsAbout(e.target.value),
                rows: 4,
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
                htmlFor: "cms-contact",
                className: "text-xs text-gray-400 uppercase tracking-widest block mb-2",
                children: "Contact Info"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "cms-contact",
                "data-ocid": "cms.contact.input",
                type: "text",
                value: cmsContact,
                onChange: (e) => setCmsContact(e.target.value),
                className: "w-full bg-transparent text-blue-100 outline-none text-sm p-3",
                style: {
                  border: "1px solid rgba(14,116,144,0.3)",
                  borderRadius: "8px"
                }
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            style: { fontFamily: "Playfair Display, serif" },
            className: "text-lg text-blue-100 mb-1",
            children: "Admin Code Management"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-xs mb-5", children: "Update vault access codes. Keep these secret." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "cms-primary-code",
                className: "text-xs text-gray-400 uppercase tracking-widest block mb-2",
                children: "Primary Admin Code"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "cms-primary-code",
                "data-ocid": "cms.primary_code.input",
                type: "password",
                value: cmsPrimaryCode,
                onChange: (e) => setCmsPrimaryCode(e.target.value),
                className: "w-full bg-transparent text-blue-100 outline-none text-sm p-3",
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
                htmlFor: "cms-secondary-code",
                className: "text-xs text-gray-400 uppercase tracking-widest block mb-2",
                children: "Secondary Admin Code (Shrimati Ji)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "cms-secondary-code",
                "data-ocid": "cms.secondary_code.input",
                type: "password",
                value: cmsSecondaryCode,
                onChange: (e) => setCmsSecondaryCode(e.target.value),
                className: "w-full bg-transparent text-blue-100 outline-none text-sm p-3",
                style: {
                  border: "1px solid rgba(14,116,144,0.3)",
                  borderRadius: "8px"
                }
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "cms.save.primary_button",
          onClick: saveAllCms,
          className: "btn-gold w-full py-3 flex items-center justify-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 16 }),
            " Global Save & Publish All Changes"
          ]
        }
      )
    ] })
  ] });
}
export {
  PrimaryAdminPage as default
};
