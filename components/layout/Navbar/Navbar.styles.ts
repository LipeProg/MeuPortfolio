export const navbarStyles = {
  // Structure
  root: [
    'fixed top-0 z-50 w-full',
    'border-b border-border-soft',
    'bg-navbar/90 backdrop-blur-md',
  ].join(' '),
  container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  content: 'flex h-16 items-center justify-between',

  // Brand
  logo: [
    'inline-block text-2xl font-bold tracking-tight text-primary',
  ].join(' '),
  logoLink: 'shrink-0',
  actions: 'flex items-center gap-2 sm:gap-3',

  // Desktop navigation
  desktopMenu: 'hidden gap-4 md:flex lg:gap-8',
  desktopLink: 'block font-medium text-ink transition-colors hover:text-accent-strong',

  // Mobile navigation
  mobileToggle: 'text-ink md:hidden',
  mobileMenu: 'flex flex-col gap-4 pb-4 md:hidden',
  mobileLink: 'block py-2 text-left text-ink transition-colors hover:text-accent-strong',
} as const;
