'use client';

import { useId, useState } from 'react';

type EventInfoTab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export function EventInfoTabs({
  tabs,
  initialTabId,
}: {
  tabs: EventInfoTab[];
  initialTabId?: string;
}) {
  const generatedId = useId();
  const [activeTab, setActiveTab] = useState(
    initialTabId && tabs.some((t) => t.id === initialTabId)
      ? initialTabId
      : tabs[0]?.id
  );

  const active = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  const moveFocus = (currentId: string, direction: 1 | -1) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === currentId);
    if (currentIndex < 0) return;
    const nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];
    if (!nextTab) return;
    setActiveTab(nextTab.id);
    const nextButton = document.getElementById(
      `${generatedId}-${nextTab.id}-tab`
    ) as HTMLButtonElement | null;
    nextButton?.focus();
  };

  return (
    <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
      <div className="border-b border-zinc-100 dark:border-zinc-800">
        <div
          role="tablist"
          aria-label="Event information sections"
          aria-orientation="horizontal"
          className="flex gap-2 overflow-x-auto px-3 py-3 sm:px-5 scrollbar-thin"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === active?.id;
            const tabButtonId = `${generatedId}-${tab.id}-tab`;
            const panelId = `${generatedId}-${tab.id}-panel`;
            return (
              <button
                key={tab.id}
                id={tabButtonId}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    moveFocus(tab.id, 1);
                  }
                  if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    moveFocus(tab.id, -1);
                  }
                  if (event.key === 'Home') {
                    event.preventDefault();
                    const first = tabs[0];
                    if (!first) return;
                    setActiveTab(first.id);
                    document
                      .getElementById(`${generatedId}-${first.id}-tab`)
                      ?.focus();
                  }
                  if (event.key === 'End') {
                    event.preventDefault();
                    const last = tabs[tabs.length - 1];
                    if (!last) return;
                    setActiveTab(last.id);
                    document
                      .getElementById(`${generatedId}-${last.id}-tab`)
                      ?.focus();
                  }
                }}
                className={`flex-none whitespace-nowrap rounded-full px-3 py-2 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {tabs.map((tab) => {
          const isActive = tab.id === active?.id;
          const tabButtonId = `${generatedId}-${tab.id}-tab`;
          const panelId = `${generatedId}-${tab.id}-panel`;
          return (
            <div
              key={tab.id}
              id={panelId}
              role="tabpanel"
              aria-labelledby={tabButtonId}
              hidden={!isActive}
              className={isActive ? 'block' : 'hidden'}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
