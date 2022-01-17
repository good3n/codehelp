import React from 'react'
import { StyledResource, Title, Description } from './Resource.styles'

const Resource = ({ name, desc, link, key }) => (
  <StyledResource key={key}>
    <Title href={link} id={name} rel="nofollow noreferrer" target="_blank">
      {name}
    </Title>
    <Description>{desc}</Description>
  </StyledResource>
)

export default Resource
