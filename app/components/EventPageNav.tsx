import Link from 'next/link';
import type { EventPageNavItem } from '@app/data/eventPageNav';

interface EventPageNavProps {
  items: EventPageNavItem[];
  activeHref: string;
  maxWidth?: 'max-w-5xl' | 'max-w-6xl';
}

export default function EventPageNav({
  items,
  activeHref,
  maxWidth = 'max-w-5xl',
}: EventPageNavProps) {
  return (
    <section className="px-6 py-3 sm:px-14 sm:py-4">
      <div className={`mx-auto ${maxWidth}`}>
        <nav
          aria-label="Event section navigation"
          className="flex flex-wrap gap-2 rounded-[24px] border border-zinc-200 bg-white/90 p-2 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/90"
        >
          {items.map((item) => {
            const isActive = item.href === activeHref;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex items-center rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  isActive
                    ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950'
                    : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
