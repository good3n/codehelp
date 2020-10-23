import styled from 'styled-components'

export const StyledFooter = styled.footer`
  margin: 100px 0 50px;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  align-items: center;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  div {
    &:first-of-type {
      font-size: 21px;
    }

    &:last-of-type {
      text-align: right;
      font-size: 16px;

      @media (max-width: 991px) {
        text-align: left;
        margin-top: 20px;
      }
    }
  }

  a {
    color: var(--color-ch-green);
  }
`
