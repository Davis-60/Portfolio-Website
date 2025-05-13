import React from 'react';
import { Box } from '@mui/material';
import Skills from '../components/Skills';

const SkillsPage: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Skills />
    </Box>
  );
};

export default SkillsPage; 