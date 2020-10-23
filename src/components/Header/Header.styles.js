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
  display: flex;
  align-items: center;

  li {
    display: block;
    margin: 0;
    font-weight: 600;
    position: relative;

    &:hover:not(:last-of-type):after {
      content: '';
      background: var(--color-ch-purple);
      height: 3px;
      width: 100%;
      position: absolute;
      right: 0;
      bottom: -5px;
      left: 0;
    }
  }

  a {
    display: block;

    &.is-active {
      color: var(--color-ch-purple);
    }
  }

  svg {
    width: 24px;
    margin: 3px 0 0 30px;

    &:hover {
      path {
        fill: var(--color-ch-purple);
      }
    }
  }
`
