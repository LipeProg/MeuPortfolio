export const projectCardStyles = {
  // Card
  card: [
    'group relative overflow-hidden rounded-lg border border-border-soft',
    'bg-surface',
    'transition-all duration-300 hover:border-soft hover:shadow-soft',
  ].join(' '),
  detailLink: 'absolute inset-0 z-10',

  // Media
  media: 'relative h-48 overflow-hidden bg-accent-soft',
  image: 'object-cover transition-transform duration-300 group-hover:scale-105',
  imageFallback: 'flex h-full items-center justify-center bg-accent-soft',
  fallbackIcon: 'text-accent-strong',

  // Content
  content: 'p-6',
  title: 'mb-3 text-xl font-bold text-primary',
  description: 'mb-4 text-sm leading-relaxed text-muted',
  technologies: 'mb-6 flex flex-wrap gap-2',

  // Repository link
  links: 'flex gap-4',
  repositoryLink: [
    'relative z-20 flex items-center gap-2 text-muted',
    'transition-colors hover:text-accent-strong',
  ].join(' '),
  repositoryLabel: 'text-sm',
} as const;
