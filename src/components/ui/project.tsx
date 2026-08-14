import { useState } from "react";

import Button from "./button";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import type { PROJECT } from "../../data/projects.data";

export default function Project({
  project,
  index,
}: {
  project: PROJECT;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex gap-8 py-8 border-t last:border-b hover:text-primary-foreground transition-colors duration-300 ease-out"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`
        absolute inset-0 -z-1 bg-primary
        origin-center ${hovered ? "scale-y-100" : "scale-y-0"}
        transition-all ease-out duration-200
      `}
      />

      <span className="mt-1 ml-4">{"0" + (index + 1)}</span>

      <article className="flex flex-col flex-1 border-l px-8 py-4">
        <div className="flex items-center justify-between flex-1">
          <h3 className="text-7xl">{project.title}</h3>

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
            transition-all duration-300 ease-out overflow-y-hidden
            ${hovered ? "opacity-100 mt-8 scale-y-100" : "opacity-0 scale-y-0"}
          `}
        >
          <p id="description" className="leading-relaxed opacity-70 max-w-3xl">
            {project.description}
          </p>
        </div>
      </article>
    </div>
  );
}
