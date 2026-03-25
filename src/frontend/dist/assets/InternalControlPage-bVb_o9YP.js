import { r as reactExports, u as useMishi, j as jsxRuntimeExports, b as STAGE_LABELS } from "./index-CtulIDhY.js";
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = reactExports.useState(
    () => window.innerWidth < breakpoint
  );
  reactExports.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);
  return isMobile;
}
const CO_FOUNDER_GMAIL = "kshivani05231@gmail.com";
const SUPER_ADMIN_GMAIL = "mishiofficial1701@gmail.com";
const s = {
  root: {
    minHeight: "100vh",
    background: "#0f1117",
    color: "#e2e8f0",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "14px"
  },
  loginWrap: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  loginBox: {
    background: "#1a1d23",
    border: "1px solid #2d3748",
    borderRadius: "8px",
    padding: "40px",
    width: "380px",
    maxWidth: "calc(100vw - 32px)"
  },
  title: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#e2e8f0",
    marginBottom: "4px",
    letterSpacing: "0.02em"
  },
  subtitle: {
    fontSize: "12px",
    color: "#718096",
    marginBottom: "28px",
    textTransform: "uppercase",
    letterSpacing: "0.1em"
  },
  label: {
    display: "block",
    fontSize: "11px",
    color: "#718096",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "6px"
  },
  input: {
    width: "100%",
    background: "#2d3748",
    border: "1px solid #4a5568",
    borderRadius: "6px",
    padding: "10px 12px",
    color: "#e2e8f0",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box"
  },
  inputFocus: { border: "1px solid #3b82f6" },
  btn: {
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: "0.02em"
  },
  btnSm: {
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "5px 12px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap"
  },
  btnGhost: {
    background: "transparent",
    color: "#718096",
    border: "1px solid #2d3748",
    borderRadius: "6px",
    padding: "9px 18px",
    fontSize: "13px",
    cursor: "pointer"
  },
  btnDanger: {
    background: "#c53030",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: "0.02em"
  },
  btnDangerSm: {
    background: "#c53030",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "5px 12px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap"
  },
  btnRestoreSm: {
    background: "#4a5568",
    color: "#e2e8f0",
    border: "none",
    borderRadius: "4px",
    padding: "5px 12px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap"
  },
  error: {
    color: "#fc8181",
    fontSize: "12px",
    marginTop: "8px",
    background: "rgba(252,129,129,0.08)",
    border: "1px solid rgba(252,129,129,0.2)",
    borderRadius: "4px",
    padding: "8px 12px"
  },
  success: {
    color: "#68d391",
    fontSize: "12px",
    marginTop: "8px",
    background: "rgba(104,211,145,0.08)",
    border: "1px solid rgba(104,211,145,0.2)",
    borderRadius: "4px",
    padding: "8px 12px"
  },
  header: {
    background: "#1a1d23",
    borderBottom: "1px solid #2d3748",
    padding: "8px 16px",
    minHeight: "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "8px",
    position: "sticky",
    top: 0,
    zIndex: 100
  },
  headerTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#e2e8f0",
    letterSpacing: "0.03em"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px"
  },
  th: {
    background: "#1a1d23",
    color: "#718096",
    textAlign: "left",
    padding: "10px 14px",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    borderBottom: "1px solid #2d3748",
    whiteSpace: "nowrap"
  },
  td: {
    padding: "10px 14px",
    borderBottom: "1px solid #232730",
    color: "#e2e8f0",
    verticalAlign: "middle"
  },
  tdAlt: {
    padding: "10px 14px",
    borderBottom: "1px solid #232730",
    color: "#e2e8f0",
    background: "#181b22",
    verticalAlign: "middle"
  },
  badge: (status) => {
    const colors = {
      orderPlaced: ["#90cdf4", "rgba(144,205,244,0.12)"],
      artisanCrafting: ["#f6ad55", "rgba(246,173,85,0.12)"],
      qualityCheck: ["#b794f4", "rgba(183,148,244,0.12)"],
      royalDispatch: ["#68d391", "rgba(104,211,145,0.12)"],
      palaceDelivery: ["#68d391", "rgba(104,211,145,0.12)"]
    };
    const [color, bg] = colors[status] || ["#e2e8f0", "transparent"];
    return {
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: "9999px",
      fontSize: "11px",
      fontWeight: 600,
      color,
      background: bg,
      border: `1px solid ${color}33`,
      whiteSpace: "nowrap"
    };
  }
};
function DarkInput(props) {
  const [focused, setFocused] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      ...props,
      style: {
        ...s.input,
        ...focused ? s.inputFocus : {},
        ...props.style || {}
      },
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    }
  );
}
function DarkTextarea(props) {
  const [focused, setFocused] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      ...props,
      style: {
        ...s.input,
        resize: "vertical",
        minHeight: "80px",
        ...focused ? s.inputFocus : {},
        ...props.style || {}
      },
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    }
  );
}
function DarkSelect(props) {
  const [focused, setFocused] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "select",
    {
      ...props,
      style: {
        ...s.input,
        cursor: "pointer",
        ...focused ? s.inputFocus : {},
        ...props.style || {}
      },
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    }
  );
}
function RoleBadge({ role }) {
  const configs = {
    founder: {
      label: "♛ Founder",
      color: "#d4af37",
      bg: "rgba(100,0,150,0.18)"
    },
    coFounder: {
      label: "✦ Co-Founder",
      color: "#2ab8c8",
      bg: "rgba(42,184,200,0.12)"
    },
    superAdmin: {
      label: "Super Admin",
      color: "#d4af37",
      bg: "rgba(212,175,55,0.12)"
    },
    manager: {
      label: "Manager",
      color: "#f6ad55",
      bg: "rgba(246,173,85,0.12)"
    },
    viewer: { label: "Viewer", color: "#718096", bg: "rgba(113,128,150,0.12)" }
  };
  const c = configs[role] ?? configs.viewer;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      style: {
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: "9999px",
        fontSize: "11px",
        fontWeight: 600,
        color: c.color,
        background: c.bg,
        border: `1px solid ${c.color}55`,
        whiteSpace: "nowrap"
      },
      children: c.label
    }
  );
}
function ProductListTab() {
  const { products, updateProduct } = useMishi();
  const [editingId, setEditingId] = reactExports.useState(null);
  const [editName, setEditName] = reactExports.useState("");
  const [editPrice, setEditPrice] = reactExports.useState("");
  const [saveMsg, setSaveMsg] = reactExports.useState(false);
  const [imgEditId, setImgEditId] = reactExports.useState(null);
  const [imgPreview, setImgPreview] = reactExports.useState("");
  const imgDrop = reactExports.useRef(null);
  const startEdit = (p) => {
    setEditingId(p.id);
    setEditName(p.name);
    setEditPrice(String(p.price));
  };
  const cancelEdit = () => setEditingId(null);
  const saveEdit = (id) => {
    const price = Number(editPrice);
    if (!editName.trim() || !price || price <= 0) return;
    updateProduct(id, { name: editName.trim(), price, basePrice: price });
    setEditingId(null);
  };
  const handleUpdateDashboard = () => {
    setSaveMsg(true);
    setTimeout(() => setSaveMsg(false), 3e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "product_list.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        style: {
          fontSize: "16px",
          fontWeight: 700,
          marginBottom: "20px",
          color: "#e2e8f0"
        },
        children: "Product List"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: s.table, "data-ocid": "product_list.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Image" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Product Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Price (₹)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Edit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Update Image" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-ocid": `product_list.item.${i + 1}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.imageUrl || "/assets/generated/product-chandbali.dim_400x500.jpg",
              alt: p.name,
              style: {
                width: "48px",
                height: "48px",
                objectFit: "cover",
                borderRadius: "6px",
                border: "1px solid #2d3748"
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: editingId === p.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: editName,
              onChange: (e) => setEditName(e.target.value),
              style: {
                ...s.input,
                width: "180px",
                padding: "6px 10px"
              },
              "data-ocid": "product_list.name.input"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600 }, children: p.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: editingId === p.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              min: "0",
              value: editPrice,
              onChange: (e) => setEditPrice(e.target.value),
              style: {
                ...s.input,
                width: "120px",
                padding: "6px 10px"
              },
              "data-ocid": "product_list.price.input"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            "₹",
            p.price.toLocaleString("en-IN")
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: p.stock > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                display: "inline-block",
                padding: "2px 10px",
                borderRadius: "9999px",
                fontSize: "11px",
                fontWeight: 700,
                color: "#fff",
                background: "#22c55e"
              },
              children: "In Stock"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                display: "inline-block",
                padding: "2px 10px",
                borderRadius: "9999px",
                fontSize: "11px",
                fontWeight: 700,
                color: "#fff",
                background: "#ef4444"
              },
              children: "Sold Out"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: editingId === p.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "6px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                style: { ...s.btnSm, background: "#16a34a" },
                "data-ocid": `product_list.save_button.${i + 1}`,
                onClick: () => saveEdit(p.id),
                children: "Save"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                style: s.btnRestoreSm,
                "data-ocid": `product_list.cancel_button.${i + 1}`,
                onClick: cancelEdit,
                children: "Cancel"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              style: s.btnSm,
              "data-ocid": `product_list.edit_button.${i + 1}`,
              onClick: () => startEdit(p),
              children: "Edit"
            }
          ) })
        ] }, p.id)),
        products.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "td",
          {
            colSpan: 5,
            style: { ...s.td, textAlign: "center", color: "#4a5568" },
            "data-ocid": "product_list.empty_state",
            children: "No products found."
          }
        ) })
      ] })
    ] }) }),
    imgEditId !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.8)",
          zIndex: 1e3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        "data-ocid": "product_list.modal",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              background: "#1a1d23",
              border: "1px solid #2d3748",
              borderRadius: "10px",
              padding: "28px",
              width: 360,
              maxWidth: "calc(100vw - 32px)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  style: {
                    color: "#e2e8f0",
                    fontSize: "15px",
                    fontWeight: 700,
                    marginBottom: "16px"
                  },
                  children: "Update Product Image"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": "product_list.dropzone",
                  role: "button",
                  tabIndex: 0,
                  style: {
                    border: "2px dashed #4a5568",
                    borderRadius: "8px",
                    padding: "24px",
                    textAlign: "center",
                    cursor: "pointer",
                    marginBottom: "14px",
                    background: "rgba(255,255,255,0.02)"
                  },
                  onClick: () => {
                    var _a;
                    return (_a = imgDrop.current) == null ? void 0 : _a.click();
                  },
                  onKeyDown: (e) => {
                    var _a;
                    if (e.key === "Enter" || e.key === " ")
                      (_a = imgDrop.current) == null ? void 0 : _a.click();
                  },
                  onDragOver: (e) => e.preventDefault(),
                  onDrop: (e) => {
                    var _a;
                    e.preventDefault();
                    const file = (_a = e.dataTransfer.files) == null ? void 0 : _a[0];
                    if (file == null ? void 0 : file.type.startsWith("image/")) {
                      const reader = new FileReader();
                      reader.onload = (ev) => {
                        var _a2;
                        return setImgPreview((_a2 = ev.target) == null ? void 0 : _a2.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#718096", fontSize: "13px" }, children: "📁 Drop image here or click to browse" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        ref: imgDrop,
                        type: "file",
                        accept: "image/*",
                        style: { display: "none" },
                        onChange: (e) => {
                          var _a;
                          const file = (_a = e.target.files) == null ? void 0 : _a[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (ev) => {
                              var _a2;
                              return setImgPreview((_a2 = ev.target) == null ? void 0 : _a2.result);
                            };
                            reader.readAsDataURL(file);
                          }
                        }
                      }
                    )
                  ]
                }
              ),
              imgPreview && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: imgPreview,
                  alt: "preview",
                  style: {
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    marginBottom: "14px"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    style: s.btn,
                    "data-ocid": "product_list.save_button",
                    onClick: () => {
                      if (imgPreview && imgEditId !== null) {
                        updateProduct(imgEditId, { imageUrl: imgPreview });
                        setImgEditId(null);
                        setImgPreview("");
                      }
                    },
                    children: "Save Image"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    style: s.btnGhost,
                    "data-ocid": "product_list.cancel_button",
                    onClick: () => {
                      setImgEditId(null);
                      setImgPreview("");
                    },
                    children: "Cancel"
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "32px" }, children: [
      saveMsg && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: { ...s.success, marginBottom: "12px", fontSize: "14px" },
          "data-ocid": "product_list.success_state",
          children: "✓ All changes saved to live site!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "product_list.primary_button",
          onClick: handleUpdateDashboard,
          style: {
            width: "100%",
            background: "#16a34a",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "14px",
            fontSize: "16px",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.02em"
          },
          children: "🚀 Update Dashboard"
        }
      )
    ] })
  ] });
}
function AddJewelryTab({ onLog }) {
  const { addProduct } = useMishi();
  const [form, setForm] = reactExports.useState({
    name: "",
    category: "silver",
    price: "",
    stock: "",
    imageUrl: "",
    description: ""
  });
  const [status, setStatus] = reactExports.useState("idle");
  const patch = (k, v) => setForm((prev) => ({ ...prev, [k]: v }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.stock) {
      setStatus("error");
      return;
    }
    addProduct({
      name: form.name,
      description: form.description,
      category: form.category,
      price: Number(form.price),
      basePrice: Number(form.price),
      silverWeight: form.category === "silver" ? 10 : void 0,
      sizes: [],
      imageUrl: form.imageUrl || "/assets/generated/product-chandbali.dim_400x500.jpg",
      stock: Number(form.stock),
      isActive: true
    });
    onLog(`Product added: ${form.name}`);
    setStatus("success");
    setForm({
      name: "",
      category: "silver",
      price: "",
      stock: "",
      imageUrl: "",
      description: ""
    });
    setTimeout(() => setStatus("idle"), 3e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      style: { maxWidth: 520 },
      "data-ocid": "add_jewelry.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            style: {
              fontSize: "16px",
              fontWeight: 700,
              marginBottom: "20px",
              color: "#e2e8f0"
            },
            children: "Add New Jewelry / Product"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "14px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "aj-name", style: s.label, children: "Product Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DarkInput,
            {
              id: "aj-name",
              "data-ocid": "add_jewelry.name.input",
              type: "text",
              value: form.name,
              onChange: (e) => patch("name", e.target.value),
              placeholder: "e.g. Royal Chandbali Earrings",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "14px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "aj-category", style: s.label, children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DarkSelect,
            {
              id: "aj-category",
              "data-ocid": "add_jewelry.category.select",
              value: form.category,
              onChange: (e) => patch("category", e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "silver", children: "Necklace" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "silver", children: "Rings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "silver", children: "Bangles" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "silver", children: "Earrings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "silver", children: "Bracelet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "silver", children: "Anklet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "silver", children: "Pendant" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "silver", children: "Maang Tikka" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "silver", children: "Sterling Silver" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ethnic", children: "Royal Ethnic Wear" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: window.innerWidth < 640 ? "1fr" : "1fr 1fr",
              gap: "14px",
              marginBottom: "14px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "aj-price", style: s.label, children: "Base Price (₹)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DarkInput,
                  {
                    id: "aj-price",
                    "data-ocid": "add_jewelry.price.input",
                    type: "number",
                    value: form.price,
                    onChange: (e) => patch("price", e.target.value),
                    placeholder: "e.g. 6000",
                    min: "0",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "aj-stock", style: s.label, children: "Stock Quantity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DarkInput,
                  {
                    id: "aj-stock",
                    "data-ocid": "add_jewelry.stock.input",
                    type: "number",
                    value: form.stock,
                    onChange: (e) => patch("stock", e.target.value),
                    placeholder: "e.g. 20",
                    min: "0",
                    required: true
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "14px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "aj-image", style: s.label, children: "Image URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "add_jewelry.dropzone",
              role: "button",
              tabIndex: 0,
              style: {
                border: "2px dashed #4a5568",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                cursor: "pointer",
                background: "rgba(255,255,255,0.02)"
              },
              onClick: () => {
                var _a;
                return (_a = document.getElementById("aj-img-inp")) == null ? void 0 : _a.click();
              },
              onKeyDown: (e) => {
                var _a;
                if (e.key === "Enter" || e.key === " ")
                  (_a = document.getElementById("aj-img-inp")) == null ? void 0 : _a.click();
              },
              onDragOver: (e) => e.preventDefault(),
              onDrop: (e) => {
                var _a;
                e.preventDefault();
                const file = (_a = e.dataTransfer.files) == null ? void 0 : _a[0];
                if (file == null ? void 0 : file.type.startsWith("image/")) {
                  const reader = new FileReader();
                  reader.onload = (ev) => {
                    var _a2;
                    return patch("imageUrl", (_a2 = ev.target) == null ? void 0 : _a2.result);
                  };
                  reader.readAsDataURL(file);
                }
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#718096", fontSize: "13px" }, children: "📁 Drop images here or click to browse (supports multiple)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "aj-img-inp",
                    type: "file",
                    accept: "image/*",
                    multiple: true,
                    style: { display: "none" },
                    "data-ocid": "add_jewelry.upload_button",
                    onChange: (e) => {
                      var _a;
                      const file = (_a = e.target.files) == null ? void 0 : _a[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          var _a2;
                          return patch("imageUrl", (_a2 = ev.target) == null ? void 0 : _a2.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }
                  }
                )
              ]
            }
          ),
          form.imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: form.imageUrl,
              alt: "Preview",
              style: {
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "6px",
                border: "1px solid #2d3748",
                marginTop: "8px"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "20px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "aj-desc", style: s.label, children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DarkTextarea,
            {
              id: "aj-desc",
              "data-ocid": "add_jewelry.description.textarea",
              value: form.description,
              onChange: (e) => patch("description", e.target.value),
              placeholder: "Product description...",
              rows: 3
            }
          )
        ] }),
        status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.error, "data-ocid": "add_jewelry.error_state", children: "✗ Please fill in all required fields." }),
        status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.success, "data-ocid": "add_jewelry.success_state", children: "✓ Product added successfully." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            style: { ...s.btn, marginTop: "12px" },
            "data-ocid": "add_jewelry.submit_button",
            children: "Add Product"
          }
        )
      ]
    }
  );
}
function ChangePricesTab({ onLog }) {
  const { products, updateProduct } = useMishi();
  const [newPrices, setNewPrices] = reactExports.useState({});
  const [rowStatus, setRowStatus] = reactExports.useState({});
  const [saveAllStatus, setSaveAllStatus] = reactExports.useState(
    "idle"
  );
  const handleSaveAll = () => {
    let updated = false;
    for (const p of products) {
      const val = Number(newPrices[p.id]);
      if (val && val > 0) {
        updateProduct(p.id, { price: val, basePrice: val });
        onLog(`Price updated: ${p.name} -> ₹${val}`);
        updated = true;
      }
    }
    if (updated) {
      setNewPrices({});
      setSaveAllStatus("success");
      setTimeout(() => setSaveAllStatus("idle"), 3e3);
    }
  };
  const handleUpdate = (id) => {
    const val = Number(newPrices[id]);
    if (!val || val <= 0) {
      setRowStatus((prev) => ({ ...prev, [id]: "error" }));
      return;
    }
    updateProduct(id, { price: val, basePrice: val });
    onLog(`Price updated: Product #${id}`);
    setRowStatus((prev) => ({ ...prev, [id]: "success" }));
    setNewPrices((prev) => ({ ...prev, [id]: "" }));
    setTimeout(
      () => setRowStatus((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      }),
      2500
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "change_prices.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        style: {
          fontSize: "16px",
          fontWeight: 700,
          marginBottom: "20px",
          color: "#e2e8f0"
        },
        children: "Change Prices"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: s.table, "data-ocid": "change_prices.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Product Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Current Price (₹)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "New Price (₹)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Edit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Update Image" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-ocid": `change_prices.row.${i + 1}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                color: p.category === "silver" ? "#90cdf4" : "#f6ad55"
              },
              children: p.category === "silver" ? "Sterling Silver" : "Ethnic Wear"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            "₹",
            p.price.toLocaleString("en-IN")
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                "aria-label": `New price for ${p.name}`,
                "data-ocid": "change_prices.new_price.input",
                type: "number",
                min: "0",
                value: newPrices[p.id] ?? "",
                onChange: (e) => setNewPrices((prev) => ({
                  ...prev,
                  [p.id]: e.target.value
                })),
                placeholder: "Enter new price",
                style: {
                  ...s.input,
                  width: "140px",
                  padding: "6px 10px",
                  border: "1px solid #4a5568",
                  background: "#1a1d23"
                }
              }
            ),
            rowStatus[p.id] === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  color: "#68d391",
                  fontSize: "11px",
                  marginLeft: "8px"
                },
                "data-ocid": "change_prices.success_state",
                children: "✓ Updated"
              }
            ),
            rowStatus[p.id] === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  color: "#fc8181",
                  fontSize: "11px",
                  marginLeft: "8px"
                },
                "data-ocid": "change_prices.error_state",
                children: "✗ Invalid"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              style: s.btnSm,
              "data-ocid": `change_prices.save_button.${i + 1}`,
              onClick: () => handleUpdate(p.id),
              children: "Update"
            }
          ) })
        ] }, p.id)),
        products.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "td",
          {
            colSpan: 5,
            style: { ...s.td, textAlign: "center", color: "#4a5568" },
            "data-ocid": "change_prices.empty_state",
            children: "No products found."
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "20px" }, children: [
      saveAllStatus === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: { ...s.success, marginBottom: "10px" },
          "data-ocid": "change_prices.save_all.success_state",
          children: "✓ All prices saved to live site!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "change_prices.save_all.primary_button",
          onClick: handleSaveAll,
          style: {
            width: "100%",
            background: "#16a34a",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "14px",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            minHeight: "48px"
          },
          children: "💾 Save All Prices"
        }
      )
    ] })
  ] });
}
function ViewOrdersTab() {
  const { orders, products, approveOrder } = useMishi();
  const getItemsSummary = (items) => items.map((ci) => {
    const p = products.find((pr) => pr.id === ci.productId);
    return p ? `${p.name} ×${ci.quantity}` : `#${ci.productId} ×${ci.quantity}`;
  }).join(", ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "view_orders.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        style: {
          fontSize: "16px",
          fontWeight: 700,
          marginBottom: "20px",
          color: "#e2e8f0"
        },
        children: "Orders & Financials"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: s.table, "data-ocid": "view_orders.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Order ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Items" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Total (₹)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Approved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Edit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Update Image" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        [...orders].reverse().map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-ocid": `view_orders.row.${i + 1}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontFamily: "monospace", color: "#90cdf4" }, children: [
            "#",
            o.id
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              style: {
                ...i % 2 === 0 ? s.td : s.tdAlt,
                maxWidth: "220px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: getItemsSummary(o.items)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            "₹",
            o.totalAmount.toLocaleString("en-IN")
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s.badge(o.stage), children: STAGE_LABELS[o.stage] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: o.isApproved ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#68d391", fontSize: "12px" }, children: "✓ Yes" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#718096", fontSize: "12px" }, children: "Pending" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: !o.isApproved ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              style: s.btnSm,
              "data-ocid": `view_orders.confirm_button.${i + 1}`,
              onClick: () => approveOrder(o.id),
              children: "Approve"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "12px", color: "#4a5568" }, children: "—" }) })
        ] }, o.id)),
        orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "td",
          {
            colSpan: 6,
            style: { ...s.td, textAlign: "center", color: "#4a5568" },
            "data-ocid": "view_orders.empty_state",
            children: "No orders placed yet."
          }
        ) })
      ] })
    ] }) })
  ] });
}
function TeamTab({
  teamMembers,
  onAddMember,
  onRemoveMember,
  onRevokeMember,
  onRestoreMember,
  onLog,
  currentSession,
  onRevokeCurrentUser
}) {
  const [form, setForm] = reactExports.useState({
    name: "",
    gmail: "",
    role: "manager"
  });
  const [formError, setFormError] = reactExports.useState("");
  const [formSuccess, setFormSuccess] = reactExports.useState("");
  const addMember = (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");
    if (!form.name.trim()) {
      setFormError("Name is required.");
      return;
    }
    if (!form.gmail.includes("@")) {
      setFormError("Enter a valid Gmail address.");
      return;
    }
    if (form.gmail.toLowerCase() === SUPER_ADMIN_GMAIL) {
      setFormError("Cannot add Super Admin as team member.");
      return;
    }
    if (form.gmail.toLowerCase() === CO_FOUNDER_GMAIL) {
      setFormError("Co-Founder is a permanent role and cannot be re-added.");
      return;
    }
    if (teamMembers.some(
      (m) => m.gmail.toLowerCase() === form.gmail.toLowerCase()
    )) {
      setFormError("This Gmail is already in the team.");
      return;
    }
    const member = {
      gmail: form.gmail.toLowerCase(),
      name: form.name.trim(),
      role: form.role,
      addedAt: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN"),
      isRevoked: false
    };
    onAddMember(member);
    onLog(
      `Team member added: ${member.name} (${member.gmail}) as ${member.role}`
    );
    setFormSuccess(`${member.name} added successfully.`);
    setForm({ name: "", gmail: "", role: "manager" });
    setTimeout(() => setFormSuccess(""), 3e3);
  };
  const revokeAccess = (gmail) => {
    onRevokeMember(gmail);
    const member = teamMembers.find((m) => m.gmail === gmail);
    if (member) onLog(`Access revoked: ${member.name} (${member.gmail})`);
    if ((currentSession == null ? void 0 : currentSession.gmail) === gmail) onRevokeCurrentUser(gmail);
  };
  const restoreAccess = (gmail) => {
    onRestoreMember(gmail);
    const member = teamMembers.find((m) => m.gmail === gmail);
    if (member) onLog(`Access restored: ${member.name} (${member.gmail})`);
  };
  const deleteMember = (gmail) => {
    const member = teamMembers.find((m) => m.gmail === gmail);
    onRemoveMember(gmail);
    if (member) onLog(`Team member removed: ${member.name} (${member.gmail})`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "team.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        style: {
          fontSize: "16px",
          fontWeight: 700,
          marginBottom: "4px",
          color: "#e2e8f0"
        },
        children: "Team Management"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "12px", color: "#718096", marginBottom: "24px" }, children: "Only Super Admin can add or remove team members." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "#1a1d23",
          border: "1px solid #2d3748",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "28px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontSize: "13px",
                fontWeight: 600,
                color: "#e2e8f0",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.06em"
              },
              children: "Add Team Member"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: addMember, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 160px auto",
                  gap: "12px",
                  alignItems: "flex-end"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "team-name", style: s.label, children: "Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DarkInput,
                      {
                        id: "team-name",
                        "data-ocid": "team.name.input",
                        type: "text",
                        value: form.name,
                        onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
                        placeholder: "Full name",
                        required: true
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "team-gmail", style: s.label, children: "Gmail" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DarkInput,
                      {
                        id: "team-gmail",
                        "data-ocid": "team.gmail.input",
                        type: "email",
                        value: form.gmail,
                        onChange: (e) => setForm((f) => ({ ...f, gmail: e.target.value })),
                        placeholder: "example@gmail.com",
                        required: true
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "team-role", style: s.label, children: "Role" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      DarkSelect,
                      {
                        id: "team-role",
                        "data-ocid": "team.role.select",
                        value: form.role,
                        onChange: (e) => setForm((f) => ({
                          ...f,
                          role: e.target.value
                        })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "manager", children: "Manager" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "viewer", children: "Viewer" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      style: { ...s.btn, padding: "10px 16px", whiteSpace: "nowrap" },
                      "data-ocid": "team.add_member.button",
                      children: "Add Member"
                    }
                  ) })
                ]
              }
            ),
            formError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: { ...s.error, marginTop: "10px" },
                "data-ocid": "team.form.error_state",
                children: [
                  "✗ ",
                  formError
                ]
              }
            ),
            formSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: { ...s.success, marginTop: "10px" },
                "data-ocid": "team.form.success_state",
                children: [
                  "✓ ",
                  formSuccess
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto", marginBottom: "32px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: s.table, "data-ocid": "team.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Gmail" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Added" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        teamMembers.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "td",
          {
            colSpan: 6,
            style: {
              ...s.td,
              textAlign: "center",
              color: "#4a5568",
              padding: "24px"
            },
            "data-ocid": "team.empty_state",
            children: "No team members added yet."
          }
        ) }),
        teamMembers.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-ocid": `team.row.${i + 1}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: [
            m.name,
            m.isPermanent && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  marginLeft: 6,
                  fontSize: 10,
                  color: "#2ab8c8",
                  fontWeight: 700
                },
                children: "👑 Permanent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                fontFamily: "monospace",
                fontSize: "12px",
                color: "#90cdf4"
              },
              children: m.gmail
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { role: m.role }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              style: {
                ...i % 2 === 0 ? s.td : s.tdAlt,
                color: "#718096"
              },
              children: m.addedAt
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                display: "inline-block",
                padding: "2px 8px",
                borderRadius: "9999px",
                fontSize: "11px",
                fontWeight: 600,
                color: m.isRevoked ? "#fc8181" : "#68d391",
                background: m.isRevoked ? "rgba(252,129,129,0.12)" : "rgba(104,211,145,0.12)",
                border: `1px solid ${m.isRevoked ? "#fc818155" : "#68d39155"}`
              },
              children: m.isRevoked ? "Revoked" : "Active"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: m.isPermanent && (currentSession == null ? void 0 : currentSession.role) !== "founder" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                fontSize: 11,
                color: "#4a5568",
                fontStyle: "italic"
              },
              children: "Permanent — Co-Founder"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "6px" }, children: [
            m.isRevoked ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                style: s.btnRestoreSm,
                "data-ocid": `team.restore_button.${i + 1}`,
                onClick: () => restoreAccess(m.gmail),
                children: "Restore Access"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                style: s.btnDangerSm,
                "data-ocid": `team.revoke_button.${i + 1}`,
                onClick: () => revokeAccess(m.gmail),
                children: "Revoke Access"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                style: {
                  ...s.btnDangerSm,
                  background: "#2d3748",
                  color: "#fc8181"
                },
                "data-ocid": `team.delete_button.${i + 1}`,
                onClick: () => deleteMember(m.gmail),
                children: "Delete"
              }
            )
          ] }) })
        ] }, m.gmail))
      ] })
    ] }) })
  ] });
}
function SettingsTab({
  emergencyPin,
  setEmergencyPin,
  onForceLogoutAll,
  onMasterPasswordChange,
  masterPassword
}) {
  const [pinInput, setPinInput] = reactExports.useState(emergencyPin);
  const [pinStatus, setPinStatus] = reactExports.useState(
    "idle"
  );
  const [pinError, setPinError] = reactExports.useState("");
  const [confirmForceLogout, setConfirmForceLogout] = reactExports.useState(false);
  const [pwForm, setPwForm] = reactExports.useState({ current: "", newPw: "", confirm: "" });
  const [pwStatus, setPwStatus] = reactExports.useState(
    "idle"
  );
  const [pwError, setPwError] = reactExports.useState("");
  const handleChangePw = (e) => {
    e.preventDefault();
    setPwError("");
    if (pwForm.current !== masterPassword) {
      setPwError("Current password is incorrect.");
      setPwStatus("error");
      return;
    }
    if (pwForm.newPw.length < 6) {
      setPwError("New password must be at least 6 characters.");
      setPwStatus("error");
      return;
    }
    if (pwForm.newPw !== pwForm.confirm) {
      setPwError("New passwords do not match.");
      setPwStatus("error");
      return;
    }
    onMasterPasswordChange(pwForm.newPw);
    setPwStatus("success");
    setPwForm({ current: "", newPw: "", confirm: "" });
    setTimeout(() => setPwStatus("idle"), 4e3);
  };
  const savePin = (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pinInput)) {
      setPinError("PIN must be exactly 6 digits.");
      setPinStatus("error");
      return;
    }
    setEmergencyPin(pinInput);
    setPinStatus("success");
    setPinError("");
    setTimeout(() => setPinStatus("idle"), 3e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "settings.panel", style: { maxWidth: 600 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        style: {
          fontSize: "16px",
          fontWeight: 700,
          marginBottom: "24px",
          color: "#e2e8f0"
        },
        children: "System Settings"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "#1a1d23",
          border: "1px solid #2d3748",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontSize: "13px",
                fontWeight: 600,
                color: "#718096",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "12px"
              },
              children: "🔒 Super Admin Identity"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  fontSize: "11px",
                  color: "#718096",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em"
                },
                children: "Gmail:"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "code",
              {
                style: {
                  background: "#2d3748",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  fontSize: "13px",
                  color: "#d4af37",
                  fontFamily: "monospace"
                },
                children: SUPER_ADMIN_GMAIL
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "11px", color: "#718096" }, children: "(read-only)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "11px", color: "#4a5568", marginTop: "8px" }, children: "This is the permanent Super Admin account. It cannot be changed or removed." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "#1a1d23",
          border: "1px solid #2d3748",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontSize: "13px",
                fontWeight: 600,
                color: "#718096",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "4px"
              },
              children: "Emergency Reset Code"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "12px", color: "#4a5568", marginBottom: "16px" }, children: "Set a backup 6-digit PIN for emergency access situations." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: savePin,
              style: { display: "flex", gap: "12px", alignItems: "flex-end" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "settings-pin", style: s.label, children: "6-Digit PIN" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    DarkInput,
                    {
                      id: "settings-pin",
                      "data-ocid": "settings.emergency_pin.input",
                      type: "text",
                      inputMode: "numeric",
                      maxLength: 6,
                      value: pinInput,
                      onChange: (e) => setPinInput(e.target.value.replace(/\D/g, "").slice(0, 6)),
                      placeholder: "e.g. 123456"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    style: { ...s.btn, padding: "10px 16px" },
                    "data-ocid": "settings.save_pin.button",
                    children: "Save PIN"
                  }
                )
              ]
            }
          ),
          pinStatus === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.error, "data-ocid": "settings.pin.error_state", children: [
            "✗ ",
            pinError
          ] }),
          pinStatus === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.success, "data-ocid": "settings.pin.success_state", children: "✓ Emergency PIN updated." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "#1a1d23",
          border: "1px solid #2d3748",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontSize: "13px",
                fontWeight: 600,
                color: "#718096",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "4px"
              },
              children: "🔑 Change Master Password"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "12px", color: "#4a5568", marginBottom: "16px" }, children: "Update the Super Admin login password. Takes effect immediately." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleChangePw, style: { maxWidth: 400 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "12px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "settings-pw-current", style: s.label, children: "Current Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DarkInput,
                {
                  id: "settings-pw-current",
                  "data-ocid": "settings.pw_current.input",
                  type: "password",
                  value: pwForm.current,
                  onChange: (e) => setPwForm((f) => ({ ...f, current: e.target.value })),
                  placeholder: "Current master password",
                  autoComplete: "current-password",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "12px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "settings-pw-new", style: s.label, children: "New Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DarkInput,
                {
                  id: "settings-pw-new",
                  "data-ocid": "settings.pw_new.input",
                  type: "password",
                  value: pwForm.newPw,
                  onChange: (e) => setPwForm((f) => ({ ...f, newPw: e.target.value })),
                  placeholder: "Min. 6 characters",
                  autoComplete: "new-password",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "16px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "settings-pw-confirm", style: s.label, children: "Confirm New Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                DarkInput,
                {
                  id: "settings-pw-confirm",
                  "data-ocid": "settings.pw_confirm.input",
                  type: "password",
                  value: pwForm.confirm,
                  onChange: (e) => setPwForm((f) => ({ ...f, confirm: e.target.value })),
                  placeholder: "Re-enter new password",
                  autoComplete: "new-password",
                  required: true
                }
              )
            ] }),
            pwStatus === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.error, "data-ocid": "settings.pw.error_state", children: [
              "✗ ",
              pwError
            ] }),
            pwStatus === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.success, "data-ocid": "settings.pw.success_state", children: "✓ Master password updated successfully." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                style: { ...s.btn, marginTop: "12px" },
                "data-ocid": "settings.pw_change.submit_button",
                children: "Update Password"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "rgba(197,48,48,0.06)",
          border: "1px solid #c53030",
          borderRadius: "8px",
          padding: "20px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontSize: "13px",
                fontWeight: 600,
                color: "#fc8181",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "4px"
              },
              children: "⚠ Danger Zone"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "12px", color: "#718096", marginBottom: "16px" }, children: "Force logout all team members immediately. This revokes all active sessions." }),
          !confirmForceLogout ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              style: s.btnDanger,
              "data-ocid": "settings.force_logout.button",
              onClick: () => setConfirmForceLogout(true),
              children: "Force Logout All Team Members"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "10px", alignItems: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "13px", color: "#fc8181" }, children: "Are you sure? This cannot be undone." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                style: s.btnDanger,
                "data-ocid": "settings.force_logout.confirm_button",
                onClick: () => {
                  onForceLogoutAll();
                  setConfirmForceLogout(false);
                },
                children: "Yes, Force Logout"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                style: s.btnGhost,
                "data-ocid": "settings.force_logout.cancel_button",
                onClick: () => setConfirmForceLogout(false),
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function ActivityLogBar({ log }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const recent = log.slice(0, expanded ? 20 : 5);
  if (log.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        background: "#12151c",
        borderBottom: "1px solid #2d3748",
        padding: "0 24px"
      },
      "data-ocid": "activity_log.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setExpanded((v) => !v),
            style: {
              background: "transparent",
              border: "none",
              color: "#718096",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              padding: "8px 0",
              fontFamily: "inherit",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            },
            "data-ocid": "activity_log.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "📋 Activity Log (",
                log.length,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: expanded ? "▲" : "▼" })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { paddingBottom: "10px" }, children: [
          recent.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                fontSize: "11px",
                color: "#4a5568",
                padding: "2px 0",
                borderTop: i === 0 ? "1px solid #2d3748" : "none",
                paddingTop: "4px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#718096", marginRight: "8px" }, children: [
                  i + 1,
                  "."
                ] }),
                entry
              ]
            },
            `log-${i}-${entry.slice(0, 20)}`
          )),
          log.length > 5 && !expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "11px", color: "#4a5568" }, children: [
            "+",
            log.length - 5,
            " more…"
          ] })
        ] })
      ]
    }
  );
}
function FileManagerRow({
  label,
  currentUrl,
  onSave
}) {
  const [editUrl, setEditUrl] = reactExports.useState(currentUrl);
  const [saved, setSaved] = reactExports.useState(false);
  const handleSave = () => {
    if (!editUrl.trim()) return;
    onSave(editUrl.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl).catch(() => {
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        marginBottom: "12px",
        padding: "10px 12px",
        background: "rgba(255,255,255,0.03)",
        borderRadius: "6px",
        border: "1px solid #2d3748"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              fontSize: "11px",
              color: "#a0aec0",
              marginBottom: "6px",
              fontWeight: 600
            },
            children: label
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "6px", alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: editUrl,
              onChange: (e) => {
                setEditUrl(e.target.value);
                setSaved(false);
              },
              placeholder: "Paste image URL...",
              "data-ocid": "design.file_manager.input",
              style: {
                flex: 1,
                padding: "6px 10px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid #4a5568",
                borderRadius: "4px",
                color: "#e2e8f0",
                fontSize: "11px",
                fontFamily: "monospace",
                minWidth: 0
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleCopy,
              title: "Copy current URL",
              style: {
                padding: "6px 8px",
                background: "#2d3748",
                border: "1px solid #4a5568",
                borderRadius: "4px",
                color: "#a0aec0",
                fontSize: "11px",
                cursor: "pointer",
                flexShrink: 0
              },
              children: "📋"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleSave,
              "data-ocid": "design.file_manager.save_button",
              style: {
                padding: "6px 10px",
                background: saved ? "#16a34a" : "#3b82f6",
                border: "none",
                borderRadius: "4px",
                color: "#fff",
                fontSize: "11px",
                cursor: "pointer",
                flexShrink: 0,
                fontWeight: 600
              },
              children: saved ? "✓" : "Save"
            }
          )
        ] })
      ]
    }
  );
}
function ImageUploadCard({
  label,
  currentSrc,
  onUpload,
  description
}) {
  const inputRef = reactExports.useRef(null);
  const [previewUrl, setPreviewUrl] = reactExports.useState(null);
  const [saved, setSaved] = reactExports.useState(false);
  const handleFileChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPreviewUrl(reader.result);
        setSaved(false);
      }
    };
    reader.readAsDataURL(file);
  };
  const handleSave = () => {
    if (!previewUrl) return;
    onUpload(previewUrl);
    setSaved(true);
    setTimeout(() => setSaved(false), 3e3);
  };
  const displaySrc = previewUrl || currentSrc;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        background: "#12151c",
        border: "1px solid #2d3748",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { ...s.label, marginBottom: "8px" }, children: label }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: { fontSize: "11px", color: "#718096", marginBottom: "10px" },
            children: description
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: displaySrc,
            alt: label,
            style: {
              width: "100%",
              maxHeight: "160px",
              objectFit: "cover",
              borderRadius: "6px",
              marginBottom: "12px",
              display: "block",
              border: previewUrl ? "2px solid #3b82f6" : "1px solid #2d3748"
            }
          }
        ),
        previewUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: { fontSize: "11px", color: "#90cdf4", marginBottom: "8px" },
            children: "✦ New image selected — click Save to apply"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: inputRef,
            type: "file",
            accept: "image/*",
            style: { display: "none" },
            onChange: handleFileChange,
            "data-ocid": "design.upload_button"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "design.upload_button",
              onClick: () => {
                var _a;
                return (_a = inputRef.current) == null ? void 0 : _a.click();
              },
              style: {
                ...s.btnSm,
                background: "#2d3748",
                color: "#e2e8f0",
                border: "1px solid #4a5568",
                flex: 1,
                fontSize: "13px",
                padding: "10px 12px",
                minHeight: "44px"
              },
              children: "📁 Choose Image"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "design.save_button",
              disabled: !previewUrl,
              onClick: handleSave,
              style: {
                ...s.btnSm,
                background: saved ? "#16a34a" : previewUrl ? "#3b82f6" : "#1a1d23",
                color: previewUrl ? "#fff" : "#4a5568",
                border: `1px solid ${previewUrl ? "transparent" : "#2d3748"}`,
                flex: 1,
                fontSize: "13px",
                padding: "10px 12px",
                minHeight: "44px",
                cursor: previewUrl ? "pointer" : "not-allowed"
              },
              children: saved ? "✓ Saved!" : "💾 Save"
            }
          )
        ] })
      ]
    }
  );
}
function WebsiteDesignTab() {
  const { siteImages, updateSiteImage, resetSiteImages } = useMishi();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        style: {
          fontSize: "18px",
          fontWeight: 700,
          color: "#e2e8f0",
          marginBottom: "6px"
        },
        children: "Website Design"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#718096", marginBottom: "24px", fontSize: "13px" }, children: "Upload new images to instantly update the live site. Changes save automatically." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "#1a1d23",
          border: "1px solid #2d3748",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontSize: "14px",
                fontWeight: 600,
                color: "#a0aec0",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.06em"
              },
              children: "Hero Banner"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ImageUploadCard,
            {
              label: "HERO BACKGROUND",
              description: "The main full-screen background on the homepage",
              currentSrc: siteImages.heroUrl,
              onUpload: (url) => updateSiteImage("heroUrl", url)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "8px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "hero-url-input",
                style: {
                  color: "#a78bfa",
                  fontSize: "12px",
                  display: "block",
                  marginBottom: "4px"
                },
                children: "Or paste Banner URL directly:"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "hero-url-input",
                  "data-ocid": "design.hero_url.input",
                  type: "url",
                  placeholder: "https://example.com/banner.jpg",
                  style: {
                    flex: 1,
                    padding: "8px 12px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(167,139,250,0.4)",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "13px",
                    outline: "none"
                  },
                  onKeyDown: (e) => {
                    if (e.key === "Enter") {
                      const val = e.target.value.trim();
                      if (val) updateSiteImage("heroUrl", val);
                    }
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  "data-ocid": "design.hero_url.button",
                  type: "button",
                  onClick: (e) => {
                    const input = e.currentTarget.previousSibling;
                    const val = input.value.trim();
                    if (val) {
                      updateSiteImage("heroUrl", val);
                      input.value = "";
                    }
                  },
                  style: {
                    padding: "8px 16px",
                    background: "linear-gradient(135deg, #7c3aed, #2ab8c8)",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "13px",
                    cursor: "pointer",
                    fontWeight: "600"
                  },
                  children: "Apply"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "#1a1d23",
          border: "1px solid #2d3748",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontSize: "14px",
                fontWeight: 600,
                color: "#a0aec0",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.06em"
              },
              children: "Logo & Favicon"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ImageUploadCard,
            {
              label: "LOGO",
              description: "The golden wreath logo shown in header and hero",
              currentSrc: siteImages.logoUrl,
              onUpload: (url) => updateSiteImage("logoUrl", url)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "8px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "logo-url-input",
                style: {
                  color: "#a78bfa",
                  fontSize: "12px",
                  display: "block",
                  marginBottom: "4px"
                },
                children: "Or paste Logo URL directly:"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "logo-url-input",
                  "data-ocid": "design.logo_url.input",
                  type: "url",
                  placeholder: "https://example.com/logo.png",
                  style: {
                    flex: 1,
                    padding: "8px 12px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(167,139,250,0.4)",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "13px",
                    outline: "none"
                  },
                  onKeyDown: (e) => {
                    if (e.key === "Enter") {
                      const val = e.target.value.trim();
                      if (val) updateSiteImage("logoUrl", val);
                    }
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  "data-ocid": "design.logo_url.button",
                  type: "button",
                  onClick: (e) => {
                    const input = e.currentTarget.previousSibling;
                    const val = input.value.trim();
                    if (val) {
                      updateSiteImage("logoUrl", val);
                      input.value = "";
                    }
                  },
                  style: {
                    padding: "8px 16px",
                    background: "linear-gradient(135deg, #7c3aed, #2ab8c8)",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "13px",
                    cursor: "pointer",
                    fontWeight: "600"
                  },
                  children: "Apply"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "#1a1d23",
          border: "1px solid #2d3748",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontSize: "14px",
                fontWeight: 600,
                color: "#a0aec0",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.06em"
              },
              children: "Collection Section Images"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ImageUploadCard,
            {
              label: "NECKLACE SECTION",
              currentSrc: siteImages.necklaceImg,
              onUpload: (url) => updateSiteImage("necklaceImg", url)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ImageUploadCard,
            {
              label: "RINGS SECTION",
              currentSrc: siteImages.ringsImg,
              onUpload: (url) => updateSiteImage("ringsImg", url)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ImageUploadCard,
            {
              label: "BANGLES SECTION",
              currentSrc: siteImages.banglesImg,
              onUpload: (url) => updateSiteImage("banglesImg", url)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ImageUploadCard,
            {
              label: "EARRINGS SECTION",
              currentSrc: siteImages.earringsImg,
              onUpload: (url) => updateSiteImage("earringsImg", url)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ImageUploadCard,
            {
              label: "ETHNIC WEAR SECTION",
              currentSrc: siteImages.ethnicImg,
              onUpload: (url) => updateSiteImage("ethnicImg", url)
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "24px", textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        "data-ocid": "design.reset.button",
        type: "button",
        onClick: () => {
          if (confirm("Reset all images to defaults?")) {
            resetSiteImages();
          }
        },
        style: {
          padding: "10px 24px",
          background: "rgba(239,68,68,0.2)",
          border: "1px solid rgba(239,68,68,0.4)",
          borderRadius: "8px",
          color: "#fca5a5",
          fontSize: "13px",
          cursor: "pointer"
        },
        children: "Reset to Default Images"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "#1a1d23",
          border: "1px solid #2d3748",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px",
          marginTop: "20px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              style: {
                fontSize: "14px",
                fontWeight: 600,
                color: "#a0aec0",
                marginBottom: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.06em"
              },
              children: "📂 File Manager — Current Image URLs"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "11px", color: "#718096", marginBottom: "16px" }, children: "View and manually edit the URL for any image. Paste a direct HTTPS link and hit Save." }),
          [
            { key: "heroUrl", label: "Hero Banner" },
            { key: "logoUrl", label: "Logo" },
            { key: "necklaceImg", label: "Necklace Collection" },
            { key: "ringsImg", label: "Rings Collection" },
            { key: "banglesImg", label: "Bangles Collection" },
            { key: "earringsImg", label: "Earrings Collection" },
            { key: "ethnicImg", label: "Ethnic Wear Collection" }
          ].map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            FileManagerRow,
            {
              label,
              currentUrl: siteImages[key],
              onSave: (url) => updateSiteImage(key, url)
            },
            key
          ))
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "design.view_site.button",
        onClick: () => window.open("/", "_blank"),
        style: {
          width: "100%",
          padding: "16px",
          background: "#16a34a",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: 700,
          cursor: "pointer",
          fontFamily: "inherit",
          marginBottom: "32px",
          letterSpacing: "0.03em"
        },
        children: "🌐 View Live Site"
      }
    )
  ] });
}
function ReviewsTab() {
  const { reviews, approveReview, rejectReview, products } = useMishi();
  const pending = reviews.filter((r) => !r.isApproved);
  const approved = reviews.filter((r) => r.isApproved);
  const maskPhone = (p) => p.length > 4 ? `****${p.slice(-4)}` : "****";
  const StarDisplay = ({ rating }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#F0D060", fontSize: "14px" }, children: [
    "⭐".repeat(rating),
    "☆".repeat(5 - rating)
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "reviews.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        style: {
          fontSize: "16px",
          fontWeight: 700,
          marginBottom: "20px",
          color: "#e2e8f0"
        },
        children: "Customer Reviews"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "h3",
      {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          color: "#e2e8f0",
          marginBottom: "12px"
        },
        children: [
          "Pending Approval (",
          pending.length,
          ")"
        ]
      }
    ),
    pending.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        style: { color: "#4a5568", fontSize: "13px", marginBottom: "24px" },
        "data-ocid": "reviews.empty_state",
        children: "No pending reviews."
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto", marginBottom: "32px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: s.table, "data-ocid": "reviews.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Rating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Comment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: pending.map((r, i) => {
        const product = products.find((p) => p.id === r.productId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-ocid": `reviews.item.${i + 1}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: s.td, children: (product == null ? void 0 : product.name) || "Unknown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: s.td, children: maskPhone(r.customerPhone) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: s.td, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StarDisplay, { rating: r.rating }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              style: {
                ...s.td,
                maxWidth: "180px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: r.comment
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: s.td, children: new Date(r.submittedAt).toLocaleDateString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: s.td, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                style: {
                  ...s.btn,
                  background: "#276749",
                  padding: "4px 10px",
                  fontSize: "11px"
                },
                "data-ocid": `reviews.confirm_button.${i + 1}`,
                onClick: () => approveReview(r.id),
                children: "✓ Approve"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                style: {
                  ...s.btnDanger,
                  padding: "4px 10px",
                  fontSize: "11px"
                },
                "data-ocid": `reviews.delete_button.${i + 1}`,
                onClick: () => rejectReview(r.id),
                children: "✗ Reject"
              }
            )
          ] }) })
        ] }, r.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "h3",
      {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          color: "#e2e8f0",
          marginBottom: "12px"
        },
        children: [
          "Approved (",
          approved.length,
          ")"
        ]
      }
    ),
    approved.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#4a5568", fontSize: "13px" }, children: "No approved reviews yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: s.table, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Rating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Comment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: s.th, children: "Date" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: approved.map((r, i) => {
        const product = products.find((p) => p.id === r.productId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: (product == null ? void 0 : product.name) || "Unknown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: maskPhone(r.customerPhone) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StarDisplay, { rating: r.rating }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              style: {
                ...i % 2 === 0 ? s.td : s.tdAlt,
                maxWidth: "180px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: r.comment
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: i % 2 === 0 ? s.td : s.tdAlt, children: new Date(r.submittedAt).toLocaleDateString() })
        ] }, r.id);
      }) })
    ] }) })
  ] });
}
function InternalControlPage() {
  var _a;
  const isMobile = useIsMobile();
  const [session, setSession] = reactExports.useState(null);
  const {
    teamMembers,
    addTeamMember,
    removeTeamMember,
    revokeTeamMember,
    restoreTeamMember,
    masterPassword,
    setMasterPassword
  } = useMishi();
  const [activityLog, setActivityLog] = reactExports.useState([]);
  const [sessionVersion, setSessionVersion] = reactExports.useState(0);
  const [emergencyPin, setEmergencyPin] = reactExports.useState("000000");
  const [loginStep, setLoginStep] = reactExports.useState(1);
  const [gmailInput, setGmailInput] = reactExports.useState("");
  const [pendingGmail, setPendingGmail] = reactExports.useState("");
  const [passwordInput, setPasswordInput] = reactExports.useState("");
  const [loginError, setLoginError] = reactExports.useState("");
  const [gmailFocused, setGmailFocused] = reactExports.useState(false);
  const [pwFocused, setPwFocused] = reactExports.useState(false);
  const [tab, setTab] = reactExports.useState("add");
  const addLog = (entry) => {
    setActivityLog((prev) => [entry, ...prev].slice(0, 20));
  };
  const handleGmailSubmit = (e) => {
    e.preventDefault();
    const gmail = gmailInput.trim().toLowerCase();
    setLoginError("");
    if (gmail === SUPER_ADMIN_GMAIL) {
      setPendingGmail(gmail);
      setPasswordInput("");
      setLoginStep(2);
      return;
    }
    if (gmail === CO_FOUNDER_GMAIL) {
      setPendingGmail(gmail);
      setPasswordInput("");
      setLoginStep(2);
      return;
    }
    const member = teamMembers.find((m) => m.gmail === gmail);
    if (member) {
      if (member.isRevoked) {
        setLoginError("Your access has been revoked by the Super Admin.");
        return;
      }
      setSession({
        gmail,
        role: member.role,
        name: member.name,
        sessionVersion
      });
      return;
    }
    setLoginError("Access denied. This Gmail is not authorized.");
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setLoginError("");
    if (passwordInput === masterPassword) {
      const isFounder = pendingGmail === SUPER_ADMIN_GMAIL;
      const isCoFounder = pendingGmail === CO_FOUNDER_GMAIL;
      setSession({
        gmail: pendingGmail,
        role: isFounder ? "founder" : isCoFounder ? "coFounder" : "superAdmin",
        name: isFounder ? "Founder" : isCoFounder ? "Shivani (Co-Founder)" : "Super Admin",
        sessionVersion
      });
      setLoginStep(1);
      setGmailInput("");
      setPasswordInput("");
    } else {
      setLoginError("Incorrect master password.");
    }
  };
  const handleBackToGmail = () => {
    setLoginStep(1);
    setLoginError("");
    setPasswordInput("");
  };
  const handleLogout = () => {
    setSession(null);
    setGmailInput("");
    setPasswordInput("");
    setLoginStep(1);
    setLoginError("");
  };
  const handleForceLogoutAll = () => {
    addLog("Force logout triggered by Super Admin");
    setSessionVersion((v) => v + 1);
    if (session && session.role !== "superAdmin") {
      setSession(null);
    }
  };
  if (session && session.role !== "superAdmin" && session.role !== "founder" && session.sessionVersion !== sessionVersion) {
    setSession(null);
  }
  if (!session) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.root, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.loginWrap, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.loginBox, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "24px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "32px", marginBottom: "8px" }, children: "🛡️" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.title, children: "MISHI Internal Control" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.subtitle, children: "Super Admin & Team Access" })
      ] }),
      loginStep === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleGmailSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "20px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "gmail-input", style: s.label, children: "Gmail Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "gmail-input",
              "data-ocid": "login.input",
              type: "email",
              value: gmailInput,
              onChange: (e) => setGmailInput(e.target.value),
              autoComplete: "email",
              style: {
                ...s.input,
                ...gmailFocused ? s.inputFocus : {}
              },
              onFocus: () => setGmailFocused(true),
              onBlur: () => setGmailFocused(false),
              placeholder: "Enter your Gmail address",
              required: true
            }
          )
        ] }),
        loginError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.error, "data-ocid": "login.error_state", children: loginError }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            style: {
              ...s.btn,
              width: "100%",
              marginTop: loginError ? "12px" : "0"
            },
            "data-ocid": "login.submit_button",
            children: "Continue"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handlePasswordSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "6px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                fontSize: "11px",
                color: "#718096",
                marginBottom: "16px",
                background: "#2d3748",
                padding: "8px 12px",
                borderRadius: "4px",
                fontFamily: "monospace"
              },
              children: pendingGmail
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "master-pw-input", style: s.label, children: "Master Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "master-pw-input",
              "data-ocid": "login.password.input",
              type: "password",
              value: passwordInput,
              onChange: (e) => setPasswordInput(e.target.value),
              autoComplete: "current-password",
              style: { ...s.input, ...pwFocused ? s.inputFocus : {} },
              onFocus: () => setPwFocused(true),
              onBlur: () => setPwFocused(false),
              placeholder: "Enter master password",
              required: true
            }
          )
        ] }),
        loginError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: s.error, "data-ocid": "login.password.error_state", children: loginError }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            style: { ...s.btn, width: "100%", marginTop: "16px" },
            "data-ocid": "login.password.submit_button",
            children: "Access Dashboard"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleBackToGmail,
            style: {
              background: "transparent",
              border: "none",
              color: "#718096",
              fontSize: "12px",
              cursor: "pointer",
              marginTop: "12px",
              padding: "0",
              fontFamily: "inherit",
              display: "block",
              width: "100%",
              textAlign: "center"
            },
            "data-ocid": "login.back.button",
            children: "← Back"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          style: {
            fontSize: "11px",
            color: "#4a5568",
            textAlign: "center",
            marginTop: "20px"
          },
          children: "Only authorized Gmail accounts can access this portal."
        }
      )
    ] }) }) });
  }
  const allTabs = [
    {
      id: "products",
      label: "Product List",
      roles: ["founder", "coFounder", "superAdmin", "manager"]
    },
    {
      id: "add",
      label: "Add New Jewelry",
      roles: ["founder", "coFounder", "superAdmin", "manager"]
    },
    {
      id: "prices",
      label: "Change Prices",
      roles: ["founder", "coFounder", "superAdmin", "manager"]
    },
    {
      id: "orders",
      label: "Orders & Financials",
      roles: ["founder", "coFounder", "superAdmin"]
    },
    { id: "team", label: "Team", roles: ["founder", "superAdmin"] },
    { id: "settings", label: "Settings", roles: ["founder", "superAdmin"] },
    {
      id: "design",
      label: "🎨 Website Design",
      roles: ["founder", "coFounder", "superAdmin"]
    }
  ];
  const visibleTabs = allTabs.filter((t) => t.roles.includes(session.role));
  const activeTab = visibleTabs.find((t) => t.id === tab) ? tab : ((_a = visibleTabs[0]) == null ? void 0 : _a.id) ?? "add";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.root, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: s.header, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/images/logo.png",
            alt: "MISHI Logo",
            loading: "eager",
            style: {
              height: 40,
              width: 40,
              objectFit: "contain",
              mixBlendMode: "multiply"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: s.headerTitle, children: "MISHI Internal Control Panel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              marginLeft: "12px",
              fontSize: "11px",
              color: "#4a5568",
              textTransform: "uppercase",
              letterSpacing: "0.08em"
            },
            children: session.role === "founder" ? "Founder Dashboard" : session.role === "coFounder" ? "Co-Founder Dashboard" : "Super Admin Dashboard"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              fontSize: "11px",
              color: "#718096",
              fontFamily: "monospace"
            },
            children: session.gmail
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { role: session.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            style: s.btnGhost,
            "data-ocid": "dashboard.logout.button",
            onClick: handleLogout,
            children: "Logout"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          background: "#1a1d23",
          borderBottom: "1px solid #2d3748",
          padding: "0 16px",
          display: "flex",
          gap: "2px",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: visibleTabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `dashboard.${t.id}.tab`,
            onClick: () => setTab(t.id),
            style: {
              background: "transparent",
              border: "none",
              borderBottom: activeTab === t.id ? "2px solid #3b82f6" : "2px solid transparent",
              color: activeTab === t.id ? "#e2e8f0" : "#718096",
              padding: "12px 14px",
              fontSize: "13px",
              fontWeight: activeTab === t.id ? 600 : 400,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "color 0.15s, border-color 0.15s",
              whiteSpace: "nowrap",
              minHeight: "44px",
              flexShrink: 0
            },
            children: [
              t.label,
              t.id === "team" && (session.role === "superAdmin" || session.role === "founder") && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    marginLeft: "6px",
                    background: "#3b82f6",
                    color: "#fff",
                    fontSize: "10px",
                    padding: "1px 5px",
                    borderRadius: "9999px",
                    fontWeight: 700
                  },
                  children: teamMembers.length
                }
              )
            ]
          },
          t.id
        ))
      }
    ),
    (session.role === "superAdmin" || session.role === "founder") && /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityLogBar, { log: activityLog }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          padding: isMobile ? "16px 12px" : "28px 24px",
          maxWidth: "1100px"
        },
        children: [
          activeTab === "products" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProductListTab, {}),
          activeTab === "add" && /* @__PURE__ */ jsxRuntimeExports.jsx(AddJewelryTab, { onLog: addLog }),
          activeTab === "prices" && /* @__PURE__ */ jsxRuntimeExports.jsx(ChangePricesTab, { onLog: addLog }),
          activeTab === "orders" && (session.role === "superAdmin" || session.role === "founder" || session.role === "coFounder") && /* @__PURE__ */ jsxRuntimeExports.jsx(ViewOrdersTab, {}),
          activeTab === "team" && (session.role === "superAdmin" || session.role === "founder") && /* @__PURE__ */ jsxRuntimeExports.jsx(
            TeamTab,
            {
              teamMembers,
              onAddMember: addTeamMember,
              onRemoveMember: removeTeamMember,
              onRevokeMember: revokeTeamMember,
              onRestoreMember: restoreTeamMember,
              onLog: addLog,
              currentSession: session,
              onRevokeCurrentUser: () => handleLogout()
            }
          ),
          activeTab === "design" && (session.role === "superAdmin" || session.role === "founder" || session.role === "coFounder") && /* @__PURE__ */ jsxRuntimeExports.jsx(WebsiteDesignTab, {}),
          activeTab === "reviews" && /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsTab, {}),
          activeTab === "settings" && (session.role === "superAdmin" || session.role === "founder") && /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingsTab,
            {
              emergencyPin,
              setEmergencyPin,
              onForceLogoutAll: handleForceLogoutAll,
              onMasterPasswordChange: setMasterPassword,
              masterPassword
            }
          )
        ]
      }
    )
  ] });
}
export {
  InternalControlPage as default
};
