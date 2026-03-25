import { Suspense, lazy, useEffect, useState } from "react";
import FounderGuides from "./components/FounderGuides";
import MishiButler from "./components/MishiButler";
import Navbar from "./components/Navbar";
import { useMishi } from "./store/store";

const CartPage = lazy(() => import("./pages/CartPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const InternalControlPage = lazy(() => import("./pages/InternalControlPage"));
const LegacyPage = lazy(() => import("./pages/LegacyPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const PrimaryAdminPage = lazy(() => import("./pages/PrimaryAdminPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const SecondaryAdminPage = lazy(() => import("./pages/SecondaryAdminPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const VaultPage = lazy(() => import("./pages/VaultPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));

function isInternalControlRoute(): boolean {
  if (typeof window === "undefined") return false;
  const p = window.location.pathname;
  return p === "/mishi-internal-control" || p === "/admin-management";
}

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
  if (currentPage === "internal-control") return <InternalControlPage />;
  return <HomePage />;
}

function handleCaffeineLinkEnter(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "#06b6d4";
}
function handleCaffeineLinkLeave(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "#2e404a";
}

// PWA Install Prompt
function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<
    | (Event & { prompt: () => void; userChoice: Promise<{ outcome: string }> })
    | null
  >(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(
        e as Event & {
          prompt: () => void;
          userChoice: Promise<{ outcome: string }>;
        },
      );
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!show || !deferredPrompt) return null;

  const handleInstall = async () => {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setShow(false);
    setDeferredPrompt(null);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        background: "rgba(240,230,255,0.97)",
        backdropFilter: "blur(20px)",
        border: "1.5px solid rgba(212,175,55,0.5)",
        borderRadius: 16,
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        boxShadow:
          "0 8px 32px rgba(60,0,100,0.18), 0 0 20px rgba(212,175,55,0.2)",
        maxWidth: 360,
        width: "calc(100vw - 40px)",
      }}
    >
      <img
        src="/assets/images/logo.png"
        alt="MISHI"
        style={{
          width: 40,
          height: 40,
          objectFit: "contain",
          mixBlendMode: "multiply",
          filter: "drop-shadow(0 0 5px rgba(255,215,0,0.8))",
        }}
      />
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.95rem",
            color: "#3d1a6b",
            fontWeight: 600,
            margin: 0,
          }}
        >
          Add MISHI to Home Screen
        </p>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.72rem",
            color: "#6b4f8a",
            margin: "2px 0 0",
          }}
        >
          Install for the royal experience
        </p>
      </div>
      <button
        type="button"
        onClick={handleInstall}
        style={{
          background: "linear-gradient(135deg, #b8860b, #d4af37, #b8860b)",
          border: "none",
          borderRadius: 8,
          padding: "7px 14px",
          fontSize: "0.72rem",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          color: "#fff",
          cursor: "pointer",
          letterSpacing: "0.06em",
          whiteSpace: "nowrap",
        }}
      >
        Install
      </button>
      <button
        type="button"
        onClick={() => setShow(false)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#9c8ab0",
          fontSize: "1.1rem",
          lineHeight: 1,
          padding: "0 2px",
        }}
      >
        ✕
      </button>
    </div>
  );
}

export default function App() {
  const { currentPage } = useMishi();

  // Render InternalControlPage without Navbar/footer when:
  // 1. Direct URL path /mishi-internal-control, OR
  // 2. Router navigated to "internal-control"
  const isInternalControl =
    isInternalControlRoute() || currentPage === "internal-control";

  if (isInternalControl) {
    return (
      <Suspense
        fallback={<div style={{ minHeight: "100vh", background: "#080b12" }} />}
      >
        <InternalControlPage />
      </Suspense>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#080b12" }}>
      <Navbar />
      <main>
        <Suspense
          fallback={
            <div style={{ minHeight: "100vh", background: "#080b12" }} />
          }
        >
          <PageRouter />
        </Suspense>
      </main>
      <MishiButler />
      <FounderGuides />
      <PWAInstallBanner />

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
            src="/assets/images/logo.png"
            alt="MISHI"
            className="h-12 w-auto"
            style={{
              objectFit: "contain",
              mixBlendMode: "multiply",
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
