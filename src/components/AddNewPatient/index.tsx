import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import DatePicker from 'react-datepicker';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { api } from '../../lib/axios';
import { dateFormatter } from '../../utils/formatter';

import { FormContainer, Form, Button } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

const newPatientSchemaValidation = zod
  .object({
    name: zod.string().min(2, 'Aggiungi name'),
    codiceFiscale: zod
      .string()
      .length(16, 'Codice Fiscale deve avere 16 caratteri'),
    dateInput: zod.date({
      required_error: 'Seleziona una data',
      invalid_type_error: 'Questo non è una data',
    }),
  })
  .required();

type newPatientData = zod.infer<typeof newPatientSchemaValidation>;

export function AddNewPatient() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<newPatientData>({
    resolver: zodResolver(newPatientSchemaValidation),
  });
  const navigate = useNavigate();

  async function handleAddNewPatient(data: newPatientData) {
    const ticket = uuidv4();
    const patientActive = true;
    const { dateInput, codiceFiscale, name } = data;

    await api.post('/reservations', {
      id: ticket,
      createdAt: dateFormatter.format(new Date(dateInput)),
      codiceFiscale,
      name,
      prenotazioneAttiva: patientActive,
    });
    navigate('/success');
  }
  /**
   * This function checks if it's weekend. Only can select week days.
   */
  function isWeekday(date: Date) {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(handleAddNewPatient)}>
        <label htmlFor="name">Nome</label>
        <input type="text" placeholder="Nome" id="name" {...register('name')} />
        <span>{errors.name?.message}</span>

        <label htmlFor="">Codice Fiscale</label>
        <input
          type="text"
          placeholder="Codice Fiscale"
          {...register('codiceFiscale')}
        />
        <span>{errors.codiceFiscale?.message}</span>

        <div>
          <Controller
            control={control}
            name="dateInput"
            render={({ field }) => (
              <DatePicker
                onChange={(date) => field.onChange(date)}
                filterDate={isWeekday}
                selected={field.value}
                inline
              />
            )}
          />
        </div>
        <span>{errors.dateInput?.message}</span>

        <Button type="submit">Aggiungi Paziente</Button>
      </Form>
    </FormContainer>
  );
}
