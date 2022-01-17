import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color__background: #202225;
    --color__green: #4fd8c3;
    --color__purple: #5e7ce7;

    /* font sizes */
    --font-size__h0: 7.451rem;
    --font-size__h1: 3.815rem;
    --font-size__h2: 3.052rem;
    --font-size__h3: 2.441rem;
    --font-size__h4: 1.953rem;
    --font-size__h5: 1.563rem;
    --font-size__base: 1rem;
    --font-size__small: 0.8rem;
  }

  ::-moz-selection {
    color: var(--color__green);
    background: var(--color__purple);
  }

  ::selection {
    color: var(--color__green);
    background: var(--color__purple);
  }

  html {
    font-size: 112.5%;

    @media (max-width: 992px) {
      font-size: 100%;
    }
  }

  body {
    font-family: 'Apercu-Mono-Pro';
    font-size: var(--font-size__base);
    background-color: var(--color__background);
    color: #fff;
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
    letter-spacing: -0.08em;
  }

  h1 {
    font-size: var(--font-size__h1);

    @media (max-width: 992px) {
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

  .container {
    margin: 0 auto;
    padding: 0 30px;
    max-width: 1100px;
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
