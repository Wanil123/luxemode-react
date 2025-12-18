import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { useApp } from "../context/AppContext";
import { STR, formatPrice } from "../data/translations";
import Badge from "./ui/Badge";

const FALLBACK_IMAGE = "https://picsum.photos/seed/fashion/800/1200";

export default function ProductCard({ product, index = 0 }) {
  const { lang, addToCart, toggleWishlist, isWishlisted } = useApp();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const T = STR[lang];
  const wishlisted = isWishlisted(product.id);

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(100 - (product.price / product.originalPrice) * 100)
      : 0;

  const handleImageError = () => {
    setImageError(true);
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, {
      size: product.sizes?.[0] || "",
      color: product.colors?.[0] || "",
      qty: 1,
    });
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-700">
            {/* Skeleton */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 skeleton" />
            )}

            {/* Product Image */}
            <motion.img
              src={imageError ? FALLBACK_IMAGE : product.image}
              alt={product.name[lang]}
              className={`
                w-full h-full object-cover transition-all duration-700
                ${imageLoaded ? "opacity-100" : "opacity-0"}
              `}
              style={{
                transform: isHovered ? "scale(1.08)" : "scale(1)",
              }}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
            />

            {/* Overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.badge && (
                <Badge variant={product.badge} size="md" animated>
                  {T[product.badge]}
                </Badge>
              )}
              {discount > 0 && (
                <Badge variant="sale" size="md">
                  -{discount}%
                </Badge>
              )}
            </div>

            {/* Wishlist Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleWishlist}
              className={`
                absolute top-3 right-3 w-10 h-10 rounded-full
                flex items-center justify-center
                transition-all duration-300 shadow-lg
                ${
                  wishlisted
                    ? "bg-red-500 text-white"
                    : "bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white"
                }
              `}
              aria-label={wishlisted ? T.remove_from_wishlist : T.add_to_wishlist}
            >
              <Heart
                className={`w-5 h-5 transition-all ${wishlisted ? "fill-current" : ""}`}
              />
            </motion.button>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4 flex gap-2"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleQuickAdd}
                disabled={!product.inStock}
                className={`
                  flex-1 py-3 rounded-xl font-semibold text-sm
                  flex items-center justify-center gap-2
                  transition-all duration-300
                  ${
                    product.inStock
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }
                `}
              >
                <ShoppingBag className="w-4 h-4" />
                {product.inStock ? T.add_to_cart : T.unavailable}
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
              >
                <Eye className="w-5 h-5" />
              </motion.div>
            </motion.div>

            {/* Out of Stock Overlay */}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="px-4 py-2 bg-white rounded-lg font-semibold text-gray-900">
                  {T.coming_soon}
                </span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-4">
            {/* Category & Rating */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {product.category[lang]}
              </span>
              <div className="flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {product.rating}
                </span>
                <span className="text-gray-400">({product.reviews})</span>
              </div>
            </div>

            {/* Name */}
            <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {product.name[lang]}
            </h3>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {formatPrice(product.price, lang)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.originalPrice, lang)}
                </span>
              )}
              {discount > 0 && (
                <span className="text-sm font-semibold text-emerald-600">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Colors Preview */}
            {product.colors?.length > 0 && (
              <div className="flex items-center gap-1 mt-3">
                {product.colors.slice(0, 4).map((color, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full border-2 border-white dark:border-gray-700 shadow-sm"
                    style={{
                      backgroundColor:
                        color.toLowerCase() === "noir" || color.toLowerCase() === "black"
                          ? "#111"
                          : color.toLowerCase() === "blanc" || color.toLowerCase() === "white"
                          ? "#fff"
                          : color.toLowerCase() === "marron" || color.toLowerCase() === "brown"
                          ? "#8B4513"
                          : color.toLowerCase() === "cognac"
                          ? "#C68E17"
                          : color.toLowerCase() === "beige"
                          ? "#F5F5DC"
                          : color.toLowerCase() === "gris" || color.toLowerCase() === "grey"
                          ? "#808080"
                          : color.toLowerCase() === "camel"
                          ? "#C19A6B"
                          : color.toLowerCase() === "indigo"
                          ? "#4B0082"
                          : color.toLowerCase() === "or" || color.toLowerCase() === "gold"
                          ? "#FFD700"
                          : color.toLowerCase() === "argent" || color.toLowerCase() === "silver"
                          ? "#C0C0C0"
                          : color.toLowerCase() === "bleu marine" || color.toLowerCase() === "navy"
                          ? "#000080"
                          : "#ccc",
                    }}
                    title={color}
                  />
                ))}
                {product.colors.length > 4 && (
                  <span className="text-xs text-gray-500 ml-1">
                    +{product.colors.length - 4}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
