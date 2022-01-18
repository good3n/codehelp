import React from 'react'
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
      <div className="wrapper">
        <Sidebar data={learning} page="learning" />
        <DataList data={learning} />
      </div>
    </Layout>
  )
}

export default LearningPage
