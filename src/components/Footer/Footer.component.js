import React from 'react'
import { StyledFooter } from './Footer.styles'

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()} CodeHelp
    <div>
      Coded in{' '}
      <a
        href="https://code.visualstudio.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        VS Code
      </a>
      . Built with{' '}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby.js
      </a>
      . Hosted on{' '}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
      .
    </div>
  </StyledFooter>
)

export default Footer
