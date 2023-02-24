import { Header } from '../../components/Header';
import { GoBackLink, SuccessContainer } from './styles';

export function Success() {
  return (
    <>
      <Header />
      <SuccessContainer>
        <h1>Riservato</h1>
        <GoBackLink to="/">Fare Altra Riserva</GoBackLink>
      </SuccessContainer>
    </>
  );
}
