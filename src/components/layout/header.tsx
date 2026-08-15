import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

import Button from "../ui/button";

import { ArrowUpRight, Menu } from "lucide-react";

import { links } from "../../data/links.data";
import MobileNavigation from "./mobile-navigation";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const prevScrollRef = useRef<number>(0);

  useEffect(() => {
    const toggleHeader = (hide: boolean) => {
      if (hide) {
        gsap.to("header", {
          yPercent: -100,
          duration: 0.3,
        });
      } else {
        gsap.to("header", {
          yPercent: 0,
          duration: 1,
        });
      }
    };

    const handleScroll = () => {
      const SCROLL_TRIGGER_VALUE = 60;
      const currentScroll = window.scrollY;
      const isScrollingDown =
        currentScroll > 2 * SCROLL_TRIGGER_VALUE &&
        currentScroll > prevScrollRef.current;

      if (currentScroll > SCROLL_TRIGGER_VALUE) setTop(false);
      else setTop(true);

      toggleHeader(isScrollingDown);

      prevScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNav((prev) => !prev);
  };

  return (
    <>
      <header
        className={`
        fixed z-100 inset-0 bottom-auto
        flex items-center justify-center
        transition ease-out duration-300        
      `}
      >
        <div
          className={`
            flex items-center justify-between gap-32 w-full max-w-400
            transition-all ease-out duration-300
            rounded-full border
            ${
              top
                ? "bg-transparent px-6 sm:px-12 py-6 border-transparent!"
                : "bg-background/20 backdrop-blur-md px-3 py-3 mt-3 mx-3 md:mx-9 border-border!"
            }
          `}
        >
          <a
            href="/"
            className="text-5xl font-heading tracking-[-24%] font-light ml-4 transition-all ease-out duration-300"
          >
            SS
          </a>

          <div className="max-md:hidden flex items-center gap-16 lg:gap-32">
            <nav>
              <ul className="flex items-center gap-8 lg:gap-16">
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

          <button className="md:hidden p-4" onClick={toggleMobileNav}>
            <Menu size={32} className="transition ease-out duration-300" />
          </button>
        </div>
      </header>
      <MobileNavigation open={mobileNav} setOpen={setMobileNav} />
    </>
  );
}
