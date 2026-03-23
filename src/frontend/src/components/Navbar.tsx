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
        fontFamily: "Inter, sans-serif",
        fontSize: "0.8rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase" as const,
        fontWeight: 500,
        color: currentPage === page ? "#06b6d4" : "#c0d8e0",
        background: "none",
        border: "none",
        cursor: "pointer",
        transition: "color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
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
        background: "rgba(6,9,16,0.94)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(14,116,144,0.32)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — mixBlendMode screen removes white box on dark bg */}
        <button
          type="button"
          data-ocid="nav.home.link"
          onClick={() => navigate("home")}
          className="flex items-center gap-3"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <img
            src="/assets/uploads/Snapchat-1589822426-1.jpg"
            alt="MISHI"
            className="h-9 w-auto"
            style={{
              mixBlendMode: "screen",
              filter:
                "drop-shadow(0 0 6px rgba(212,175,55,0.45)) sepia(0.3) saturate(1.4) brightness(1.1)",
            }}
          />
          <span className="mishi-brand-title" style={{ fontSize: "28px" }}>
            Mishi
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {link("home", "Home")}
          {link("shop", "Shop")}
          {link("legacy", "Our Legacy")}
          {adminLevel === "primary" && link("admin", "Admin")}
          {adminLevel === "secondary" && link("admin-secondary", "Dashboard")}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            data-ocid="nav.wishlist.link"
            onClick={() => navigate("wishlist")}
            className="relative"
            style={{
              color: "#c0d8e0",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <Heart
              size={22}
              fill={wishlist.length > 0 ? "#06b6d4" : "none"}
              color={wishlist.length > 0 ? "#06b6d4" : "currentColor"}
            />
            {wishlist.length > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-xs flex items-center justify-center"
                style={{
                  background: "#0e7490",
                  color: "#e8f0f8",
                  fontSize: "10px",
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
              color: "#c0d8e0",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-xs flex items-center justify-center"
                style={{
                  background: "#0e7490",
                  color: "#e8f0f8",
                  fontSize: "10px",
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
              className="btn-outline-gold text-xs py-1.5 px-3"
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              data-ocid="nav.login.button"
              onClick={() => navigate("login")}
              className="btn-gold text-xs py-1.5 px-3"
            >
              Login
            </button>
          )}

          <button
            type="button"
            className="md:hidden"
            style={{
              color: "#c0d8e0",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setOpen(!open)}
            data-ocid="nav.menu.toggle"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-4"
          style={{ borderTop: "1px solid rgba(14,116,144,0.18)" }}
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
