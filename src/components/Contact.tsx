import { Box, Container, Typography, Paper } from '@mui/material';
import SectionHeader from './SectionHeader';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader title="Contact Me" variant="h4" />
        
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper 
            elevation={2} 
            sx={{ 
              p: 4, 
              maxWidth: '600px', 
              width: '100%',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 6,
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              Get In Touch
            </Typography>
            <Typography variant="body1" paragraph>
              Feel free to reach out if you have a question or want to connect.
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon color="primary" sx={{ mr: 2 }} />
              <Typography variant="body1">
                davis.featherstone@duke.edu
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <GitHubIcon color="primary" sx={{ mr: 2 }} />
              <Typography variant="body1" component="a" href="https://github.com/Davis-60" target="_blank" sx={{ textDecoration: 'none', color: 'inherit' }}>
              github.com/Davis-60
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LinkedInIcon color="primary" sx={{ mr: 2 }} />
              <Typography variant="body1" component="a" href="https://linkedin.com/in/davis-featherstone" target="_blank" sx={{ textDecoration: 'none', color: 'inherit' }}>
                linkedin.com/in/davis-featherstone
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact; 