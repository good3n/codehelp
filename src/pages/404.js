import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StyledError } from '../assets/styles/pages/404.styles'
import robot404 from '../assets/images/404-robot.svg'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <StyledError>
      <div>
        <h1>404 Error</h1>
        <p>
          Beep Boop Beep. We can&apos;t seem to find the page you&apos;re
          looking for.
        </p>
      </div>
      <img alt="404 Error Robot" src={robot404} />
    </StyledError>
  </Layout>
)

export default NotFoundPage
