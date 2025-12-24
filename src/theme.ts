import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3a4a7a',
      light: '#5a6a95',
      dark: '#2a385d',
      contrastText: '#e6e6e6',
    },
    secondary: {
      main: '#8a5a55',
      light: '#a77a75',
      dark: '#6a443f',
      contrastText: '#e6e6e6',
    },
    background: {
      default: '#0f0f19ff',
      paper: '#131627ff',
    },
    text: {
      primary: '#d5d5df',
      secondary: '#9a9aad',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '10px 18px',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          overflow: 'hidden',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#14142b',
          color: '#ffffff',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#6c63ff',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

// Apply responsive font sizes
theme = responsiveFontSizes(theme);

export default theme; 