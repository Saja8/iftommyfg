import './footer.css';
import Link from 'next/link';
import { SITE_CONTACT_EMAIL } from '@app/data/siteContact';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="w-full m-h-56 leading-7">
    <div className="border-b border-zinc-200 bg-zinc-100 py-6 text-center text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
      <h2 className="text-2xl font-bold sm:text-4xl">Contact the YFG</h2>
      <p className="mt-6 px-6 text-sm sm:text-base">
        <a
          href={`mailto:${SITE_CONTACT_EMAIL}`}
          className="transition-colors hover:text-sky-600 dark:hover:text-sky-300"
        >
          {SITE_CONTACT_EMAIL}
        </a>{' '}
        <span className="mx-2 text-zinc-400 dark:text-zinc-600">•</span>
        <a
          href="https://iftomm-world.org/cdg-2-iftomm-young-faculty-group/"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-sky-600 dark:hover:text-sky-300"
        >
          IFToMM YFG page
        </a>
      </p>
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
