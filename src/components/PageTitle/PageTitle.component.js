import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle } from './PageTitle.styles'

const PageTitle = ({ title, description }) => (
  <StyledTitle>
    <h1>
      <span>{title}</span>
    </h1>
    <p>{description}</p>
  </StyledTitle>
)

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PageTitle
