import styled from 'styled-components'

export const StyledSidebar = styled.aside`
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
    margin: 0 0 0.64rem;
  }

  a {
    color: var(--color__green);
    text-decoration: none;
  }
`

export const Heading = styled.li`
  font-weight: 600;
  margin: var(--font-size__h4) 0 0.8rem !important;
`
