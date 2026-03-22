import Link from 'next/link';
import EventPageNav from '@app/components/EventPageNav';
import { HMDS_PAGE_NAV_ITEMS } from '@app/data/eventPageNav';
import { SITE_CONTACT_EMAIL, createSiteMailto } from '@app/data/siteContact';

const HMDS_OFFICIAL_URL = 'https://hmds2026.vercel.app';
const HMDS_CONTACT_MAILTO = createSiteMailto('HMDS 2027 Inquiry');

export default function HMDSRegistrationPage() {
  return (
    <div className="relative overflow-hidden pt-16">
      <section className="px-6 py-10 sm:px-14 sm:py-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-indigo-100 bg-white shadow-[0_35px_90px_rgba(15,23,42,0.08)] dark:border-indigo-500/20 dark:bg-zinc-900">
          <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.10),transparent_34%),linear-gradient(135deg,#eef2ff_0%,#f8fbff_54%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.14),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.10),transparent_34%),linear-gradient(135deg,#1e1b4b_0%,#0f172a_58%,#09090b_100%)]"
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                HMDS 2027
              </p>
              <h1 className="mt-4 text-4xl leading-[0.94] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
                Registration
                <span className="mt-1 block text-indigo-700 dark:text-indigo-300">
                  in preparation
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                The local HMDS materials state that the registration system and
                abstract submission portal are still being prepared. Use the
                official site for updates. This site uses one shared contact for
                general inquiries.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={HMDS_OFFICIAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  Open official site
                </a>
                <a
                  href={HMDS_CONTACT_MAILTO}
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  Email contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventPageNav
        items={HMDS_PAGE_NAV_ITEMS}
        activeHref="/hmds/registration"
      />

      <section className="px-6 pb-12 sm:px-14 sm:pb-14">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Current status
            </div>
            <h2 className="mt-3 text-2xl leading-tight text-zinc-950 dark:text-zinc-100">
              Registration updates will be published here
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-700 dark:bg-zinc-800/80">
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Date
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Apr 1–4, 2027
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-700 dark:bg-zinc-800/80">
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Venue
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Tokyo Metropolitan University
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-700 dark:bg-zinc-800/80">
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Contact
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {SITE_CONTACT_EMAIL}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-[#eef2ff] p-6 shadow-sm dark:border-zinc-800 dark:bg-indigo-950/30 sm:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              What to do now
            </div>
            <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
              <div className="rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                1. Follow the official HMDS site for the portal opening.
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                2. For general questions on this site, use the shared contact
                email below.
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                3. The earlier archived fee references are intentionally kept
                off this page until the live 2027 registration details are
                confirmed.
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={HMDS_OFFICIAL_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                Open official site
              </a>
              <Link
                href="/hmds"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Back to overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
