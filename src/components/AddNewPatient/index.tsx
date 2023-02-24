import { useForm } from 'react-hook-form';
import { FormContainer, Form } from './styles';

export function AddNewPatient() {
  const { register, handleSubmit } = useForm();

  function handleAddNewPatient(data) {
    console.log(data);
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(handleAddNewPatient)}>
        <label htmlFor="name">Nome</label>
        <input type="text" placeholder="Nome" id="name" {...register('name')} />

        <label htmlFor="">Codice Fiscale</label>
        <input
          type="text"
          placeholder="Codice Fiscale"
          {...register('codice-fiscale')}
        />

        <button type="submit">Aggiungi Paziente</button>
      </Form>
    </FormContainer>
  );
}
