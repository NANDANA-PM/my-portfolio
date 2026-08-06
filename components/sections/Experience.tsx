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
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <div className="border-l-4 border-blue-600 pl-8">
          {experiences.map((experience) => (
            <div key={experience.company} className="mb-12">
              <h3 className="text-2xl font-semibold">
                {experience.role}
              </h3>

              <p className="text-blue-600 font-medium">
                {experience.company}
              </p>

              <p className="text-gray-500 mb-4">
                {experience.duration} • {experience.location}
              </p>

              <ul className="list-disc ml-5 space-y-2 text-gray-600">
                {experience.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}