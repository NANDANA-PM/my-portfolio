import Button from "../common/Button";
import Container from "../layout/Container";
import Image from "next/image";
import { personal } from "@/data/personal";
import { Mail } from "lucide-react";
import { GithubIcon as Github } from "@/components/common/GithubIcon";

export default function Hero() {
  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <Container>
        <div className="flex flex-col-reverse items-center gap-16 lg:flex-row lg:justify-between">
          {/* Left Side */}
          <div className="flex-1 text-center lg:text-left">
            {/* <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Available for new opportunities
            </div> */}

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Hi, I&apos;m {personal.name.split(" ")[0]}
              <br />
              <span className="text-muted-foreground">{personal.role}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground mx-auto lg:mx-0">
              {personal.about}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button href="#projects" variant="primary">
                View My Work
              </Button>

              <Button href={personal.resume} variant="outline">
                Download Resume
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
              <span className="text-sm font-medium text-muted-foreground">
                Connect with me:
              </span>
              <a
                href="https://github.com/NANDANA-PM"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nandanaa642@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email Me"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
              <Image
                src={personal.profileImage}
                alt={personal.name}
                fill
                priority
                className="rounded-full object-cover border-2 border-border shadow-2xl z-10"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
