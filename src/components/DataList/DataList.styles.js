import styled from 'styled-components'

export const StyledDataList = styled.div`
  .label:not(:first-of-type) {
    margin-top: 4rem;
  }

  h2 {
    margin: 0;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--color__border);
    font-size: var(--font-size__h4);
  }

  h3 {
    border-bottom: 3px dashed;
    display: inline-block;
    font-size: var(--font-size__h5);
    border-color: ${({ theme: { theme } }) => theme === `dark` ? `var(--color__purple)` : `var(--color__green)`};
    padding-bottom: 5px;
    margin: 2rem 0 1rem;

    span {
      color: var(--color__purple);
      display: inline-block;
      margin-right: 5px;
    }
  }

  p {
    margin: 1rem 0 2rem;
  }
`
