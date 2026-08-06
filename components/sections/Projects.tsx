import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mb-12 text-4xl font-bold">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mb-6 leading-7 text-gray-600">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}