import { forwardRef } from "react";
import { motion } from "framer-motion";

const variants = {
  primary: `
    bg-gradient-to-r from-gray-900 to-gray-700 text-white
    dark:from-white dark:to-gray-100 dark:text-gray-900
    hover:shadow-xl hover:shadow-gray-900/20 dark:hover:shadow-white/20
  `,
  secondary: `
    bg-transparent border-2 border-gray-900 text-gray-900
    dark:border-white dark:text-white
    hover:bg-gray-900 hover:text-white
    dark:hover:bg-white dark:hover:text-gray-900
  `,
  ghost: `
    bg-transparent text-gray-700 dark:text-gray-300
    hover:bg-gray-100 dark:hover:bg-gray-800
  `,
  danger: `
    bg-gradient-to-r from-red-600 to-red-500 text-white
    hover:shadow-xl hover:shadow-red-500/20
  `,
  success: `
    bg-gradient-to-r from-emerald-600 to-emerald-500 text-white
    hover:shadow-xl hover:shadow-emerald-500/20
  `,
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
  xl: "px-9 py-4 text-xl",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      loading = false,
      icon: Icon,
      iconPosition = "left",
      fullWidth = false,
      as = "button",
      ...props
    },
    ref
  ) => {
    const Component = as === "button" ? motion.button : motion.a;

    return (
      <Component
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -2 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        disabled={disabled || loading}
        className={`
          relative inline-flex items-center justify-center gap-2
          font-semibold rounded-xl
          transition-all duration-300 ease-out
          disabled:opacity-50 disabled:cursor-not-allowed
          overflow-hidden
          ${variants[variant]}
          ${sizes[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {/* Shine effect */}
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
        </span>

        {/* Content */}
        <span className="relative flex items-center gap-2">
          {loading ? (
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <>
              {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
              {children}
              {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
            </>
          )}
        </span>
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
