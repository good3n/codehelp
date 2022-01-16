import styled from 'styled-components'

export const StyledError = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 100px;

  @media (max-width: 991px) {
    grid-template-columns: 2fr 1fr;
    gap: 50px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }

  svg {
    width: 100%;
    margin: 0 auto;

    path {
      fill: var(--color-ch-green);

      &.exclamation {
        fill: #fff;
      }
    }

    circle {
      fill: var(--color-ch-purple);
    }
  }
`
