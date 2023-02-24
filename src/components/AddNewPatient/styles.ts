import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background-color: ${(props) => props.theme.darkGreen};
  margin-top: 2rem;
  border-radius: 0;

  @media (min-width: 565px) {
    border-radius: 6px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding: 0 1rem;
  color: ${(props) => props.theme.white};

  span {
    margin: 1rem 0;
    color: red;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    height: 3.125rem;
    border: 0;

    border-radius: 6px;
    padding: 0 1rem;
  }

  div {
    text-align: center;
    button {
      margin: 2px;
      border-radius: 4px;
      background-color: ${(props) => props.theme.deepGreen};
      &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme.green};
      }
      span {
        top: 5px;
      }
    }
  }
`;

export const Button = styled.button`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  height: 3.125rem;
  border: 0;
  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  border-radius: 8px;
  transition: background-color 300ms;

  font-weight: bold;
  padding: 0 1.25rem;

  &:hover {
    background-color: ${(props) => props.theme.deepGreen};
  }
`;
