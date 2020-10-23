import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 180px;
  letter-spacing: -20px;
  color: var(--color-ch-green);
  margin: 0 0 40px;
  font-weight: bold;

  span {
    color: var(--color-ch-purple);
  }

  @media (max-width: 992px) {
    font-size: 80px;
    letter-spacing: -10px;
  }
`

const Info = styled.p`
  margin: 0 0 50px;
  font-size: 30px;
  line-height: 52px;

  @media (max-width: 992px) {
    font-size: 21px;
    line-height: 36px;
  }
`

const DiscordLink = styled.a`
  background-color: var(--color-ch-purple);
  color: #fff;
  padding: 28px 100px;
  border-radius: 80px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 100px;
  font-size: 21px;
  transition: background-color 0.2s ease 0.1s;

  &:hover {
    background-color: var(--color-ch-green);
  }

  @media (max-width: 992px) {
    padding: 21px 50px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="CodeHelp Discord Server" />
    <H1>
      code<span>help</span>
    </H1>
    <Info>
      CodeHelp is community-driven Discord server, comprised of developers,
      designers, and marketers of all skill levels. Our goal is to create a fun,
      helpful discord based group where people can get the development and
      programming support they need.
    </Info>
    <DiscordLink
      href="https://discord.gg/KntFa9p"
      title="Join CodeHelp Discord!"
      target="_blank"
      rel="noreferrer noopener"
    >
      Join CodeHelp
    </DiscordLink>
  </Layout>
)

export default IndexPage
