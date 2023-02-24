import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.white};
`;
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  justify-items: center;
  padding: 2rem 1rem;

  span {
    font-size: 1.5rem;
    font-weight: 900;
    color: ${(props) => props.theme.deepGreen};
  }
`;

export const ReservationsLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 3.125rem;
  border: 0;
  background-color: ${(props) => props.theme.deepGreen};
  color: ${(props) => props.theme.white};
  border-radius: 8px;
  transition: background-color 300ms;

  font-weight: bold;
  padding: 0 1.25rem;

  &:hover {
    background-color: ${(props) => props.theme.green};
  }
`;
