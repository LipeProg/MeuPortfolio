export const socialLinksStyles = {
  // Contact buttons
  buttonsGroup: 'flex gap-4',
  buttonLink: [
    'rounded-lg border border-action-secondary-border bg-action-secondary px-4 py-2',
    'text-action-secondary-foreground transition-colors hover:bg-action-secondary-hover',
  ].join(' '),

  // Footer icons
  footerGroup: 'flex gap-4',
  footerLink: [
    'rounded-lg border border-border-soft bg-surface p-2 text-muted',
    'transition-colors hover:border-soft hover:text-accent-strong',
  ].join(' '),

  // Hero icons
  heroGroup: 'mt-8 flex gap-6',
  heroLink: 'text-muted transition-colors hover:text-accent-strong',
} as const;
