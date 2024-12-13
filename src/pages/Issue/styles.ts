import styled from 'styled-components'

export const IssueContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  height: 100%;
  margin: -5.5rem auto 0;

  display: flex;
  flex-direction: column;
`

export const IssueHeader = styled.header`
  width: 100%;

  padding: 2rem 2.5rem;

  background: ${(props) => props.theme['base-profile']};

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      font-weight: bold;
      line-height: 160%;
      text-decoration: none;

      border-bottom: 1px solid transparent;
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        border-color: ${(props) => props.theme.blue};
      }
    }
  }

  h3 {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: bold;
  }

  > footer {
    margin-top: 0.5rem;
    display: flex;
    gap: 1.5rem;

    > div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${(props) => props.theme['base-label']};

      > span {
        font-size: 1rem;
        line-height: 160%;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }
`
