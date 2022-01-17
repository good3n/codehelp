import React from 'react'
import PropTypes from 'prop-types'
import { StyledResource, Title, Description } from './Resource.styles'

const Resource = ({ name, desc, link, key }) => (
  <StyledResource key={key}>
    <Title href={link} id={name} rel="nofollow noreferrer" target="_blank">
      {name}
    </Title>
    <Description>{desc}</Description>
  </StyledResource>
)

Resource.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
}

export default Resource
