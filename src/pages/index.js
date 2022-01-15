import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 7.451rem;
  letter-spacing: -1rem;
  color: var(--color-ch-green);
  margin-top: 0;
  font-weight: bold;

  span {
    color: var(--color-ch-purple);
  }

  @media (max-width: 992px) {
    font-size: 3.815rem;
    letter-spacing: -10px;
  }
`

const Info = styled.p`
  margin: 0 0 50px;
  font-size: var(--h4);
  line-height: 52px;

  @media (max-width: 992px) {
    font-size: var(--h5);
  }
`

const DiscordLink = styled.a`
  background-color: var(--color-ch-purple);
  color: #fff;
  padding: var(--h4) 100px;
  border-radius: 80px;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 4.768rem;
  font-size: var(--h5);
  transition: background-color 0.2s ease 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;

  @media (max-width: 992px) {
    padding: var(--h5) 30px;
    width: auto;
  }

  &:hover {
    background-color: var(--color-ch-green);
  }

  svg {
    width: 32px;
    margin-right: 15px;
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="CodeHelp Discord Server" />
    <H1>
      code<span>help</span>
    </H1>
    <Info>
      CodeHelp is community-driven Discord server, comprised of developers,
      designers, and marketers of all skill levels. Our goal is to create a fun,
      helpful group where people can get the development and programming support
      they need.
    </Info>
    <DiscordLink
      href="https://discord.gg/KntFa9p"
      title="Join CodeHelp Discord!"
      target="_blank"
      rel="noreferrer noopener"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <defs />
        <path
          fill="#fff"
          d="M40 12s-4.586-3.59-10-4l-.488.977C34.406 10.176 36.652 11.89 39 14c-4.047-2.066-8.04-4-15-4-6.96 0-10.953 1.934-15 4 2.348-2.11 5.02-4.016 9.488-5.023L18 8c-5.68.535-10 4-10 4s-5.121 7.426-6 22c5.16 5.953 13 6 13 6l1.64-2.184C13.856 36.848 10.716 35.121 8 32c3.238 2.45 8.125 5 16 5s12.762-2.55 16-5c-2.715 3.121-5.855 4.848-8.64 5.816L33 40s7.84-.047 13-6c-.879-14.574-6-22-6-22zM17.5 30c-1.934 0-3.5-1.79-3.5-4s1.566-4 3.5-4 3.5 1.79 3.5 4-1.566 4-3.5 4zm13 0c-1.934 0-3.5-1.79-3.5-4s1.566-4 3.5-4 3.5 1.79 3.5 4-1.566 4-3.5 4z"
        />
      </svg>
      <span>Join CodeHelp</span>
    </DiscordLink>
  </Layout>
)

export default IndexPage
