import Link from 'next/link';

export default function SchoolsPage() {
  return (
    <div className="mx-auto relative pt-16">
      <section className="px-6 py-12 sm:px-14 sm:py-14 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-emerald-950 dark:via-zinc-900 dark:to-cyan-950">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-emerald-200 dark:border-white/20 bg-emerald-50 dark:bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.12em] uppercase">
            IFToMM Young Faculty Group
          </div>
          <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Schools
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Seasonal programs in Mechanism and Machine Science — summer and
            winter editions hosted at different locations worldwide.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 sm:px-14 py-10 grid gap-6 sm:grid-cols-2">
        <Link
          href="/summer-school"
          className="group rounded-2xl border border-emerald-200 dark:border-emerald-500/20 bg-white dark:bg-zinc-900 p-8 shadow-sm hover:border-emerald-400 dark:hover:border-emerald-400/40 transition-colors"
        >
          <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300">
            Upcoming
          </span>
          <h2 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
            Tokyo Summer School 2026
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Jul 22–31, 2026 · Tokyo Metropolitan University
          </p>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            A 10-day program on mechanism and machine science for sustainable
            urban systems, using Tokyo as a living laboratory.
          </p>
          <div className="mt-5 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            View full details →
          </div>
        </Link>

        <Link
          href="/winter-school"
          className="group rounded-2xl border border-cyan-200 dark:border-cyan-500/20 bg-white dark:bg-zinc-900 p-8 shadow-sm hover:border-cyan-400 dark:hover:border-cyan-400/40 transition-colors"
        >
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-100 px-2.5 py-1 text-xs font-semibold text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-300">
            Upcoming
          </span>
          <h2 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
            Winter School 2027
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Jan 25–29, 2027 · University of Bío-Bío, Chile
          </p>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Focused on advanced topics in Mechanism and Machine Science,
            coordinated with YFG President Claudio Villegas.
          </p>
          <div className="mt-5 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
            View full details →
          </div>
        </Link>
      </div>
    </div>
  );
}
