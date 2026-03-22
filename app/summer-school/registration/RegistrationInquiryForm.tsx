'use client';

import { useMemo, useState } from 'react';
import {
  SUMMER_SCHOOL_CONTACT_EMAIL,
  SUMMER_SCHOOL_EVENT_NAME,
  SUMMER_SCHOOL_REGISTRATION_SUBJECT,
} from '@app/data/summerSchool';

const CATEGORY_OPTIONS = [
  'Partner university',
  'IFToMM community',
  'Regular attendee',
  'Student',
  'Accompanying person',
];

const FIELD_CLASS =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-500/20';

function slugifyName(value: string) {
  const normalized = value
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return normalized || 'YOUR-NAME';
}

export default function RegistrationInquiryForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState(CATEGORY_OPTIONS[2]);
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const paymentReference = useMemo(
    () => `TSS2026-${slugifyName(fullName)}`,
    [fullName]
  );

  const mailtoHref = useMemo(() => {
    const lines = [
      `${SUMMER_SCHOOL_EVENT_NAME} Registration`,
      '',
      `Full name: ${fullName || '[not provided]'}`,
      `Email: ${email || '[not provided]'}`,
      `Institution: ${institution || '[not provided]'}`,
      `Country: ${country || '[not provided]'}`,
      `Category: ${category}`,
      `Payment reference: ${paymentReference}`,
      '',
      'Background / note:',
      notes || '[not provided]',
      '',
      'I understand that the summer-school team will confirm registration and payment instructions.',
    ];

    const subject = fullName
      ? `${SUMMER_SCHOOL_REGISTRATION_SUBJECT} - ${fullName}`
      : SUMMER_SCHOOL_REGISTRATION_SUBJECT;

    return `mailto:${SUMMER_SCHOOL_CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join('\n'))}`;
  }, [
    category,
    country,
    email,
    fullName,
    institution,
    notes,
    paymentReference,
  ]);

  async function handleCopyReference() {
    try {
      await navigator.clipboard.writeText(paymentReference);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
      <div className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
        Registration form
      </div>
      <h2 className="mt-3 text-2xl leading-tight text-zinc-950 dark:text-zinc-100">
        Send your registration request
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
        Fill in your details, then open the prepared email draft. This keeps the
        registration information structured and gives you a payment reference to
        use later in Airwallex.
      </p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Full name
            <input
              className={FIELD_CLASS}
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Your full name"
              required
            />
          </label>

          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Email
            <input
              className={FIELD_CLASS}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Institution
            <input
              className={FIELD_CLASS}
              value={institution}
              onChange={(event) => setInstitution(event.target.value)}
              placeholder="University or organization"
              required
            />
          </label>

          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Country
            <input
              className={FIELD_CLASS}
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              placeholder="Country"
              required
            />
          </label>
        </div>

        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
          Category
          <select
            className={FIELD_CLASS}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
          Background or note
          <textarea
            className={`${FIELD_CLASS} min-h-[132px] resize-y`}
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Short note about your background, interest, or any request."
          />
        </label>

        <div className="rounded-2xl border border-zinc-200 bg-[#f4f8fb] px-4 py-4 dark:border-zinc-700 dark:bg-zinc-800/80">
          <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Payment reference
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <code className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
              {paymentReference}
            </code>
            <button
              type="button"
              onClick={handleCopyReference}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              {copied ? 'Copied' : 'Copy reference'}
            </button>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            Use this same reference in the Airwallex payment note when you pay.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-[#0f5b78] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#124e64] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Open email draft
          </button>
          <a
            href={`mailto:${SUMMER_SCHOOL_CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            Write directly
          </a>
        </div>
      </form>
    </div>
  );
}
