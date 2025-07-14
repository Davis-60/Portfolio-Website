import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Divider,
  Chip,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  gitRepoURL: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Customer Support Agentic AI",
    description: "Agentic AI for Customer Support",
    image: "/project1.jpg",
    tags: ["Google ADK", "Python", "LLM"],
    gitRepoURL: "",
    liveUrl: "",
  },
  {
    id: 2,
    title: "System for Processor Analysis GUI",
    description:
      "Improvements to Duke Research Project applying Statistical Model Checking to Computer Architecture Data",
    image: "/project1.jpg",
    tags: ["Python", "Tkinter", "LLM Integration"],
    gitRepoURL: "",
    liveUrl: "",
  },
  {
    id: 3,
    title: "CDN Server",
    description: "MITM Server ",
    image: "/project2.jpg",
    tags: ["Python", "Networking", "Systems Programming"],
    gitRepoURL: "",
  },
  {
    id: 4,
    title: "Logisim CPU",
    description: "Single Core CPU built from scratch in Logisim Emulator",
    image: "/project3.jpg",
    tags: ["Logisim", "Computer Architecture", "", ""],
    gitRepoURL: "",
  },
];

const Projects: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        py: 8,
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
        <Divider
          sx={{ mb: 6, width: "80px", mx: "auto", borderBottomWidth: 3 }}
        />

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {projects.map((project) => (
            <Box
              key={project.id}
              sx={{
                width: {
                  xs: "100%",
                  sm: "calc(50% - 16px)",
                  lg: "calc(50% - 16px)",
                },
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
                elevation={2}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: "56.25%",
                    bgcolor: "primary.light",
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
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mt: 2 }}
                  >
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
                    href={project.gitRepoURL}
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
