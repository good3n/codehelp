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

export default ResourcesPage
