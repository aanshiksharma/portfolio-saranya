import type { ReactNode } from "react";

export default function Button({
  children,
  variant = "default",
  href,
  className,
}: {
  children: ReactNode;
  variant?: string;
  href?: string;
  className?: string;
}) {
  const styles: { [key: string]: string } = {
    base: "transition-all ease-out duration-300 cursor-pointer",
    default: "flex items-center gap-4 uppercase font-semibold tracking-[10%]",
    header:
      "uppercase font-semibold rounded-full ring ring-foreground flex items-center gap-2 px-8 py-4",
  };

  if (href)
    return (
      <a
        href={href}
        className={`${styles.base} ${styles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  else {
    return (
      <button className={`${styles.base} ${styles[variant]} ${className}`}>
        {children}
      </button>
    );
  }
}
