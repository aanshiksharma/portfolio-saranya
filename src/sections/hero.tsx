import { ArrowRight } from "lucide-react";
import Button from "../components/ui/button";

export default function Hero() {
  return (
    <section className="relative border-b flex items-center justify-center">
      <div className="absolute inset-0 -z-1">
        <div className="absolute inset-0 w-full h-full bg-linear-to-r from-background via-background to-transparent opacity-50" />

        <img
          src="/hero-background-image.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative flex items-center lg:gap-8 w-full max-w-400 h-screen">
        <div className="flex flex-col gap-8 flex-1 px-6 sm:px-12 py-20">
          <h1 className="text-7xl sm:text-9xl xl:text-[11.5rem] leading-[86%] grid gap-0">
            <span>Saranya</span>
            <span>Shukla</span>
          </h1>

          <div className="h-0.5 w-15 sm:w-30 rounded bg-foreground" />

          <div className="space-y-3">
            <p className="uppercase tracking-[20%] font-semibold text-lg lg:text-2xl">
              python software engineer
            </p>

            <p className="text-lg lg:text-2xl text-secondary-foreground max-w-106 leading-relaxed">
              Python Developer building AI-powered applications, backend APIs,
              and automation tools.
            </p>
          </div>

          <Button className="group w-fit">
            <span className="py-2 border-b-2 border-foreground!">
              Explore my work
            </span>

            <ArrowRight className="group-hover:translate-x-1.5 transition ease-out duration-300" />
          </Button>
        </div>

        <div className="absolute max-md:opacity-50 left-auto bottom-0 right-0 sm:right-6 lg:right-16 -z-1 h-full">
          <img
            src="/hero-image.png"
            alt="Saranya's Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
