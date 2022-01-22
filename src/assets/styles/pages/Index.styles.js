import styled from 'styled-components'

export const StyledHome = styled.div`
  margin-bottom: 4rem;
  text-align: center;

  > div:first-of-type {
    position: relative;
    display: inline-flex;
  }

  .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    right: -85px;
    transform: rotate(13deg);

    @media (max-width: 991px) {
      max-width: 9vw;
      top: 3%;
      right: -13%;
    }
  }

  h1 {
    font-size: var(--font-size__h0);
    color: var(--color__green);
    margin-top: 0;
    letter-spacing: -0.1em;
    -webkit-text-stroke: 2px ${({ theme: { theme } }) => theme === `dark` ? `transparent` : `var(--color__text)`};

    @media (max-width: 991px) {
      font-size: 13.5vw;
      -webkit-text-stroke: 1.5px ${({ theme: { theme } }) => theme === `dark` ? `transparent` : `var(--color__text)`};
    }

    span {
      &:nth-of-type(1) {
        color: #fff;
      }

      &:nth-of-type(2) {
        color: var(--color__purple);
      }
    }
  }

  p {
    margin: 0 0 3rem;
    font-size: var(--font-size__h4);

    @media (max-width: 991px) {
      font-size: var(--font-size__base);
    }
  }

  a {
    img {
      width: 32px;
      margin-right: 15px;
    }
  }
`
