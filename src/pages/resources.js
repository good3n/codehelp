import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import { ResourcesSidebar } from '../components/Pages/Resources/ResourcesSidebar'
import GuidesInformation from '../components/Pages/Resources/Categories/WebDevelopment'
import Html from '../components/Pages/Resources/Categories/Html'
import Css from '../components/Pages/Resources/Categories/Css'
import JavaScript from '../components/Pages/Resources/Categories/JavaScript'
import Php from '../components/Pages/Resources/Categories/Php'
import ReactJs from '../components/Pages/Resources/Categories/ReactJs'
import VueJs from '../components/Pages/Resources/Categories/VueJs'
import WordPress from '../components/Pages/Resources/Categories/WordPress'
import ComputerScience from '../components/Pages/Resources/Categories/ComputerScience'
import Design from '../components/Pages/Resources/Categories/Design'
import YouTube from '../components/Pages/Resources/Categories/YouTube'
import Podcasts from '../components/Pages/Resources/Categories/Podcasts'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 50px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  h2 {
    margin-bottom: 0;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);

    &:not(:first-of-type) {
      margin-top: 100px;
    }
  }

  h3 {
    border-bottom: 3px dashed;
    display: inline-block;
    border-color: var(--color-ch-purple);
    padding-bottom: 5px;
    margin: 40px 0 30px;

    span {
      color: var(--color-ch-purple);
      display: inline-block;
      margin-right: 5px;
    }
  }
`

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <Grid>
      <ResourcesSidebar />
      <div id="resource-list">
        <h2>General Guides &amp; Information</h2>
        <GuidesInformation />
        <h2>Languages &amp; Markup</h2>
        <Html />
        <Css />
        <JavaScript />
        <Php />
        <h2>Libraries &amp; Frameworks</h2>
        <ReactJs />
        <VueJs />
        <WordPress />
        <h2>Expanding Knowledge</h2>
        <ComputerScience />
        <h2>Other</h2>
        <Design />
        <YouTube />
        <Podcasts />
      </div>
    </Grid>
  </Layout>
)

export default ResourcesPage
