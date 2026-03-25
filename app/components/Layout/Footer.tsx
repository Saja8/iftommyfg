import './footer.css';
import Link from 'next/link';
import { SITE_CONTACT_EMAIL, SITE_LINKEDIN_URL } from '@app/data/siteContact';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="w-full m-h-56 leading-7">
    <div className="border-b border-zinc-200 bg-zinc-100 py-6 text-center text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
      <h2 className="text-2xl font-bold sm:text-4xl">Contact the YFG</h2>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 text-sm sm:text-base">
        <a
          href={`mailto:${SITE_CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 transition-colors hover:text-sky-600 dark:hover:text-sky-300"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          {SITE_CONTACT_EMAIL}
        </a>
        <a
          href={SITE_LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-sky-600 dark:hover:text-sky-300"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://iftomm-world.org/cdg-2-iftomm-young-faculty-group/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-sky-600 dark:hover:text-sky-300"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          IFToMM YFG page
        </a>
      </div>
    </div>
    <div className="mx-auto flex flex-col gap-4 px-6 py-5 text-sm text-zinc-700 dark:text-zinc-300 sm:flex-row sm:items-center sm:justify-between sm:px-14 sm:py-8">
      <p className="text-center sm:text-left">
        © {currentYear} IFToMM Young Faculty Group
      </p>
      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5">
        <Link
          className="transition-colors hover:text-sky-700 dark:hover:text-sky-300"
          href="/yfg"
        >
          YFG Symposia
        </Link>
        <Link
          className="transition-colors hover:text-sky-700 dark:hover:text-sky-300"
          href="/hmds"
        >
          HMDS
        </Link>
        <Link
          className="transition-colors hover:text-sky-700 dark:hover:text-sky-300"
          href="/summer-school"
        >
          Summer School
        </Link>
        <Link
          className="transition-colors hover:text-sky-700 dark:hover:text-sky-300"
          href="/winter-school"
        >
          Winter School
        </Link>
        <Link
          className="transition-colors hover:text-sky-700 dark:hover:text-sky-300"
          href="/meetings"
        >
          Meetings
        </Link>
      </nav>
    </div>
  </footer>
);

export default Footer;
