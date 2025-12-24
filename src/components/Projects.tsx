import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  Chip,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import AnalyticsIcon from "@mui/icons-material/Analytics";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  gitRepoURL: string;
  icon?: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Customer Support Agentic AI",
    description: "Agentic AI for Customer Support",
    tags: ["Google ADK", "Python", "LLM"],
    gitRepoURL: "",
    icon: <PsychologyIcon />,
  },
  {
    id: 2,
    title: "Background Music Generation",
    description: "Using a fine tuned LLaVA model + Meta MusicGen to add context-aware AI background music to video clips.",
    tags: ["Google ADK", "Python", "LLM"],
    gitRepoURL: "https://github.com/Davis-60/CS372_Final_Project",
    icon: <CodeIcon />,
  },
  {
    id: 3,
    title: "System for Processor Analysis GUI",
    description:
      "Improvements to Duke Research Project applying Statistical Model Checking to Computer Architecture Data",
    tags: ["Python", "Tkinter", "LLM Integration"],
    gitRepoURL: "https://gitlab.oit.duke.edu/dcf33/spa-gui",
    icon: <AnalyticsIcon />,
  },
  {
    id: 4,
    title: "CDN Server",
    description: "MITM Server ",
    tags: ["Python", "Networking", "Systems Programming"],
    gitRepoURL: "",
    icon: <StorageIcon />,
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
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
                elevation={0}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    {project.icon && (
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: "primary.main",
                          color: "primary.contrastText",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          "& svg": {
                            fontSize: 28,
                          },
                        }}
                      >
                        {project.icon}
                      </Box>
                    )}
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        fontWeight="bold"
                      >
                        {project.title}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                      mb: 2,
                    }}
                  >
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
                        color="primary"
                        sx={{ mb: 1 }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ px: 3, pb: 2, pt: 0 }}>
                  {project.gitRepoURL && (
                    <Button
                      size="medium"
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={project.gitRepoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
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
