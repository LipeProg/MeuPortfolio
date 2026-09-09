'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { mainNavigation } from '@/data/navigation';
import { personal } from '@/data/personal';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
import { navbarStyles as styles } from './Navbar.styles';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink} onClick={() => setIsOpen(false)}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={styles.logo}
            >
              {personal.name}
            </motion.span>
          </Link>

          <div className={styles.actions}>
            {/* Desktop Menu */}
            <div className={styles.desktopMenu}>
              {mainNavigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href} className={styles.desktopLink}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={styles.mobileToggle}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.mobileMenu}
            id="mobile-navigation"
          >
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={styles.mobileLink}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
