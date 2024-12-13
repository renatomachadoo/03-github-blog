import styled from 'styled-components'

export const PublicationsContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
export const Publication = styled.div`
  background: ${(props) => props.theme['base-post']};

  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border: 2px solid transparent;

  cursor: pointer;

  > header {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 1rem;

    > span {
      width: 100%;
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
    }

    > small {
      white-space: nowrap;
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }

  > p {
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }
`
