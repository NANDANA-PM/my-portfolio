const skills = [
  {
    title: "Frontend",
    items: ["Flutter", "Dart", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["MySQL"],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Technical Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium"
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