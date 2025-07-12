import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body1" sx={{ mb: { xs: 2, md: 0 } }}>
            © {new Date().getFullYear()} Davis Featherstone.
          </Typography>
          
          <Box>
            <IconButton 
              color="inherit" 
              aria-label="GitHub" 
              component="a" 
              href="https://github.com/Davis-60" 
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton 
              color="inherit" 
              aria-label="LinkedIn" 
              component="a" 
              href="https://linkedin.com/in/davis-featherstone" 
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton 
              color="inherit" 
              aria-label="Email" 
              component="a" 
              href="mailto:davis.featherstone@duke.edu"
            >
              <EmailIcon />
            </IconButton>
          </Box>
        </Box>
        
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              Home
            </Link>
            <Link href="#/about" color="inherit" sx={{ mx: 1 }}>
              About
            </Link>
            <Link href="#/projects" color="inherit" sx={{ mx: 1 }}>
              Projects
            </Link>
            <Link href="#/work" color="inherit" sx={{ mx: 1 }}>
              Work History
            </Link>
            <Link href="#/contact" color="inherit" sx={{ mx: 1 }}>
              Contact
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 