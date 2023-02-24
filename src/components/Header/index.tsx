import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { ReservationsLink, HeaderContainer, HeaderContent } from './styles';

export function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={logo} alt="Draw of a doctor" />
        </Link>
        {/* This is not the correct way handle, I've done this way because I was not able to figured out how to make a rerender when I added new Patient. Here I'm forcing the reloading. */}
        <ReservationsLink
          href={pathname === '/reservations' ? '/' : '/reservations'}
        >
          {pathname === '/reservations' ? 'Aggiungi Paziente' : 'Reservations'}
        </ReservationsLink>
      </HeaderContent>
    </HeaderContainer>
  );
}
