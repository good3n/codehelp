import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Logo from './Logo.component'
import { StyledHeader, Nav } from './Header.styles'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/" title={siteTitle}>
      <Logo />
    </Link>
    <Nav>
      <li>
        <Link
          to="/resources/"
          activeClassName="is-active"
          partiallyActive={true}
        >
          Resources
        </Link>
      </li>
    </Nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
