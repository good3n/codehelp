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
            {learning.map(({ label }) => {
              return (
                <div key={label.id} className="label">
                  <h2>{label.name}</h2>
                  {label.categories.map(({ category }) => {
                    return (
                      <div id={category.id}>
                        <h3>
                          <span>#</span>
                          {category.name}
                        </h3>
                        {category.resources.map(
                          ({ id, name, description, link }) => {
                            return (
                              <Resource
                                id={id}
                                name={name}
                                desc={description}
                                link={link}
                              />
                            )
                          }
                        )}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </StyledResources>
    </Layout>
  )
}

export default LearningPage
