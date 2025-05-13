import React from 'react';
import { Box, Container, Typography, Paper, Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const About: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
          fontWeight="bold"
        >
          About Me
        </Typography>
        <Divider sx={{ mb: 6, width: '80px', mx: 'auto', borderBottomWidth: 3 }} />
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' } }}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Who I Am
              </Typography>
              <Typography variant="body1">
                I'm Davis Featherstone, a Computer Science student at Duke University.
              </Typography>
              <Typography variant="body1">
                My journey in tech began with a curiosity about how digital systems shape our 
                world, and has evolved into a focused pursuit of excellence in programming, 
                problem-solving, and creating impactful applications.
              </Typography>
              <Typography variant="body1">
                I enjoy tackling complex challenges and constantly learning new technologies 
                to expand my skill set. When I'm not coding, you can find me exploring the 
                latest tech trends, contributing to open-source projects, or engaging in 
                outdoor activities to maintain a balanced lifestyle.
              </Typography>
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' }, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SchoolIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
                  <Typography variant="h6" color="text.primary">
                    Education
                  </Typography>
                </Box>
                <Typography variant="body1">
                  B.S. in Computer Science (Expected Graduation: 2026)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Relevant Coursework: Data Structures, Algorithms, Software Engineering, 
                  Database Systems, Web Development
                </Typography>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CodeIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
                  <Typography variant="h6" color="text.primary">
                    Technical Focus
                  </Typography>
                </Box>
                <Typography variant="body1">
                  Full-stack development, UI/UX design, and cloud technologies
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Passionate about creating responsive, user-friendly applications 
                  with clean, maintainable code.
                </Typography>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LightbulbIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
                  <Typography variant="h6" color="text.primary">
                    Goals
                  </Typography>
                </Box>
                <Typography variant="body1">
                  Aspiring to specialize in innovative software solutions while 
                  continuing to develop a diverse technology skill set.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 