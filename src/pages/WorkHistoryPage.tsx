import React from 'react';
import { Box } from '@mui/material';
import WorkHistory from '../components/WorkHistory';

const WorkHistoryPage: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <WorkHistory />
    </Box>
  );
};

export default WorkHistoryPage; 