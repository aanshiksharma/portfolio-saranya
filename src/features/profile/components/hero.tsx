import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";

export function Hero() {
  useGSAP(() => {
    const timeline = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: "#hero",
        scroller: "body",
        start: "top top",
        end: "top -100%",
        scrub: 2,
      },
    });

    timeline.to("#hero-image", {
      filter: "blur(4px)",
      translateY: "20%",
      autoAlpha: 0.4,
    });

    timeline.to(
      "#hero-text",
      {
        translateY: "30%",
        autoAlpha: 0.4,
      },
      0,
    );
  }, []);

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

      <div className="relative flex items-end lg:gap-8 w-full max-w-400 md:pt-10 min-h-screen">
        <div
          className="flex flex-col gap-8 flex-1 px-6 sm:px-12 py-20"
          id="hero-text"
        >
          <h1 className="text-[clamp(4rem,20vw,8rem)] sm:text-9xl xl:text-[11.5rem] leading-[86%] grid gap-0">
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

        <div
          className="absolute max-md:opacity-50 left-auto bottom-0 right-0 sm:right-6 lg:right-16 -z-1 h-full"
          id="hero-image"
        >
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
