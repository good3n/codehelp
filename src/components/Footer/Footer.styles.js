import styled from 'styled-components'

export const StyledFooter = styled.footer`
  margin: 100px 0 50px;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  align-items: center;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  p {
    font-size: 21px;
    margin: 0;
  }

  a {
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-left: auto;
    color: #fff;
    text-decoration: none;

    @media (max-width: 991px) {
      margin: 20px 0 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    width: 24px;
    margin-left: 12px;

    path {
      fill: var(--color-ch-green);
    }
  }
`
