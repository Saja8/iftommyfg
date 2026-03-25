'use client';
import { NavBar } from './NavBar/NavBar';
import { ThemeToggle } from './ThemeToggle';

const Header = () => (
  <>
    <header className="relative z-[3000] h-header w-full border-b border-zinc-200/70 dark:border-zinc-700/70 bg-white/80 dark:bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-zinc-950/70">
      <div className="flex px-6 sm:px-14 h-header items-center gap-3 sm:gap-6">
        <h2 className="shrink-0">
          <a
            href="/"
            className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            IFToMM YFG
          </a>
        </h2>
        <div className="flex-1 flex justify-center">
          <NavBar />
        </div>
        <ThemeToggle />
      </div>
    </header>
  </>
);

export default Header;
