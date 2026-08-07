import { projects } from "../../data/projects";
import ProjectCard from "../project/ProjectCard";


export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-2 font-semibold text-blue-600">
            My Work
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            A selection of mobile applications and business solutions
            I have worked on using Flutter and modern development tools.
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