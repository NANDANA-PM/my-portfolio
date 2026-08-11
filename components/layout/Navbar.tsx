import { ModeToggle } from "@/components/mode-toggle";
import { GithubIcon as Github } from "@/components/common/GithubIcon";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary/80">
          Nandana<span className="text-muted-foreground">.dev</span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 border-l border-border pl-4 ml-2">
            <a
              href="https://github.com/NANDANA-PM"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              aria-label="GitHub Profile"
            >
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}