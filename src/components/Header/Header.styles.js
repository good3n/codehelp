import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const StyledHeader = styled.header`
  padding: 4.768rem 0 50px;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    padding: var(--h2) 0;
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
    cursor: pointer;

    &:hover {
      path {
        fill: var(--color-ch-purple);
      }
    }
  }
`

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(94, 124, 231, 0.8);
  }

  &-content {
    background: var(--bg-color);
    border-radius: 10px;
    padding: var(--h3);
    font-size: 1rem;

    p {
      margin: 0;
      font-weight: bold;

      + div {
        margin-top: 1rem;
        display: flex;

        a {
          color: var(--color-ch-green);
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
          color: var(--color-ch-green);
          cursor: pointer;
          order: 1;
          margin-left: auto;
        }
      }
    }
  }
`
