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

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    &:not(:last-child) {
      margin-top: 1rem;
    }
  }

  input {
    height: 3.125rem;
    border: 0;

    border-radius: 6px;
    padding: 0 1rem;

    &:nth-last-child(2) {
      margin-bottom: 1rem;
    }
  }

  button {
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
  }
`;
