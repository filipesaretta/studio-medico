import styled from 'styled-components';

export const SearchFormaContainer = styled.form`
  p {
    color: red;
    padding: 0.4rem;
  }
  div {
    display: flex;
    gap: 1rem;

    input {
      flex: 1;
      border: 0;
      border-radius: 6px;
      padding: 1rem;
      background-color: ${(props) => props.theme.green};
      color: ${(props) => props.theme.white};

      &::placeholder {
        margin-right: 2rem;
        color: #b8b8b8;
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: transparent;
      border: 2px solid ${(props) => props.theme.white};
      cursor: pointer;
      border-radius: 6px;
      color: white;
      transition: background-color 300ms;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:hover {
        background-color: ${(props) => props.theme.darkGreen};
      }
    }
  }
`;
