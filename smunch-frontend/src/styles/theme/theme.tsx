import { createTheme } from "@material-ui/core";

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#27085c',
        },
        secondary: {
            main: '#00FF00',
        }
    },
});

const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#f285aa"
        },
        secondary: {
            main: '#00FF00',
        }
    },
});

export { lightTheme, darkTheme }