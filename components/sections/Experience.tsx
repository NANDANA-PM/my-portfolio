const experiences = [
  {
    company: "OneByZero Labs",
    role: "Flutter Developer",
    duration: "2025 – Present",
    location: "Kozhikode, Kerala",
    description: [
      "Developed scalable Flutter applications for production use.",
      "Integrated REST APIs and implemented role-based authentication.",
      "Worked with Flutter, Dart, Riverpod, Git, and MySQL.",
      "Collaborated with designers and backend developers to deliver high-quality applications.",
    ],
  },
  {
    company: "Nizzcorp",
    role: "Flutter Developer Intern",
    location: "Malappuram, Kerala",
    duration: "Jul 2025 – Sep 2025",
    description: [
      "Completed Flutter development internship.",
      "Built responsive Flutter UI screens.",
      "Learned Git, REST APIs, and mobile application development."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mt-4"></div>
        </div>

        <div className="relative border-l-2 border-border pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-border -translate-x-[50%]"></div>
          
          {experiences.map((experience, index) => (
            <div key={experience.company} className={`mb-12 relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:left-[50%] top-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary md:-translate-x-[50%] z-10 shadow-sm"></div>
              
              {/* Content Box */}
              <div className="md:w-1/2 md:px-8">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-card-foreground">
                    {experience.role}
                  </h3>
                  
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 text-sm">
                    <span className="font-semibold text-primary">
                      {experience.company}
                    </span>
                    <span className="text-muted-foreground hidden sm:inline">•</span>
                    <span className="text-muted-foreground">
                      {experience.location}
                    </span>
                  </div>

                  <div className="mt-4 mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {experience.duration}
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {experience.description.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}