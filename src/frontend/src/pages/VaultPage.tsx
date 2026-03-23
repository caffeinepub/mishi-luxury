import { Lock, Shield } from "lucide-react";
import { useState } from "react";
import { useMishi } from "../store/store";

export default function VaultPage() {
  const { loginAsAdmin, navigate } = useMishi();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setError("");
    setLoading(true);

    // Check localStorage for custom codes first
    const customPrimary =
      localStorage.getItem("mishi-cms-primary-code") || "PYARADUDU";
    const customSecondary =
      localStorage.getItem("mishi-cms-secondary-code") || "SHRIMATIJI";

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

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, rgba(8,11,18,0) 70%)",
      }}
    >
      <div
        className="glass-card p-10 w-full max-w-sm text-center"
        style={{ border: "1px solid rgba(124,58,237,0.4)" }}
      >
        <div
          className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #0e7490, #7c3aed)",
            boxShadow: "0 0 30px rgba(124,58,237,0.4)",
          }}
        >
          <Shield size={28} className="text-white" />
        </div>

        <h1
          data-ocid="vault.page"
          style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem" }}
          className="gold-gradient mb-1"
        >
          Royal Vault
        </h1>
        <p className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-8">
          Authorized Personnel Only
        </p>

        <div className="space-y-4">
          <div
            className="flex items-center gap-3"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(14,116,144,0.35)",
              borderRadius: "8px",
              padding: "12px 16px",
            }}
          >
            <Lock size={16} className="text-cyan-400 flex-shrink-0" />
            <input
              data-ocid="vault.input"
              type="password"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Enter vault code"
              className="flex-1 bg-transparent text-blue-100 outline-none text-sm tracking-widest placeholder-gray-700"
            />
          </div>

          {error && (
            <p data-ocid="vault.error_state" className="text-red-400 text-xs">
              {error}
            </p>
          )}

          <button
            type="button"
            data-ocid="vault.submit_button"
            onClick={handleSubmit}
            disabled={code.length < 1 || loading}
            className="btn-gold w-full py-3"
          >
            {loading ? "Verifying..." : "Enter"}
          </button>
        </div>

        <div className="royal-divider mt-8" />
        <button
          type="button"
          onClick={() => navigate("home")}
          className="text-xs text-gray-700 hover:text-gray-500 transition-colors"
        >
          ← Return
        </button>
      </div>
    </div>
  );
}
