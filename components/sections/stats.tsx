export default function Stats() {
  const stats = [
    {
      number: "08+",
      label: "Projects",
    },
    {
      number: "05+",
      label: "Years Experience",
    },
    {
      number: "12+",
      label: "Clients",
    },
    {
      number: "03",
      label: "Engineering Fields",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-[#111416]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">

        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`relative px-6 py-10 md:px-8 md:py-14 ${
              index !== stats.length - 1
                ? "border-r border-white/10"
                : ""
            }`}
          >
            <p className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              {stat.number}
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/35 md:text-xs">
              {stat.label}
            </p>

            <span className="absolute right-5 top-5 h-1.5 w-1.5 bg-[#F59E0B]" />
          </div>
        ))}

      </div>
    </section>
  );
}