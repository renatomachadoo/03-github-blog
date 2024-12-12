import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;

  padding: 2rem 2.5rem;

  background: ${(props) => props.theme['base-profile']};

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  gap: 2rem;

  > main {
    width: 100%;

    display: flex;
    flex-direction: column;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        color: ${(props) => props.theme['base-title']};
        font-size: 1.5rem;
        line-height: 130%;
        font-weight: bold;
      }

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

        &:hover {
          border-color: ${(props) => props.theme.blue};
        }
      }
    }

    > p {
      margin-top: 0.5rem;
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
    }

    > footer {
      margin-top: 1.5rem;
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
  }
`

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`
