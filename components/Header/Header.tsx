import React, { useState } from 'react';
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

const Header = ({}) => {
  const [isActive, setIsActive] = useState(true);
  const toggleNav = () => setIsActive(!isActive);
  return (
    <header>
      <div className={isActive ? styles.hideOverlay : ''}>
        <nav className={styles.nav}>
          <button
            onClick={toggleNav}
            aria-label={isActive ? 'closed' : 'open'}
          />
        </nav>
        <div
          className={styles.overlay}
          aria-label={isActive ? 'closed' : 'open'}
        >
          <div className={styles.overlayContent}>
            <button onClick={toggleNav}>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
