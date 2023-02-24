import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SuccessContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme.white};
`;

export const GoBackLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 3.125rem;
  border: 0;
  background-color: ${(props) => props.theme.deepGreen};
  color: ${(props) => props.theme.white};
  border-radius: 8px;
  transition: background-color 300ms;
  text-align: center;
  max-width: 360px;
  font-weight: bold;
  padding: 0 1.25rem;
  margin-top: 2rem;

  &:hover {
    background-color: ${(props) => props.theme.green};
  }
`;
