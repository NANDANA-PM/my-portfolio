export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-background border-t border-border"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mt-4"></div>
        </div>

        <div className="mx-auto max-w-3xl text-center md:text-left">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a Flutter developer with one year of professional experience
            building high-quality mobile applications. I currently work at
            OneByZero Labs, where I develop scalable and user-friendly
            applications using Flutter.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I enjoy creating clean UI, solving real-world problems,
            integrating REST APIs, and writing maintainable code.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            My technical skills include Flutter, Dart,
            JavaScript, Node.js, MySQL, Git, and REST API integration.
            I am continuously learning modern technologies and best
            practices to become a stronger full-stack developer.
          </p>
        </div>
      </div>
    </section>
  );
}