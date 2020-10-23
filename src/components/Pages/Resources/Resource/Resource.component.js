import React from 'react'
import { StyledResource, Title, Description } from './Resource.styles'

const Resource = props => {
  const { name, desc, link } = props
  return (
    <StyledResource>
      <Title href={link} id={name}>
        {name}
      </Title>
      <Description>{desc}</Description>
    </StyledResource>
  )
}

export default Resource
