import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StyledResources } from '../assets/styles/pages/Resources.styles'
import Resources from '../data/resources.json'
import { Sidebar } from '../components/Sidebar'
import { DataList } from '../components/DataList'

const ResourcesPage = () => {
  const { resources } = Resources
  return (
    <Layout>
      <Seo title="Resources" />
      <StyledResources>
        <h1>Resources</h1>
        <div>
          <Sidebar data={resources} page="resources" />
          <DataList data={resources} />
        </div>
      </StyledResources>
    </Layout>
  )
}

export default ResourcesPage
