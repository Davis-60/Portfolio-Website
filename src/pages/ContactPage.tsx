import React from 'react';
import { Box } from '@mui/material';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Contact />
    </Box>
  );
};

export default ContactPage; 