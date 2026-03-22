type EventLocationBadgeProps = {
  location: string;
  mode?: 'pill' | 'panel';
  venue?: string;
};

function splitLocation(location: string) {
  const trimmed = location.trim();

  if (!trimmed.includes(',')) {
    return { primary: trimmed, secondary: undefined as string | undefined };
  }

  const parts = trimmed.split(',').map((part) => part.trim());
  return {
    primary: parts.slice(0, -1).join(', '),
    secondary: parts.at(-1),
  };
}

function toneClasses(location: string) {
  const value = location.toLowerCase();

  if (value.includes('japan')) {
    return {
      dot: 'bg-sky-500',
      tag: 'bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300',
      panel:
        'border-sky-200 bg-sky-50/80 dark:border-sky-500/20 dark:bg-sky-500/5',
    };
  }

  if (value.includes('chile')) {
    return {
      dot: 'bg-cyan-500',
      tag: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-300',
      panel:
        'border-cyan-200 bg-cyan-50/80 dark:border-cyan-500/20 dark:bg-cyan-500/5',
    };
  }

  if (value.includes('tunisia')) {
    return {
      dot: 'bg-sky-500',
      tag: 'bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300',
      panel:
        'border-sky-200 bg-sky-50/80 dark:border-sky-500/20 dark:bg-sky-500/5',
    };
  }

  if (value.includes('germany')) {
    return {
      dot: 'bg-rose-500',
      tag: 'bg-rose-100 text-rose-800 dark:bg-rose-500/15 dark:text-rose-300',
      panel:
        'border-rose-200 bg-rose-50/80 dark:border-rose-500/20 dark:bg-rose-500/5',
    };
  }

  if (value.includes('online')) {
    return {
      dot: 'bg-zinc-500',
      tag: 'bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200',
      panel:
        'border-zinc-200 bg-zinc-50/80 dark:border-zinc-700 dark:bg-zinc-800/40',
    };
  }

  if (
    value.includes('tbd') ||
    value.includes('rotating') ||
    value.includes('your city')
  ) {
    return {
      dot: 'bg-amber-500',
      tag: 'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300',
      panel:
        'border-amber-200 bg-amber-50/80 dark:border-amber-500/20 dark:bg-amber-500/5',
    };
  }

  return {
    dot: 'bg-indigo-500',
    tag: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-300',
    panel:
      'border-indigo-200 bg-indigo-50/80 dark:border-indigo-500/20 dark:bg-indigo-500/5',
  };
}

export function EventLocationBadge({
  location,
  mode = 'pill',
  venue,
}: EventLocationBadgeProps) {
  const { primary, secondary } = splitLocation(location);
  const tone = toneClasses(location);

  if (mode === 'panel') {
    return (
      <div className={`min-w-[190px] rounded-2xl border p-3 ${tone.panel}`}>
        <div className="flex items-start gap-3">
          <span className={`mt-1.5 h-2.5 w-2.5 rounded-full ${tone.dot}`} />
          <div className="min-w-0">
            <div className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
              {primary}
            </div>
            {secondary ? (
              <div
                className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] ${tone.tag}`}
              >
                {secondary}
              </div>
            ) : null}
            {venue && venue !== location ? (
              <div className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {venue}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex max-w-full items-center gap-3 rounded-full border px-3 py-2 ${tone.panel}`}
    >
      <span className={`h-2.5 w-2.5 rounded-full ${tone.dot}`} />
      <span className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-50">
        {primary}
      </span>
      {secondary ? (
        <span
          className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] ${tone.tag}`}
        >
          {secondary}
        </span>
      ) : null}
    </div>
  );
}

export function EventVenueBadge({ venue }: { venue: string }) {
  return (
    <div className="inline-flex max-w-full items-center rounded-full border border-zinc-200 bg-white/85 px-3 py-2 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300">
      <span className="truncate">{venue}</span>
    </div>
  );
}
