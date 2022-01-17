import styled from 'styled-components'

export const StyledFooter = styled.footer`
  margin: 4.768rem 0 50px;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  align-items: center;
  font-size: var(--font-size__small);

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  p {
    margin: 0;
  }

  a {
    display: flex;
    align-items: center;
    margin-left: auto;
    color: #fff;
    text-decoration: none;

    @media (max-width: 991px) {
      margin: 1rem 0 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    width: 24px;
    margin-left: 12px;

    path {
      fill: var(--color__green);
    }
  }
`
