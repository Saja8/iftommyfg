import Image from 'next/image';
import EventPageNav from '@app/components/EventPageNav';
import { YFG_PAGE_NAV_ITEMS } from '@app/data/eventPageNav';
import {
  MMS_TOPICS,
  YFG_MMS_2024_ORGANIZING,
  YFG_MMS_2024_TECHNICAL,
} from '@app/data/events';

const OFFICIAL_SECOND_YFG_URL = 'https://iftomm-yfgs2026.sciencesconf.org';
const FIRST_YFG_URL = 'https://saja8.github.io/IFToMM_YFG-MMS/';

export default function YFGPage() {
  return (
    <div className="mx-auto relative pt-16">
      <section className="px-6 sm:px-14 py-8 sm:py-10">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-[30px] border border-sky-100 bg-white shadow-sm dark:border-sky-500/20 dark:bg-zinc-900">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
            <div className="bg-gradient-to-br from-sky-100 via-white to-cyan-100 px-6 py-8 text-zinc-900 dark:from-sky-950 dark:via-blue-950 dark:to-cyan-900 dark:text-white sm:px-8 sm:py-10">
              <div className="inline-flex items-center rounded-full border border-sky-200 dark:border-white/20 bg-sky-50 dark:bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.12em] uppercase">
                IFToMM Young Faculty Group
              </div>
              <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight">
                YFG Symposia
              </h1>
              <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-sky-800 dark:text-cyan-100/90">
                The symposium series for IFToMM Young Faculty Group members,
                with the current official site for the new edition and a clean
                path to the first symposium archive.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={OFFICIAL_SECOND_YFG_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  Open official registration
                </a>
                <a
                  href={FIRST_YFG_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-sky-200 bg-white/90 px-5 py-2.5 text-sm font-semibold text-sky-900 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-white/15 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/15"
                >
                  Open archive site
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={OFFICIAL_SECOND_YFG_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-cyan-200 dark:border-cyan-200/30 bg-white/85 dark:bg-white/10 p-4 backdrop-blur hover:bg-white dark:hover:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                >
                  <div className="text-xs uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-200">
                    Current edition
                  </div>
                  <div className="mt-2 text-lg font-semibold">YFGS 2026</div>
                  <div className="mt-2 text-sm text-sky-900 dark:text-cyan-100/85">
                    Monastir, Tunisia. Program, submissions, and registration
                    are hosted on the official symposium site.
                  </div>
                  <div className="mt-4 text-xs text-cyan-700 dark:text-cyan-100/80">
                    Open official site ↗
                  </div>
                </a>

                <a
                  href={FIRST_YFG_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-blue-200 dark:border-blue-200/25 bg-white/85 dark:bg-black/15 p-4 backdrop-blur hover:bg-white dark:hover:bg-black/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                >
                  <div className="text-xs uppercase tracking-[0.16em] text-blue-700 dark:text-blue-200">
                    Archive
                  </div>
                  <div className="mt-2 text-lg font-semibold">
                    First symposium
                  </div>
                  <div className="mt-2 text-sm text-blue-900 dark:text-blue-100/85">
                    The 2024 YFG-MMS edition remains available as the archive
                    site for the first symposium.
                  </div>
                  <div className="mt-4 text-xs text-blue-700 dark:text-blue-100/80">
                    Open archive site ↗
                  </div>
                </a>
              </div>
            </div>

            <div className="relative min-h-[280px] bg-zinc-900">
              <Image
                src="/images/yfg/monastir-ribat.jpg"
                alt="Monastir Ribat in Tunisia"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 hidden sm:block rounded-2xl border border-white/15 bg-black/45 p-4 text-white backdrop-blur">
                <div className="text-xs uppercase tracking-[0.18em] text-sky-200">
                  Upcoming host city
                </div>
                <div className="mt-2 text-lg font-medium">
                  Monastir, Tunisia
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-100/85">
                  The next symposium is currently routed through the official
                  external site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventPageNav items={YFG_PAGE_NAV_ITEMS} activeHref="/yfg" />

      <div className="max-w-5xl mx-auto px-6 sm:px-14 py-10 space-y-8">
        <section className="rounded-2xl border border-sky-100 dark:border-sky-500/20 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-sky-50 to-cyan-50 dark:from-sky-500/10 dark:to-cyan-500/10 border-b border-sky-100 dark:border-sky-500/10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full border border-sky-200 bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-800 dark:border-sky-400/20 dark:bg-sky-500/10 dark:text-sky-300">
                  Upcoming
                </span>
                <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  2nd IFToMM YFG Symposium (YFGS 2026)
                </h2>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 max-w-2xl">
                  The official site currently lists Monastir, Tunisia, with
                  conference days on April 15-17, 2026. Visit the SciencesConf
                  page for the latest program, submissions, and registration
                  information.
                </p>
              </div>
              <a
                href={OFFICIAL_SECOND_YFG_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                Open official site <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="p-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                Current official details
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li>Location: Monastir, Tunisia</li>
                <li>Conference days: April 15-17, 2026</li>
                <li>
                  Official announcements and updated symposium information
                </li>
                <li>Registration and participation details</li>
                <li>Program and submission updates</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 p-5">
              <div className="text-xs uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
                Routing
              </div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed">
                This YFG portal keeps the overview here and sends visitors to
                the official external site for live symposium details.
              </p>
              <a
                href={OFFICIAL_SECOND_YFG_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:underline dark:text-sky-300"
              >
                Open official site <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                Past / 1st Symposium
              </span>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-3">
                1st IFToMM YFG-MMS — 2024
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                Emerging Fields in Mechanism and Machine Science
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="text-right text-sm text-zinc-600 dark:text-zinc-300">
                <div className="font-semibold">Nov 19–21, 2024</div>
                <div>Online</div>
              </div>
              <a
                href={FIRST_YFG_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Open archive site <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                About
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                The inaugural IFToMM YFG-MMS Online Symposium was a
                single-track, peer-reviewed event for young faculty members.
                Talks combined self-introduction and research presentations,
                followed by discussion sessions.
              </p>

              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Topics (selection)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-zinc-600 dark:text-zinc-300">
                {MMS_TOPICS.slice(0, 12).map((topic) => (
                  <div key={topic} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Organizing Committee
              </h3>
              <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1 mb-5">
                {YFG_MMS_2024_ORGANIZING.map((member) => (
                  <li key={member.name}>
                    {member.name} ({member.country})
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Technical Committee
              </h3>
              <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                {YFG_MMS_2024_TECHNICAL.map((member) => (
                  <li key={member.name}>
                    {member.name} ({member.country})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="rounded-2xl border border-emerald-100 dark:border-emerald-500/20 bg-white dark:bg-zinc-900 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300">
              Recurring
            </span>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              YFG Monthly Meetings
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Monthly online meetings open to all young faculty members — research
            updates, networking, and event planning.
          </p>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            Interested in joining? Reach out through the{' '}
            <a
              href="https://iftomm-world.org/cdg-2-iftomm-young-faculty-group/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-600 dark:text-sky-400 hover:underline"
            >
              IFToMM YFG page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
