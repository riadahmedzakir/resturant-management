import './Root.css';

import NavigationBar from '../Navigation/NavigationBar';
import { Container, Grid, ThemeProvider } from '@material-ui/core';
import { darkTheme } from '../../styles/theme/theme';
import { Outlet } from 'react-router-dom';

function Root(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={darkTheme}>

        <Grid container style={{ height: '7vh', overflow: 'hidden' }}>
          <NavigationBar />
        </Grid>

        <Grid container className='body-container'>
          <Container maxWidth={false}>
            <Outlet />
          </Container>
        </Grid>

      </ThemeProvider>
    </>
  );
}

export default Root;
