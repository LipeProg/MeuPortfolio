export const aboutStyles = {
  // Structure
  section: 'bg-surface py-20',
  container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  introduction: 'mb-16 grid items-center gap-12 md:grid-cols-2',

  // Biography
  biography: 'space-y-4',
  paragraph: 'leading-relaxed text-ink',
  contactLink: [
    'mt-6 inline-block rounded-lg border border-action-secondary-border',
    'bg-action-secondary px-6 py-2 font-semibold text-action-secondary-foreground',
    'transition-colors hover:bg-action-secondary-hover',
  ].join(' '),

  // Education highlights
  highlights: 'grid grid-cols-2 gap-4',
  highlightCard: [
    'rounded-lg border border-border-soft p-6',
    'bg-surface',
    'transition-colors hover:border-soft hover:shadow-soft',
  ].join(' '),
  highlightValue: 'mb-2 text-3xl font-bold text-primary',
  highlightLabel: 'text-muted',

  // Skills
  skillsTitle: 'mb-8 text-center text-2xl font-bold',
  skillsGrid: 'grid gap-6 md:grid-cols-4',
  skillCard: [
    'rounded-lg border border-border-soft p-6',
    'bg-canvas',
    'transition-all hover:border-soft hover:shadow-soft',
  ].join(' '),
  skillCategory: 'mb-4 font-bold text-primary',
  skillList: 'space-y-2',
  skillItem: 'flex items-center text-sm text-muted',
  skillMarker: 'mr-2 h-2 w-2 rounded-full bg-accent',
} as const;
