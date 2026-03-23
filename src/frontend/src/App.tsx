import FounderGuides from "./components/FounderGuides";
import MishiButler from "./components/MishiButler";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LegacyPage from "./pages/LegacyPage";
import LoginPage from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage";
import PrimaryAdminPage from "./pages/PrimaryAdminPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SecondaryAdminPage from "./pages/SecondaryAdminPage";
import ShopPage from "./pages/ShopPage";
import VaultPage from "./pages/VaultPage";
import WishlistPage from "./pages/WishlistPage";
import { useMishi } from "./store/store";

function PageRouter() {
  const { currentPage } = useMishi();
  if (currentPage === "home") return <HomePage />;
  if (currentPage === "shop") return <ShopPage />;
  if (currentPage.startsWith("product-")) {
    const id = Number.parseInt(currentPage.split("-")[1]);
    return <ProductDetailPage productId={id} />;
  }
  if (currentPage === "cart") return <CartPage />;
  if (currentPage === "orders") return <OrdersPage />;
  if (currentPage === "wishlist") return <WishlistPage />;
  if (currentPage === "legacy") return <LegacyPage />;
  if (currentPage === "login") return <LoginPage />;
  if (currentPage === "vault") return <VaultPage />;
  if (currentPage === "admin") return <PrimaryAdminPage />;
  if (currentPage === "admin-secondary") return <SecondaryAdminPage />;
  return <HomePage />;
}

function handleCaffeineLinkEnter(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "#06b6d4";
}
function handleCaffeineLinkLeave(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "#2e404a";
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#080b12" }}>
      <Navbar />
      <main>
        <PageRouter />
      </main>
      <MishiButler />
      <FounderGuides />

      {/* Footer */}
      <footer
        className="py-12 px-6 text-center"
        style={{
          borderTop: "1px solid rgba(14,116,144,0.18)",
          background: "rgba(4,6,12,0.7)",
        }}
      >
        <div className="flex flex-col items-center gap-2 mb-4">
          <img
            src="/assets/generated/mishi-logo-golden-clean-transparent.dim_400x200.png"
            alt="MISHI"
            className="h-12 w-auto"
            style={{
              objectFit: "contain",
              filter: "drop-shadow(0 0 10px rgba(212,175,55,0.5))",
            }}
          />
          <span
            className="mishi-brand-title"
            style={{ fontSize: "2.2rem", lineHeight: "1" }}
          >
            Mishi
          </span>
        </div>

        <p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#c4b5fd",
            marginBottom: "0.5rem",
            fontStyle: "italic",
          }}
        >
          Where Love Unites Empires
        </p>
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#3d5a65",
            marginBottom: "1rem",
          }}
        >
          Est. 2025 · Mission 2028
        </p>

        <div className="royal-divider w-48 mx-auto mb-4" />

        <p
          style={{
            fontSize: "0.75rem",
            color: "#3d5060",
            marginBottom: "0.5rem",
          }}
        >
          Sterling Silver Ornaments &amp; Royal Ethnic Wear &nbsp;·&nbsp; ©{" "}
          {new Date().getFullYear()} MISHI Luxury. All rights reserved.
        </p>
        <p
          style={{ fontSize: "0.7rem", marginTop: "0.75rem", color: "#2e404a" }}
        >
          Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2e404a", transition: "color 0.5s ease" }}
            onMouseEnter={handleCaffeineLinkEnter}
            onMouseLeave={handleCaffeineLinkLeave}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
