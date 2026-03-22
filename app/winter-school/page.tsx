import Image from 'next/image';
import Link from 'next/link';
import EventPageNav from '@app/components/EventPageNav';
import { WINTER_SCHOOL_PAGE_NAV_ITEMS } from '@app/data/eventPageNav';
import { createSiteMailto } from '@app/data/siteContact';

const WINTER_SCHOOL_CONTACT_MAILTO = createSiteMailto(
  'Winter School 2027 Inquiry'
);

export default function WinterSchoolPage() {
  return (
    <div className="mx-auto relative pt-16">
      <section className="px-6 py-8 sm:px-14 sm:py-10">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-[30px] border border-indigo-100 bg-white shadow-sm dark:border-indigo-500/20 dark:bg-zinc-900">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
            <div className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-6 py-8 dark:from-indigo-950 dark:via-zinc-900 dark:to-cyan-950 sm:px-8 sm:py-10">
              <div className="inline-flex items-center rounded-full border border-indigo-200 dark:border-white/20 bg-indigo-50 dark:bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.12em] uppercase">
                IFToMM Young Faculty Group
              </div>
              <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                Winter School
              </h1>
              <p className="mt-4 max-w-3xl text-sm sm:text-base text-indigo-800 dark:text-indigo-200 leading-relaxed">
                A focused winter school on Mechanism and Machine Science, hosted
                in Chile and coordinated with IFToMM YFG partners in the region.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/winter-school/registration"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Registration updates
                </Link>
                <a
                  href={WINTER_SCHOOL_CONTACT_MAILTO}
                  className="inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-white/90 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-white/15 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/15"
                >
                  Email contact
                </a>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 dark:border-white/10 dark:bg-white/10">
                  <div className="text-xs uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-200">
                    Region
                  </div>
                  <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-white">
                    Biobio, Chile
                  </div>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 dark:border-white/10 dark:bg-white/10">
                  <div className="text-xs uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-200">
                    Format
                  </div>
                  <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-white">
                    5-day program
                  </div>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 dark:border-white/10 dark:bg-white/10">
                  <div className="text-xs uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-200">
                    Status
                  </div>
                  <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-white">
                    In preparation
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[280px] bg-zinc-900">
              <Image
                src="/images/winter-school/chile-santiago-skyline.jpg"
                alt="Skyline view of Santiago, Chile"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 hidden sm:block rounded-2xl border border-white/15 bg-black/45 p-4 text-white backdrop-blur">
                <div className="text-xs uppercase tracking-[0.18em] text-cyan-200">
                  Chile host context
                </div>
                <div className="mt-2 text-lg font-medium">Chile edition</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-100/85">
                  Hosted at the University of Bío-Bío in southern Chile,
                  bringing together regional and international researchers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventPageNav
        items={WINTER_SCHOOL_PAGE_NAV_ITEMS}
        activeHref="/winter-school"
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-14 py-10 space-y-6">
        {/* Key facts */}
        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-800 dark:border-indigo-400/20 dark:bg-indigo-500/10 dark:text-indigo-300">
                Upcoming
              </span>
              <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                IFToMM YFG Winter School 2027
              </h2>
            </div>
            <div className="text-right text-sm text-zinc-600 dark:text-zinc-300">
              <div className="font-semibold">Jan 25–29, 2027</div>
              <div>5-day program</div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/70 p-4">
              <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Location
              </div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                Biobío Region, Chile
              </p>
            </div>
            <div className="rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/70 p-4">
              <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Host
              </div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                University of Bío-Bío
              </p>
            </div>
            <div className="rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/70 p-4">
              <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Focus
              </div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                Mechanism &amp; Machine Science
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Coordinated with IFToMM YFG President Claudio Villegas and regional
            partners. The program will include invited lectures, technical
            sessions, and collaborative project work.
          </p>

          <div className="mt-6 rounded-xl border border-amber-200 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/5 p-4">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Full program details, registration information, and call for
              participants will be published in due course. Stay tuned.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/winter-school/registration"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-medium px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Registration
            </Link>
            <a
              href="https://iftomm-world.org/cdg-2-iftomm-young-faculty-group/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 font-medium px-5 py-2.5 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              IFToMM YFG Page ↗
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
