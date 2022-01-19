import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Learning from '../data/learning.json'
import { Sidebar } from '../components/Sidebar'
import { DataList } from '../components/DataList'
import { PageTitle } from '../components/PageTitle'

const LearningPage = () => {
  const { learning } = Learning
  return (
    <Layout>
      <Seo title="Learning" />
      <PageTitle
        description="From the basics to advanced concepts, a collection of links to various knowledge articles."
        title="Learning"
      />
      <div className="wrapper">
        <Sidebar data={learning} page="learning" />
        <DataList data={learning} />
      </div>
    </Layout>
  )
}

export default LearningPage
