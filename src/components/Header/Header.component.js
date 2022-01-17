import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Logo from './Logo.component'
import { StyledHeader, Nav, StyledPopup } from './Header.styles'
import discordIcon from '../../assets/images/icon-discord.svg'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/" title={siteTitle}>
      <Logo />
    </Link>
    <Nav>
      <Link to="/learning" activeClassName="is-active" partiallyActive={true}>
        Learning
      </Link>
      <Link to="/resources/" activeClassName="is-active" partiallyActive={true}>
        Resources
      </Link>

      <StyledPopup
        trigger={<img src={discordIcon} alt="Discord Icon" />}
        modal
        closeOnDocumentClick
      >
        {close => (
          <div>
            <p>Join the CodeHelp Discord server?</p>
            <div>
              <a
                href="https://discord.gg/KntFa9p"
                title="Join CodeHelp Discord!"
                target="_blank"
                rel="noreferrer noopener"
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
    </Nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
