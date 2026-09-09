import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Navbar/Navbar';
import { personal } from '@/data/personal';
import { layoutStyles as styles } from './layout.styles';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const themeInitializer = `
  (function () {
    try {
      var storedTheme = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var useDarkTheme = storedTheme === 'dark' || (!storedTheme && prefersDark);

      document.documentElement.classList.toggle('dark', useDarkTheme);
      document.documentElement.style.colorScheme = useDarkTheme ? 'dark' : 'light';
    } catch (_) {}
  })();
`;

export const metadata: Metadata = {
  title: `${personal.name} | ${personal.professionalTitle}`,
  description: personal.metaDescription,
  keywords: [
    'desenvolvedor de software',
    'full stack',
    'backend',
    'react',
    'next.js',
    'node.js',
    'postgresql',
    'python',
    'automação',
  ],
  authors: [{ name: personal.name }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fafbf9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={styles.html} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
      </head>
      <body className={`${inter.className} ${styles.body}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
