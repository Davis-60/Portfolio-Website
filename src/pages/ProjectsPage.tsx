import React from 'react';
import { Box } from '@mui/material';
import Projects from '../components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Projects />
    </Box>
  );
};

export default ProjectsPage; 