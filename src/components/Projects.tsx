import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, CardActions, Button, Divider, Chip, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment processing capabilities.',
    image: '/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    githubUrl: 'https://github.com/davisfeatherstone/ecommerce-platform',
    liveUrl: 'https://ecommerce-platform-demo.netlify.app'
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'An interactive web application that displays real-time weather data from multiple locations using external APIs and data visualization.',
    image: '/project2.jpg',
    tags: ['JavaScript', 'React', 'Chart.js', 'API Integration'],
    githubUrl: 'https://github.com/davisfeatherstone/weather-dashboard'
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'A productivity application that allows users to create, organize, and track tasks with features like due dates, priority levels, and category filtering.',
    image: '/project3.jpg',
    tags: ['TypeScript', 'React', 'Material-UI', 'Firebase'],
    githubUrl: 'https://github.com/davisfeatherstone/task-manager',
    liveUrl: 'https://task-manager-app-demo.netlify.app'
  },
  {
    id: 4,
    title: 'Algorithm Visualizer',
    description: 'An educational tool that visualizes common algorithms such as sorting, searching, and graph traversal to help students understand their inner workings.',
    image: '/project4.jpg',
    tags: ['React', 'TypeScript', 'Canvas API', 'Algorithms'],
    githubUrl: 'https://github.com/davisfeatherstone/algorithm-visualizer'
  }
];

const Projects: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
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
          My Projects
        </Typography>
        <Divider sx={{ mb: 6, width: '80px', mx: 'auto', borderBottomWidth: 3 }} />
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {projects.map((project) => (
            <Box 
              key={project.id} 
              sx={{ 
                width: { 
                  xs: '100%', 
                  sm: 'calc(50% - 16px)', 
                  lg: 'calc(50% - 16px)' 
                } 
              }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  } 
                }}
                elevation={2}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: '56.25%', // 16:9 aspect ratio
                    bgcolor: 'primary.light',
                  }}
                  image={project.image}
                  title={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                    {project.tags.map((tag) => (
                      <Chip 
                        key={tag} 
                        label={tag} 
                        size="small" 
                        variant="outlined" 
                        sx={{ mb: 1 }} 
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    startIcon={<GitHubIcon />} 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      size="small" 
                      startIcon={<LaunchIcon />}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 