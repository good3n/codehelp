import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Resources from '../data/resources.json'
import { Sidebar } from '../components/Sidebar'
import { DataList } from '../components/DataList'

const ResourcesPage = () => {
  const { resources } = Resources
  return (
    <Layout>
      <Seo title="Resources" />
      <div className="wrapper">
        <Sidebar data={resources} page="resources" />
        <DataList data={resources} />
      </div>
    </Layout>
  )
}

export default ResourcesPage
