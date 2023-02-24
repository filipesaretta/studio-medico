import { Header } from '../../components/Header';
import { ReservationsContainer, ReservationsTable } from './styles';

export function Reservations() {
  return (
    <>
      <Header />
      <ReservationsContainer>
        <ReservationsTable>
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Paziente </th>
              <th>Codice Fiscale</th>
              <th>Prenotazione</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1adew12523qq</td>
              <td>Jonh Doe </td>
              <td>ABCDE94B13Z602B</td>
              <td>Ativa</td>
              <td>23/02/2023</td>
            </tr>
          </tbody>
        </ReservationsTable>
      </ReservationsContainer>
    </>
  );
}
