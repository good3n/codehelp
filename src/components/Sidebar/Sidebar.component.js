import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StyledSidebar, Heading } from './Sidebar.styles'

const Sidebar = ({ data, page }) => {
  return (
    <StyledSidebar>
      {data.map(({ label }) => {
        return (
          <>
            <Heading key={label.id}>{label.name}</Heading>
            {label.categories.map(({ category }) => {
              return (
                <li key={category.id}>
                  <AnchorLink
                    to={`/${page}#${category.id}`}
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
    </StyledSidebar>
  )
}

export default Sidebar
