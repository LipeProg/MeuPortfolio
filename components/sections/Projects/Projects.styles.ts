export const projectsStyles = {
  // Structure
  section: 'bg-surface-soft py-20',
  container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  grid: 'grid gap-8 md:grid-cols-3',

  // View all projects
  allProjectsWrapper: 'mt-12 flex justify-center',
  allProjectsLink: [
    'flex items-center gap-2 rounded-lg bg-brand-action px-8 py-3',
    'font-bold text-brand-action-foreground',
    'transition-colors hover:bg-brand-action-hover hover:text-brand-action-hover-foreground',
  ].join(' '),
} as const;
