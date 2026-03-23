import { Crown, Heart, Menu, ShoppingBag, X } from "lucide-react";
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
      onClick={() => {
        navigate(page);
        setOpen(false);
      }}
      className={`transition-all duration-200 hover:text-yellow-400 text-sm tracking-widest uppercase font-medium ${
        currentPage === page ? "text-yellow-400" : "text-amber-100"
      }`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {label}
    </button>
  );

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10,10,15,0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(212,175,55,0.4)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-2"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #B8960C)",
              boxShadow: "0 0 15px rgba(212,175,55,0.4)",
            }}
          >
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 900,
                color: "#0a0a0f",
                fontSize: "18px",
              }}
            >
              M
            </span>
          </div>
          <span
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: "22px",
              background: "linear-gradient(135deg, #D4AF37, #F0D060)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MISHI
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
            onClick={() => navigate("wishlist")}
            className="relative text-amber-100 hover:text-yellow-400 transition-colors"
          >
            <Heart
              size={22}
              fill={wishlist.length > 0 ? "#D4AF37" : "none"}
              color={wishlist.length > 0 ? "#D4AF37" : undefined}
            />
            {wishlist.length > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-xs flex items-center justify-center"
                style={{
                  background: "#D4AF37",
                  color: "#0a0a0f",
                  fontSize: "10px",
                  fontWeight: 700,
                }}
              >
                {wishlist.length}
              </span>
            )}
          </button>
          <button
            onClick={() => navigate("cart")}
            className="relative text-amber-100 hover:text-yellow-400 transition-colors"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-xs flex items-center justify-center"
                style={{
                  background: "#D4AF37",
                  color: "#0a0a0f",
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
              onClick={() => navigate("login")}
              className="btn-gold text-xs py-1.5 px-3"
            >
              <Crown size={14} className="inline mr-1" />
              Login
            </button>
          )}
          <button
            className="md:hidden text-amber-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-4"
          style={{ borderTop: "1px solid rgba(212,175,55,0.2)" }}
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
