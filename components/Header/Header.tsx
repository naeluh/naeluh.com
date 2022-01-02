import React, { useState } from 'react';
import Link from 'next/link';
import { overlay, nav, overlayContent, hideOverlay } from './header.module.css';

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
      <div className={isActive ? hideOverlay : ''}>
        <nav className={nav}>
          <button
            onClick={toggleNav}
            aria-label={isActive ? 'closed' : 'open'}
          />
        </nav>
        <div className={overlay} aria-label={isActive ? 'closed' : 'open'}>
          <div className={overlayContent}>
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
