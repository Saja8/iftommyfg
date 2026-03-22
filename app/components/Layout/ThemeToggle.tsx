'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'yfg-theme-mode';

function getSystemMode(): 'light' | 'dark' {
  if (typeof window === 'undefined') {
    return 'light';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyTheme(mode: ThemeMode): 'light' | 'dark' {
  const resolved = mode === 'system' ? getSystemMode() : mode;
  if (typeof document === 'undefined') {
    return resolved;
  }
  const root = document.documentElement;
  root.classList.toggle('dark', resolved === 'dark');
  root.style.colorScheme = resolved;
  root.setAttribute('data-theme-mode', mode);
  return resolved;
}

function ThemeModeIcon({ mode }: { mode: 'light' | 'dark' }) {
  if (mode === 'dark') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 12.79A9 9 0 0 1 11.21 3c0 .09-.01.17-.01.26A9 9 0 1 0 20.74 13c.09 0 .17 0 .26-.01z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('system');
  const [resolvedMode, setResolvedMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initialMode: ThemeMode =
      saved === 'light' || saved === 'dark' || saved === 'system'
        ? saved
        : 'system';
    setMode(initialMode);
    setResolvedMode(applyTheme(initialMode));

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const onMediaChange = () => {
      if ((localStorage.getItem(STORAGE_KEY) || 'system') === 'system') {
        setResolvedMode(applyTheme('system'));
      }
    };

    mediaQuery.addEventListener('change', onMediaChange);
    return () => mediaQuery.removeEventListener('change', onMediaChange);
  }, []);

  const toggleTheme = () => {
    const nextResolved = resolvedMode === 'dark' ? 'light' : 'dark';
    setMode(nextResolved);
    localStorage.setItem(STORAGE_KEY, nextResolved);
    setResolvedMode(applyTheme(nextResolved));
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={toggleTheme}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-zinc-100 ${
          mode === 'system'
            ? 'border-sky-300 bg-sky-50 hover:bg-sky-100 dark:border-sky-500/40 dark:bg-sky-500/10 dark:hover:bg-sky-500/20'
            : 'border-zinc-300 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800'
        }`}
        aria-label={`Theme controller. Current mode ${resolvedMode}. Click to switch to ${
          resolvedMode === 'dark' ? 'light' : 'dark'
        } mode.`}
        title={`Theme: ${resolvedMode} (${
          mode === 'system' ? 'system default' : 'manual'
        })`}
      >
        <ThemeModeIcon mode={resolvedMode} />
        <span className="sr-only">
          Theme: {resolvedMode}.{' '}
          {mode === 'system' ? 'Using system setting.' : 'Manual mode.'}
        </span>
      </button>
    </div>
  );
}
