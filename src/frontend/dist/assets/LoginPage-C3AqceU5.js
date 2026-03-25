import { c as createLucideIcon, u as useMishi, r as reactExports, j as jsxRuntimeExports } from "./index-CtulIDhY.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
function LoginPage() {
  const { login, navigate } = useMishi();
  const [phone, setPhone] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const [step, setStep] = reactExports.useState("phone");
  const [loading, setLoading] = reactExports.useState(false);
  const sendOtp = () => {
    if (phone.length < 10) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    }, 1500);
  };
  const verifyOtp = () => {
    if (otp.length < 4) return;
    setLoading(true);
    setTimeout(() => {
      login(phone);
      navigate("home");
    }, 1e3);
  };
  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(14,116,144,0.4)",
    borderRadius: "8px",
    padding: "12px 16px"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "min-h-screen flex items-center justify-center px-6 py-24",
      style: {
        background: "radial-gradient(ellipse at center, rgba(14,116,144,0.15) 0%, rgba(8,11,18,0) 60%)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-10 w-full max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/images/logo.png",
              alt: "MISHI",
              loading: "eager",
              fetchPriority: "high",
              className: "h-16 w-auto mx-auto mb-4",
              style: {
                objectFit: "contain",
                mixBlendMode: "multiply",
                filter: "drop-shadow(0 0 10px rgba(212,175,55,0.5))"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              "data-ocid": "login.page",
              style: {
                fontFamily: "Playfair Display, serif",
                fontSize: "2.2rem"
              },
              className: "gold-gradient",
              children: "Royal Login"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          step === "phone" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "phone-input",
                  className: "text-xs text-gray-400 uppercase tracking-widest block mb-2",
                  children: "Mobile Number"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", style: inputStyle, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 18, className: "text-cyan-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: "+91" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "phone-input",
                    "data-ocid": "login.input",
                    value: phone,
                    onChange: (e) => setPhone(e.target.value.replace(/\D/, "")),
                    maxLength: 10,
                    placeholder: "Enter 10-digit number",
                    className: "flex-1 bg-transparent text-blue-100 outline-none text-sm placeholder-gray-600"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "login.submit_button",
                onClick: sendOtp,
                disabled: phone.length < 10 || loading,
                className: "btn-gold w-full py-3 flex items-center justify-center gap-2",
                children: loading ? "Sending..." : "Send Royal OTP"
              }
            )
          ] }),
          step === "otp" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400 text-center", children: [
              "OTP sent to ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-cyan-400", children: [
                "+91 ",
                phone
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "otp-input",
                  className: "text-xs text-gray-400 uppercase tracking-widest block mb-2",
                  children: "Enter OTP"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: inputStyle, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "otp-input",
                  "data-ocid": "login.otp.input",
                  value: otp,
                  onChange: (e) => setOtp(e.target.value),
                  maxLength: 6,
                  placeholder: "Enter OTP",
                  className: "w-full bg-transparent text-blue-100 outline-none text-center text-xl tracking-widest placeholder-gray-600"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 text-center", children: "(Demo: any 4+ digit OTP will work)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "login.verify.submit_button",
                onClick: verifyOtp,
                disabled: otp.length < 4 || loading,
                className: "btn-gold w-full py-3",
                children: loading ? "Verifying..." : "Enter MISHI ✦"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "login.back.button",
                onClick: () => setStep("phone"),
                className: "btn-outline-gold w-full py-2 text-sm",
                children: "Change Number"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "royal-divider mt-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-600 text-center", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " MISHI Luxury"
        ] })
      ] })
    }
  );
}
export {
  LoginPage as default
};
