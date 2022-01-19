import styled from 'styled-components'

export const StyledSidebar = styled.aside`
  border: 2px solid rgba(255, 255, 255, 0.15);
  padding: 3rem 30px;
  border-radius: 10px;

  h2 {
    font-weight: 600;
    margin: 0;
    font-size: var(--font-size__base);
  }

  ul {
    margin: 1rem 0 3rem;
    padding: 0;
  }

  li {
    display: block;
    margin: 0 0 0.64rem;
  }

  a {
    color: var(--color__green);

    &:hover {
      text-decoration: underline;
    }
  }

  > div:last-of-type ul {
    margin-bottom: 0;
  }
`
