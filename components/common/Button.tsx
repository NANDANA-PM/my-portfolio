type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}