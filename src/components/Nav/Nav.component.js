import React from 'react'
import { Link } from 'gatsby'
import { StyledNav, StyledPopup } from './Nav.styles'
import discordIcon from '../../assets/images/icon-discord.svg'

const Nav = () => {
  return (
    <StyledNav>
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
    </StyledNav>
  )
}

export default Nav
