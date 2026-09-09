export const contactStyles = {
  // Structure
  section: 'bg-surface-soft py-20',
  container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  content: 'grid gap-12 md:grid-cols-2',

  // Contact information
  contactList: 'space-y-8',
  contactCard: [
    'flex items-start gap-4 rounded-lg border border-border-soft bg-surface p-4',
    'transition-colors hover:border-soft hover:shadow-soft',
  ].join(' '),
  contactIconWrapper: 'mt-2 rounded-lg bg-accent-soft p-3',
  contactIcon: 'text-accent-strong',
  contactTitle: 'mb-1 font-bold text-ink',
  contactValue: 'text-muted',

  // Social links
  socialSection: 'pt-8',
  socialTitle: 'mb-4 font-bold text-ink',

  // Form
  form: 'space-y-4 rounded-lg border border-border-soft bg-surface p-6 shadow-soft sm:p-8',
  label: 'mb-2 block text-sm font-medium text-ink',
  field: [
    'w-full rounded-lg border border-border-interactive bg-surface px-4 py-3',
    'text-ink placeholder:text-muted',
    'transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20',
  ].join(' '),
  textarea: [
    'w-full resize-none rounded-lg border border-border-interactive bg-surface px-4 py-3',
    'text-ink placeholder:text-muted',
    'transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20',
  ].join(' '),
  submitButton: [
    'flex w-full items-center justify-center gap-2',
    'rounded-lg bg-brand-action px-6 py-3',
    'font-bold text-brand-action-foreground transition-colors',
    'hover:bg-brand-action-hover hover:text-brand-action-hover-foreground',
  ].join(' '),
  successMessage: 'text-center text-sm text-brand-strong',
} as const;
