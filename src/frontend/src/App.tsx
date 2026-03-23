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
  if (currentPage === "admin") return <PrimaryAdminPage />;
  if (currentPage === "admin-secondary") return <SecondaryAdminPage />;

  return <HomePage />;
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f" }}>
      <Navbar />
      <main>
        <PageRouter />
      </main>
      <MishiButler />

      {/* Footer */}
      <footer
        className="py-12 px-6 text-center"
        style={{
          borderTop: "1px solid rgba(212,175,55,0.2)",
          background: "rgba(0,0,0,0.5)",
        }}
      >
        <p
          style={{ fontFamily: "Playfair Display, serif", fontSize: "1.8rem" }}
          className="gold-gradient mb-2"
        >
          MISHI
        </p>
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">
          Where Royalty Meets Craftsmanship · Est. 2025 · Mission 2028
        </p>
        <div className="royal-divider w-48 mx-auto mb-4" />
        <p className="text-gray-600 text-xs">
          Sterling Silver Ornaments &amp; Royal Ethnic Wear &nbsp;·&nbsp; © 2025
          MISHI Luxury. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
