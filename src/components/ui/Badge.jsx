import { motion } from "framer-motion";

const variants = {
  default: "bg-gray-900 text-white dark:bg-white dark:text-gray-900",
  bestseller: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
  new: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white",
  limited: "bg-gradient-to-r from-purple-600 to-pink-500 text-white",
  sale: "bg-gradient-to-r from-red-500 to-rose-500 text-white",
  exclusive: "bg-gradient-to-r from-indigo-600 to-violet-500 text-white",
};

const sizes = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-3 py-1 text-xs",
  lg: "px-4 py-1.5 text-sm",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  animated = false,
  className = "",
}) {
  const Component = animated ? motion.span : "span";
  const animationProps = animated
    ? {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }
    : {};

  return (
    <Component
      {...animationProps}
      className={`
        inline-flex items-center justify-center
        font-bold uppercase tracking-wider
        rounded-full shadow-lg
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}
