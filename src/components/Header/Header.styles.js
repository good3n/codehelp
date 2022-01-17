import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const StyledHeader = styled.header`
  padding: 3rem 0 50px;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    padding: var(--font-size__h2) 0;
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
    display: flex;
    align-items: center;
    margin: 0;
    font-weight: 600;
    position: relative;

    &:hover:not(:last-of-type):after {
      content: '';
      background: var(--color__purple);
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
      color: var(--color__purple);
    }
  }

  img {
    width: 32px;
    margin-left: 30px;
    cursor: pointer;
  }
`

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(94, 124, 231, 0.8);
  }

  &-content {
    background: var(--color__background);
    border-radius: 10px;
    padding: var(--font-size__h3);
    font-size: 1rem;

    p {
      margin: 0;
      font-weight: bold;

      + div {
        margin-top: 1rem;
        display: flex;

        a {
          color: var(--color__green);
          text-decoration: none;
          font-weight: bold;
          margin-left: 20px;
          order: 2;
        }

        button {
          background: none;
          border: none;
          font-weight: bold;
          padding: 0;
          box-shadow: 0;
          color: var(--color__green);
          cursor: pointer;
          order: 1;
          margin-left: auto;
        }
      }
    }
  }
`
