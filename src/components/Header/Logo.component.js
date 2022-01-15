import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Logo = () => (
  <StaticImage
    src="../../assets/images/ch-logo-light.png"
    alt="CodeHelp.io"
    height={30}
    placeholder="tracedSVG"
  />
)

export default Logo
