import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { HashRouter,  Routes, Route } from 'react-router-dom';
import theme from './theme';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import WorkHistoryPage from './pages/WorkHistoryPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

const App = () => {
  return (
    //Using Hash Router to work with static site deployment
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          backgroundColor: 'transparent',
          position: 'relative',
        }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/work" element={<WorkHistoryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
