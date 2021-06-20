import styled from 'styled-components'

export const StyledResource = styled.div`
  &:not(:last-of-type) {
    margin-bottom: var(--h2);
  }
`

export const Title = styled.a`
  color: var(--color-ch-green);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Description = styled.p`
  color: #fff;
`
