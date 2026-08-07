import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/projects";
import ScreenshotGallery from "../../../components/project/ScreenshotGallery";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetails({ params }: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <main className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-gray-900">
            Project Not Found
          </h1>

          <Link
            href="/#projects"
            className="mt-6 inline-block text-blue-600 hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center font-medium text-blue-600 transition hover:text-blue-800"
          >
            ← Back to Projects
          </Link>

          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Featured Project
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Overview + Technology */}
        <section className="grid gap-10 md:grid-cols-2">
          {/* Overview */}
          <div>
            <h2 className="mb-5 text-2xl font-bold text-gray-900">
              Project Overview
            </h2>

            <p className="leading-8 text-gray-600">
              {project.shortDescription}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="mb-5 text-2xl font-bold text-gray-900">
              Technology Stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mt-20">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              App Preview
            </p>

            <h2 className="text-3xl font-bold text-gray-900">Screenshots</h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              A selection of screens from the {project.title} application.
            </p>
          </div>

          <ScreenshotGallery
            images={project.images}
            projectTitle={project.title}
          />
        </section>

        {/* Features */}
        <section className="mt-20">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Functionality
            </p>

            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:border-blue-200 hover:bg-blue-50"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  ✓
                </span>

                <p className="leading-6 text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Links */}
        {(project.github || project.demo) && (
          <section className="mt-20 rounded-2xl bg-gray-900 p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Interested in this project?
                </h2>

                <p className="mt-2 text-gray-400">
                  Explore the project and learn more about the implementation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Bottom Navigation */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <Link
            href="/#projects"
            className="font-semibold text-blue-600 transition hover:text-blue-800"
          >
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
