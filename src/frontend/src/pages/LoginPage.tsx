import { Crown, Lock, Smartphone } from "lucide-react";
import { useState } from "react";
import { useMishi } from "../store/store";

export default function LoginPage() {
  const { login, loginAsAdmin, navigate } = useMishi();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [loading, setLoading] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [adminCode, setAdminCode] = useState("");

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
    }, 1000);
  };

  const handleAdminLogin = () => {
    if (adminCode === "MISHI2028") {
      loginAsAdmin("primary");
      navigate("admin");
    } else if (adminCode === "SHRIMATIJI") {
      loginAsAdmin("secondary");
      navigate("admin-secondary");
    } else alert("Invalid access code");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(75,0,130,0.2) 0%, rgba(10,10,15,0) 60%)",
      }}
    >
      <div className="glass-card p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #B8960C)",
              boxShadow: "0 0 30px rgba(212,175,55,0.4)",
            }}
          >
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 900,
                color: "#0a0a0f",
                fontSize: "28px",
              }}
            >
              M
            </span>
          </div>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.2rem",
            }}
            className="gold-gradient"
          >
            {adminMode ? "Admin Access" : "Royal Login"}
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            {adminMode
              ? "Enter your access code"
              : "Sign in with your mobile number"}
          </p>
        </div>

        {!adminMode ? (
          <div className="space-y-5">
            {step === "phone" && (
              <>
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2">
                    Mobile Number
                  </label>
                  <div
                    className="flex items-center gap-2"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(212,175,55,0.4)",
                      borderRadius: "8px",
                      padding: "12px 16px",
                    }}
                  >
                    <Smartphone size={18} className="text-yellow-400" />
                    <span className="text-gray-400 text-sm">+91</span>
                    <input
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value.replace(/\D/, ""))
                      }
                      maxLength={10}
                      placeholder="Enter 10-digit number"
                      className="flex-1 bg-transparent text-amber-100 outline-none text-sm placeholder-gray-600"
                    />
                  </div>
                </div>
                <button
                  onClick={sendOtp}
                  disabled={phone.length < 10 || loading}
                  className="btn-gold w-full py-3 flex items-center justify-center gap-2"
                >
                  {loading ? "Sending..." : "Send Royal OTP"}
                </button>
              </>
            )}
            {step === "otp" && (
              <>
                <p className="text-sm text-gray-400 text-center">
                  OTP sent to{" "}
                  <span className="text-yellow-400">+91 {phone}</span>
                </p>
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2">
                    Enter OTP
                  </label>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(212,175,55,0.4)",
                      borderRadius: "8px",
                      padding: "12px 16px",
                    }}
                  >
                    <input
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      placeholder="Enter OTP"
                      className="w-full bg-transparent text-amber-100 outline-none text-center text-xl tracking-widest placeholder-gray-600"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-center">
                  (Demo: any 4+ digit OTP will work)
                </p>
                <button
                  onClick={verifyOtp}
                  disabled={otp.length < 4 || loading}
                  className="btn-gold w-full py-3"
                >
                  {loading ? "Verifying..." : "Enter MISHI ✦"}
                </button>
                <button
                  onClick={() => setStep("phone")}
                  className="btn-outline-gold w-full py-2 text-sm"
                >
                  Change Number
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2">
                Access Code
              </label>
              <div
                className="flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(212,175,55,0.4)",
                  borderRadius: "8px",
                  padding: "12px 16px",
                }}
              >
                <Lock size={18} className="text-yellow-400" />
                <input
                  value={adminCode}
                  onChange={(e) => setAdminCode(e.target.value)}
                  type="password"
                  placeholder="Enter admin code"
                  className="flex-1 bg-transparent text-amber-100 outline-none text-sm placeholder-gray-600"
                />
              </div>
            </div>
            <p className="text-xs text-gray-600 text-center">
              Primary: MISHI2028 · Secondary (Shrimati Ji): SHRIMATIJI
            </p>
            <button
              onClick={handleAdminLogin}
              className="btn-gold w-full py-3 flex items-center justify-center gap-2"
            >
              <Crown size={18} /> Access Admin
            </button>
          </div>
        )}

        <div className="royal-divider mt-6" />
        <button
          onClick={() => setAdminMode(!adminMode)}
          className="w-full text-xs text-gray-500 hover:text-yellow-400 transition-colors text-center mt-3"
        >
          {adminMode ? "← Customer Login" : "Admin Access →"}
        </button>
      </div>
    </div>
  );
}
