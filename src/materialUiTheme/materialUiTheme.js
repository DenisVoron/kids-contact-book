import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: [
            'BlinkMacSystemFont',
        ].join(','),
    },
    palette: {
        primary: {
            light: '#ff784e',
            main: '#ff5722',
            dark: '#b23c17',
            accent: '#ff784e',
            contrastText: '#ffff',
            divider: '#BDBDBD'
        },
        secondary: {
            main: '#76ff03',
            dark: '#52b202',
            accent: '#91ff35',
            contrastText: '#080606',
            divider: '#080606',
        },
        text: {
            main: '#a85dd7',
            primary: '#212121',
            secondary: '#e3d1d1'
        },
        action: {
            active: '#76ff03',
            selected: '#FFEB3B'
        }
    },
});