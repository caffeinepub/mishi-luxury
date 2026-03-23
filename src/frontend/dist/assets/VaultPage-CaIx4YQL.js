import { c as createLucideIcon, u as useMishi, r as reactExports, j as jsxRuntimeExports } from "./index-Q3wwUWeA.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$1);
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
function VaultPage() {
  const { loginAsAdmin, navigate } = useMishi();
  const [code, setCode] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleSubmit = () => {
    setError("");
    setLoading(true);
    const customPrimary = localStorage.getItem("mishi-cms-primary-code") || "PYARADUDU";
    const customSecondary = localStorage.getItem("mishi-cms-secondary-code") || "SHRIMATIJI";
    setTimeout(() => {
      setLoading(false);
      if (code === customPrimary) {
        loginAsAdmin("primary");
        navigate("admin");
      } else if (code === customSecondary) {
        loginAsAdmin("secondary");
        navigate("admin-secondary");
      } else {
        setError("Access denied. Invalid code.");
        setCode("");
      }
    }, 800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "min-h-screen flex items-center justify-center px-6 py-24",
      style: {
        background: "radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, rgba(8,11,18,0) 70%)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass-card p-10 w-full max-w-sm text-center",
          style: { border: "1px solid rgba(124,58,237,0.4)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center",
                style: {
                  background: "linear-gradient(135deg, #0e7490, #7c3aed)",
                  boxShadow: "0 0 30px rgba(124,58,237,0.4)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 28, className: "text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                "data-ocid": "vault.page",
                style: { fontFamily: "Playfair Display, serif", fontSize: "2rem" },
                className: "gold-gradient mb-1",
                children: "Royal Vault"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-xs tracking-[0.3em] uppercase mb-8", children: "Authorized Personnel Only" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3",
                  style: {
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(14,116,144,0.35)",
                    borderRadius: "8px",
                    padding: "12px 16px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 16, className: "text-cyan-400 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        "data-ocid": "vault.input",
                        type: "password",
                        value: code,
                        onChange: (e) => {
                          setCode(e.target.value);
                          setError("");
                        },
                        onKeyDown: (e) => e.key === "Enter" && handleSubmit(),
                        placeholder: "Enter vault code",
                        className: "flex-1 bg-transparent text-blue-100 outline-none text-sm tracking-widest placeholder-gray-700"
                      }
                    )
                  ]
                }
              ),
              error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "data-ocid": "vault.error_state", className: "text-red-400 text-xs", children: error }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "vault.submit_button",
                  onClick: handleSubmit,
                  disabled: code.length < 1 || loading,
                  className: "btn-gold w-full py-3",
                  children: loading ? "Verifying..." : "Enter"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "royal-divider mt-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => navigate("home"),
                className: "text-xs text-gray-700 hover:text-gray-500 transition-colors",
                children: "← Return"
              }
            )
          ]
        }
      )
    }
  );
}
export {
  VaultPage as default
};
