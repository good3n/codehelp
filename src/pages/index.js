import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StyledHome } from '../assets/styles/pages/Index.styles'
import discordIcon from '../assets/images/icon-discord.svg'

const IndexPage = () => (
  <Layout>
    <Seo title="CodeHelp Community and Discord Server" />
    <StyledHome>
      <div>
        <h1>
          code<span>/</span>
          <span>help</span>
        </h1>
        <StaticImage
          alt="CodeHelp Robot"
          placeholder="tracedSVG"
          src="../assets/images/codehelp-robot.png"
          width={100}
        />
      </div>
      <p>
        CodeHelp is community-driven Discord server, comprised of developers,
        designers, and marketers of all skill levels. Our goal is to create a
        fun, helpful group where people can get the development and programming
        support they need.
      </p>
      <a
        className="button"
        href="https://discord.gg/KntFa9p"
        rel="noreferrer noopener"
        target="_blank"
        title="Join CodeHelp Discord!"
      >
        <span>
          <img alt="Discord Icon" src={discordIcon} />
          Join CodeHelp
        </span>
      </a>
    </StyledHome>
  </Layout>
)

export default IndexPage
