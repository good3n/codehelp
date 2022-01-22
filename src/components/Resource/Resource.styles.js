import styled from 'styled-components'

export const StyledResource = styled.div`
  &:not(:last-of-type) {
    margin-bottom: var(--font-size__h2);
  }
`

export const Title = styled.a`
  color: ${({ theme: { theme } }) => theme === `dark` ? `var(--color__green)` : `var(--color__purple)`};
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`

export const Description = styled.p`
  color: var(--color__text);
`
