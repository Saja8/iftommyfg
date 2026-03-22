import Image from 'next/image';
import type { Metadata } from 'next';
import { createSiteMailto } from '@app/data/siteContact';

const MEETINGS_CONTACT_MAILTO = createSiteMailto('YFG Meetings Inquiry');

export const metadata: Metadata = {
  title: 'Meetings — IFToMM YFG',
  description:
    'Monthly online meetings and casual in-person meetings of the IFToMM Young Faculty Group.',
};

export default function MeetingsPage() {
  return (
    <div className="mx-auto px-6 py-16 sm:px-14 sm:py-20">
      <section className="mx-auto max-w-5xl overflow-hidden rounded-[30px] border border-sky-100 bg-white shadow-sm dark:border-sky-500/20 dark:bg-zinc-900">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
          <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-6 py-8 dark:from-sky-950 dark:via-zinc-900 dark:to-cyan-950 sm:px-8 sm:py-10">
            <div className="inline-flex items-center rounded-full border border-sky-200 dark:border-white/20 bg-sky-50 dark:bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.12em] uppercase">
              IFToMM Young Faculty Group
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Meetings
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              Regular online sessions and informal in-person gatherings that
              keep the YFG community connected across cities, campuses, and time
              zones.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/70 bg-white/85 p-4 dark:border-white/10 dark:bg-white/10">
                <div className="text-xs uppercase tracking-[0.16em] text-sky-700 dark:text-sky-200">
                  Rhythm
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-white">
                  Monthly online
                </div>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/85 p-4 dark:border-white/10 dark:bg-white/10">
                <div className="text-xs uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-200">
                  Format
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-white">
                  Online + in person
                </div>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/85 p-4 dark:border-white/10 dark:bg-white/10">
                <div className="text-xs uppercase tracking-[0.16em] text-sky-700 dark:text-sky-200">
                  Audience
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-white">
                  All YFG members
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[280px] bg-zinc-900">
            <Image
              src="/images/meetings/mechanisms-meeting.svg"
              alt="Gear mechanisms and four-bar linkage illustration"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 hidden sm:block rounded-2xl border border-white/15 bg-black/45 p-4 text-white backdrop-blur">
              <div className="text-xs uppercase tracking-[0.18em] text-cyan-200">
                Mechanism &amp; Machine Science
              </div>
              <div className="mt-2 text-lg font-medium">
                Connecting ideas across campuses
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-100/85">
                YFG meetings combine regular online check-ins with local meetups
                whenever members cross paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-14 max-w-4xl space-y-16">
        {/* ── Monthly Meetings ─────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </span>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Monthly Meetings
            </h2>
          </div>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            We hold a regular online meeting once a month, open to all YFG
            members. These sessions cover ongoing projects, event planning,
            research highlights, and open discussion.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-800/60">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Frequency
                </dt>
                <dd className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Once per month
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Format
                </dt>
                <dd className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Online (video call)
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Who can join
                </dt>
                <dd className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  All YFG members
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Typical topics
                </dt>
                <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  Event updates, research spotlights, working-group reports
                </dd>
              </div>
            </dl>
          </div>

          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Meeting invitations and agenda are shared via the YFG mailing list.
            Contact us if you&apos;d like to be added.
          </p>
        </section>

        {/* ── Casual City Meetings ─────────────────────────── */}
        <section>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Casual Meetings
            </h2>
          </div>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            When YFG members travel for conferences, workshops, or campus
            visits, we organize informal in-person get-togethers in different
            cities. These are relaxed, social events — a chance to meet fellow
            members face to face.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-800/60">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Frequency
                </dt>
                <dd className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Varies — whenever members are in the same city
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Format
                </dt>
                <dd className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  In-person, informal
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Locations
                </dt>
                <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  Various cities worldwide (co-located with conferences and
                  visits)
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  How to join
                </dt>
                <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  Watch the mailing list or contact us to propose one
                </dd>
              </div>
            </dl>
          </div>

          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Want to host a casual meeting in your city? Reach out to the YFG
            coordinators and we&apos;ll help spread the word.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl border border-sky-200 bg-sky-50 p-6 text-center dark:border-sky-500/30 dark:bg-sky-500/10">
        <p className="text-sm font-medium text-sky-800 dark:text-sky-200">
          Questions or ideas? Get in touch with the YFG team.
        </p>
        <a
          href={MEETINGS_CONTACT_MAILTO}
          className="mt-3 inline-block rounded-lg bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
        >
          Email contact
        </a>
      </div>
    </div>
  );
}
