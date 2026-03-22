import Link from 'next/link';
import EventPageNav from '@app/components/EventPageNav';
import { SUMMER_SCHOOL_PAGE_NAV_ITEMS } from '@app/data/eventPageNav';
import {
  SUMMER_SCHOOL_ACCOMPANYING_NOTE,
  SUMMER_SCHOOL_CONTACT_EMAIL,
  SUMMER_SCHOOL_EVENT_NAME,
  SUMMER_SCHOOL_PROGRAM_NAME,
  SUMMER_SCHOOL_FEE_NOTES,
  SUMMER_SCHOOL_FEE_SCHEDULE,
  SUMMER_SCHOOL_REGISTRATION_MAILTO,
} from '@app/data/summerSchool';
import RegistrationInquiryForm from './RegistrationInquiryForm';

const deadlineCards = [
  { label: 'Early bird', value: 'By Apr 30, 2026' },
  { label: 'Regular', value: 'By May 31, 2026' },
  { label: 'On-site', value: 'After May 31, 2026' },
];

export default function SummerSchoolRegistrationPage() {
  return (
    <div className="relative overflow-hidden pt-16">
      <section className="px-6 py-10 sm:px-14 sm:py-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_35px_90px_rgba(15,23,42,0.08)] dark:border-zinc-800 dark:bg-zinc-900">
          <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,91,120,0.12),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.10),transparent_34%),linear-gradient(135deg,#f4f9fc_0%,#fbfdfe_54%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.10),transparent_34%),linear-gradient(135deg,#111827_0%,#0f172a_58%,#09090b_100%)]"
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                {SUMMER_SCHOOL_EVENT_NAME}
              </p>
              <h1 className="mt-4 text-4xl leading-[0.94] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
                Registration
                <span className="mt-1 block text-[#0f5b78] dark:text-cyan-300">
                  and Fees
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                {SUMMER_SCHOOL_PROGRAM_NAME}. The fee categories, deadline
                bands, and inclusions below follow the announced summer-school
                materials.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={SUMMER_SCHOOL_REGISTRATION_MAILTO}
                  className="inline-flex items-center justify-center rounded-xl bg-[#0f5b78] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#124e64] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Email contact
                </a>
                <Link
                  href="/summer-school"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  Back to summer school
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventPageNav
        items={SUMMER_SCHOOL_PAGE_NAV_ITEMS}
        activeHref="/summer-school/registration"
      />

      <section className="px-6 pb-12 sm:px-14 sm:pb-14">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                Deadline bands
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {deadlineCards.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-700 dark:bg-zinc-800/80"
                  >
                    <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-x-auto rounded-[24px] border border-zinc-200 dark:border-zinc-800">
                <table className="min-w-[520px] w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-[#10212d] text-white dark:bg-zinc-100 dark:text-zinc-900">
                      <th className="px-4 py-3 font-medium">Category</th>
                      <th className="px-4 py-3 font-medium">
                        Early bird
                        <span className="block text-xs font-normal text-zinc-300 dark:text-zinc-500">
                          by Apr 30
                        </span>
                      </th>
                      <th className="px-4 py-3 font-medium">
                        Regular
                        <span className="block text-xs font-normal text-zinc-300 dark:text-zinc-500">
                          by May 31
                        </span>
                      </th>
                      <th className="px-4 py-3 font-medium">
                        On-site
                        <span className="block text-xs font-normal text-zinc-300 dark:text-zinc-500">
                          after May 31
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SUMMER_SCHOOL_FEE_SCHEDULE.map((row, index) => (
                      <tr
                        key={row.category}
                        className={
                          index % 2 === 0
                            ? 'bg-white dark:bg-zinc-950'
                            : 'bg-[#f4f8fb] dark:bg-zinc-900/80'
                        }
                      >
                        <td className="border-t border-zinc-200 px-4 py-3 font-medium text-zinc-900 dark:border-zinc-800 dark:text-zinc-100">
                          {row.category}
                        </td>
                        <td className="border-t border-zinc-200 px-4 py-3 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                          {row.earlyBird}
                        </td>
                        <td className="border-t border-zinc-200 px-4 py-3 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                          {row.regular}
                        </td>
                        <td className="border-t border-zinc-200 px-4 py-3 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                          {row.onsite}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs leading-6 text-zinc-500 dark:text-zinc-400">
                {SUMMER_SCHOOL_ACCOMPANYING_NOTE}
              </p>
            </div>

            <div className="space-y-8">
              <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                  Payment method
                </div>
                <h2 className="mt-3 text-2xl leading-tight text-zinc-950 dark:text-zinc-100">
                  Recommended payment flow
                </h2>
                <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800/80">
                    1. Submit your registration request with the form below.
                  </div>
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800/80">
                    2. The organizer confirms your category and sends the
                    Airwallex payment instructions.
                  </div>
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800/80">
                    3. Pay with the same email address and include your payment
                    reference in the Airwallex note.
                  </div>
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800/80">
                    4. Send the Airwallex transaction ID after payment.
                    Screenshot only if there is a payment issue or if the
                    organizer asks for it.
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-zinc-200 bg-[#ecf4f9] p-6 shadow-sm dark:border-zinc-800 dark:bg-[#10212d] sm:p-8">
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                  Contact
                </div>
                <h2 className="mt-3 text-2xl leading-tight text-zinc-900 dark:text-white">
                  Summer-school contact
                </h2>
                <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-200">
                  <a
                    href={`mailto:${SUMMER_SCHOOL_CONTACT_EMAIL}`}
                    className="block rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 font-medium text-[#0f5b78] underline decoration-[#8fd3e6] underline-offset-4 dark:border-white/10 dark:bg-white/5 dark:text-cyan-300"
                  >
                    {SUMMER_SCHOOL_CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <RegistrationInquiryForm />

          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[28px] border border-zinc-200 bg-[#ecf4f9] p-6 shadow-sm dark:border-zinc-800 dark:bg-[#10212d] sm:p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                Inclusions
              </div>
              <div className="mt-5 space-y-3">
                {SUMMER_SCHOOL_FEE_NOTES.map((note) => (
                  <div
                    key={note}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm leading-7 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-200"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                Quick action
              </div>
              <h2 className="mt-3 text-2xl leading-tight text-zinc-950 dark:text-zinc-100">
                Need to contact the summer-school team now?
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                If you already know your category and just want to contact the
                public summer-school email, use the button below.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={SUMMER_SCHOOL_REGISTRATION_MAILTO}
                  className="inline-flex items-center justify-center rounded-xl bg-[#0f5b78] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#124e64] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Email contact
                </a>
                <Link
                  href="/summer-school"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  Back to event page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
