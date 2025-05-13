import React from 'react';
import { Box } from '@mui/material';
import HomeComp from '../components/HomeComp';

const HomePage: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <HomeComp />
    </Box>
  );
};

export default HomePage; 