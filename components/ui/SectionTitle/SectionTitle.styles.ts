export const sectionTitleStyles = {
  // Typography
  container: 'mb-16 text-center',
  title: 'mb-4 text-4xl font-bold md:text-5xl',
  highlightedText: [
    'text-accent-strong',
  ].join(' '),
  description: 'mx-auto max-w-2xl text-muted',

  // Decoration
  divider: (hasDescription: boolean) =>
    [
      'mx-auto h-1 w-20 rounded-full',
      'bg-secondary',
      hasDescription ? 'mt-4' : '',
    ]
      .filter(Boolean)
      .join(' '),
} as const;
