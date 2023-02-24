import { useContext } from 'react';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SerchForm';
import { PatientsContext } from '../../context/PatientsContext';
import { ReservationsContainer, ReservationsTable } from './styles';

export function Reservations() {
  const { reservations } = useContext(PatientsContext);
  return (
    <>
      <Header />
      <ReservationsContainer>
        <SearchForm />
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
            {reservations.map(
              ({ id, name, codiceFiscale, createdAt, prenotazioneAttiva }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{codiceFiscale}</td>
                  <td>{prenotazioneAttiva ? 'Attiva' : 'No'}</td>
                  <td>{createdAt}</td>
                </tr>
              ),
            )}
          </tbody>
        </ReservationsTable>
      </ReservationsContainer>
    </>
  );
}
