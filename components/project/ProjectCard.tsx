import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  shortDescription: string;
  technologies: string[];
  images: string[];
  features: string[];
  github: string;
  demo: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        {project.images.length > 0 && (
          <Image
            src={project.images[0]}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="mb-5 leading-7 text-gray-600">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="mb-3 font-semibold text-gray-900">Key Features</h4>

          <ul className="space-y-2 text-sm text-gray-600">
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="text-blue-600">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* View Details */}
        <Link
          href={`/projects/${project.id}`}
          className="font-semibold text-blue-600 transition-colors hover:text-blue-800"
        >
          View Details →
        </Link>
      </div>
    </article>
  );
}
