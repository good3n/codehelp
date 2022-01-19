import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Nav } from '../Nav'
import { StyledHeader } from './Header.styles'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <StyledHeader className={navOpen && `is-active`}>
      <Link to="/">
        <svg
          fill="none"
          viewBox="0 0 325 135"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70.301 85.424c0-27.267 17.48-49.577 46.484-49.577 20.168 0 33.998 8.772 41.873 26.505l-20.36 8.58c-4.802-11.25-11.525-14.873-21.513-14.873-13.638 0-22.666 10.869-22.666 29.365s9.028 29.364 22.666 29.364c9.988 0 16.711-3.623 21.513-14.873l20.36 8.581C150.783 126.229 136.953 135 116.785 135c-29.004 0-46.484-22.309-46.484-49.576Z"
            fill="#4FD8C3"
          />
          <path
            d="M167.302 135V0h23.818v54.343a35.8 35.8 0 0 1 13.131-12.475 36.117 36.117 0 0 1 17.602-4.495c18.632 0 30.156 9.915 30.156 28.983V135h-23.818V74.746c0-11.632-4.609-17.161-14.406-17.161-11.524 0-22.665 12.012-22.665 36.8V135h-23.818Z"
            fill="#5E7CE7"
          />
          <path
            d="M54.55 129.089 0 90.572v-11.06l54.55-38.516h1.153v22.5l-32.27 21.546 32.27 21.547v22.5h-1.152Zm215.323 0h-1.345v-22.5l32.462-21.547-32.462-21.546v-22.5h1.345l54.551 38.517v11.06l-54.551 38.516Z"
            fill="#fff"
          />
        </svg>
      </Link>
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
    </StyledHeader>
  )
}

export default Header
