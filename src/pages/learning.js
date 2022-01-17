import React from 'react'
import { StyledResources } from '../assets/styles/pages/Resources.styles'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Learning from '../data/learning.json'
import { Sidebar } from '../components/Sidebar'
import { Resource } from '../components/Resource'

const LearningPage = () => {
  const { learning } = Learning
  return (
    <Layout>
      <Seo title="Learning" />
      <StyledResources>
        <h1>Learning</h1>
        <div>
          <Sidebar data={learning} page="learning" />
          <div>
            {learning.map(({ label: { id, name, categories } }) => (
              <div key={id} className="label">
                <h2>{name}</h2>
                {categories.map(({ category: { id, name, resources } }) => (
                  <div key={id} id={id}>
                    <h3>
                      <span>#</span>
                      {name}
                    </h3>
                    {resources.map(({ id, name, description, link }) => (
                      <div key={id}>
                        <Resource
                          id={id}
                          name={name}
                          desc={description}
                          link={link}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </StyledResources>
    </Layout>
  )
}

export default LearningPage
