import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/globals';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { PatientsProvider } from './context/PatientsContext';

function App() {
  return (
    <PatientsProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </PatientsProvider>
  );
}

export default App;
