import React from 'react'
import PropTypes from 'prop-types'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StyledSidebar } from './Sidebar.styles'

const Sidebar = ({ data, page }) => (
  <StyledSidebar>
    {data.map(
      ({
        label: { id: labelId, name: labelName, categories: labelCategories },
      }) => {
        return (
          <div key={labelId}>
            <h2 key={labelId}>{labelName}</h2>
            <ul>
              {labelCategories.map(
                ({ category: { id: categoryId, name: categoryName } }) => (
                  <li key={categoryId}>
                    <AnchorLink
                      title={categoryName}
                      to={`/${page}#${categoryId}`}
                    >
                      {categoryName}
                    </AnchorLink>
                  </li>
                )
              )}
            </ul>
          </div>
        )
      }
    )}
  </StyledSidebar>
)

Sidebar.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.string.isRequired,
}

export default Sidebar
