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

export const ReservationsLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  height: 3.125rem;
  border: 0;
  background-color: ${(props) => props.theme.deepGreen};
  color: ${(props) => props.theme.white};
  border-radius: 8px;
  transition: background-color 300ms;
  text-align: center;
  font-weight: bold;
  padding: 0 1rem;

  &:hover {
    background-color: ${(props) => props.theme.green};
  }

  font-size: 0.875rem;
  @media (min-width: 850px) {
    padding: 0 1.25rem;
    font-size: 1rem;
  }
`;
