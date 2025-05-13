import React from 'react';
import { Box, Container, Typography, Button, Stack, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const HomeComp: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 12,
        pb: 6,
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              component="h1"
              variant="h3"
              color="text.primary"
              gutterBottom
              fontWeight="bold"
            >
              Davis Featherstone
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Computer Science Student
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
              Hello! I'm a passionate CS student with interests in software development,
              algorithms, and creating elegant solutions to complex problems.
              Welcome to my portfolio!
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <Button variant="contained" startIcon={<DownloadIcon />} size="large">
                Resume
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<EmailIcon />} 
                size="large" 
                component={Link} 
                to="/contact"
              >
                Contact Me
              </Button>
            </Stack>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              alt="Davis Featherstone"
              src="/placeholder-profile.jpg"
              sx={{
                width: { xs: 200, md: 300 },
                height: { xs: 200, md: 300 },
                boxShadow: 3,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeComp; 