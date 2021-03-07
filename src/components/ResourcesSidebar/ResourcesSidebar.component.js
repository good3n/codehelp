import React from 'react'
import StickyBox from 'react-sticky-box'
import Resources from '../../data/resources.json'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { Sidebar, Heading } from './ResourcesSidebar.styles'

const ResourcesSidebar = () => {
  const { resources } = Resources

  return (
    <Sidebar>
      <StickyBox offsetTop={50} offsetBottom={50}>
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
      </StickyBox>
    </Sidebar>
  )
}

export default ResourcesSidebar
