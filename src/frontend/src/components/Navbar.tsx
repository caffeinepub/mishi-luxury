import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useMishi } from "../store/store";

export default function Navbar() {
  const {
    currentPage,
    navigate,
    cart,
    wishlist,
    isLoggedIn,
    adminLevel,
    logout,
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
          {/* Pure transparent golden logo — no blend mode tricks needed */}
          <img
            src="/assets/generated/mishi-logo-pure-transparent.dim_800x800.png"
            alt="MISHI Logo"
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

          {/* Brand name */}
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

          {/* Divider */}
          <span
            style={{
              width: 1,
              height: 12,
              background: "rgba(212,175,55,0.4)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />

          {/* Tagline */}
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

        {/* Icons */}
        <div className="flex items-center gap-2">
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
              color={wishlist.length > 0 ? "#2ab8c8" : "currentColor"}
            />
            {wishlist.length > 0 && (
              <span
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full text-xs flex items-center justify-center"
                style={{
                  background: "#2ab8c8",
                  color: "#fff",
                  fontSize: "8px",
                  fontWeight: 700,
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
            <ShoppingBag size={15} />
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full text-xs flex items-center justify-center"
                style={{
                  background: "#2ab8c8",
                  color: "#fff",
                  fontSize: "8px",
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
              onClick={() => {
                logout();
                navigate("home");
              }}
              className="btn-outline-gold"
              style={{ fontSize: "0.6rem", padding: "2px 8px" }}
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              data-ocid="nav.login.button"
              onClick={() => navigate("login")}
              className="btn-gold"
              style={{ fontSize: "0.6rem", padding: "2px 8px" }}
            >
              Login
            </button>
          )}

          <button
            type="button"
            className="md:hidden"
            style={{
              color: "#4a3070",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setOpen(!open)}
            data-ocid="nav.menu.toggle"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-5 pb-3 flex flex-col gap-3"
          style={{
            borderTop: "1px solid rgba(212,175,55,0.2)",
            background: "rgba(240,230,255,0.85)",
            backdropFilter: "blur(18px)",
          }}
        >
          {link("home", "Home")}
          {link("shop", "Shop")}
          {link("legacy", "Our Legacy")}
          {link("orders", "My Orders")}
          {adminLevel === "primary" && link("admin", "Admin Panel")}
          {adminLevel === "secondary" &&
            link("admin-secondary", "Shrimati Ji Dashboard")}
        </div>
      )}
    </nav>
  );
}
