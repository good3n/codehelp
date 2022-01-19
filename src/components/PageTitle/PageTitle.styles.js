import styled from 'styled-components'

export const StyledTitle = styled.header`
  margin-bottom: 4rem;

  @media (max-width: 991px) {
    margin-bottom: 3rem;
  }

  h1 {
    font-size: var(--font-size__h4);
    /* text-transform: uppercase; */
    margin: 0 0 1rem;
    color: var(--color__purple);
  }

  p {
    margin: 0;
  }
`
