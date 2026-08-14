import { useEffect, useState, useRef } from "react";

import Button from "../ui/button";

import { ArrowUpRight } from "lucide-react";

import { links } from "../../data/links.data";

export default function Header() {
  const [hidden, setHidden] = useState<boolean>(false);
  const [top, setTop] = useState<boolean>(true);
  const prevScrollRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const SCROLL_TRIGGER_VALUE = 60;
      const currentScroll = window.scrollY;
      const isScrollingDown =
        currentScroll > 2 * SCROLL_TRIGGER_VALUE &&
        currentScroll > prevScrollRef.current;

      if (currentScroll > SCROLL_TRIGGER_VALUE) setTop(false);
      else setTop(true);

      if (isScrollingDown && currentScroll > 0) setHidden(true);
      else setHidden(false);

      prevScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed z-100 inset-0 bottom-auto
        flex items-center justify-center
        transition ease-out duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        
      `}
    >
      <div
        className={`
          flex items-center justify-between gap-32 w-full max-w-400
          transition-all ease-out duration-300
          rounded-full border
          ${
            top
              ? "bg-transparent px-12 py-6 border-transparent!"
              : "bg-background/20 backdrop-blur-md px-3 py-3 mt-3 mx-3 border-border!"
          }
        `}
      >
        <a
          href="/"
          className={`
            text-5xl font-heading tracking-[-24%] font-light
            ${top ? "" : "ml-4"}
          `}
        >
          SS
        </a>

        <div className="flex items-center gap-32">
          <nav>
            <ul className="flex items-center gap-16">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className="link-underline uppercase font-semibold py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            variant="header"
            className="group hover:bg-primary hover:text-primary-foreground hover:ring-primary"
          >
            <span>resume</span>

            <ArrowUpRight className="group-hover:translate-x-1.5 group-hover:rotate-45 transition ease-out duration-300" />
          </Button>
        </div>
      </div>
    </header>
  );
}
