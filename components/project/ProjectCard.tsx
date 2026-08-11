import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/common/GithubIcon";

type Project = {
  id: number;
  title: string;
  shortDescription: string;
  technologies: string[];
  images: string[];
  features: string[];
  github?: string;
  demo?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-border/80">
      
      {/* ============================= */}
      {/* App Preview */}
      {/* ============================= */}

      <div className="relative flex h-[380px] w-full items-center justify-center overflow-hidden bg-muted/30">
        
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        {/* Phone */}
        {project.images.length > 0 && (
          <div className="relative z-10 w-[185px] overflow-hidden rounded-[2rem] border-[6px] border-zinc-900 bg-zinc-900 shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] dark:border-zinc-800 dark:bg-zinc-800">
            
            {/* Phone speaker */}
            <div className="absolute left-1/2 top-0 z-20 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-zinc-900 dark:bg-zinc-800" />

            {/* Screenshot */}
            <div className="overflow-hidden rounded-[1.5rem] bg-background">
              <Image
                src={project.images[0]}
                alt={`${project.title} mobile app preview`}
                width={500}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* ============================= */}
      {/* Project Information */}
      {/* ============================= */}

      <div className="flex flex-col flex-grow p-6 md:p-8">

        {/* Project Title & Links */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Mobile Application
            </p>
            <h3 className="text-xl font-bold tracking-tight text-card-foreground md:text-2xl">
              {project.title}
            </h3>
          </div>
          
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-1" aria-label="GitHub Repository">
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-1" aria-label="Live Demo">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        {/* ============================= */}
        {/* Technologies */}
        {/* ============================= */}

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span className="rounded-md bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="mt-auto pt-6 border-t border-border">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90"
          >
            View Project Details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}