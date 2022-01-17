import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StyledSidebar, Heading } from './Sidebar.styles'

const Sidebar = ({ data, page }) => {
  return (
    <StyledSidebar>
      {data.map(({ label: { id, name, categories } }) => {
        return (
          <div key={id}>
            <Heading key={id}>{name}</Heading>
            {categories.map(({ category: { id, name } }) => {
              return (
                <li key={id}>
                  <AnchorLink to={`/${page}#${id}`} title={name}>
                    {name}
                  </AnchorLink>
                </li>
              )
            })}
          </div>
        )
      })}
    </StyledSidebar>
  )
}

export default Sidebar
