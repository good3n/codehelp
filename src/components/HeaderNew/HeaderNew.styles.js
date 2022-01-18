import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 80px 1fr;
  margin: 3rem auto 5rem;
  align-items: end;
  position: relative;
  z-index: 999;

  > a:first-of-type {
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 10px 10px 0 10px;
    height: 80px;
    display: flex;

    svg {
      margin: 0 -11px;
      position: relative;
      top: -3px;
    }
  }

  @media (max-width: 991px) {
    &.is-active {
      > a:first-of-type {
        svg path {
          fill: var(--color__background);
        }
      }
    }
  }
`
