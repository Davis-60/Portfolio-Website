import React from 'react';
import { Box } from '@mui/material';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <About />
    </Box>
  );
};

export default AboutPage; 