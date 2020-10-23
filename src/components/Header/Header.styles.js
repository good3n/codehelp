import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 100px 0 50px;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    padding: 50px 0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`

export const Nav = styled.ul`
  margin: 0 0 0 auto;
  padding: 0;

  li {
    display: block;
    margin: 0;
  }

  a {
    display: block;

    &.is-active {
      color: var(--color-ch-purple);
    }
  }
`
