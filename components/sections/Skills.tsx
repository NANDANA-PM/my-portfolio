const skills = [
  {
    title: "Mobile & Frontend",
    items: ["Flutter", "Dart", "JavaScript"],
  },
  {
    title: "Backend & Database",
    items: ["Node.js", "MySQL", "REST APIs"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Android Studio",
      "GitHub",
      "Postman",
      "Play Console",
      "VS Code"
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Technical Expertise
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mt-4"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-6 text-card-foreground">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                  >
                    {item}
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