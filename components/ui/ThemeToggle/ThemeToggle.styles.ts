export const themeToggleStyles = {
  button: [
    'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
    'border border-border-accent bg-surface text-ink',
    'transition-colors hover:bg-surface-accent hover:text-accent-strong',
  ].join(' '),
} as const;
