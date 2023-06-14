import './Root.css';

import NavigationBar from '../Navigation/NavigationBar';
import { Container, Grid, ThemeProvider } from '@material-ui/core';
import { darkTheme, lightTheme } from '../../styles/theme/theme';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { themeState } from '../../data/state/theme/theme.slice';
import isEqual from 'lodash/isEqual';

function Root(): JSX.Element {
  const isDark = useSelector(themeState, isEqual);
  const theme = isDark ? { ...darkTheme } : { ...lightTheme };

  return (
    <ThemeProvider theme={theme}>

      <Grid container style={{ height: '7vh', overflow: 'hidden' }}>
        <NavigationBar />
      </Grid>

      <Grid container className='body-container'>
        <Container maxWidth={false}>
          <Outlet />
        </Container>
      </Grid>

    </ThemeProvider>
  );
}

export default Root;
