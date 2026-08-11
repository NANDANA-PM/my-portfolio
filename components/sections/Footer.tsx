import { Mail } from "lucide-react";
import { GithubIcon as Github } from "@/components/common/GithubIcon";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto max-w-6xl px-6 flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          <a href="https://github.com/NANDANA-PM" target="_blank" rel="noreferrer" className="rounded-full bg-muted p-3 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="mailto:nandanaa642@gmail.com" className="rounded-full bg-muted p-3 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        
        <p className="text-xl font-bold tracking-tight text-foreground mb-2">
          Nandana<span className="text-primary">.dev</span>
        </p>

        <p className="text-sm text-muted-foreground mb-6 text-center">
          Full-Stack Mobile Application Developer
        </p>

        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Nandana P. M. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}