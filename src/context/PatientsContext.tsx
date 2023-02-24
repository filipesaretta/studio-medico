import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface ReservationProps {
  id: string;
  name: string;
  codiceFiscale: string;
  prenotazioneAttiva: boolean;
  createdAt: string;
}

interface NewPatientsContextType {
  reservations: ReservationProps[];
  fetchReservations: (query?: string) => Promise<void>;
}

interface PatientProviderProps {
  children: ReactNode;
}

export const PatientsContext = createContext({} as NewPatientsContextType);

export function PatientsProvider({ children }: PatientProviderProps) {
  const [reservations, setReservations] = useState<ReservationProps[]>([]);
  async function fetchReservations(query?: string) {
    const response = await api.get('/reservations?_sort=createdAt&_order=asc', {
      params: {
        q: query,
      },
    });
    setReservations(response.data);
  }

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <PatientsContext.Provider value={{ reservations, fetchReservations }}>
      {children}
    </PatientsContext.Provider>
  );
}
