import Button from "../components/ui/button";
import Project from "../components/ui/project";
import { ArrowRight } from "lucide-react";

import { projects } from "../data/projects.data";

export default function ProjectsSection() {
  return (
    <section
      className="bg-background relative z-10 px-6 sm:px-12 py-16 flex flex-col gap-16"
      id="work"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-2 sm:space-y-4">
          <p className="section-sub-heading">featured work</p>
          <h2 className="section-heading">Projects</h2>
        </div>

        <Button href="/projects" className="max-md:hidden">
          See all Projects <ArrowRight />
        </Button>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </div>
    </section>
  );
}
