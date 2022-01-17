import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Logo from './Logo.component'
import { StyledHeader, Nav, StyledPopup } from './Header.styles'
import discordIcon from '../../assets/images/icon-discord.svg'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link title={siteTitle} to="/">
      <Logo />
    </Link>
    <Nav>
      <Link activeClassName="is-active" partiallyActive={true} to="/learning">
        Learning
      </Link>
      <Link activeClassName="is-active" partiallyActive={true} to="/resources/">
        Resources
      </Link>

      <StyledPopup
        closeOnDocumentClick
        modal
        trigger={<img alt="Discord Icon" src={discordIcon} />}
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
    </Nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
