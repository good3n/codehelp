import React, { useState, useEffect } from 'react'

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [pathname, setPathname] = useState('')
  const activeClass = navOpen ? 'is-active' : ''

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  // sync is-active class on parent header element
  useEffect(() => {
    const header = document.querySelector('.header')
    if (!header) return
    if (navOpen) {
      header.classList.add('is-active')
    } else {
      header.classList.remove('is-active')
    }
  }, [navOpen])

  const handleClick = () => {
    setNavOpen(!navOpen)
  }

  const isActive = (path) => {
    const clean = pathname.replace(/\/$/, '')
    return clean === path.replace(/\/$/, '') ? 'is-active' : ''
  }

  return (
    <div className="nav-wrap">
      <nav className={`nav ${activeClass}`}>
        <div className="links">
          <a href="/learning" className={isActive('/learning')}>
            Learning
            <span>
              From the basics to advanced concepts, a collection of links to
              various knowledge articles.
            </span>
          </a>
          <a href="/resources/" className={isActive('/resources')}>
            Resources
            <span>
              Links to tools, libraries, frameworks, and more to improve your
              development process.
            </span>
          </a>
        </div>
      </nav>

      <a
        className={`discord-link ${activeClass}`}
        href="https://discord.gg/KntFa9p"
        rel="noreferrer noopener"
        target="_blank"
        title="Join CodeHelp Discord!"
        data-analytics="discord-nav"
      >
        <svg
          fill="none"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs />
          <path
            d="M40 12s-4.586-3.59-10-4l-.488.977C34.406 10.176 36.652 11.89 39 14c-4.047-2.066-8.04-4-15-4-6.96 0-10.953 1.934-15 4 2.348-2.11 5.02-4.016 9.488-5.023L18 8c-5.68.535-10 4-10 4s-5.121 7.426-6 22c5.16 5.953 13 6 13 6l1.64-2.184C13.856 36.848 10.716 35.121 8 32c3.238 2.45 8.125 5 16 5s12.762-2.55 16-5c-2.715 3.121-5.855 4.848-8.64 5.816L33 40s7.84-.047 13-6c-.879-14.574-6-22-6-22zM17.5 30c-1.934 0-3.5-1.79-3.5-4s1.566-4 3.5-4 3.5 1.79 3.5 4-1.566 4-3.5 4zm13 0c-1.934 0-3.5-1.79-3.5-4s1.566-4 3.5-4 3.5 1.79 3.5 4-1.566 4-3.5 4z"
            fill="#fff"
          />
        </svg>
      </a>
      <button
        className={`nav-toggle-btn ${activeClass}`}
        aria-controls="navigation"
        aria-label="Menu"
        onClick={() => handleClick()}
      >
        <div className={`nav-toggle ${activeClass}`} role="button" tabIndex="0">
          <div className="nav-box">
            <div className="nav-inner"></div>
          </div>
        </div>
      </button>
      <div className={`overlay ${activeClass}`} onClick={() => handleClick()} />
    </div>
  )
}

export default Nav
