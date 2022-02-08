import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const links = [
  {
    href: '/',
    name: '127.0.0.1',
  },
  {
    href: '/work',
    name: 'work',
  },
  {
    href: '/contact',
    name: 'contact',
  },
  {
    href: '/about',
    name: 'about',
  },
];

const Header: React.FC<{}> = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleNav = () => setIsActive(!isActive);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      if (isActive) {
        html.style.overflow = 'hidden';
      } else {
        html.style.overflow = '';
      }
    }
  }, [isActive]);

  return (
    <header>
      <nav
        role="navigation"
        className={[styles.nav, !isActive ? styles.hideOverlay : ''].join(' ')}
      >
        <button
          role="button"
          onClick={toggleNav}
          aria-label={!isActive ? 'navigation closed' : 'navigation open'}
        />

        <div
          className={styles.overlay}
          aria-label={!isActive ? 'navigation closed' : 'navigation open'}
        >
          <button
            role="button"
            aria-label="navigation close button"
            onClick={toggleNav}
            className={styles.close}
          >
            <span>close</span>
          </button>
          <ul>
            {links.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}>
                  <a onClick={toggleNav} href={href}>
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
