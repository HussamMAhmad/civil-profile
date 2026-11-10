export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0D0E]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.08em]">
            NEBRAS AHMAD
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/30">
            Civil Engineer · Structural Engineering
          </p>
        </div>

        <div className="flex gap-6 text-xs text-white/40">
          <a href="#" className="transition hover:text-white">
            LinkedIn
          </a>

          <a
            href="mailto:hello@example.com"
            className="transition hover:text-white"
          >
            Email
          </a>

          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
