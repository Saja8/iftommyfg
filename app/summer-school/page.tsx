import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import EventPageNav from '@app/components/EventPageNav';
import { SUMMER_SCHOOL_PAGE_NAV_ITEMS } from '@app/data/eventPageNav';
import { TOKYO_SUMMER_SCHOOL_GALLERY } from '@app/data/events';
import {
  SUMMER_SCHOOL_CONTACT_EMAIL,
  SUMMER_SCHOOL_EVENT_NAME,
  SUMMER_SCHOOL_PROGRAM_NAME,
  SUMMER_SCHOOL_REGISTRATION_MAILTO,
  SUMMER_SCHOOL_REGISTRATION_PATH,
} from '@app/data/summerSchool';

const overviewPoints = [
  '10-day in-person program from Jul 22 to Jul 31 at Tokyo Metropolitan University',
  'Morning lectures, field visits, and team project work',
  'International teams of 4-5 participants',
  'Two exploration days built into the schedule',
];

const audienceGroups = [
  'Undergraduate students',
  "Master's and PhD students",
  'Early-career professionals',
  'Participants from engineering, sustainability, design, business, and policy',
];

const registrationHighlights = [
  { label: 'Partner uni', value: '$150 USD flat rate' },
  { label: 'Application', value: 'Open registration page' },
  { label: 'Early bird', value: 'By Apr 30, 2026' },
  { label: 'Regular', value: 'By May 31, 2026' },
  { label: 'Contact', value: 'Summer-school email' },
];

const deliverables = [
  'Field evidence portfolio',
  'Cross-city comparison',
  'Prototype or pilot concept',
  'Final presentation + brief',
];

const heroSnapshot = [
  {
    label: 'Audience',
    value:
      'Undergraduates, graduate students, and early-career professionals from mixed backgrounds',
  },
  {
    label: 'Outputs',
    value: 'Field evidence, prototype work, and a final short brief',
  },
];

const venueFacts = [
  { label: 'Host', value: 'Tokyo Metropolitan University' },
  { label: 'Campus', value: 'Minami-Osawa, Hachioji' },
  { label: 'Access', value: 'About 40 min from Shinjuku by Keio line' },
];

const agenda = [
  {
    date: 'Wed 22',
    focus: 'Kickoff and team setup',
    activity: 'Orientation, overview, and team formation',
    output: 'Team plan',
  },
  {
    date: 'Thu 23',
    focus: 'City systems and observation',
    activity: 'Methods briefing and field observation',
    output: 'Problem update',
  },
  {
    date: 'Fri 24',
    focus: 'Exploration day',
    activity: 'City exploration and note-taking',
    output: 'Exploration notes',
  },
  {
    date: 'Sat 25',
    focus: 'Optional comparative visit',
    activity: 'Optional visit to a nearby city or district',
    output: 'Comparative notes',
  },
  {
    date: 'Sun 26',
    focus: 'Free day',
    activity: 'Self-directed learning and reflection',
    output: 'Reflection note',
  },
  {
    date: 'Mon 27',
    focus: 'Mobility and access',
    activity: 'Rail briefing and station-area field study',
    output: 'Problem map',
  },
  {
    date: 'Tue 28',
    focus: 'Exploration day',
    activity: 'Exploration, interviews, or teamwork',
    output: 'Field summary',
  },
  {
    date: 'Wed 29',
    focus: 'Energy and circular systems',
    activity: 'Site visit and applied workshop',
    output: 'Prototype progress',
  },
  {
    date: 'Thu 30',
    focus: 'Integration and prep',
    activity: 'Planning, mentor feedback, and rehearsal',
    output: 'Final draft package',
  },
  {
    date: 'Fri 31',
    focus: 'Final showcase',
    activity: 'Team presentations and panel feedback',
    output: 'Final presentation',
  },
];

function Pill({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: 'neutral' | 'warm' | 'cool';
}) {
  const toneClass =
    tone === 'warm'
      ? 'border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200'
      : tone === 'cool'
      ? 'border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-200'
      : 'border-zinc-200 bg-white/80 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200';

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${toneClass}`}
    >
      {children}
    </span>
  );
}

export default function SummerSchoolPage() {
  const [heroImage] = TOKYO_SUMMER_SCHOOL_GALLERY;
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f3f8fb_0%,#f9fcfe_18%,#ffffff_54%,#eef4f8_100%)] dark:bg-[linear-gradient(180deg,#09090b_0%,#101828_26%,#0f172a_62%,#111827_100%)] pt-16">
      <section className="px-6 pb-6 pt-8 sm:px-14 sm:pb-8 sm:pt-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="overflow-hidden rounded-[32px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_35px_90px_rgba(15,23,42,0.08)]">
            <div className="relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,91,120,0.12),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.10),transparent_34%),linear-gradient(135deg,#f4f9fc_0%,#fbfdfe_54%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.10),transparent_34%),linear-gradient(135deg,#111827_0%,#0f172a_58%,#09090b_100%)]"
              />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                  Tokyo Metropolitan University
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill tone="neutral">Summer School</Pill>
                  <Pill tone="cool">Jul 22–31, 2026</Pill>
                </div>
                <h1 className="mt-5 max-w-4xl text-4xl leading-[0.94] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
                  {SUMMER_SCHOOL_EVENT_NAME}
                  <span className="mt-1 block text-[#0f5b78] dark:text-cyan-300">
                    {SUMMER_SCHOOL_PROGRAM_NAME}
                  </span>
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                  A practical summer school applying mechanism and machine
                  science to real urban challenges — mobility, energy,
                  resilience, and infrastructure — using Tokyo as a living
                  laboratory.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={SUMMER_SCHOOL_REGISTRATION_PATH}
                    className="inline-flex items-center justify-center rounded-xl bg-[#0f5b78] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#124e64] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    Open registration
                  </Link>
                  <a
                    href={SUMMER_SCHOOL_REGISTRATION_MAILTO}
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:bg-zinc-800"
                  >
                    Email contact
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/85 dark:bg-zinc-900/70 p-4 backdrop-blur">
                    <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      Format
                    </div>
                    <div className="mt-1 text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                      10-day in-person
                    </div>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/85 dark:bg-zinc-900/70 p-4 backdrop-blur">
                    <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      Venue
                    </div>
                    <div className="mt-1 text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                      TMU, Tokyo
                    </div>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/85 dark:bg-zinc-900/70 p-4 backdrop-blur">
                    <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      Team mode
                    </div>
                    <div className="mt-1 text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                      Fieldwork + project work
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-[24px] border border-zinc-200 dark:border-zinc-700 bg-white/85 dark:bg-zinc-900/70 p-5 backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Program snapshot
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {heroSnapshot.map((item) => (
                      <div key={item.label}>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                          {item.label}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-zinc-200 dark:border-zinc-800 bg-[#ecf4f9] dark:bg-[#10212d] shadow-[0_35px_90px_rgba(15,23,42,0.08)]">
            <div className="relative overflow-hidden px-6 py-8 text-zinc-900 dark:text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(59,130,246,0.16),transparent_40%)]"
              />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                  Host city and venue
                </div>
                <h2 className="mt-3 text-2xl leading-tight text-zinc-900 dark:text-white sm:text-3xl">
                  Tokyo, Japan
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                  Hosted at Tokyo Metropolitan University with field-based
                  sessions exploring mechanism and machine science in rail,
                  neighborhood, and urban infrastructure sites.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {venueFacts.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-4"
                    >
                      <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                        {item.label}
                      </div>
                      <div className="mt-2 text-sm font-medium leading-6 text-zinc-900 dark:text-white">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 overflow-hidden rounded-[28px] border border-zinc-200 dark:border-white/10 bg-white dark:bg-black/20">
                  <div className="relative aspect-[5/4] sm:aspect-[16/11] lg:aspect-[5/6]">
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 dark:from-black/35 dark:to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventPageNav
        items={SUMMER_SCHOOL_PAGE_NAV_ITEMS}
        activeHref="/summer-school"
        maxWidth="max-w-6xl"
      />

      <section className="px-6 py-10 sm:px-14 sm:py-12">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm sm:p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                Highlights
              </div>
              <h2 className="mt-3 text-2xl leading-tight text-zinc-950 dark:text-zinc-100">
                At a glance
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {overviewPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/80 p-4 text-sm leading-6 text-zinc-700 dark:text-zinc-200"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  What teams produce
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {deliverables.map((item) => (
                    <Pill key={item} tone="cool">
                      {item}
                    </Pill>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-zinc-200 dark:border-zinc-800 bg-[#f4f8fb] dark:bg-zinc-900 p-6 shadow-sm sm:p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-[#0f5b78] dark:text-cyan-300">
                Who it is for
              </div>
              <h2 className="mt-3 text-2xl leading-tight text-zinc-950 dark:text-zinc-100">
                Mixed backgrounds, small teams, practical city work
              </h2>
              <div className="mt-6 space-y-3">
                {audienceGroups.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-200 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="rounded-[28px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm sm:p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                Daily agenda
              </div>
              <h2 className="mt-3 text-2xl leading-tight text-zinc-950 dark:text-zinc-100">
                July 2026 schedule
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                The program starts on Wednesday and ends on the following
                Friday, with space for field observation, team work, and
                exploration.
              </p>
              <div className="mt-6 overflow-x-auto rounded-[24px] border border-zinc-200 dark:border-zinc-800">
                <table
                  className="min-w-[720px] w-full border-collapse"
                  style={{
                    fontFamily:
                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  <thead>
                    <tr className="bg-[#10212d] dark:bg-zinc-100 text-left text-white dark:text-zinc-900">
                      <th className="px-4 py-3 text-xs font-medium uppercase tracking-[0.18em]">
                        Date
                      </th>
                      <th className="px-4 py-3 text-xs font-medium uppercase tracking-[0.18em]">
                        Focus
                      </th>
                      <th className="px-4 py-3 text-xs font-medium uppercase tracking-[0.18em]">
                        Main activity
                      </th>
                      <th className="px-4 py-3 text-xs font-medium uppercase tracking-[0.18em]">
                        Output
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {agenda.map((item, index) => (
                      <tr
                        key={`${item.date}-${item.focus}`}
                        className={
                          index % 2 === 0
                            ? 'bg-white dark:bg-zinc-950'
                            : 'bg-[#f4f8fb] dark:bg-zinc-900/80'
                        }
                      >
                        <td className="border-t border-zinc-200 dark:border-zinc-800 px-4 py-4 align-top">
                          <span className="inline-flex whitespace-nowrap rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 px-3.5 py-1.5 text-sm font-semibold leading-none text-zinc-700 dark:text-zinc-200">
                            {item.date}
                          </span>
                        </td>
                        <td className="border-t border-zinc-200 dark:border-zinc-800 px-4 py-4 align-top text-[15px] font-medium leading-7 text-zinc-950 dark:text-zinc-100">
                          {item.focus}
                        </td>
                        <td className="border-t border-zinc-200 dark:border-zinc-800 px-4 py-4 align-top text-[15px] leading-7 text-zinc-600 dark:text-zinc-300">
                          {item.activity}
                        </td>
                        <td className="border-t border-zinc-200 dark:border-zinc-800 px-4 py-4 align-top">
                          <span className="inline-flex whitespace-nowrap rounded-full bg-[#edf7fb] dark:bg-cyan-500/10 px-3 py-1.5 text-sm font-medium leading-none text-[#144b61] dark:text-cyan-200">
                            {item.output}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-10">
              <div className="rounded-[28px] border border-zinc-200 dark:border-zinc-800 bg-[#ecf4f9] dark:bg-[#10212d] p-6 text-zinc-900 dark:text-white shadow-sm sm:p-8">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                  Registration
                </div>
                <h2 className="mt-3 text-2xl leading-tight text-zinc-900 dark:text-white">
                  Registration details
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                  Use the registration page for the application flow, payment
                  instructions, deadlines, and organizer contact.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {registrationHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-4"
                    >
                      <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                        {item.label}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-zinc-900 dark:text-white break-words">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
                    Registration and payment instructions are handled on the
                    dedicated registration page.
                  </div>
                  <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
                    Registration contact:{' '}
                    <a
                      href={`mailto:${SUMMER_SCHOOL_CONTACT_EMAIL}`}
                      className="font-medium text-[#0f5b78] underline decoration-[#8fd3e6] underline-offset-4 dark:text-cyan-300"
                    >
                      {SUMMER_SCHOOL_CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={SUMMER_SCHOOL_REGISTRATION_PATH}
                    className="inline-flex items-center justify-center rounded-xl bg-[#0f5b78] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#124e64] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    Open registration
                  </Link>
                  <a
                    href={SUMMER_SCHOOL_REGISTRATION_MAILTO}
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
                  >
                    Email contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
