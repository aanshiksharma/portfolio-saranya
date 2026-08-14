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
      className="flex gap-8 py-8 border-t"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-muted-foreground mt-1">{"0" + (index + 1)}</span>

      <article className="flex flex-col flex-1 border-l px-8 py-4">
        <div className="flex items-center justify-between flex-1">
          <h3 className="text-7xl">{project.title}</h3>

          <div className="flex items-center gap-8">
            <Button href={project.liveLink} className="group">
              <span className="py-3 link-underline">Live</span>
              <ArrowUpRight className="group-group-hover:translate-x-1.5 group-hover:rotate-45 transition ease-out duration-300" />
            </Button>

            <Button href={project.githubLink} className="group">
              <span className="py-3 link-underline">Github</span>
              <SiGithub className="group-hover:rotate-360 transition ease-out duration-600" />
            </Button>
          </div>
        </div>

        <p
          id="description"
          className={`
            leading-relaxed text-muted-foreground max-w-3xl transition-all duration-300 ease-out overflow-y-hidden
            ${hovered ? "opacity-100 mt-8 max-h-125" : "opacity-0 max-h-0"}
          `}
        >
          {project.description}
        </p>
      </article>
    </div>
  );
}
