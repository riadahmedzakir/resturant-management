import './Root.css';
import NavigationBar from '../Navigation/NavigationBar';
import { ThemeProvider } from '@material-ui/core';
import { darkTheme } from '../../styles/theme/theme';


function Root(): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavigationBar />
    </ThemeProvider>
  );
}

export default Root;
