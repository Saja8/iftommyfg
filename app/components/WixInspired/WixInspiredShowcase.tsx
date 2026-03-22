type ShowcaseStat = {
  label: string;
  value: string;
};

type ShowcaseCard = {
  title: string;
  subtitle: string;
  image: string;
};

type WixInspiredShowcaseProps = {
  theme?: 'summer' | 'winter';
  eyebrow: string;
  badge: string;
  title: string;
  subtitle: string;
  note?: string;
  stats?: ShowcaseStat[];
  cards: ShowcaseCard[];
  heroImage?: string;
  heroAlt?: string;
  showSticker?: boolean;
};

const DEMO_IMAGES = {
  hero: 'https://static.wixstatic.com/media/503ea4_ed9a38760ae04aab86b47e82525fdcac~mv2.jpg/v1/fill/w_918,h_585,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/503ea4_ed9a38760ae04aab86b47e82525fdcac~mv2.jpg',
  sticker:
    'https://static.wixstatic.com/media/c22c23_14f3a617cd684341b51dd1a3962c856e~mv2.png/v1/fill/w_202,h_245,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_14f3a617cd684341b51dd1a3962c856e~mv2.png',
};

export function WixInspiredShowcase({
  theme = 'summer',
  eyebrow,
  badge,
  title,
  subtitle,
  note,
  stats = [],
  cards,
  heroImage = DEMO_IMAGES.hero,
  heroAlt = 'IFToMM YFG event visual',
  showSticker = true,
}: WixInspiredShowcaseProps) {
  const isWinter = theme === 'winter';
  const badgeClass = isWinter
    ? 'bg-indigo-100 text-indigo-800 border-indigo-200'
    : 'bg-emerald-100 text-emerald-800 border-emerald-200';
  const accentClass = isWinter
    ? 'from-indigo-500/20 to-blue-500/20'
    : 'from-emerald-500/20 to-teal-500/20';
  const statRingClass = isWinter ? 'ring-indigo-100' : 'ring-emerald-100';
  const labelClass = isWinter ? 'text-indigo-700' : 'text-emerald-700';
  const overlayLabelClass = isWinter ? 'text-indigo-300' : 'text-emerald-300';

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-14">
      <div className="relative overflow-hidden rounded-[28px] bg-zinc-900">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative bg-stone-50 dark:bg-zinc-900 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div
              className={`absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-gradient-to-br blur-3xl ${accentClass}`}
              aria-hidden="true"
            />
            <p className="text-xs tracking-[0.22em] uppercase text-zinc-500 dark:text-zinc-400">
              {eyebrow}
            </p>
            <div className="mt-4">
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${badgeClass}`}
              >
                {badge}
              </span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-zinc-950 dark:text-zinc-50">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              {subtitle}
            </p>

            {stats.length ? (
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={`${stat.label}-${stat.value}`}
                    className={`rounded-2xl bg-white dark:bg-zinc-800 p-4 shadow-sm ring-1 ${statRingClass} dark:ring-zinc-700`}
                  >
                    <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {note ? (
              <p className="mt-6 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {note}
              </p>
            ) : null}
          </div>

          <div className="relative min-h-[320px] overflow-hidden bg-black sm:min-h-[420px]">
            <div className="absolute inset-y-0 left-0 hidden w-16 bg-zinc-900 sm:block" />
            <img
              src={heroImage}
              alt={heroAlt}
              className="h-full w-full object-cover object-center sm:pl-0 wix-motion-hero"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent"
              aria-hidden="true"
            />
            {showSticker ? (
              <img
                src={DEMO_IMAGES.sticker}
                alt=""
                aria-hidden="true"
                className="absolute left-4 top-1/2 hidden w-28 -translate-y-1/2 rotate-[-8deg] drop-shadow-2xl sm:block wix-motion-sticker"
                loading="lazy"
              />
            ) : null}
            <div className="absolute bottom-4 right-4 max-w-xs rounded-2xl border border-white/20 bg-black/60 p-4 text-white backdrop-blur">
              <div
                className={`text-xs uppercase tracking-wide ${overlayLabelClass}`}
              >
                IFToMM YFG
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-100">
                Events and activities of the IFToMM Young Faculty Group in
                Mechanism and Machine Science.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-[28px] bg-zinc-900 px-6 py-8 text-white sm:px-8 sm:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              Event Highlights
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl leading-tight">Gallery</h2>
          </div>
          <p className="text-sm text-zinc-300 max-w-xl">
            Venues, campuses, and field sites from IFToMM YFG events and host
            cities.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => {
            const staggerClass =
              index === 0 ? 'lg:mt-20' : index === 1 ? 'lg:mt-6' : 'lg:mt-32';
            const motionClass =
              index === 0
                ? 'wix-motion-card-a'
                : index === 1
                ? 'wix-motion-card-b'
                : 'wix-motion-card-c';
            return (
              <article
                key={card.title}
                className={`group ${staggerClass} ${motionClass}`}
              >
                <div
                  className="overflow-hidden rounded-2xl bg-zinc-800 wix-motion-appear"
                  style={{ animationDelay: `${120 + index * 120}ms` }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div
                  className="relative mx-3 -mt-5 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4 text-black dark:text-white shadow-lg wix-motion-appear"
                  style={{ animationDelay: `${220 + index * 120}ms` }}
                >
                  <div
                    className={`text-xs uppercase tracking-wide ${labelClass}`}
                  >
                    {card.title}
                  </div>
                  <h3 className="mt-2 text-lg leading-snug text-zinc-950 dark:text-zinc-50">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {card.subtitle}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
