import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, ArrowRight, ChevronRight } from "lucide-react";
import { useApp } from "../context/AppContext";
import { STR } from "../data/translations";
import ProductCard from "../components/ProductCard";
import Button from "../components/ui/Button";

export default function Wishlist() {
  const { lang, wishlist } = useApp();
  const T = STR[lang];

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center"
          >
            <Heart className="w-12 h-12 text-pink-400" />
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {T.wishlist_empty_title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm">
            {T.wishlist_empty_desc}
          </p>
          <Link to="/">
            <Button icon={ArrowRight} iconPosition="right">
              {T.continue_shopping}
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container-luxe">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            {T.nav_shop}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-white font-medium">
            {T.nav_wishlist}
          </span>
        </nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {T.my_wishlist(wishlist.length)}
          </h1>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Continue Shopping */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link to="/">
            <Button variant="secondary" icon={ShoppingBag}>
              {T.continue_shopping}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
