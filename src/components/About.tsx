import React from 'react';
import { Box, Container, Typography, Paper, Chip, Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const About: React.FC = () => {
  const skills = [
    'Agentic AI','JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
    'MongoDB', 'Git', 'Docker', 'REST APIs', 'GraphQL'
  ];

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        py: 10
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
            
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 500px' } }}>
              <Typography variant="h3" fontWeight="bold" color="text.primary" gutterBottom align="center">
                About Me
              </Typography>
              <Divider sx={{ mb: 4, width: '60px', borderBottomWidth: 3, mx: 'auto' }} />
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                I'm a passionate Computer Science student at Duke University with a deep interest in 
                software development and technology innovation. My journey began with curiosity about 
                how digital systems shape our world, and has evolved into a focused pursuit of 
                excellence in programming, problem-solving, and creating impactful applications.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                I specialize in full-stack development with a focus on creating responsive, 
                user-friendly applications. When I'm not coding, I enjoy exploring the latest 
                tech trends, contributing to open-source projects, and maintaining a balanced 
                lifestyle through outdoor activities.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Skills Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom align="center">
            Technical Skills
          </Typography>
          <Divider sx={{ mb: 4, width: '60px', mx: 'auto', borderBottomWidth: 3 }} />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                color="primary"
                sx={{ 
                  fontSize: '0.9rem',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white'
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Info Cards */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 16px)' } }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: 3,
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <SchoolIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                <Typography variant="h5" fontWeight="bold" color="text.primary">
                  Education
                </Typography>
              </Box>
              <Typography variant="h6" color="primary.main" gutterBottom>
                Duke University
              </Typography>
              <Typography variant="body1" paragraph>
                B.S. in Computer Science
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expected Graduation: 2026
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Relevant Coursework: Data Structures & Algorithms, Software Engineering, 
                Database Systems, Web Development, Machine Learning
              </Typography>
            </Paper>
          </Box>

          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 16px)' } }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: 3,
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <CodeIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                <Typography variant="h5" fontWeight="bold" color="text.primary">
                  Technical Focus
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                Full-stack development with expertise in modern web technologies
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                • Frontend: React, TypeScript, Material-UI
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                • Backend: Node.js, Python, REST APIs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • DevOps: AWS, Docker, Git, CI/CD
              </Typography>
            </Paper>
          </Box>

          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 16px)' } }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: 3,
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <WorkIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                <Typography variant="h5" fontWeight="bold" color="text.primary">
                  Career Goals
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                Aspiring software engineer focused on building innovative solutions
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                • Develop scalable, user-centric applications
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                • Contribute to open-source projects
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Continuous learning and skill development
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 