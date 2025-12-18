import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, SlidersHorizontal, Grid3X3, LayoutGrid } from "lucide-react";
import { useApp } from "../context/AppContext";
import { STR } from "../data/translations";
import { PRODUCTS, CATEGORIES } from "../data/products";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Button from "../components/ui/Button";

export default function Shop() {
  const { lang } = useApp();
  const T = STR[lang];

  const [filters, setFilters] = useState({
    category: "all",
    sort: "featured",
    query: "",
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [gridCols, setGridCols] = useState(4);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (filters.category !== "all") {
      result = result.filter(
        (p) => p.category.en.toLowerCase() === filters.category
      );
    }

    // Search filter
    if (filters.query) {
      const q = filters.query.toLowerCase();
      result = result.filter((p) => {
        const name = p.name[lang].toLowerCase();
        const cat = p.category[lang].toLowerCase();
        const desc = p.description[lang].toLowerCase();
        return name.includes(q) || cat.includes(q) || desc.includes(q);
      });
    }

    // Sort
    switch (filters.sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [filters, lang]);

  const clearFilters = () => {
    setFilters({ category: "all", sort: "featured", query: "" });
  };

  const hasActiveFilters = filters.category !== "all" || filters.query;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Hero />

      {/* Shop Section */}
      <section className="py-12 md:py-16">
        <div className="container-luxe">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === "fr" ? "Notre Collection" : "Our Collection"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {lang === "fr"
                ? "Découvrez nos pièces soigneusement sélectionnées pour votre style unique."
                : "Discover our carefully curated pieces for your unique style."}
            </p>
          </motion.div>

          {/* Filters Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Categories - Desktop */}
            <div className="hidden lg:flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <motion.button
                  key={cat.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilters((f) => ({ ...f, category: cat.value }))}
                  className={`
                    px-5 py-2.5 rounded-xl font-medium transition-all duration-300
                    ${
                      filters.category === cat.value
                        ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }
                  `}
                >
                  {cat[lang]}
                </motion.button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <Button
              variant="secondary"
              icon={SlidersHorizontal}
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden"
            >
              {T.filters}
            </Button>

            {/* Right side controls */}
            <div className="flex items-center gap-3 lg:ml-auto">
              {/* Search */}
              <div className="relative flex-1 lg:flex-none lg:w-64">
                <input
                  type="text"
                  placeholder={T.search_placeholder}
                  value={filters.query}
                  onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
                  className="w-full px-4 py-2.5 pl-10 rounded-xl bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-violet-500 text-gray-900 dark:text-white placeholder-gray-400 transition-all outline-none"
                />
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                {filters.query && (
                  <button
                    onClick={() => setFilters((f) => ({ ...f, query: "" }))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <X className="w-3 h-3 text-gray-500" />
                  </button>
                )}
              </div>

              {/* Sort */}
              <select
                value={filters.sort}
                onChange={(e) => setFilters((f) => ({ ...f, sort: e.target.value }))}
                className="px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium focus:outline-none focus:ring-2 focus:ring-violet-500/50 cursor-pointer"
              >
                <option value="featured">{T.sort_featured}</option>
                <option value="price-asc">{T.sort_price_asc}</option>
                <option value="price-desc">{T.sort_price_desc}</option>
                <option value="rating">{T.sort_rating}</option>
                <option value="newest">{T.sort_newest}</option>
              </select>

              {/* Grid Toggle - Desktop */}
              <div className="hidden xl:flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                <button
                  onClick={() => setGridCols(3)}
                  className={`p-2 rounded-lg transition-colors ${
                    gridCols === 3
                      ? "bg-white dark:bg-gray-700 shadow-sm"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridCols(4)}
                  className={`p-2 rounded-lg transition-colors ${
                    gridCols === 4
                      ? "bg-white dark:bg-gray-700 shadow-sm"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          <AnimatePresence>
            {hasActiveFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-2 mb-6 flex-wrap"
              >
                <span className="text-sm text-gray-500">{T.filters}:</span>
                {filters.category !== "all" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm">
                    {CATEGORIES.find((c) => c.value === filters.category)?.[lang]}
                    <button
                      onClick={() => setFilters((f) => ({ ...f, category: "all" }))}
                      className="ml-1 hover:text-violet-900"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filters.query && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm">
                    "{filters.query}"
                    <button
                      onClick={() => setFilters((f) => ({ ...f, query: "" }))}
                      className="ml-1 hover:text-violet-900"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline"
                >
                  {T.clear_filters}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products Count */}
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {filteredProducts.length} {T.products_count}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div
              className={`
                grid gap-6
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                ${gridCols === 4 ? "xl:grid-cols-4" : "xl:grid-cols-3"}
              `}
            >
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {T.no_products}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {lang === "fr"
                  ? "Essayez de modifier vos filtres"
                  : "Try adjusting your filters"}
              </p>
              <Button onClick={clearFilters}>{T.clear_filters}</Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 rounded-t-3xl z-50 lg:hidden max-h-[80vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {T.filters}
                  </h3>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {lang === "fr" ? "Catégories" : "Categories"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setFilters((f) => ({ ...f, category: cat.value }))}
                        className={`
                          px-4 py-2 rounded-xl font-medium transition-all
                          ${
                            filters.category === cat.value
                              ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          }
                        `}
                      >
                        {cat[lang]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <Button
                  fullWidth
                  onClick={() => setMobileFiltersOpen(false)}
                  className="mt-4"
                >
                  {lang === "fr" ? "Appliquer les filtres" : "Apply filters"}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
