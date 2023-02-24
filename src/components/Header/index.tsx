import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { ReservationsLink, HeaderContainer, HeaderContent } from './styles';

export function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="Draw of a doctor" />

        <ReservationsLink
          to={pathname === '/reservations' ? '/' : '/reservations'}
        >
          {pathname === '/reservations' ? 'Aggiungi Paziente' : 'Reservations'}
        </ReservationsLink>
      </HeaderContent>
    </HeaderContainer>
  );
}
