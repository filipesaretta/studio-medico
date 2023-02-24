import styled from 'styled-components';

export const ReservationsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const ReservationsTable = styled.table`
  width: 100%;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  @media (min-width: 870px) {
    display: inline-table;
  }

  th {
    padding: 1.25rem;
    background-color: ${(props) => props.theme.green};
    text-align: left;
  }

  td {
    padding: 1.25rem;
    background-color: ${(props) => props.theme.darkGreen};
    color: ${(props) => props.theme.white};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;
