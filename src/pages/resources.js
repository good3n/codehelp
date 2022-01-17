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
                <div className="label" key={id}>
                  <h2>{name}</h2>
                  {categories.map(({ category }) => {
                    return (
                      <div id={category.id} key={category.id}>
                        <h3>
                          <span>#</span>
                          {name}
                        </h3>
                        {category.resources.map(resource => {
                          return (
                            <div key={resource.id}>
                              <Resource
                                desc={resource.description}
                                id={resource.id}
                                link={resource.link}
                                name={resource.name}
                              />
                            </div>
                          )
                        })}
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
