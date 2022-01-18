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
  border-bottom: 2px solid rgba(255, 255, 255, 0.15);

  &.is-active {
    @media (max-width: 991px) {
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
          color: var(--color__background);
          font-size: var(--font-size__h5);
          border-bottom: 3px dashed var(--color__background);
          width: 100%;
          padding-top: 1rem;

          &:hover {
            color: var(--color__green);

            span {
              color: var(--color__background);
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
    }
  }

  a {
    display: inline-block;
    color: #fff;
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

  /* @media (max-width: 991px) {
    &:not(.is-active) {
      .links {
        opacity: 0;
        visibility: hidden;
      }
    }

    &.is-active {
      svg path {
        fill: var(--color__background);
      }
    }
  }

  .links {
    display: flex;

    span {
      display: none;
    }

    @media (max-width: 991px) {
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
        color: var(--color__background);
        font-size: var(--font-size__h5);
        border-bottom: 3px dashed var(--color__background);
        width: 100%;

        &:hover {
          color: var(--color__green);

          span {
            color: var(--color__background);
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

  a {
    display: block;
    margin: 0;
    font-weight: 600;
    position: relative;
    margin-right: 30px;
    color: #fff;
    text-decoration: none;

    @media (max-width: 991px) {
      margin-right: 0;
      margin-bottom: 10px;
    }

    &.is-active {
      color: var(--color__purple);
    }
  }

  svg {
    width: 32px;
    cursor: pointer;

    @media (max-width: 991px) {
      margin-left: auto;
    }
  } */
`

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(94, 124, 231, 0.9);
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

export const NavToggle = styled.button`
  display: none;
  background: none;
  border: none;
  height: 60px;
  width: 60px;
  outline: none;
  border-radius: 0 10px 10px 0;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-left: none;

  @media (max-width: 991px) {
    order: 2;
    display: flex;
    align-items: center;
    justify-content: center;
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
    overflow: visible;
    outline: none;
    position: relative;
    top: 3px;

    &.is-active {
      .nav-inner,
      .nav-inner::before,
      .nav-inner::after {
        background-color: var(--color__background);
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
      background-color: #fff;
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

  .nav--spin {
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
  border: 2px inset rgba(255, 255, 255, 0.15);
  cursor: pointer;

  svg {
    width: 32px;
  }

  @media (max-width: 991px) {
    order: 1;
    border-radius: 10px 0 0 0;

    &.is-active {
      svg path {
        fill: var(--color__background);
      }
    }
  }
`
