import styled from 'styled-components'

export const StyledHome = styled.div`
  margin-bottom: 4rem;

  h1 {
    font-size: var(--font-size__h0);
    color: var(--color__green);
    margin-top: 0;

    @media (max-width: 991px) {
      font-size: var(--font-size__h1);
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
    font-size: var(--font-size__h5);

    @media (max-width: 991px) {
      font-size: var(--font-size__base);
    }
  }

  a {
    background-color: var(--color__purple);
    color: #fff;
    padding: 1rem 50px;
    border-radius: 80px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.2s ease 0.1s;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 991px) {
      padding: var(--font-size__h5) 30px;
      width: auto;
    }

    &:hover {
      background-color: var(--color__green);
    }

    img {
      width: 32px;
      margin-right: 15px;
    }
  }
`
