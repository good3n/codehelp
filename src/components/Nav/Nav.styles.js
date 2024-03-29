import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const NavWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px;
  justify-content: end;
  align-items: end;

  @media (max-width: 991px) {
    grid-template-columns: 1fr 60px 60px;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: end;
  border-bottom: 2px solid var(--color__border);

  .links {
    width: 100%;
    text-align: right;
  }

  &.is-active {
    @media (max-width: 991px) {
      border-color: rgba(255, 255, 255, 0.15);
      
      .links {
        display: flex;
        position: absolute;
        top: 8rem;
        left: 0;
        right: 0;
        flex-direction: column;
        opacity: 1;
        visibility: visible;

        a,
        a.is-active {
          color: #202225;
          font-size: var(--font-size__h5);
          border-bottom: 3px dashed #202225;
          width: 100%;
          padding-top: 1rem;

          &:hover {
            color: var(--color__green);

            span {
              color: #202225;
            }
          }
        }

        span {
          display: block;
          font-size: var(--font-size__small);
          margin-bottom: 1rem;
        }
      }
    }
  }

  @media (max-width: 991px) {
    order: 0;

    .links {
      display: none;
      text-align: left;
    }
  }

  a {
    display: inline-block;
    color: var(--color__text);
    font-weight: 700;
    margin-right: 30px;
    padding-bottom: 11px;
    position: relative;
    top: 2px;
    border-bottom: 2px solid transparent;

    &.is-active {
      border-color: var(--color__green);
    }
  }

  span {
    display: none;
  }
`

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(94, 124, 231, 0.9);
  }

  &-content {
    background: #202225;
    border-radius: 10px;
    padding: var(--font-size__h3);
    font-size: 1rem;

    p {
      margin: 0;
      font-weight: bold;
      color: #fff;

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

export const NavToggle = styled.button`
  display: none;
  background: none;
  border: none;
  height: 60px;
  width: 60px;
  outline: none;
  padding: 0;
  border-radius: 0 10px 10px 0;
  border: 2px solid var(--color__border);
  border-left: none;

  @media (max-width: 991px) {
    order: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    &.is-active {
      border-color: rgba(255, 255, 255, 0.15);
    }
  }

  .nav-toggle {
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    text-transform: none;
    border: 0;
    margin: 0;
    outline: none;
    position: relative;
    top: 3px;

    &.is-active {
      .nav-inner,
      .nav-inner::before,
      .nav-inner::after {
        background-color: #202225;
      }
    }

    .nav-inner {
      transition-duration: 0.22s;
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

      &::before {
        transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
      }

      &::after {
        transition: bottom 0.1s 0.25s ease-in,
          transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    }

    &.is-active {
      .nav-inner {
        transform: rotate(225deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

        &::before {
          top: 0;
          opacity: 0;
          transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
        }

        &::after {
          bottom: 0;
          transform: rotate(-90deg);
          transition: bottom 0.1s ease-out,
            transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      }
    }
  }

  .nav-box {
    width: 25px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .nav-inner {
    display: block;
    top: 50%;
    margin-top: -2px;

    &,
    &::before,
    &::after {
      width: 25px;
      height: 3px;
      background-color: ${({ theme: { theme } }) => theme === `dark` ? `#fff` : `#202225`};
      border-radius: 3px;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
    }

    &::before,
    &::after {
      content: '';
      display: block;
    }

    &::before {
      top: -8px;
    }

    &::after {
      bottom: -8px;
    }
  }

  .nav--toggle {
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(94, 124, 231, 0.97);
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  transition: visibility 0.2s ease-in-out, opacity 0.2s ease-in-out;

  @media (max-width: 991px) {
    &.is-active {
      opacity: 1;
      visibility: visible;
    }
  }
`

export const DiscordLink = styled.button`
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 10px 0;
  border: 2px solid inset solid solid ${({ theme: { theme } }) => theme === `dark` ? `#fff` : `#000`};
  padding: 0;
  cursor: pointer;
  z-index: 1;

  svg {
    width: 32px;
  }

  @media (max-width: 991px) {
    order: 1;
    border-radius: 10px 0 0 0;

    &.is-active {
      border-color: rgba(255, 255, 255, 0.15) !important;

      svg path {
        fill: #202225;
      }
    }
  }
`
