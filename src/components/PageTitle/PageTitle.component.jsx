import React from 'react'
import PropTypes from 'prop-types'

const PageTitle = ({ title, description }) => (
  <div className="page-title">
    <h1>
      <span>{title}</span>
    </h1>
    <p>{description}</p>
  </div>
)

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PageTitle
