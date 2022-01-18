import React from 'react'
import { StyledResources } from '../assets/styles/pages/Resources.styles'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Learning from '../data/learning.json'
import { Sidebar } from '../components/Sidebar'
import { DataList } from '../components/DataList'

const LearningPage = () => {
  const { learning } = Learning
  return (
    <Layout>
      <Seo title="Learning" />
      <StyledResources>
        <h1>Learning</h1>
        <div>
          <Sidebar data={learning} page="learning" />
          <DataList data={learning} />
        </div>
      </StyledResources>
    </Layout>
  )
}

export default LearningPage
