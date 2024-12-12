import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  background: ${(props) => props.theme['base-profile']};
  display: flex;
  align-items: start;
  justify-content: space-between;

  margin: 0 auto;

  padding: 1.875rem 0;

  .logo {
    margin-top: 4rem;
  }

  .effect-left {
    margin-top: 4.375rem;
    margin-bottom: 2.375rem;
  }
`
