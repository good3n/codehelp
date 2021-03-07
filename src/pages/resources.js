import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import Resources from '../data/resources.json'
import { ResourcesSidebar } from '../components/ResourcesSidebar'
import { Resource } from '../components/Resource'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 50px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  .label:not(:first-of-type) {
    margin-top: 100px;
  }

  h2 {
    margin-bottom: 0;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  h3 {
    border-bottom: 3px dashed;
    display: inline-block;
    border-color: var(--color-ch-purple);
    padding-bottom: 5px;
    margin: 40px 0 30px;

    span {
      color: var(--color-ch-purple);
      display: inline-block;
      margin-right: 5px;
    }
  }
`

const ResourcesPage = () => {
  const { resources } = Resources
  return (
    <Layout>
      <SEO title="Resources" />
      <Grid>
        <ResourcesSidebar />
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
      </Grid>
    </Layout>
  )
}

export default ResourcesPage
