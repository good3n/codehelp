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
              <div className="label" key={id}>
                <h2>{name}</h2>
                {categories.map(({ category }) => (
                  <div id={category.id} key={category.id}>
                    <h3>
                      <span>#</span>
                      {category.name}
                    </h3>
                    {category.resources.map(resource => (
                      <div key={resource.id}>
                        <Resource
                          desc={resource.description}
                          id={resource.id}
                          link={resource.link}
                          name={resource.name}
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
