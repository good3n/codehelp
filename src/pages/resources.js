import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StyledResources } from '../assets/styles/pages/Resources.styles'
import Resources from '../data/resources.json'
import { Sidebar } from '../components/Sidebar'
import { Resource } from '../components/Resource'

const ResourcesPage = () => {
  const { resources } = Resources
  return (
    <Layout>
      <Seo title="Resources" />
      <StyledResources>
        <h1>Resources</h1>
        <div>
          <Sidebar data={resources} page="resources" />
          <div>
            {resources.map(({ label }) => {
              const { id, name, categories } = label
              return (
                <div key={id} className="label">
                  <h2>{name}</h2>
                  {categories.map(({ category }) => {
                    const { id, name } = category
                    return (
                      <div key={id} id={id}>
                        <h3>
                          <span>#</span>
                          {name}
                        </h3>
                        {category.resources.map(
                          ({ id, name, description, link }) => {
                            return (
                              <div key={id}>
                                <Resource
                                  id={id}
                                  name={name}
                                  desc={description}
                                  link={link}
                                />
                              </div>
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

export default ResourcesPage
