export function Button({ variant = "default", className = "", children, ...props }) {
  const base = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 disabled:pointer-events-none";
  const variants = {
    default: "bg-pink-500 text-white hover:bg-pink-600",
    outline: "border-2 bg-transparent hover:bg-pink-50",
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
