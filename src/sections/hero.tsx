import { ArrowRight } from "lucide-react";
import Button from "../components/ui/button";

export default function Hero() {
  return (
    <section className="relative border-b flex items-center gap-8 min-h-screen">
      <div className="absolute inset-0 -z-1">
        <div className="absolute inset-0 w-full h-full bg-linear-to-r from-background via-background to-transparent opacity-50" />
        <img
          src="/hero-background-image.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-8 flex-1 px-12 py-16">
        <h1 className="text-9xl xl:text-[11.5rem] leading-[86%] grid gap-0">
          <span>Saranya</span>
          <span>Shukla</span>
        </h1>

        <hr className="w-30" />

        <p className="uppercase tracking-[20%] font-semibold text-2xl">
          python software engineer
        </p>

        <p className="text-2xl text-muted-foreground max-w-106 leading-relaxed">
          Python Developer building AI-powered applications, backend APIs, and
          automation tools.
        </p>

        <Button className="group w-fit">
          <span className="py-2 border-b border-foreground">
            Explore my work
          </span>

          <ArrowRight className="group-hover:translate-x-1.5 transition ease-out duration-300" />
        </Button>
      </div>
      <div className="hero-image flex-1 max-w-137.5 h-full">
        <img
          src="/hero-image.png"
          alt="Saranya's Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
