import { MagnifyingGlass } from 'phosphor-react';
import { useContext } from 'react';
import { PatientsContext } from '../../context/PatientsContext';
import { SearchFormaContainer } from './styles';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const searchFormSchema = zod.object({
  query: zod.string().length(16, 'Codice Fiscale deve avere 16 caratteri'),
});
type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchReservations } = useContext(PatientsContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchByCodiceFiscale(data: SearchFormInputs) {
    await fetchReservations(data.query);
  }

  return (
    <SearchFormaContainer onSubmit={handleSubmit(handleSearchByCodiceFiscale)}>
      <div>
        <input
          type="text"
          placeholder="Ricerca codice fiscale"
          {...register('query')}
        />
        <button disabled={isSubmitting}>
          <MagnifyingGlass size={16} />
          Ricerca
        </button>
      </div>
      <p>{errors.query?.message}</p>
    </SearchFormaContainer>
  );
}
