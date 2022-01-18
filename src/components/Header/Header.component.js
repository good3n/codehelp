import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Logo from './Logo.component'
import { StyledHeader } from './Header.styles'
import { Nav } from '../Nav'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link title={siteTitle} to="/">
      <Logo />
    </Link>
    <Nav />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
