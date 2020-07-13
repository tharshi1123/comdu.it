import React from 'react';
import NavBar from '../components/navication/Navbar'
import Main from '../components/navication/Main'
import Buttons from '../components/core/Buttons'
import Card from '../components/layouts/publicLayouts'
import theme from '../theme/theme'
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
          <NavBar/>
          <Main/>
          <Buttons/>
          <Card/>
     </ThemeProvider>
    </div>
  );
}

export default App;
