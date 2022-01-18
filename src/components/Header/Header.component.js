import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Logo from './Logo.component'
import { StyledHeader } from './Header.styles'
import { Nav } from '../Nav'

const Header = ({ siteTitle }) => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <StyledHeader>
      <Link className="logo" title={siteTitle} to="/">
        <Logo navOpen={navOpen} />
      </Link>
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
