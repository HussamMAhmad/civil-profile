import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="engineering-grid relative overflow-hidden border-t border-white/10 py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">

        <div className="relative">

          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#F59E0B]">
            05 / Contact
          </p>

          <h2 className="max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
            HAVE A
            <br />
            PROJECT
            <br />
            <span className="text-[#F59E0B]">
              IN MIND?
            </span>
          </h2>

          <div className="mt-14 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end">

            <div>
              <p className="max-w-md text-sm leading-6 text-white/40">
                Let's discuss your next engineering,
                construction or infrastructure project.
              </p>

              <a
                href="mailto:hello@example.com"
                className="group mt-5 flex items-center gap-3 text-lg transition hover:text-[#F59E0B]"
              >
                <Mail size={19} />

                hello@example.com

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>

            <a
              href="mailto:hello@example.com"
              className="flex w-fit items-center gap-3 bg-[#F59E0B] px-7 py-4 text-sm font-semibold text-[#0B0D0E] transition hover:bg-[#FFB52E]"
            >
              Start a Conversation

              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}