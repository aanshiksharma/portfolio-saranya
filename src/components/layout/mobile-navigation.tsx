import type { Dispatch, SetStateAction } from "react";

import { links } from "../../data/links.data";
import { X } from "lucide-react";

export default function MobileNavigation({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`${open ? "flex md:hidden" : "hidden"} flex-col fixed inset-0 h-dvh bg-background/20 backdrop-blur-md z-100 p-2 gap-12 justify-between`}
    >
      <div className="absolute inset-0" onClick={() => setOpen(false)} />

      <button className="z-0 p-4 self-end" onClick={() => setOpen(false)}>
        <X size={32} className="transition ease-out duration-300" />
      </button>

      <nav className="relative">
        <div className="absolute top-0 -translate-y-full w-[40vw]">
          <img src="hero-image.png" alt="" className="h-full" />
        </div>

        <ul className="flex flex-col">
          {links.map((link, index) => (
            <li
              key={link.label}
              className="border-b-2 first:border-t-2 border-foreground! py-4"
            >
              <a
                href={link.url}
                className="flex items-center w-full text-[15vw] gap-4 uppercase leading-none opacity-80"
                onClick={() => setOpen(false)}
              >
                <span className="opacity-40">{"0" + (index + 1)}</span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
