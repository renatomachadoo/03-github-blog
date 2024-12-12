import styled from 'styled-components'

export const PublicationSearchFormContainer = styled.form`
  margin-top: 4.5rem;

  width: 100%;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;
      line-height: 160%;
      font-weight: bold;
    }

    small {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
      font-weight: 400;
    }
  }

  > input {
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: 1rem;
      line-height: 160%;
    }
  }
`
