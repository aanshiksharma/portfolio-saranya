import { useState } from "react";

import Button from "@/components/ui/button";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";

import type { PROJECT } from "@/data/projects.data";

export function ProjectCard({
  project,
  index,
}: {
  project: PROJECT;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex gap-4 sm:gap-8 py-4 md:py-8 border-t last:border-b md:hover:text-primary-foreground transition-all duration-300 ease-out"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`
        absolute inset-0 -z-1 bg-primary max-md:hidden
        origin-center ${hovered ? "scale-y-100" : "scale-y-0"}
        transition-all ease-out duration-300
      `}
      />

      <span className="max-md:hidden mt-1 sm:ml-4">{"0" + (index + 1)}</span>

      <article
        className={`md:px-4 sm:px-8 py-4 flex flex-col flex-1 md:border-l ${hovered ? "border-primary-foreground!" : ""}`}
      >
        <div className="flex max-md:flex-col gap-4 md:gap-8 md:items-center justify-between flex-1">
          <h3 className="text-5xl lg:text-7xl">{project.title}</h3>

          <div className="flex items-center gap-8">
            <Button href={project.liveLink} className="group">
              <span className="py-3 link-underline primary-underline">
                view live
              </span>

              <ArrowUpRight className="group-hover:translate-x-1.5 group-hover:rotate-45 transition ease-out duration-300" />
            </Button>

            <Button href={project.githubLink} className="group">
              <span className="py-3 link-underline primary-underline">
                Github
              </span>

              <SiGithub className="group-hover:rotate-360 transition ease-out duration-600" />
            </Button>
          </div>
        </div>

        <div
          className={`
            transition-all duration-300 ease-out overflow-y-hidden space-y-4 md:space-y-8
            ${hovered ? "opacity-100 max-h-500" : "md:opacity-0 md:max-h-0"}
          `}
        >
          <div className="" />
          <p className="max-w-3xl max-md:text-muted-foreground">
            {project.description}
          </p>
        </div>
      </article>
    </div>
  );
}
