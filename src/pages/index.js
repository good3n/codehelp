import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StyledHome } from '../assets/styles/pages/Index.styles'
import discordIcon from '../assets/images/icon-discord.svg'

const IndexPage = () => (
  <Layout>
    <Seo title="CodeHelp Discord Server" />
    <StyledHome>
      <h1>
        code<span>/</span>
        <span>help</span>
      </h1>
      <p>
        CodeHelp is community-driven Discord server, comprised of developers,
        designers, and marketers of all skill levels. Our goal is to create a
        fun, helpful group where people can get the development and programming
        support they need.
      </p>
      <a
        href="https://discord.gg/KntFa9p"
        title="Join CodeHelp Discord!"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={discordIcon} alt="Discord Icon" />
        Join CodeHelp
      </a>
    </StyledHome>
  </Layout>
)

export default IndexPage
