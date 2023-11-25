// import { RouterProvider } from 'react-router-dom';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from './Router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
