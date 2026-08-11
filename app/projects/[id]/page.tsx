import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/projects";
import ScreenshotGallery from "../../../components/project/ScreenshotGallery";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon as Github } from "../../../components/common/GithubIcon";
import Button from "../../../components/common/Button";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetails({ params }: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <main className="min-h-screen px-6 py-24 bg-background">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold text-foreground">
            Project Not Found
          </h1>
          <p className="mt-4 text-muted-foreground">The project you are looking for does not exist.</p>
          <Link
            href="/#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  // Type assertion for dynamically added fields
  const p = project as typeof project & { overview?: string; role?: string; responsibilities?: string[] };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 relative z-10">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Featured Project
              </p>
              {p.role && (
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground border border-border">
                  {p.role}
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl mb-6">
              {project.title}
            </h1>

            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              {p.overview || project.shortDescription}
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              {project.github && (
                <Button href={project.github} variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  View Source Code
                </Button>
              )}
              {project.demo && (
                <Button href={project.demo} variant="primary" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Live Preview
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        
        {/* Two Column Layout for Details */}
        <div className="grid gap-12 lg:grid-cols-3 mb-24">
          
          <div className="lg:col-span-2 space-y-12">
            {/* Responsibilities / Role description */}
            {p.responsibilities && p.responsibilities.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-primary rounded-full"></div>
                  <h2 className="text-2xl font-bold text-foreground">My Role & Responsibilities</h2>
                </div>
                <div className="space-y-4">
                  {p.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground leading-relaxed">{resp}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Features */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="leading-relaxed text-card-foreground text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-10 lg:pl-8 lg:border-l lg:border-border">
            {/* Technologies */}
            <section>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground border border-border"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          </div>
          
        </div>

        {/* Screenshots Gallery */}
        {project.images && project.images.length > 0 && (
          <section className="mb-24">
            <div className="flex flex-col items-center mb-16 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                App Preview
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Application Screens</h2>
              <div className="h-1 w-16 bg-primary rounded-full mb-6"></div>
              <p className="max-w-2xl text-muted-foreground text-lg">
                Explore the user interface and interactions of the {project.title} application.
              </p>
            </div>

            <ScreenshotGallery
              images={project.images}
              projectTitle={project.title}
            />
          </section>
        )}

        {/* Project Navigation */}
        <div className="mt-20 border-t border-border pt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

            {/* Previous Project */}
            {project.id > 1 ? (
              <Link
                href={`/projects/${project.id - 1}`}
                className="group flex flex-col items-start w-full sm:w-auto"
              >
                <span className="block text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                  Previous
                </span>
                <span className="inline-flex items-center gap-2 font-bold text-foreground transition group-hover:text-primary text-lg">
                  <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                  {projects[project.id - 2]?.title}
                </span>
              </Link>
            ) : (
              <div className="w-full sm:w-1/3" />
            )}

            {/* Back to Projects */}
            <Link
              href="/#projects"
              className="rounded-full bg-secondary p-3 text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground order-first sm:order-none"
              aria-label="All Projects"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </Link>

            {/* Next Project */}
            {project.id < projects.length ? (
              <Link
                href={`/projects/${project.id + 1}`}
                className="group flex flex-col items-end w-full sm:w-auto"
              >
                <span className="block text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                  Next
                </span>
                <span className="inline-flex items-center gap-2 font-bold text-foreground transition group-hover:text-primary text-lg">
                  {projects[project.id]?.title}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ) : (
              <div className="w-full sm:w-1/3" />
            )}

          </div>
        </div>
      </div>
    </main>
  );
}
