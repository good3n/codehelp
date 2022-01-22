import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 80px 1fr;
  margin: 3rem auto 4rem;
  align-items: end;
  position: relative;
  z-index: 999;

  @media (max-width: 991px) {
    grid-template-columns: 60px 1fr;
    margin: 2rem auto 4rem;
  }

  > a:first-of-type {
    border: 2px solid var(--color__border);
    border-radius: 10px 10px 0 10px;
    height: 80px;
    display: flex;
    background-color: ${({ theme: { theme } }) => theme === `dark` ? `transparent` : `var(--color__gray)`};

    @media (max-width: 991px) {
      height: 60px;
    }

    svg {
      height: 76px;
      margin: 0 -11px;
      position: relative;
      top: -3px;
      stroke: ${({ theme: { theme } }) => theme === `dark` ? `transparent` : `var(--color__text)`};
      stroke-width: 5px;

      @media (max-width: 991px) {
        top: 0;
        height: 55px;
        margin: 0 -5px;
      }
    }
  }

  @media (max-width: 991px) {
    &.is-active {
      > a:first-of-type {
        background: none;
        border-color: rgba(255, 255, 255, 0.15);

        svg {
          stroke: none;

          path {
            fill: #202225;
          }
        }
      }
    }
  }
`
