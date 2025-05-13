import React from 'react';
import { Box } from '@mui/material';
import ResumeViewer from '../components/ResumeViewer';

const ResumePage: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <ResumeViewer/>
    </Box>
  );
};

export default ResumePage; 