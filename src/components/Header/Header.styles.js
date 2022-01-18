import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: relative;
  z-index: 999;
  padding: 3rem 0 50px;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    padding: 3rem 0;
    align-items: flex-start;
  }

  a.logo {
    display: inline-flex;
  }
`
