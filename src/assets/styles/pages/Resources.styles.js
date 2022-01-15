import styled from 'styled-components'

export const StyledResources = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 50px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  .label:not(:first-of-type) {
    margin-top: 4rem;
  }

  h2 {
    margin-bottom: 0;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  h3 {
    border-bottom: 3px dashed;
    display: inline-block;
    border-color: var(--color-ch-purple);
    padding-bottom: 5px;
    margin: 2rem 0 1rem;

    span {
      color: var(--color-ch-purple);
      display: inline-block;
      margin-right: 5px;
    }
  }
`
