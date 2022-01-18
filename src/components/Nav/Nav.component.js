import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StyledNav, StyledPopup, NavToggle, Overlay } from './Nav.styles'

const Nav = ({ navOpen, setNavOpen }) => {
  const activeClass = navOpen ? 'is-active' : ''
  const handleClick = () => {
    setNavOpen(!navOpen)
  }
  return (
    <>
      <StyledNav className={activeClass}>
        <div className="links">
          <Link
            activeClassName="is-active"
            partiallyActive={true}
            to="/learning"
          >
            Learning
            <span>
              From the basics to advanced concepts, a collection of links to
              various knowledge articles.
            </span>
          </Link>
          <Link
            activeClassName="is-active"
            partiallyActive={true}
            to="/resources/"
          >
            Resources
            <span>
              Links to tools, libraries, frameworks, and more to improve your
              development process.
            </span>
          </Link>
        </div>

        <StyledPopup
          closeOnDocumentClick
          modal
          trigger={
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
          }
        >
          {close => (
            <div>
              <p>Join the CodeHelp Discord server?</p>
              <div>
                <a
                  href="https://discord.gg/KntFa9p"
                  rel="noreferrer noopener"
                  target="_blank"
                  title="Join CodeHelp Discord!"
                >
                  Yes
                </a>
                <button onClick={() => close()} tabIndex="0">
                  No
                </button>
              </div>
            </div>
          )}
        </StyledPopup>
        <NavToggle className={activeClass} onClick={() => handleClick()}>
          <div
            ariaControls="navigation"
            ariaLabel="Menu"
            className={`nav-toggle nav--spin ${activeClass}`}
            role="button"
            tabIndex="0"
          >
            <div className="nav-box">
              <div className="nav-inner"></div>
            </div>
          </div>
        </NavToggle>
      </StyledNav>
      <Overlay className={activeClass} onClick={() => handleClick()} />
    </>
  )
}

Nav.propTypes = {
  navOpen: PropTypes.bool,
  setNavOpen: PropTypes.func,
}

export default Nav
