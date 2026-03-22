import Link from 'next/link';
import EventPageNav from '@app/components/EventPageNav';
import { WINTER_SCHOOL_PAGE_NAV_ITEMS } from '@app/data/eventPageNav';
import { SITE_CONTACT_EMAIL, createSiteMailto } from '@app/data/siteContact';

const WINTER_SCHOOL_REGISTRATION_MAILTO = createSiteMailto(
  'Winter School 2027 Registration Interest'
);

export default function WinterSchoolRegistrationPage() {
  return (
    <div className="relative overflow-hidden pt-16">
      <section className="px-6 py-10 sm:px-14 sm:py-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-cyan-100 bg-white shadow-[0_35px_90px_rgba(15,23,42,0.08)] dark:border-cyan-500/20 dark:bg-zinc-900">
          <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(6,182,212,0.10),transparent_34%),linear-gradient(135deg,#ecfeff_0%,#f7fcfd_54%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(6,182,212,0.10),transparent_34%),linear-gradient(135deg,#083344_0%,#0f172a_58%,#09090b_100%)]"
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                Winter School 2027
              </p>
              <h1 className="mt-4 text-4xl leading-[0.94] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
                Registration
                <span className="mt-1 block text-cyan-700 dark:text-cyan-300">
                  opening later
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                The Chile winter-school page is active, but registration and fee
                details have not been published yet. This page will hold the
                confirmed registration information once it is available.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WINTER_SCHOOL_REGISTRATION_MAILTO}
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Email contact
                </a>
                <Link
                  href="/winter-school"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  Back to overview
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventPageNav
        items={WINTER_SCHOOL_PAGE_NAV_ITEMS}
        activeHref="/winter-school/registration"
      />

      <section className="px-6 pb-12 sm:px-14 sm:pb-14">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Event facts
            </div>
            <h2 className="mt-3 text-2xl leading-tight text-zinc-950 dark:text-zinc-100">
              IFToMM YFG Winter School 2027
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-700 dark:bg-zinc-800/80">
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Date
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Jan 25–29, 2027
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-700 dark:bg-zinc-800/80">
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Region
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Biobio Region, Chile
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-700 dark:bg-zinc-800/80">
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Host
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  University of Bío-Bío
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-[#ecfeff] p-6 shadow-sm dark:border-zinc-800 dark:bg-cyan-950/20 sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Registration status
            </div>
            <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
              <div className="rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                Registration and fees will be published after the program
                details are finalized.
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                If you want to be notified when registration opens, contact the
                YFG team now.
              </div>
              <a
                href={WINTER_SCHOOL_REGISTRATION_MAILTO}
                className="block rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 font-medium text-cyan-700 underline decoration-cyan-200 underline-offset-4 dark:border-white/10 dark:bg-white/5 dark:text-cyan-300"
              >
                {SITE_CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
