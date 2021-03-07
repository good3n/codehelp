import React from 'react'
import { StyledResource, Title, Description } from './Resource.styles'

const Resource = props => {
  const { name, desc, link } = props
  return (
    <StyledResource>
      <Title href={link} id={name} rel="nofollow">
        {name}
      </Title>
      <Description>{desc}</Description>
    </StyledResource>
  )
}

export default Resource
