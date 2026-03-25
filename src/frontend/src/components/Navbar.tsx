import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { type CurrencyCode, type LanguageCode, useMishi } from "../store/store";

const LOGO_PATH = "/assets/images/logo.png";

const CURRENCY_OPTIONS: { code: CurrencyCode; label: string }[] = [
  { code: "INR", label: "₹ INR" },
  { code: "USD", label: "$ USD" },
  { code: "AED", label: "\u062f.\u0625 AED" },
  { code: "GBP", label: "£ GBP" },
  { code: "EUR", label: "€ EUR" },
];

const LANGUAGE_OPTIONS: { code: LanguageCode; flag: string; label: string }[] =
  [
    { code: "English", flag: "🇮🇳", label: "English" },
    { code: "Hindi", flag: "🇮🇳", label: "हिंदी" },
    { code: "Arabic", flag: "🇦🇪", label: "العربية" },
    { code: "French", flag: "🇫🇷", label: "Français" },
  ];

export default function Navbar() {
  const {
    currentPage,
    navigate,
    cart,
    wishlist,
    isLoggedIn,
    adminLevel,
    logout,
    currency,
    setCurrency,
    language,
    setLanguage,
  } = useMishi();
  const [open, setOpen] = useState(false);
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  const link = (page: string, label: string) => (
    <button
      type="button"
      data-ocid={`nav.${page}.link`}
      onClick={() => {
        navigate(page);
        setOpen(false);
      }}
      style={{
        fontFamily: "Cormorant Garamond, serif",
        fontSize: "0.75rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase" as const,
        fontWeight: 500,
        color: currentPage === page ? "#2ab8c8" : "#4a3070",
        background: "none",
        border: "none",
        cursor: "pointer",
        transition: "color 0.3s ease",
        padding: 0,
      }}
    >
      {label}
    </button>
  );

  const selectStyle: React.CSSProperties = {
    fontFamily: "Cormorant Garamond, serif",
    fontSize: "10px",
    color: "#2ab8c8",
    background: "transparent",
    border: "1px solid rgba(42,184,200,0.35)",
    borderRadius: "3px",
    padding: "1px 4px",
    cursor: "pointer",
    outline: "none",
    letterSpacing: "0.05em",
    maxWidth: 90,
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(240, 230, 255, 0.30)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(212,175,55,0.25)",
        boxShadow: "0 1px 12px rgba(212,175,55,0.10)",
      }}
    >
      {/* ── SLIM SINGLE-LINE HEADER ── */}
      <div
        className="max-w-7xl mx-auto px-5"
        style={{
          height: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo + Brand name + Tagline */}
        <button
          type="button"
          data-ocid="nav.home.link"
          onClick={() => navigate("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: 0,
            lineHeight: 1,
          }}
        >
          <img
            src={LOGO_PATH}
            alt="MISHI Logo"
            loading="eager"
            fetchPriority="high"
            width={24}
            height={24}
            style={{
              width: 24,
              height: 24,
              objectFit: "contain",
              display: "block",
              background: "none",

              filter:
                "drop-shadow(0 0 3px rgba(212,175,55,0.85)) drop-shadow(0 0 1px rgba(180,120,0,0.7))",
            }}
          />

          <span
            className="mishi-brand-title"
            style={{
              fontSize: "16px",
              lineHeight: 1,
              filter:
                "drop-shadow(0 0 2px rgba(60,0,100,0.5)) drop-shadow(0 1px 3px rgba(40,0,80,0.35))",
            }}
          >
            Mishi
          </span>

          <span
            style={{
              width: 1,
              height: 12,
              background: "rgba(212,175,55,0.4)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />

          <span
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              color: "rgba(74,48,112,0.75)",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Where Love Unites Empires
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {link("home", "Home")}
          {link("shop", "Shop")}
          {link("legacy", "Our Legacy")}
          {adminLevel === "primary" && link("admin", "Admin")}
          {adminLevel === "secondary" && link("admin-secondary", "Dashboard")}
        </div>

        {/* Icons + Currency/Language */}
        <div className="flex items-center gap-2">
          {/* Currency */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
            style={selectStyle}
            aria-label="Currency"
            data-ocid="nav.currency.select"
          >
            {CURRENCY_OPTIONS.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
          {/* Language */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as LanguageCode)}
            style={selectStyle}
            aria-label="Language"
            data-ocid="nav.language.select"
          >
            {LANGUAGE_OPTIONS.map((l) => (
              <option key={l.code} value={l.code}>
                {l.flag} {l.label}
              </option>
            ))}
          </select>

          <button
            type="button"
            data-ocid="nav.wishlist.link"
            onClick={() => navigate("wishlist")}
            className="relative"
            style={{
              color: "#4a3070",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Heart
              size={15}
              fill={wishlist.length > 0 ? "#2ab8c8" : "none"}
              color={wishlist.length > 0 ? "#2ab8c8" : "#4a3070"}
            />
            {wishlist.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  background: "#2ab8c8",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 12,
                  height: 12,
                  fontSize: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {wishlist.length}
              </span>
            )}
          </button>

          <button
            type="button"
            data-ocid="nav.cart.link"
            onClick={() => navigate("cart")}
            className="relative"
            style={{
              color: "#4a3070",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <ShoppingBag size={15} color="#4a3070" />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  background: "#D4AF37",
                  color: "#1a1a1a",
                  borderRadius: "50%",
                  width: 12,
                  height: 12,
                  fontSize: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {isLoggedIn ? (
            <button
              type="button"
              data-ocid="nav.logout.button"
              onClick={logout}
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "#9b6e9b",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              data-ocid="nav.login.link"
              onClick={() => navigate("login")}
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "#2ab8c8",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Login
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            data-ocid="nav.menu.toggle"
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{
              color: "#4a3070",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div
          style={{
            background: "rgba(240,230,255,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(212,175,55,0.2)",
            padding: "16px 20px",
          }}
        >
          <div className="flex flex-col gap-4">
            {link("home", "Home")}
            {link("shop", "Shop")}
            {link("legacy", "Our Legacy")}
            {isLoggedIn && link("orders", "My Orders")}
            {isLoggedIn && link("wishlist", "Wishlist")}
            {isLoggedIn && link("cart", "Cart")}
            {adminLevel === "primary" && link("admin", "Admin")}
            {adminLevel === "secondary" && link("admin-secondary", "Dashboard")}
            {isLoggedIn ? (
              <button
                type="button"
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "0.75rem",
                  color: "#e05",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: 0,
                }}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  navigate("login");
                  setOpen(false);
                }}
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "0.75rem",
                  color: "#2ab8c8",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: 0,
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
