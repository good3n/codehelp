import React from 'react'
import PropTypes from 'prop-types'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StyledSidebar, Heading } from './Sidebar.styles'

const Sidebar = ({ data, page }) => {
  return (
    <StyledSidebar>
      {data.map(({ label: { id, name, categories } }) => {
        return (
          <div key={id}>
            <Heading key={id}>{name}</Heading>
            {categories.map(({ category }) => (
              <li key={category.id}>
                <AnchorLink
                  title={category.name}
                  to={`/${page}#${category.id}`}
                >
                  {category.name}
                </AnchorLink>
              </li>
            ))}
          </div>
        )
      })}
    </StyledSidebar>
  )
}

Sidebar.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.string.isRequired,
}

export default Sidebar
