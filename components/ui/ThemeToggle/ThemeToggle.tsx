'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, SunMoon } from 'lucide-react';
import { themeToggleStyles as styles } from './ThemeToggle.styles';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  const isDark = theme === 'dark';

  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.style.colorScheme = theme;
  const canvasColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-canvas')
    .trim();

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', canvasColor);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const initialTheme: Theme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';

    setTheme(initialTheme);
    applyTheme(initialTheme);

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem('theme')) {
        return;
      }

      const systemTheme: Theme = event.matches ? 'dark' : 'light';
      setTheme(systemTheme);
      applyTheme(systemTheme);
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const label = theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.button}
      aria-label={label}
      aria-pressed={theme === 'dark'}
      title={label}
    >
      {theme === null ? (
        <SunMoon size={20} aria-hidden="true" />
      ) : theme === 'dark' ? (
        <Sun size={20} aria-hidden="true" />
      ) : (
        <Moon size={20} aria-hidden="true" />
      )}
    </button>
  );
}
