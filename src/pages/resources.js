import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Resources from '../data/resources.json'
import { Sidebar } from '../components/Sidebar'
import { DataList } from '../components/DataList'
import { PageTitle } from '../components/PageTitle'

const ResourcesPage = () => {
  const { resources } = Resources
  return (
    <Layout>
      <Seo title="Resources" />
      <PageTitle
        description="Links to tools, libraries, frameworks, and more to improve your development process."
        title="Resources"
      />
      <div className="wrapper">
        <Sidebar data={resources} page="resources" />
        <DataList data={resources} />
      </div>
    </Layout>
  )
}

export default ResourcesPage
