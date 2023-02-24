import { ThemeProvider } from 'styled-components';
import { BookCalendar } from './components/BookCalendar';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/globals';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        {/* <BookCalendar/> */}
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
