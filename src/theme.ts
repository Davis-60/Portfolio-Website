import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
      contrastText: '#ffffff',
    },
    background: {
      default: 'transparent',
      paper: '#16161b',
    },
    text: {
      primary: '#fafafa',
      secondary: '#a1a1aa',
      disabled: '#71717a',
    },
    divider: 'rgba(63, 63, 70, 0.4)',
  },
  typography: {
    fontFamily: [
      'Geist',
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: '"Instrument Serif", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Instrument Serif", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Instrument Serif", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '-0.015em',
    },
    h4: { fontWeight: 700, letterSpacing: '-0.015em' },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.6 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
          padding: '10px 22px',
          fontWeight: 600,
          fontSize: '0.9rem',
          transition: 'all 0.2s ease',
        },
        contained: {
          backgroundColor: '#3b82f6',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#2563eb',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: 'rgba(63, 63, 70, 0.4)',
          color: '#fafafa',
          '&:hover': {
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.06)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          overflow: 'hidden',
          boxShadow: 'none',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(63, 63, 70, 0.4)',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 10, 15, 0.8)',
          backdropFilter: 'blur(16px)',
          color: '#fafafa',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(63, 63, 70, 0.4)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(63, 63, 70, 0.4)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backdropFilter: 'blur(12px)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          transition: 'all 0.2s ease',
        },
        outlined: {
          borderColor: 'rgba(63, 63, 70, 0.4)',
          color: '#a1a1aa',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            borderColor: 'rgba(113, 113, 122, 0.8)',
            color: '#fafafa',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
