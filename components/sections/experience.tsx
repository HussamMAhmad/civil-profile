export default function Experience() {
  const experiences = [
    {
      year: "2024 — Present",
      role: "Senior Civil Engineer",
      company: "Engineering & Construction",
      description:
        "Leading structural design, technical coordination and construction supervision.",
    },
    {
      year: "2022 — 2024",
      role: "Civil Engineer",
      company: "Construction Company",
      description:
        "Structural analysis, site supervision and project documentation.",
    },
    {
      year: "2020 — 2022",
      role: "Junior Civil Engineer",
      company: "Engineering Consultancy",
      description:
        "Engineering drawings, quantity estimation and technical support.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">

        <div className="mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#F59E0B]">
            04 / Experience
          </p>

          <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            Professional
            <br />
            <span className="text-white/25">
              Journey.
            </span>
          </h2>
        </div>

        <div className="border-t border-white/10">

          {experiences.map((experience) => (
            <div
              key={experience.year}
              className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[180px_1fr_1.2fr] md:items-start"
            >
              <span className="font-mono text-xs text-[#F59E0B]">
                {experience.year}
              </span>

              <div>
                <h3 className="text-xl font-medium">
                  {experience.role}
                </h3>

                <p className="mt-1 text-sm text-white/35">
                  {experience.company}
                </p>
              </div>

              <p className="max-w-lg text-sm leading-6 text-white/40">
                {experience.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}