import { Smartphone } from "lucide-react";
import { useState } from "react";
import { useMishi } from "../store/store";

export default function LoginPage() {
  const { login, navigate } = useMishi();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [loading, setLoading] = useState(false);

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

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(14,116,144,0.15) 0%, rgba(8,11,18,0) 60%)",
      }}
    >
      <div className="glass-card p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="/assets/generated/mishi-logo-golden-clean-transparent.dim_400x200.png"
            alt="MISHI"
            className="h-16 w-auto mx-auto mb-4"
            style={{
              objectFit: "contain",
              filter: "drop-shadow(0 0 10px rgba(212,175,55,0.5))",
            }}
          />
          <h1
            data-ocid="login.page"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.2rem",
            }}
            className="gold-gradient"
          >
            Royal Login
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Sign in with your mobile number
          </p>
        </div>

        <div className="space-y-5">
          {step === "phone" && (
            <>
              <div>
                <label
                  htmlFor="phone-input"
                  className="text-xs text-gray-400 uppercase tracking-widest block mb-2"
                >
                  Mobile Number
                </label>
                <div
                  className="flex items-center gap-2"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(14,116,144,0.4)",
                    borderRadius: "8px",
                    padding: "12px 16px",
                  }}
                >
                  <Smartphone size={18} className="text-cyan-400" />
                  <span className="text-gray-400 text-sm">+91</span>
                  <input
                    id="phone-input"
                    data-ocid="login.input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
                    maxLength={10}
                    placeholder="Enter 10-digit number"
                    className="flex-1 bg-transparent text-blue-100 outline-none text-sm placeholder-gray-600"
                  />
                </div>
              </div>
              <button
                type="button"
                data-ocid="login.submit_button"
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
                OTP sent to <span className="text-cyan-400">+91 {phone}</span>
              </p>
              <div>
                <label
                  htmlFor="otp-input"
                  className="text-xs text-gray-400 uppercase tracking-widest block mb-2"
                >
                  Enter OTP
                </label>
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(14,116,144,0.4)",
                    borderRadius: "8px",
                    padding: "12px 16px",
                  }}
                >
                  <input
                    id="otp-input"
                    data-ocid="login.otp.input"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    placeholder="Enter OTP"
                    className="w-full bg-transparent text-blue-100 outline-none text-center text-xl tracking-widest placeholder-gray-600"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-600 text-center">
                (Demo: any 4+ digit OTP will work)
              </p>
              <button
                type="button"
                data-ocid="login.verify.submit_button"
                onClick={verifyOtp}
                disabled={otp.length < 4 || loading}
                className="btn-gold w-full py-3"
              >
                {loading ? "Verifying..." : "Enter MISHI ✦"}
              </button>
              <button
                type="button"
                data-ocid="login.back.button"
                onClick={() => setStep("phone")}
                className="btn-outline-gold w-full py-2 text-sm"
              >
                Change Number
              </button>
            </>
          )}
        </div>

        <div className="royal-divider mt-6" />
        <p className="text-xs text-gray-600 text-center">
          © {new Date().getFullYear()} MISHI Luxury
        </p>
      </div>
    </div>
  );
}
