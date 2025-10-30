import React, { useEffect, useMemo, useState } from "react";

/** =========================
 *  i18n (FR / EN)
 *  ========================= */
const STR = {
  fr: {
    brand: "LuxeMode",
    nav_shop: "Boutique",
    nav_wishlist: "Favoris",
    nav_about: "À propos",
    cart: "Panier",
    discover: "Découvrir",
    offers: "Voir les offres",
    free_shipping: "Livraison gratuite",
    secure_pay: "Paiement sécurisé",
    free_returns: "Retours 30 jours",
    orders_over: "Commandes de plus de 100$",
    fully_encrypted: "Chiffré de bout en bout",
    returns_details: "30 jours pour changer d'avis",
    category_all: "Tous",
    filters: "Filtres",
    search_placeholder: "Recherche produits…",
    sort_featured: "En vedette",
    sort_price_asc: "Prix croissant",
    sort_price_desc: "Prix décroissant",
    sort_rating: "Mieux notés",
    products_count: "produit(s) affiché(s)",
    bestseller: "Bestseller",
    new: "Nouveau",
    limited: "Édition Limitée",
    coming_soon: "Bientôt disponible",
    view_product: "Voir le produit",
    unavailable: "Indisponible",
    size: "Taille",
    color: "Couleur",
    add_to_cart: "Ajouter au panier",
    secure_badge: "Paiement 100% sécurisé",
    back_shop: "← Retour à la boutique",
    empty_cart_title: "Votre panier est vide",
    empty_cart_desc: "Ajoutez des produits pour continuer.",
    order_summary: "Résumé de la commande",
    subtotal: "Sous-total",
    shipping: "Livraison",
    shipping_free: "Gratuite",
    taxes: "Taxes (15%)",
    total: "Total",
    checkout: "Procéder au paiement",
    cart_title: (n) => `Panier (${n})`,
    step1: "Livraison",
    step2: "Paiement",
    step3: "Confirmation",
    shipping_address: "Adresse de livraison",
    email: "Email",
    first: "Prénom",
    last: "Nom",
    address: "Adresse",
    city: "Ville",
    province: "Province",
    postal: "Code postal",
    phone: "Téléphone",
    continue: "Continuer",
    back_cart: "Retour au panier",
    payment: "Paiement",
    card_number: "Numéro de carte",
    card_name: "Nom sur la carte",
    exp: "Expiration (MM/AA)",
    cvv: "CVV",
    back: "Retour",
    confirmation: "Confirmation",
    confirm_order: "Confirmer la commande",
    wishlist_empty_title: "Votre liste de souhaits est vide",
    my_wishlist: (n) => `Mes Favoris (${n})`,
    thanks_title: "Merci pour votre commande!",
    thanks_desc:
      "Un courriel de confirmation vous a été envoyé. Livraison estimée 2–4 jours.",
    footer_links_delivery: "Livraison",
    footer_links_returns: "Retours",
    footer_links_terms: "Conditions",
    toggle_dark: "Thème",
    toggle_lang: "Langue",
    hero_title: "Collection Automne 2025",
    hero_desc:
      "Vêtements et accessoires premium. Livraison gratuite 100$+, retours 30 jours, paiement sécurisé.",

    // À PROPOS
    about_title: "À propos de LuxeMode",
    about_subtitle:
      "Qualité. Design. Confiance. Nous créons des essentiels modernes faits pour durer.",
    about_p1:
      "Fondée à Montréal, LuxeMode propose des pièces intemporelles conçues avec des matériaux premium et une attention maniaque aux détails.",
    about_p2:
      "Notre promesse : une expérience fluide — de la découverte au paiement — avec un service client réactif et des retours faciles sous 30 jours.",
    about_p3:
      "Nous privilégions une production responsable et des partenaires certifiés. Chaque saison, nous itérons sur les coupes, les textures et le confort.",
    about_values: "Nos piliers",
    about_val1: "Qualité durable",
    about_val2: "Design fonctionnel",
    about_val3: "Service aux petits oignons",
    about_cta: "Découvrir la boutique",
  },
  en: {
    brand: "LuxeMode",
    nav_shop: "Shop",
    nav_wishlist: "Wishlist",
    nav_about: "About",
    cart: "Cart",
    discover: "Discover",
    offers: "View offers",
    free_shipping: "Free shipping",
    secure_pay: "Secure payment",
    free_returns: "30-day returns",
    orders_over: "Orders over $100",
    fully_encrypted: "End-to-end encrypted",
    returns_details: "30 days to change your mind",
    category_all: "All",
    filters: "Filters",
    search_placeholder: "Search products…",
    sort_featured: "Featured",
    sort_price_asc: "Price (asc)",
    sort_price_desc: "Price (desc)",
    sort_rating: "Top rated",
    products_count: "product(s) shown",
    bestseller: "Bestseller",
    new: "New",
    limited: "Limited Edition",
    coming_soon: "Coming soon",
    view_product: "View product",
    unavailable: "Unavailable",
    size: "Size",
    color: "Color",
    add_to_cart: "Add to cart",
    secure_badge: "100% secure payment",
    back_shop: "← Back to shop",
    empty_cart_title: "Your cart is empty",
    empty_cart_desc: "Add products to continue.",
    order_summary: "Order summary",
    subtotal: "Subtotal",
    shipping: "Shipping",
    shipping_free: "Free",
    taxes: "Taxes (15%)",
    total: "Total",
    checkout: "Proceed to checkout",
    cart_title: (n) => `Cart (${n})`,
    step1: "Shipping",
    step2: "Payment",
    step3: "Confirmation",
    shipping_address: "Shipping address",
    email: "Email",
    first: "First name",
    last: "Last name",
    address: "Address",
    city: "City",
    province: "Province/State",
    postal: "ZIP/Postal code",
    phone: "Phone",
    continue: "Continue",
    back_cart: "Back to cart",
    payment: "Payment",
    card_number: "Card number",
    card_name: "Name on card",
    exp: "Expiry (MM/YY)",
    cvv: "CVV",
    back: "Back",
    confirmation: "Confirmation",
    confirm_order: "Confirm order",
    wishlist_empty_title: "Your wishlist is empty",
    my_wishlist: (n) => `My Wishlist (${n})`,
    thanks_title: "Thanks for your purchase!",
    thanks_desc:
      "A confirmation email was sent. Estimated delivery 2–4 days.",
    footer_links_delivery: "Delivery",
    footer_links_returns: "Returns",
    footer_links_terms: "Terms",
    toggle_dark: "Theme",
    toggle_lang: "Language",
    hero_title: "Autumn 2025 Collection",
    hero_desc:
      "Premium clothing & accessories. Free shipping $100+, 30-day returns, secure payment.",

    // ABOUT
    about_title: "About LuxeMode",
    about_subtitle:
      "Quality. Design. Trust. We craft modern essentials built to last.",
    about_p1:
      "Founded in Montreal, LuxeMode delivers timeless pieces made with premium materials and obsessive attention to detail.",
    about_p2:
      "Our promise: a seamless experience from discovery to checkout — with responsive support and hassle-free 30-day returns.",
    about_p3:
      "We focus on responsible production and certified partners. Each season we iterate on fit, textures and comfort.",
    about_values: "Our pillars",
    about_val1: "Lasting quality",
    about_val2: "Functional design",
    about_val3: "White-glove service",
    about_cta: "Browse the shop",
  },
};

const formatPrice = (n, lang) =>
  (lang === "fr" ? `${n.toFixed(2)}$` : `$${n.toFixed(2)}`);

/** ====== Images: fallback stables par catégorie ====== */
const FALLBACK_BY_CAT = {
  jackets: "https://picsum.photos/seed/jackets/1200/1600",
  shirts: "https://picsum.photos/seed/shirts/1200/1600",
  pants: "https://picsum.photos/seed/pants/1200/1600",
  shoes: "https://picsum.photos/seed/shoes/1200/1600",
  knitwear: "https://picsum.photos/seed/knitwear/1200/1600",
  accessories: "https://picsum.photos/seed/accessories/1200/1600",
  default: "https://picsum.photos/seed/fashion/1200/1600",
};
const catKey = (p) => (p?.category?.en || "").toLowerCase();
const categoryFallback = (p) =>
  FALLBACK_BY_CAT[catKey(p)] || FALLBACK_BY_CAT.default;

const FALLBACK_ALWAYS = "https://picsum.photos/seed/placeholder/1200/1600";
const setSafeFallback = (e, p) => {
  const img = e.currentTarget;
  img.onerror = null;
  const url =
    (categoryFallback(p) || FALLBACK_ALWAYS) +
    `?sig=${p?.id ?? Math.random()}`;
  img.src = url;
};

/** ====== Produits (URLs Unsplash spécifiques & stables) ====== */
const PRODUCTS = [
  {
    id: 1,
    name: { fr: "Veste en Cuir Premium", en: "Premium Leather Jacket" },
    category: { fr: "Vestes", en: "Jackets" },
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 127,
    inStock: true,
    badge: "bestseller",
    colors: ["Noir", "Marron", "Cognac"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "Cuir véritable, doublure satin, coupe ajustée. Fabriquée en Italie.",
      en: "Genuine leather, satin lining, tailored fit. Made in Italy.",
    },
  },
  {
    id: 2,
    name: { fr: "Chemise Oxford Blanche", en: "White Oxford Shirt" },
    category: { fr: "Chemises", en: "Shirts" },
    price: 69.9,
    originalPrice: 89.9,
    rating: 4.6,
    reviews: 82,
    inStock: true,
    badge: "new",
    colors: ["Blanc"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "Oxford premium, col boutonné, coton épais et doux.",
      en: "Premium Oxford, button-down collar, thick soft cotton.",
    },
  },
  {
    id: 3,
    name: { fr: "Pantalon Chino Beige", en: "Beige Chino Pants" },
    category: { fr: "Pantalons", en: "Pants" },
    price: 79.0,
    originalPrice: 0,
    rating: 4.4,
    reviews: 54,
    inStock: true,
    badge: null,
    colors: ["Beige", "Bleu marine"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "Chino coupe moderne, tissu stretch respirant.",
      en: "Modern fit chino, breathable stretch fabric.",
    },
  },
  {
    id: 4,
    name: { fr: "Sneakers Cuir Blanc", en: "White Leather Sneakers" },
    category: { fr: "Chaussures", en: "Shoes" },
    price: 149.0,
    originalPrice: 189.0,
    rating: 4.7,
    reviews: 211,
    inStock: true,
    badge: "limited",
    colors: ["Blanc"],
    sizes: ["40", "41", "42", "43", "44"],
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "Cuir pleine fleur, semelle confort. Minimaliste et premium.",
      en: "Full-grain leather, comfort sole. Minimal & premium.",
    },
  },
  {
    id: 5,
    name: { fr: "Pull Col Roulé Cachemire", en: "Cashmere Turtleneck" },
    category: { fr: "Pulls", en: "Knitwear" },
    price: 199.0,
    originalPrice: 249.0,
    rating: 4.9,
    reviews: 59,
    inStock: true,
    badge: "bestseller",
    colors: ["Gris", "Noir"],
    sizes: ["S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "100% cachemire grade A. Chaleur et douceur.",
      en: "100% grade-A cashmere. Warm and soft.",
    },
  },
  {
    id: 6,
    name: { fr: "Montre Automatique Or", en: "Gold Automatic Watch" },
    category: { fr: "Accessoires", en: "Accessories" },
    price: 799.0,
    originalPrice: 999.0,
    rating: 4.5,
    reviews: 31,
    inStock: true,
    badge: "new",
    colors: ["Or"],
    sizes: [],
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "Mouvement auto, verre saphir, bracelet cuir.",
      en: "Automatic movement, sapphire glass, leather strap.",
    },
  },
  {
    id: 7,
    name: { fr: "Sac à Dos Cuir", en: "Leather Backpack" },
    category: { fr: "Accessoires", en: "Accessories" },
    price: 259.0,
    originalPrice: 0,
    rating: 4.6,
    reviews: 76,
    inStock: true,
    badge: null,
    colors: ["Noir", "Cognac"],
    sizes: [],
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "Cuir pleine fleur, poches internes, laptop 16\".",
      en: "Full-grain leather, inner pockets, fits 16\" laptop.",
    },
  },
  {
    id: 8,
    name: { fr: "Lunettes Aviator", en: "Aviator Sunglasses" },
    category: { fr: "Accessoires", en: "Accessories" },
    price: 129.0,
    originalPrice: 159.0,
    rating: 4.3,
    reviews: 44,
    inStock: true,
    badge: null,
    colors: ["Or", "Argent"],
    sizes: [],
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "Verres polarisés, UV400, monture métal.",
      en: "Polarized UV400 lenses, metal frame.",
    },
  },
  {
    id: 9,
    name: { fr: "Manteau Laine Premium", en: "Premium Wool Coat" },
    category: { fr: "Vestes", en: "Jackets" },
    price: 349.0,
    originalPrice: 449.0,
    rating: 4.7,
    reviews: 68,
    inStock: true,
    badge: "bestseller",
    colors: ["Gris", "Camel"],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "Laine mérinos, coupe longue structurée.",
      en: "Merino wool, structured long fit.",
    },
  },
  {
    id: 10,
    name: { fr: "Jean Slim Brut", en: "Raw Slim Jeans" },
    category: { fr: "Pantalons", en: "Pants" },
    price: 99.0,
    originalPrice: 0,
    rating: 4.4,
    reviews: 97,
    inStock: true,
    badge: null,
    colors: ["Indigo"],
    sizes: ["28", "30", "32", "34", "36"],
    image:
      "https://images.unsplash.com/photo-1542272454315-7f6d5b926828?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "Denim brut selvedge, coupe slim.",
      en: "Raw selvedge denim, slim fit.",
    },
  },
  {
    id: 11,
    name: { fr: "Boots Chelsea Cuir", en: "Leather Chelsea Boots" },
    category: { fr: "Chaussures", en: "Shoes" },
    price: 219.0,
    originalPrice: 269.0,
    rating: 4.6,
    reviews: 142,
    inStock: true,
    badge: "limited",
    colors: ["Noir", "Marron"],
    sizes: ["40", "41", "42", "43", "44"],
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "Cuir lisse, semelle antidérapante.",
      en: "Smooth leather, anti-slip sole.",
    },
  },
  {
    id: 12,
    name: { fr: "Ceinture Réversible", en: "Reversible Belt" },
    category: { fr: "Accessoires", en: "Accessories" },
    price: 59.0,
    originalPrice: 0,
    rating: 4.2,
    reviews: 25,
    inStock: true,
    badge: null,
    colors: ["Noir/Cognac"],
    sizes: ["95", "105", "115"],
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583b1?auto=format&fit=crop&w=1200&q=80",
    description: {
      fr: "Deux couleurs en une, boucle métal brossé.",
      en: "Two colors in one, brushed metal buckle.",
    },
  },
];

/** --- helpers localStorage --- */
const load = (k, d) => {
  try {
    const v = localStorage.getItem(k);
    return v ? JSON.parse(v) : d;
  } catch {
    return d;
  }
};
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

/** ====== Helpers UI thème ====== */
const tw = (dark, lightCls, darkCls) => (dark ? darkCls : lightCls);

/** --- Buttons (thémés) --- */
const Btn = ({ className = "", dark = false, ...p }) => (
  <button
    className={
      tw(
        dark,
        "px-5 py-2.5 rounded-lg font-semibold transition bg-gray-900 text-white hover:bg-gray-800 disabled:bg-gray-300",
        "px-5 py-2.5 rounded-lg font-semibold transition bg-white text-gray-900 hover:bg-white/90 border border-white/20"
      ) + " " + className
    }
    {...p}
  />
);

const BtnGhost = ({ className = "", dark = false, ...p }) => (
  <button
    className={
      tw(
        dark,
        "px-5 py-2.5 rounded-lg font-semibold transition border-2 border-white text-white hover:bg-white/10",
        "px-5 py-2.5 rounded-lg font-semibold transition border-2 border-gray-900 text-gray-900 hover:bg-gray-50"
      ) + " " + className
    }
    {...p}
  />
);

const BtnOutlineLight = ({ className = "", ...p }) => (
  <button
    className={
      "px-5 py-2.5 rounded-lg font-semibold transition " +
      "border-2 border-white text-white hover:bg-white/10 " +
      className
    }
    {...p}
  />
);

const Badge = ({ children }) => (
  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gray-900 text-white">
    {children}
  </span>
);

/** --- Header --- */
function Header({
  cartCount,
  wishlistCount,
  onNav,
  dark,
  toggleDark,
  lang,
  setLang,
}) {
  const T = STR[lang];

  return (
    <header
      className={tw(
        dark,
        "sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200",
        "sticky top-0 z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNav("shop")}
        >
          <div
            className={tw(
              dark,
              "w-10 h-10 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 text-white grid place-items-center font-bold",
              "w-10 h-10 rounded-xl bg-white text-gray-900 grid place-items-center font-bold"
            )}
          >
            LM
          </div>
          <div
            className={tw(
              dark,
              "text-xl font-extrabold tracking-tight text-gray-900",
              "text-xl font-extrabold tracking-tight text-white"
            )}
          >
            {T.brand}
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            className={tw(
              dark,
              "hover:text-gray-900 text-gray-700 font-medium",
              "hover:text-white text-gray-200 font-medium"
            )}
            onClick={() => onNav("shop")}
          >
            {T.nav_shop}
          </button>
          <button
            className={tw(
              dark,
              "hover:text-gray-900 text-gray-700 font-medium",
              "hover:text-white text-gray-200 font-medium"
            )}
            onClick={() => onNav("wishlist")}
          >
            {T.nav_wishlist}
            {wishlistCount > 0 && (
              <span className="ml-1 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                {wishlistCount}
              </span>
            )}
          </button>
          <button
            className={tw(
              dark,
              "hover:text-gray-900 text-gray-700 font-medium",
              "hover:text-white text-gray-200 font-medium"
            )}
            onClick={() => onNav("about")}
          >
            {T.nav_about}
          </button>
        </nav>

        <div className="flex items-center gap-2">
          {/* Select langue lisible dans les deux thèmes */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className={tw(
              dark,
              "px-3 py-2 rounded-lg border text-sm border-gray-300 bg-white text-gray-900",
              "px-3 py-2 rounded-lg border text-sm border-gray-600 bg-gray-800 text-gray-100"
            )}
            title={T.toggle_lang}
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>

          <BtnGhost dark={dark} onClick={toggleDark} className="px-3 py-2" title={T.toggle_dark}>
            {dark ? "☀️" : "🌙"}
          </BtnGhost>
          <BtnGhost dark={dark} onClick={() => onNav("cart")} className="px-3 py-2">
            🛒 {cartCount}
          </BtnGhost>
        </div>
      </div>
    </header>
  );
}

/** --- Hero --- */
function Hero({ lang }) {
  const T = STR[lang];
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          {T.hero_title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          {T.hero_desc}
        </p>
        <div className="mt-8 flex gap-3">
          <Btn onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}>
            {T.discover}
          </Btn>
          <BtnOutlineLight onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}>
            {T.offers}
          </BtnOutlineLight>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-200">
          <div className="flex items-center gap-3">
            <span>🚚</span>
            <div>
              <div className="font-semibold">{T.free_shipping}</div>
              <div className="text-sm text-gray-300">{T.orders_over}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span>🔒</span>
            <div>
              <div className="font-semibold">{T.secure_pay}</div>
              <div className="text-sm text-gray-300">{T.fully_encrypted}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span>🔄</span>
            <div>
              <div className="font-semibold">{T.free_returns}</div>
              <div className="text-sm text-gray-300">{T.returns_details}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** --- Product card --- */
function ProductCard({ p, onOpen, toggleWishlist, wishlisted, lang, dark }) {
  const T = STR[lang];
  const discount =
    p.originalPrice && p.originalPrice > p.price
      ? Math.round(100 - (p.price / p.originalPrice) * 100)
      : 0;

  const cat = p.category[lang];
  const name = p.name[lang];

  return (
    <div
      className={
        tw(
          dark,
          "group bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden border border-gray-100",
          "group bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden border border-gray-700"
        )
      }
    >
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        {p.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge>
              {p.badge === "bestseller"
                ? T.bestseller
                : p.badge === "new"
                ? T.new
                : T.limited}
            </Badge>
          </div>
        )}
        <button
          onClick={() => toggleWishlist(p)}
          className={tw(
            dark,
            "absolute top-3 right-3 z-10 bg-white rounded-full shadow px-3 py-1 text-sm",
            "absolute top-3 right-3 z-10 bg-gray-900 text-white rounded-full shadow px-3 py-1 text-sm"
          )}
          title={T.nav_wishlist}
        >
          {wishlisted ? "❤️" : "🤍"}
        </button>
        <img
          src={p.image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          onError={(e) => setSafeFallback(e, p)}
        />
        {!p.inStock && (
          <div className="absolute inset-0 bg-black/50 grid place-items-center">
            <span className="bg-white text-gray-900 font-semibold px-3 py-1 rounded-lg">
              {T.coming_soon}
            </span>
          </div>
        )}
      </div>
      <div className={tw(dark, "p-4 text-gray-900", "p-4 text-gray-100")}>
        <div className="flex items-center justify-between mb-1">
          <span className={tw(dark, "text-xs uppercase tracking-wide text-gray-500", "text-xs uppercase tracking-wide text-gray-300")}>
            {cat}
          </span>
          <span className="text-sm">
            ⭐ {p.rating} ({p.reviews})
          </span>
        </div>
        <div className="font-semibold line-clamp-1">{name}</div>
        <div className="mt-1 flex items-center gap-2">
          <div className="text-lg font-bold">{formatPrice(p.price, lang)}</div>
          {!!p.originalPrice && p.originalPrice > p.price && (
            <>
              <div className={tw(dark, "text-sm text-gray-500 line-through", "text-sm text-gray-400 line-through")}>
                {formatPrice(p.originalPrice, lang)}
              </div>
              <div className="text-xs font-semibold text-green-600">-{discount}%</div>
            </>
          )}
        </div>
        <Btn
          dark={dark}
          className="w-full mt-3 disabled:bg-gray-300"
          onClick={() => onOpen(p)}
          disabled={!p.inStock}
        >
          {p.inStock ? T.view_product : T.unavailable}
        </Btn>
      </div>
    </div>
  );
}

/** --- Product detail --- */
function ProductDetail({ p, addToCart, toggleWishlist, wished, back, lang, dark }) {
  const T = STR[lang];
  const [size, setSize] = useState(p.sizes?.[0] || "");
 // no-op to avoid accidental label minification
  const [color, setColor] = useState(p.colors?.[0] || "");
  const [qty, setQty] = useState(1);

  const name = p.name[lang];
  const cat = p.category[lang];
  const desc = p.description[lang];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={back}
        className={tw(
          dark,
          "text-gray-600 hover:text-gray-900 mb-6",
          "text-gray-300 hover:text-white mb-6"
        )}
      >
        {T.back_shop}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="aspect-[3/4] bg-gray-100 overflow-hidden rounded-xl">
            <img
              src={p.image}
              alt={name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              onError={(e) => setSafeFallback(e, p)}
            />
          </div>
        </div>

        <div className={tw(dark, "", "text-gray-100")}>
          {p.badge && (
            <Badge>
              {p.badge === "bestseller"
                ? T.bestseller
                : p.badge === "new"
                ? T.new
                : T.limited}
            </Badge>
          )}
          <h1 className="mt-3 text-3xl font-extrabold">{name}</h1>
          <div className={tw(dark, "mt-1 text-sm text-gray-600", "mt-1 text-sm text-gray-300")}>
            ⭐ {p.rating} ({p.reviews}) — {cat}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="text-2xl font-extrabold">
              {formatPrice(p.price, lang)}
            </div>
            {!!p.originalPrice && p.originalPrice > p.price && (
              <div className={tw(dark, "text-gray-500 line-through", "text-gray-400 line-through")}>
                {formatPrice(p.originalPrice, lang)}
              </div>
            )}
          </div>

          <p className={tw(dark, "mt-4 text-gray-700 leading-relaxed", "mt-4 text-gray-300 leading-relaxed")}>
            {desc}
          </p>

          {p.sizes?.length > 0 && (
            <div className="mt-5">
              <div className="text-sm font-semibold mb-2">{T.size}</div>
              <div className="flex flex-wrap gap-2">
                {p.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={
                      "px-3 py-1.5 rounded-lg border " +
                      (s === size
                        ? tw(dark, "border-gray-900", "border-white")
                        : tw(dark, "border-gray-300", "border-gray-500"))
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {p.colors?.length > 0 && (
            <div className="mt-4">
              <div className="text-sm font-semibold mb-2">{T.color}</div>
              <div className="flex flex-wrap gap-2">
                {p.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={
                      "px-3 py-1.5 rounded-lg border " +
                      (c === color
                        ? tw(dark, "border-gray-900", "border-white")
                        : tw(dark, "border-gray-300", "border-gray-500"))
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 flex items-center gap-3">
            <div className={tw(dark, "flex items-center border rounded-lg", "flex items-center border rounded-lg border-gray-600")}>
              <button className="px-3 py-2" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                −
              </button>
              <span className="px-5 font-semibold">{qty}</span>
              <button className="px-3 py-2" onClick={() => setQty((q) => q + 1)}>
                +
              </button>
            </div>

            <Btn dark={dark} onClick={() => addToCart(p, { size, color, qty })} className="min-w-56">
              {T.add_to_cart}
            </Btn>
            <BtnGhost dark={dark} onClick={() => toggleWishlist(p)}>
              {wished ? "❤️" : "🤍"}
            </BtnGhost>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className={tw(dark, "border rounded-xl p-3", "border rounded-xl p-3 border-gray-600 text-gray-200")}>
              🚚 {T.free_shipping}
            </div>
            <div className={tw(dark, "border rounded-xl p-3", "border rounded-xl p-3 border-gray-600 text-gray-200")}>
              🔒 {T.secure_badge}
            </div>
            <div className={tw(dark, "border rounded-xl p-3", "border rounded-xl p-3 border-gray-600 text-gray-200")}>
              🔄 {T.free_returns}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** --- Cart & Summary --- */
function Cart({ cart, updateQty, removeItem, toCheckout, lang, dark }) {
  const T = STR[lang];
  const subtotal = useMemo(
    () => cart.reduce((s, it) => s + it.price * it.qty, 0),
    [cart]
  );
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.15;
  const total = subtotal + shipping + tax;

  const onImgError = (it, e) => setSafeFallback(e, it);

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl">🛒</div>
        <h2 className={tw(dark, "text-2xl font-bold mt-4", "text-2xl font-bold mt-4 text-gray-100")}>
          {T.empty_cart_title}
        </h2>
        <p className={tw(dark, "text-gray-600 mt-2", "text-gray-300 mt-2")}>
          {T.empty_cart_desc}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className={tw(dark, "text-2xl font-extrabold mb-4", "text-2xl font-extrabold mb-4 text-gray-100")}>
          {T.cart_title(cart.length)}
        </h1>
        <div className="space-y-4">
          {cart.map((it, i) => (
            <div
              key={i}
              className={tw(
                dark,
                "flex gap-4 p-4 bg-white rounded-xl border",
                "flex gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700 text-gray-100"
              )}
            >
              <img
                src={it.image}
                alt={it.name[lang]}
                className="w-28 h-28 object-cover rounded-lg"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
                onError={(e) => onImgError(it, e)}
              />
              <div className="flex-1">
                <div className="font-semibold">{it.name[lang]}</div>
                <div className={tw(dark, "text-sm text-gray-600", "text-sm text-gray-300")}>
                  {it.size && <> {STR[lang].size}&nbsp;{it.size} • </>}
                  {it.color && <> {STR[lang].color}&nbsp;{it.color}</>}
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <div className={tw(dark, "flex items-center border rounded-lg", "flex items-center border rounded-lg border-gray-600")}>
                    <button className="px-3 py-1.5" onClick={() => updateQty(i, Math.max(1, it.qty - 1))}>
                      −
                    </button>
                    <span className="px-5">{it.qty}</span>
                    <button className="px-3 py-1.5" onClick={() => updateQty(i, it.qty + 1)}>
                      +
                    </button>
                  </div>
                  <div className="font-semibold">{formatPrice(it.price * it.qty, lang)}</div>
                  <button
                    onClick={() => removeItem(i)}
                    className={tw(dark, "ml-auto text-gray-600 hover:text-red-600", "ml-auto text-gray-300 hover:text-red-400")}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="lg:sticky lg:top-24 h-fit">
        <div className={tw(dark, "bg-gray-50 rounded-xl p-6 border", "bg-gray-800 rounded-xl p-6 border border-gray-700 text-gray-100")}>
          <h2 className="text-lg font-bold mb-4">{T.order_summary}</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{T.subtotal}</span>
              <span>{formatPrice(subtotal, lang)}</span>
            </div>
            <div className="flex justify-between">
              <span>{T.shipping}</span>
              <span>{shipping === 0 ? T.shipping_free : formatPrice(shipping, lang)}</span>
            </div>
            <div className="flex justify-between">
              <span>{T.taxes}</span>
              <span>{formatPrice(tax, lang)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-extrabold">
              <span>{T.total}</span>
              <span>{formatPrice(total, lang)}</span>
            </div>
          </div>
          <Btn dark={dark} className="w-full mt-4" onClick={toCheckout}>
            {T.checkout}
          </Btn>
          <div className={tw(dark, "mt-3 text-xs text-gray-600", "mt-3 text-xs text-gray-300")}>🔒 {T.secure_badge}</div>
        </div>
      </aside>
    </div>
  );
}

/** --- Checkout --- */
function Checkout({ cart, onConfirm, backToCart, lang, dark }) {
  const T = STR[lang];
  const [step, setStep] = useState(1);
  const [ship, setShip] = useState({
    email: "",
    first: "",
    last: "",
    address: "",
    city: "",
    province: lang === "fr" ? "QC" : "QC",
    postal: "",
    phone: "",
  });
  const [pay, setPay] = useState({ card: "", name: "", exp: "", cvv: "" });

  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.15;
  const total = subtotal + shipping + tax;

  const onImgError = (it, e) => setSafeFallback(e, it);

  const inputCls = tw(
    dark,
    "input-field",
    "input-field bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400"
  );

  const canNext1 =
    ship.email && ship.first && ship.last && ship.address && ship.city && ship.postal;
  const canNext2 = pay.card && pay.name && pay.exp && pay.cvv;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center gap-2 text-sm mb-6">
        <div className={tw(dark, "w-8 h-8 rounded-full grid place-items-center bg-gray-900 text-white", "w-8 h-8 rounded-full grid place-items-center bg-white text-gray-900 border border-gray-500")}>1</div>
        <span className={tw(dark, "", "text-gray-200")}>{T.step1}</span>
        <div className={tw(dark, "h-px flex-1 bg-gray-300 mx-2", "h-px flex-1 bg-gray-700 mx-2")} />
        <div className={tw(dark, `w-8 h-8 rounded-full grid place-items-center ${step>=2?"bg-gray-900 text-white":"bg-gray-200"}`, `w-8 h-8 rounded-full grid place-items-center ${step>=2?"bg-white text-gray-900":"bg-gray-700 text-gray-300"}`)}>2</div>
        <span className={tw(dark, "", "text-gray-200")}>{T.step2}</span>
        <div className={tw(dark, "h-px flex-1 bg-gray-300 mx-2", "h-px flex-1 bg-gray-700 mx-2")} />
        <div className={tw(dark, `w-8 h-8 rounded-full grid place-items-center ${step>=3?"bg-gray-900 text-white":"bg-gray-200"}`, `w-8 h-8 rounded-full grid place-items-center ${step>=3?"bg-white text-gray-900":"bg-gray-700 text-gray-300"}`)}>3</div>
        <span className={tw(dark, "", "text-gray-200")}>{T.step3}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 1 && (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (canNext1) setStep(2);
              }}
            >
              <h2 className={tw(dark, "text-xl font-bold", "text-xl font-bold text-gray-100")}>
                {T.shipping_address}
              </h2>
              <input
                className={inputCls}
                placeholder={T.email}
                value={ship.email}
                onChange={(e) => setShip({ ...ship, email: e.target.value })}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  className={inputCls}
                  placeholder={T.first}
                  value={ship.first}
                  onChange={(e) => setShip({ ...ship, first: e.target.value })}
                />
                <input
                  className={inputCls}
                  placeholder={T.last}
                  value={ship.last}
                  onChange={(e) => setShip({ ...ship, last: e.target.value })}
                />
              </div>
              <input
                className={inputCls}
                placeholder={T.address}
                value={ship.address}
                onChange={(e) => setShip({ ...ship, address: e.target.value })}
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  className={inputCls}
                  placeholder={T.city}
                  value={ship.city}
                  onChange={(e) => setShip({ ...ship, city: e.target.value })}
                />
                <input
                  className={inputCls}
                  placeholder={T.province}
                  value={ship.province}
                  onChange={(e) => setShip({ ...ship, province: e.target.value })}
                />
                <input
                  className={inputCls}
                  placeholder={T.postal}
                  value={ship.postal}
                  onChange={(e) => setShip({ ...ship, postal: e.target.value })}
                />
              </div>
              <input
                className={inputCls}
                placeholder={T.phone}
                value={ship.phone}
                onChange={(e) => setShip({ ...ship, phone: e.target.value })}
              />

              <div className="flex gap-3">
                <Btn type="submit" disabled={!canNext1}>
                  {T.continue}
                </Btn>
                <BtnGhost dark={dark} type="button" onClick={backToCart}>
                  {T.back_cart}
                </BtnGhost>
              </div>
            </form>
          )}

          {step === 2 && (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (canNext2) setStep(3);
              }}
            >
              <h2 className={tw(dark, "text-xl font-bold", "text-xl font-bold text-gray-100")}>
                {T.payment}
              </h2>
              <input
                className={inputCls}
                placeholder={T.card_number}
                value={pay.card}
                onChange={(e) => setPay({ ...pay, card: e.target.value })}
              />
              <input
                className={inputCls}
                placeholder={T.card_name}
                value={pay.name}
                onChange={(e) => setPay({ ...pay, name: e.target.value })}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  className={inputCls}
                  placeholder={T.exp}
                  value={pay.exp}
                  onChange={(e) => setPay({ ...pay, exp: e.target.value })}
                />
                <input
                  className={inputCls}
                  placeholder={T.cvv}
                  value={pay.cvv}
                  onChange={(e) => setPay({ ...pay, cvv: e.target.value })}
                />
              </div>
              <div className={tw(dark, "text-xs text-gray-600", "text-xs text-gray-300")}>
                🔒 {STR[lang].secure_badge}
              </div>

              <div className="flex gap-3">
                <Btn type="submit" disabled={!canNext2}>
                  {T.continue}
                </Btn>
                <BtnGhost dark={dark} type="button" onClick={() => setStep(1)}>
                  {T.back}
                </BtnGhost>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className={tw(dark, "text-xl font-bold", "text-xl font-bold text-gray-100")}>
                {T.confirmation}
              </h2>
              <div className={tw(dark, "bg-white rounded-xl border p-4", "bg-gray-800 rounded-xl border border-gray-700 p-4 text-gray-100")}>
                <div className="font-semibold">{T.shipping_address}</div>
                <div className={tw(dark, "text-sm text-gray-600", "text-sm text-gray-300")}>
                  {ship.first} {ship.last} — {ship.address}, {ship.city} {ship.province} {ship.postal}
                </div>
              </div>
              <div className={tw(dark, "bg-white rounded-xl border p-4", "bg-gray-800 rounded-xl border border-gray-700 p-4 text-gray-100")}>
                <div className="font-semibold">{T.payment}</div>
                <div className={tw(dark, "text-sm text-gray-600", "text-sm text-gray-300")}>
                  Card •••• {pay.card.slice(-4) || "0000"}
                </div>
              </div>

              <div className="flex gap-3">
                <Btn onClick={onConfirm}>{T.confirm_order}</Btn>
                <BtnGhost dark={dark} onClick={() => setStep(2)}>
                  {T.back}
                </BtnGhost>
              </div>
            </div>
          )}
        </div>

        <aside className="h-fit">
          <div className={tw(dark, "bg-gray-50 rounded-xl p-6 border", "bg-gray-800 rounded-xl p-6 border border-gray-700 text-gray-100")}>
            <h2 className="text-lg font-bold mb-4">{STR[lang].order_summary}</h2>
            <div className="space-y-2 text-sm">
              {cart.map((it, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img
                    src={it.image}
                    alt={it.name[lang]}
                    className="w-12 h-12 object-cover rounded"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    onError={(e) => onImgError(it, e)}
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{it.name[lang]}</div>
                    <div className={tw(dark, "text-gray-600", "text-gray-300")}>
                      {it.qty} × {formatPrice(it.price, lang)}
                    </div>
                  </div>
                  <div className="font-semibold">{formatPrice(it.qty * it.price, lang)}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-sm space-y-1">
              <div className="flex justify-between">
                <span>{STR[lang].subtotal}</span>
                <span>{formatPrice(subtotal, lang)}</span>
              </div>
              <div className="flex justify-between">
                <span>{STR[lang].shipping}</span>
                <span>{shipping === 0 ? STR[lang].shipping_free : formatPrice(shipping, lang)}</span>
              </div>
              <div className="flex justify-between">
                <span>{STR[lang].taxes}</span>
                <span>{formatPrice(tax, lang)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-extrabold">
                <span>{STR[lang].total}</span>
                <span>{formatPrice(total, lang)}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

/** --- Wishlist --- */
function Wishlist({ wishlist, toggleWishlist, goProduct, lang, dark }) {
  const T = STR[lang];
  if (wishlist.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl">🤍</div>
        <h2 className={tw(dark, "text-2xl font-bold mt-4", "text-2xl font-bold mt-4 text-gray-100")}>
          {T.wishlist_empty_title}
        </h2>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className={tw(dark, "text-2xl font-extrabold mb-6", "text-2xl font-extrabold mb-6 text-gray-100")}>
        {T.my_wishlist(wishlist.length)}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((p) => (
          <ProductCard
            key={p.id}
            p={p}
            onOpen={goProduct}
            toggleWishlist={toggleWishlist}
            wishlisted={true}
            lang={lang}
            dark={dark}
          />
        ))}
      </div>
    </div>
  );
}

/** --- About Page --- */
function About({ lang, toShop, dark }) {
  const T = STR[lang];
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">{T.about_title}</h1>
          <p className="mt-3 text-gray-200 text-lg max-w-3xl">{T.about_subtitle}</p>
          <div className="mt-6">
            <BtnOutlineLight onClick={toShop}>{T.about_cta}</BtnOutlineLight>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className={tw(dark, "text-gray-700 leading-relaxed", "text-gray-300 leading-relaxed")}>{T.about_p1}</p>
          <p className={tw(dark, "text-gray-700 leading-relaxed mt-4", "text-gray-300 leading-relaxed mt-4")}>{T.about_p2}</p>
          <p className={tw(dark, "text-gray-700 leading-relaxed mt-4", "text-gray-300 leading-relaxed mt-4")}>{T.about_p3}</p>
        </div>
        <div>
          <div className="aspect-[3/4] rounded-xl overflow-hidden border bg-gray-100">
            <img
              src="https://picsum.photos/seed/atelier/1200/1600"
              alt="Atelier"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_ALWAYS;
              }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className={tw(dark, "text-xl font-bold", "text-xl font-bold text-gray-100")}>{T.about_values}</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🧵",
              label: T.about_val1,
              text:
                lang === "fr"
                  ? "Des tissus choisis, des finitions propres, des coupes qui ne bougent pas."
                  : "Selected fabrics, clean finishes, fits that last.",
            },
            {
              icon: "🧭",
              label: T.about_val2,
              text:
                lang === "fr"
                  ? "Des détails utiles (poches, doublures, entretien simple)."
                  : "Useful details (pockets, linings, easy care).",
            },
            {
              icon: "🤝",
              label: T.about_val3,
              text:
                lang === "fr"
                  ? "Réponses rapides, retours faciles, suivi de commande fiable."
                  : "Fast replies, easy returns, reliable tracking.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className={tw(
                dark,
                "rounded-xl border p-5 bg-white",
                "rounded-xl border border-gray-700 p-5 bg-gray-800 text-gray-100"
              )}
            >
              <div className="text-3xl">{v.icon}</div>
              <div className="font-semibold mt-2">{v.label}</div>
              <div className={tw(dark, "text-gray-600 mt-1", "text-gray-300 mt-1")}>{v.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** --- Shop --- */
function Shop({ products, onOpen, toggleWishlist, wishlist, setFilters, filters, lang, dark }) {
  const T = STR[lang];
  const categories = [
    { fr: "Tous", en: "All" },
    { fr: "Vestes", en: "Jackets" },
    { fr: "Chemises", en: "Shirts" },
    { fr: "Pantalons", en: "Pants" },
    { fr: "Chaussures", en: "Shoes" },
    { fr: "Pulls", en: "Knitwear" },
    { fr: "Accessoires", en: "Accessories" },
  ];

  const filtered = useMemo(() => {
    let out = [...products];
    if (filters.category !== "all") {
      out = out.filter((p) => p.category[lang].toLowerCase() === filters.category);
    }
    if (filters.query) {
      const q = filters.query.toLowerCase();
      out = out.filter((p) => {
        const name = p.name[lang].toLowerCase();
        const cat = p.category[lang].toLowerCase();
        const desc = p.description[lang].toLowerCase();
        return name.includes(q) || cat.includes(q) || desc.includes(q);
      });
    }
    if (filters.sort === "price-asc") out.sort((a, b) => a.price - b.price);
    if (filters.sort === "price-desc") out.sort((a, b) => b.price - a.price);
    if (filters.sort === "rating") out.sort((a, b) => b.rating - a.rating);
    return out;
  }, [products, filters, lang]);

  return (
    <div>
      <Hero lang={lang} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const key = c[lang].toLowerCase();
              const allKey = STR[lang].category_all.toLowerCase();
              const value = key === allKey ? "all" : key;
              return (
                <button
                  key={value}
                  onClick={() => setFilters((f) => ({ ...f, category: value }))}
                  className={
                    "px-4 py-2 rounded-lg border " +
                    (filters.category === value
                      ? tw(dark, "border-gray-900", "border-white")
                      : tw(dark, "border-gray-300", "border-gray-600 text-gray-200"))
                  }
                >
                  {c[lang]}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <input
              placeholder={T.search_placeholder}
              className={tw(
                dark,
                "px-4 py-2 rounded-lg border border-gray-300",
                "px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-gray-100 placeholder-gray-400"
              )}
              value={filters.query}
              onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
            />
            <select
              className={tw(
                dark,
                "px-4 py-2 rounded-lg border border-gray-300",
                "px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-gray-100"
              )}
              value={filters.sort}
              onChange={(e) => setFilters((f) => ({ ...f, sort: e.target.value }))}
            >
              <option value="featured">{T.sort_featured}</option>
              <option value="price-asc">{T.sort_price_asc}</option>
              <option value="price-desc">{T.sort_price_desc}</option>
              <option value="rating">{T.sort_rating}</option>
            </select>
          </div>
        </div>

        <div className={tw(dark, "mt-4 text-sm text-gray-600", "mt-4 text-sm text-gray-300")}>
          {filtered.length} {T.products_count}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              p={p}
              onOpen={onOpen}
              toggleWishlist={toggleWishlist}
              wishlisted={wishlist.some((w) => w.id === p.id)}
              lang={lang}
              dark={dark}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** --- Root SPA --- */
export default function LuxeMode() {
  const [lang, setLang] = useState(() => load("lm_lang", "fr"));
  // ✅ Par défaut en **clair**
  const [dark, setDark] = useState(() => load("lm_dark", false));
  const [view, setView] = useState("shop");
  const [filters, setFilters] = useState({ category: "all", sort: "featured", query: "" });
  const [products] = useState(PRODUCTS);
  const [current, setCurrent] = useState(null);

  const [cart, setCart] = useState(() => load("lm_cart", []));
  const [wishlist, setWishlist] = useState(() => load("lm_wishlist", []));

  useEffect(() => save("lm_cart", cart), [cart]);
  useEffect(() => save("lm_wishlist", wishlist), [wishlist]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    save("lm_dark", dark);
  }, [dark]);

  useEffect(() => save("lm_lang", lang), [lang]);

  // Perf: preconnect Unsplash
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://images.unsplash.com";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const addToCart = (p, { size, color, qty }) => {
    setCart((c) => {
      const idx = c.findIndex(
        (i) => i.id === p.id && i.size === size && i.color === color
      );
      const mappedName = p.name;
      if (idx > -1) {
        const copy = [...c];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty, image: p.image };
        return copy;
      }
      return [
        ...c,
        {
          id: p.id,
          name: mappedName,
          price: p.price,
          image: p.image,
          size: size || "",
          color: color || "",
          qty,
          category: p.category,
        },
      ];
    });
    setView("cart");
  };

  const updateQty = (i, qty) =>
    setCart((c) => {
      const copy = [...c];
      copy[i] = { ...copy[i], qty };
      return copy;
    });

  const removeItem = (i) => setCart((c) => c.filter((_, idx) => idx !== i));

  const toggleWishlist = (p) =>
    setWishlist((w) => {
      const found = w.find((x) => x.id === p.id);
      if (found) return w.filter((x) => x.id !== p.id);
      return [...w, p];
    });

  const onOpenProduct = (p) => {
    setCurrent(p);
    setView("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onConfirmOrder = () => {
    setCart([]);
    setView("thanks");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const T = STR[lang];

  return (
    <div className={tw(dark, "min-h-screen bg-white text-gray-900", "min-h-screen bg-gray-900 text-gray-100")}>
      <Header
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        wishlistCount={wishlist.length}
        onNav={setView}
        dark={dark}
        toggleDark={() => setDark((d) => !d)}
        lang={lang}
        setLang={setLang}
      />

      {view === "shop" && (
        <Shop
          products={products}
          onOpen={onOpenProduct}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
          filters={filters}
          setFilters={setFilters}
          lang={lang}
          dark={dark}
        />
      )}

      {view === "product" && current && (
        <ProductDetail
          p={current}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wished={wishlist.some((w) => w.id === current.id)}
          back={() => setView("shop")}
          lang={lang}
          dark={dark}
        />
      )}

      {view === "cart" && (
        <Cart
          cart={cart}
          updateQty={updateQty}
          removeItem={removeItem}
          toCheckout={() => setView("checkout")}
          lang={lang}
          dark={dark}
        />
      )}

      {view === "wishlist" && (
        <Wishlist
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
          goProduct={onOpenProduct}
          lang={lang}
          dark={dark}
        />
      )}

      {view === "checkout" && (
        <Checkout
          cart={cart}
          onConfirm={onConfirmOrder}
          backToCart={() => setView("cart")}
          lang={lang}
          dark={dark}
        />
      )}

      {view === "about" && (
        <About
          lang={lang}
          toShop={() => setView("shop")}
          dark={dark}
        />
      )}

      {view === "thanks" && (
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <div className="text-6xl">✅</div>
          <h1 className="mt-4 text-3xl font-extrabold">{T.thanks_title}</h1>
          <p className={tw(dark, "mt-2 text-gray-600", "mt-2 text-gray-300")}>
            {T.thanks_desc}
          </p>
          <div className="mt-6">
            <Btn onClick={() => setView("shop")}>{T.nav_shop}</Btn>
          </div>
        </div>
      )}

      <footer className={tw(dark, "mt-20 border-t", "mt-20 border-t border-gray-800")}>
        <div className="max-w-7xl mx-auto px-4 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© 2025 {T.brand} — Développé par Wanil Parfait</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">{STR[lang].footer_links_delivery}</a>
            <a href="#" className="hover:underline">{STR[lang].footer_links_returns}</a>
            <a href="#" className="hover:underline">{STR[lang].footer_links_terms}</a>
          </div>
        </div>
      </footer>

      {/* Small CSS helpers */}
      <style>{`
        .input-field { padding: .65rem .9rem; border-radius: .5rem; border: 1px solid #e5e7eb; width: 100%; }
        .line-clamp-1 { overflow: hidden; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; }
      `}</style>
    </div>
  );
}
