import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Reservations } from './pages/Reservations';
import { Success } from './pages/Success';

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
