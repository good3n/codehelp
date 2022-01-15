import React from 'react'
import Resources from '../../data/resources.json'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { Sidebar, Heading } from './ResourcesSidebar.styles'

const ResourcesSidebar = () => {
  const { resources } = Resources

  return (
    <Sidebar>
      {resources.map(({ label }) => {
        return (
          <>
            <Heading key={label.id}>{label.name}</Heading>
            {label.categories.map(({ category }) => {
              return (
                <li key={category.id}>
                  <AnchorLink
                    to={`/resources#${category.id}`}
                    title={category.name}
                  >
                    {category.name}
                  </AnchorLink>
                </li>
              )
            })}
          </>
        )
      })}
    </Sidebar>
  )
}

export default ResourcesSidebar
