import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
]

const Header = ({}) => {
  const [isActive, setIsActive] = useState(true)
  const router = useRouter()

  const handleClick = (event, url) => {
    event.preventDefault()
    Router.push({
      pathname: `/work/${url}`,
      asPath: `/work/${url}`,
    })
  }

  const toggleNav = () => setIsActive(!isActive)

  return (
    <header>
      <div className={isActive ? 'hide-overlay' : ''}>
        <nav>
          <button
            onClick={toggleNav}
            className=""
            aria-label={isActive ? 'closed' : 'open'}
          />
        </nav>
        <div className="overlay" aria-label={isActive ? 'closed' : 'open'}>
          <div className="overlay-content">
            <button id="close" onClick={toggleNav}>
              <span>close</span>
            </button>
            <ul id="weblist">
              {links.map((link, index) => (
                <li className="bk" key={index + 1}>
                  <Link href={link.href}>
                    <a
                      prefetch="true"
                      onClick={toggleNav}
                      href={link.href}
                      className={
                        router.pathname === link.name ? 'is-active' : ''
                      }
                    >
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
