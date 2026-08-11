import { projects } from "../../data/projects";
import ProjectCard from "../project/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-background py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="mb-2 font-semibold text-primary uppercase tracking-wider text-sm">
            My Work
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>

          <div className="h-1 w-20 bg-primary rounded-full mt-4 mb-6"></div>

          <p className="max-w-2xl text-lg text-muted-foreground">
            A selection of professional mobile applications and enterprise solutions
            I have developed using Flutter, Dart, and modern scalable architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}