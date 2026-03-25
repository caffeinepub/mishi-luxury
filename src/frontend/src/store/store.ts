import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Category = "silver" | "ethnic";

export interface SizeStock {
  size: string;
  stock: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: Category;
  price: number;
  silverWeight?: number;
  basePrice?: number;
  sizes: SizeStock[];
  imageUrl: string;
  stock: number;
  isActive: boolean;
}

export interface CartItem {
  productId: number;
  quantity: number;
  selectedSize?: string;
}

export type OrderStage =
  | "orderPlaced"
  | "artisanCrafting"
  | "qualityCheck"
  | "royalDispatch"
  | "palaceDelivery";

export interface Order {
  id: number;
  items: CartItem[];
  totalAmount: number;
  shippingAddress: string;
  stage: OrderStage;
  placedAt: number;
  isApproved: boolean;
}

export interface TeamMember {
  gmail: string;
  name: string;
  role: "manager" | "viewer" | "coFounder";
  addedAt: string;
  isRevoked: boolean;
  isPermanent?: boolean;
}

export interface Review {
  id: number;
  productId: number;
  customerPhone: string;
  rating: number; // 1-5
  comment: string;
  mediaBase64?: string;
  mediaType?: string;
  submittedAt: number;
  isApproved: boolean;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Royal Chandbali Earrings",
    category: "silver",
    description:
      "Handcrafted Sterling Silver Chandbali earrings adorned with intricate filigree work. Each piece reflects generations of artisan mastery and royal heritage.",
    price: 6260,
    silverWeight: 8,
    basePrice: 4500,
    sizes: [],
    stock: 15,
    isActive: true,
    imageUrl: "/assets/generated/product-chandbali.dim_400x500.jpg",
  },
  {
    id: 2,
    name: "Heritage Necklace Set",
    category: "silver",
    description:
      "Majestic Sterling Silver necklace set with matching earrings. Inspired by Mughal court jewellery, crafted for modern royalty.",
    price: 11375,
    silverWeight: 25,
    basePrice: 8000,
    sizes: [],
    stock: 8,
    isActive: true,
    imageUrl: "/assets/generated/product-necklace-set.dim_400x500.jpg",
  },
  {
    id: 3,
    name: "Silk Banarasi Lehenga",
    category: "ethnic",
    description:
      "Pure Silk Banarasi Lehenga with gold zari work. A timeless masterpiece woven with centuries of weaving heritage from Varanasi.",
    price: 35000,
    sizes: [
      { size: "XS", stock: 2 },
      { size: "S", stock: 4 },
      { size: "M", stock: 5 },
      { size: "L", stock: 4 },
      { size: "XL", stock: 2 },
    ],
    stock: 17,
    isActive: true,
    imageUrl: "/assets/generated/product-lehenga.dim_400x500.jpg",
  },
  {
    id: 4,
    name: "Royal Sherwani Set",
    category: "ethnic",
    description:
      "Regal Silk Sherwani with intricate embroidery, paired with churidar and dupatta. The epitome of groom royalty.",
    price: 28000,
    sizes: [
      { size: "36", stock: 3 },
      { size: "38", stock: 4 },
      { size: "40", stock: 5 },
      { size: "42", stock: 3 },
      { size: "44", stock: 2 },
    ],
    stock: 17,
    isActive: true,
    imageUrl: "/assets/generated/product-sherwani.dim_400x500.jpg",
  },
  {
    id: 5,
    name: "Antique Kada Bracelet",
    category: "silver",
    description:
      "Solid Sterling Silver Kada with hand-engraved royal motifs. Worn by royals for centuries, now crafted for you.",
    price: 7375,
    silverWeight: 30,
    basePrice: 4500,
    sizes: [],
    stock: 12,
    isActive: true,
    imageUrl: "/assets/generated/product-kada.dim_400x500.jpg",
  },
  {
    id: 6,
    name: "Anarkali Suit - Royal Blue",
    category: "ethnic",
    description:
      "Floor-length Anarkali in royal blue with gold embroidery. The dress of queens, reimagined for 2025.",
    price: 18500,
    sizes: [
      { size: "XS", stock: 2 },
      { size: "S", stock: 3 },
      { size: "M", stock: 4 },
      { size: "L", stock: 3 },
      { size: "XL", stock: 2 },
    ],
    stock: 14,
    isActive: true,
    imageUrl: "/assets/generated/product-anarkali.dim_400x500.jpg",
  },
];

export const DEFAULT_SITE_IMAGES = {
  heroUrl: "/assets/images/lion-hero.jpg",
  logoUrl: "/assets/images/logo.png",
  necklaceImg: "/assets/generated/product-necklace-set.dim_400x500.jpg",
  ringsImg: "/assets/generated/product-chandbali.dim_400x500.jpg",
  banglesImg: "/assets/generated/product-kada.dim_400x500.jpg",
  earringsImg: "/assets/generated/product-chandbali.dim_400x500.jpg",
  ethnicImg: "/assets/generated/product-lehenga.dim_400x500.jpg",
};

export type SiteImages = typeof DEFAULT_SITE_IMAGES;

export type CurrencyCode = "INR" | "USD" | "AED" | "GBP" | "EUR";
export type LanguageCode = "English" | "Hindi" | "Arabic" | "French";

export const EXCHANGE_RATES: Record<string, number> = {
  INR: 1,
  USD: 0.012,
  AED: 0.044,
  GBP: 0.0095,
  EUR: 0.011,
};

export const CURRENCY_SYMBOLS: Record<string, string> = {
  INR: "₹",
  USD: "$",
  AED: "\u062f.\u0625",
  GBP: "£",
  EUR: "€",
};

export function convertPrice(priceInINR: number, currency: string): string {
  const rate = EXCHANGE_RATES[currency] ?? 1;
  const sym = CURRENCY_SYMBOLS[currency] ?? "₹";
  const converted = priceInINR * rate;
  return `${sym}${converted < 100 ? converted.toFixed(2) : Math.round(converted).toLocaleString()}`;
}

interface MishiStore {
  silverRate: number;
  products: Product[];
  cart: CartItem[];
  wishlist: number[];
  orders: Order[];
  nextOrderId: number;
  reviews: Review[];
  nextReviewId: number;
  isLoggedIn: boolean;
  phone: string;
  adminLevel: "primary" | "secondary" | "customer" | null;
  currentPage: string;
  siteImages: SiteImages;
  teamMembers: TeamMember[];
  masterPassword: string;
  currency: CurrencyCode;
  language: LanguageCode;
  setMasterPassword: (pw: string) => void;
  setCurrency: (c: CurrencyCode) => void;
  setLanguage: (l: LanguageCode) => void;

  // Actions
  updateSiteImage: (key: keyof SiteImages, value: string) => void;
  resetSiteImages: () => void;
  setSilverRate: (rate: number) => void;
  navigate: (page: string) => void;
  addToCart: (
    productId: number,
    quantity: number,
    selectedSize?: string,
  ) => void;
  removeFromCart: (productId: number, selectedSize?: string) => void;
  updateCartQty: (
    productId: number,
    quantity: number,
    selectedSize?: string,
  ) => void;
  clearCart: () => void;
  placeOrder: (shippingAddress: string) => number;
  toggleWishlist: (productId: number) => void;
  login: (phone: string, username?: string) => void;
  loginAsAdmin: (level: "primary" | "secondary") => void;
  logout: () => void;
  addProduct: (p: Omit<Product, "id">) => void;
  updateProduct: (id: number, updates: Partial<Product>) => void;
  advanceOrderStage: (orderId: number) => void;
  approveOrder: (orderId: number) => void;
  // Team management
  addTeamMember: (member: TeamMember) => void;
  removeTeamMember: (gmail: string) => void;
  revokeTeamMember: (gmail: string) => void;
  restoreTeamMember: (gmail: string) => void;
  updateTeamMemberRole: (gmail: string, role: "manager" | "viewer") => void;
  // Review actions
  addReview: (r: Omit<Review, "id" | "isApproved" | "submittedAt">) => void;
  approveReview: (id: number) => void;
  rejectReview: (id: number) => void;
}

const STAGES: OrderStage[] = [
  "orderPlaced",
  "artisanCrafting",
  "qualityCheck",
  "royalDispatch",
  "palaceDelivery",
];

const CO_FOUNDER_PERMANENT: TeamMember = {
  gmail: "kshivani05231@gmail.com",
  name: "Shivani",
  role: "coFounder",
  addedAt: "2025-01-01",
  isRevoked: false,
  isPermanent: true,
};

export const useMishi = create<MishiStore>()(
  persist(
    (set, get) => ({
      silverRate: 95,
      products: MOCK_PRODUCTS,
      cart: [],
      wishlist: [],
      orders: [],
      nextOrderId: 1001,
      reviews: [],
      nextReviewId: 1,
      isLoggedIn: false,
      phone: "",
      adminLevel: null,
      currentPage: "home",
      siteImages: DEFAULT_SITE_IMAGES,
      teamMembers: [CO_FOUNDER_PERMANENT],
      masterPassword: "MISHI1701",
      currency: "INR",
      language: "English",

      setSilverRate: (rate) => set({ silverRate: rate }),
      updateSiteImage: (key, value) =>
        set((state) => ({ siteImages: { ...state.siteImages, [key]: value } })),
      resetSiteImages: () => set({ siteImages: DEFAULT_SITE_IMAGES }),
      navigate: (page) => set({ currentPage: page }),
      setCurrency: (c) => set({ currency: c }),
      setLanguage: (l) => set({ language: l }),

      addToCart: (productId, quantity, selectedSize) =>
        set((state) => {
          const existing = state.cart.find(
            (i) => i.productId === productId && i.selectedSize === selectedSize,
          );
          if (existing) {
            return {
              cart: state.cart.map((i) =>
                i.productId === productId && i.selectedSize === selectedSize
                  ? { ...i, quantity: i.quantity + quantity }
                  : i,
              ),
            };
          }
          return {
            cart: [...state.cart, { productId, quantity, selectedSize }],
          };
        }),

      removeFromCart: (productId, selectedSize) =>
        set((state) => ({
          cart: state.cart.filter(
            (i) =>
              !(i.productId === productId && i.selectedSize === selectedSize),
          ),
        })),

      updateCartQty: (productId, quantity, selectedSize) =>
        set((state) => ({
          cart:
            quantity <= 0
              ? state.cart.filter(
                  (i) =>
                    !(
                      i.productId === productId &&
                      i.selectedSize === selectedSize
                    ),
                )
              : state.cart.map((i) =>
                  i.productId === productId && i.selectedSize === selectedSize
                    ? { ...i, quantity }
                    : i,
                ),
        })),

      clearCart: () => set({ cart: [] }),

      placeOrder: (shippingAddress) => {
        const { cart, products, nextOrderId, silverRate } = get();
        let total = 0;
        // biome-ignore lint/complexity/noForEach: pre-existing
        cart.forEach((ci) => {
          const p = products.find((pr) => pr.id === ci.productId);
          if (p) {
            const price =
              p.category === "silver" && p.silverWeight
                ? (p.basePrice || p.price) + p.silverWeight * silverRate
                : p.price;
            total += price * ci.quantity;
          }
        });
        const order: Order = {
          id: nextOrderId,
          items: [...cart],
          totalAmount: total,
          shippingAddress,
          stage: "orderPlaced",
          placedAt: Date.now(),
          isApproved: false,
        };
        set((state) => ({
          orders: [...state.orders, order],
          nextOrderId: state.nextOrderId + 1,
          cart: [],
        }));
        return nextOrderId;
      },

      toggleWishlist: (productId) =>
        set((state) => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist.filter((id) => id !== productId)
            : [...state.wishlist, productId],
        })),

      login: (phone, username) => {
        if (username === "MISHI1701") {
          set({ isLoggedIn: true, phone: username, adminLevel: "secondary" });
        } else {
          set({ isLoggedIn: true, phone, adminLevel: "customer" });
        }
      },
      loginAsAdmin: (level) =>
        set({
          isLoggedIn: true,
          phone: level === "primary" ? "Admin" : "Shrimati Ji",
          adminLevel: level,
        }),
      logout: () => set({ isLoggedIn: false, phone: "", adminLevel: null }),

      addProduct: (p) =>
        set((state) => {
          const id = Math.max(0, ...state.products.map((pr) => pr.id)) + 1;
          return { products: [...state.products, { ...p, id }] };
        }),

      updateProduct: (id, updates) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, ...updates } : p,
          ),
        })),

      advanceOrderStage: (orderId) =>
        set((state) => ({
          orders: state.orders.map((o) => {
            if (o.id !== orderId) return o;
            const idx = STAGES.indexOf(o.stage);
            return {
              ...o,
              stage: STAGES[Math.min(idx + 1, STAGES.length - 1)],
            };
          }),
        })),

      approveOrder: (orderId) =>
        set((state) => ({
          orders: state.orders.map((o) =>
            o.id === orderId
              ? { ...o, isApproved: true, stage: "artisanCrafting" }
              : o,
          ),
        })),

      // Team management
      addTeamMember: (member) =>
        set((state) => {
          if (member.gmail === CO_FOUNDER_PERMANENT.gmail) return state;
          return {
            teamMembers: [
              ...state.teamMembers.filter((m) => m.gmail !== member.gmail),
              member,
            ],
          };
        }),
      removeTeamMember: (gmail) =>
        set((state) => ({
          teamMembers: state.teamMembers.filter(
            (m) => m.gmail !== gmail || m.isPermanent,
          ),
        })),
      revokeTeamMember: (gmail) =>
        set((state) => ({
          teamMembers: state.teamMembers.map((m) =>
            m.gmail === gmail ? { ...m, isRevoked: true } : m,
          ),
        })),
      setMasterPassword: (pw) => set({ masterPassword: pw }),
      restoreTeamMember: (gmail) =>
        set((state) => ({
          teamMembers: state.teamMembers.map((m) =>
            m.gmail === gmail ? { ...m, isRevoked: false } : m,
          ),
        })),
      updateTeamMemberRole: (gmail, role) =>
        set((state) => ({
          teamMembers: state.teamMembers.map((m) =>
            m.gmail === gmail ? { ...m, role } : m,
          ),
        })),

      // Review actions
      addReview: (r) =>
        set((state) => ({
          reviews: [
            ...state.reviews,
            {
              ...r,
              id: state.nextReviewId,
              isApproved: false,
              submittedAt: Date.now(),
            },
          ],
          nextReviewId: state.nextReviewId + 1,
        })),
      approveReview: (id) =>
        set((state) => ({
          reviews: state.reviews.map((r) =>
            r.id === id ? { ...r, isApproved: true } : r,
          ),
        })),
      rejectReview: (id) =>
        set((state) => ({
          reviews: state.reviews.filter((r) => r.id !== id),
        })),
    }),
    {
      name: "mishi-store-v6",
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        orders: state.orders,
        nextOrderId: state.nextOrderId,
        reviews: state.reviews,
        nextReviewId: state.nextReviewId,
        isLoggedIn: state.isLoggedIn,
        phone: state.phone,
        adminLevel: state.adminLevel,
        silverRate: state.silverRate,
        products: state.products,
        siteImages: state.siteImages,
        teamMembers: state.teamMembers,
        masterPassword: state.masterPassword,
        currency: state.currency,
        language: state.language,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const hasCF = state.teamMembers.some(
            (m) => m.gmail === CO_FOUNDER_PERMANENT.gmail,
          );
          if (!hasCF) {
            state.teamMembers = [CO_FOUNDER_PERMANENT, ...state.teamMembers];
          }
          state.siteImages = DEFAULT_SITE_IMAGES;
        }
      },
    },
  ),
);

export function getProductPrice(p: Product, silverRate: number): number {
  if (p.category === "silver" && p.silverWeight && p.basePrice) {
    return p.basePrice + p.silverWeight * silverRate;
  }
  return p.price;
}

export const STAGE_LABELS: Record<OrderStage, string> = {
  orderPlaced: "Order Placed",
  artisanCrafting: "Artisan Crafting",
  qualityCheck: "Quality Check",
  royalDispatch: "Royal Dispatch",
  palaceDelivery: "Palace Delivery",
};

export const STAGE_ICONS: Record<OrderStage, string> = {
  orderPlaced: "👑",
  artisanCrafting: "⚒️",
  qualityCheck: "🛡️",
  royalDispatch: "🚚",
  palaceDelivery: "🏰",
};
