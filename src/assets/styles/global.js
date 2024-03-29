import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color__background: ${({ theme: { theme } }) => theme === `dark` ? `#202225` : `#fff`};
    --color__text: ${({ theme: { theme } }) => theme === `dark` ? `#fff` : `#202225`};
    --color__border: ${({ theme: { theme } }) => theme === `dark` ? `rgba(255, 255, 255, 0.15)` : `var(--color__text)`};
    --color__green: #4fd8c3;
    --color__purple: #5e7ce7;
    --color__gray: #ECF2FC;

    /* font sizes */
    --font-size__h0: 7.451rem;
    --font-size__h1: 2.488rem;
    --font-size__h2: 2.074rem;
    --font-size__h3: 1.728rem;
    --font-size__h4: 1.44rem;
    --font-size__h5: 1.2rem;
    --font-size__base: 1rem;
    --font-size__small: 0.833rem;
  }

  ::-moz-selection {
    color: var(--color__green);
    background: var(--color__purple);
  }

  ::selection {
    color: var(--color__green);
    background: var(--color__purple);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 112.5%;

    @media (max-width: 991px) {
      font-size: 100%;
    }
  }

  body {
    font-family: 'Apercu-Mono-Pro';
    font-size: var(--font-size__base);
    background-color: var(--color__background);
    color: var(--color__text);
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Apercu-Mono-Pro', sans-serif;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.04em;
  }

  h1 {
    font-size: var(--font-size__h1);

    @media (max-width: 991px) {
      font-size: var(--font-size__h2);
      margin-top: 0;
    }
  }

  h2 {
    font-size: var(--font-size__h2);
  }

  h3 {
    font-size: var(--font-size__h3);
  }

  h4 {
    font-size: var(--font-size__h4);
  }

  h5 {
    font-size: var(--font-size__h5);
  }

  p {
    margin-bottom: var(--font-size__base);
  }

  a {
    text-decoration: none;
  }

  button,
  a.button {
    border-radius: 10px;
    border: none;
    padding: 0;
    line-height: 1;
    color: #fff;
    background-color: var(--color__purple);
    border: 2px solid var(--color__border);
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 3rem;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 42 79'%3E%3Cpath fill='%23202225' fill-opacity='.1' d='M22.5 39.5C22 23.5 31.897 3.392 38.437.767H.5v78h40.937C36.365 73.877 23 55.5 22.5 39.5Z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: left center;
      background-size: cover;
      height: 100%;
      width: 40px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      transition: all .3s ease-in-out;
    }

    @media (min-width: 992px) {
      &:hover {
        &::before {
          width: 200%;
          left: -5%;
        }
      }
    }

    span {
      position: relative;
      display: flex;
      align-items: center;
    }

    img,
    svg {
      position: relative;
    }
  }

  .container {
    margin: 0 auto;
    padding: 0 30px;
    max-width: 1100px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1.2fr 3fr;
    gap: 50px;

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }

  @keyframes anvil {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    1% {
      transform: scale(0.96) translateY(10px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }

  .popup-content {
    -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
  }
`

export default GlobalStyle
