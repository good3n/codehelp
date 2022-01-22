import styled from "styled-components"

export const StyledButton = styled.button`
  position: absolute;
  top: 77px;
  right: 30px;
  background: none;
  border: none;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  animation-iteration-count: 1;
  overflow: visible;

  @media (max-width: 991px) {
    top: 59px;
  }

  &.light {
    animation: moveLight 2.5s ease-in-out;
  }

  &.dark {
    animation: moveDark 2.5s ease-in-out;
  }

  &::before {
    display: none;
  }

  svg {
    width: 20px;
    height: 36px;
    position: absolute;
    top: 0;
    transition: top 0.35s ease-in-out;

    @media (min-width: 992px) {
      &:hover {
        top: 2px;
      }
    }
  }

  @keyframes moveLight {
    0% {
      transform: rotate(0);
    }
    20% {
      transform: rotate(-15deg);
    }
    40% {
      transform: rotate(15deg);
    }
    60% {
      transform: rotate(-7deg);
    }
    80% {
      transform: rotate(7deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  @keyframes moveDark {
    0% {
      transform: rotate(0);
    }
    20% {
      transform: rotate(15deg);
    }
    40% {
      transform: rotate(-15deg);
    }
    60% {
      transform: rotate(7deg);
    }
    80% {
      transform: rotate(-7deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`
