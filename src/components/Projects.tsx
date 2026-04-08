import { Box, Container, Typography, Stack } from "@mui/material";
import SectionHeader from "./SectionHeader";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  gitRepoURL?: string;
  liveDemoURL?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Customer Support Agentic AI",
    description:
      "Agentic AI for Customer Support at Rubrik. Combines dynamically generated API calls with solution steps to triage issues end to end.",
    tags: ["Google ADK", "Python", "LLM", "Agent Tools"],
  },
  {
    id: 2,
    title: "Background Music Generation",
    description:
      "System using a fine-tuned LLaVA model + Meta MusicGen to add context-aware AI background music to video clips.",
    tags: ["Machine Learning", "Music Generation", "LoRA"],
    gitRepoURL: "https://github.com/Davis-60/CS372_Final_Project",
  },
  {
    id: 3,
    title: "System for Processor Analysis GUI",
    description:
      "Project improves upon Duke Research Project applying Statistical Model Checking to Computer Architecture Data.",
    tags: ["Python", "Tkinter", "LLM"],
    gitRepoURL: "https://gitlab.oit.duke.edu/dcf33/spa-gui",
  },
  {
    id: 4,
    title: "ClosetCurate",
    description:
      "Web app and Chrome extension to scrape and store detailed descriptions of clothing items to create AI-powered outfit suggestions.",
    tags: ["React", "AI", "PostgreSQL", "Python", "Chrome Extension"],
    liveDemoURL: "https://closet-curate.vercel.app",
  },
];

const Projects = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader title="Selected Work" eyebrow="Projects" variant="h3" />

        <Stack
          divider={
            <Box sx={{ borderTop: "1px solid rgba(63, 63, 70, 0.4)" }} />
          }
        >
          {projects.map((project, index) => (
            <Box
              key={project.id}
              sx={{
                py: { xs: 3, md: 4 },
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 2, md: 4 },
                }}
              >
                {/* Left: title + tags */}
                <Box sx={{ flex: "0 0 280px" }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    color="text.primary"
                    fontWeight={600}
                    sx={{ mb: 1.5, fontSize: { xs: "1rem", md: "1.15rem" } }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "text.disabled",
                      mb: { xs: 0, md: 2 },
                    }}
                  >
                    {project.tags.join("  ·  ")}
                  </Typography>
                </Box>

                {/* Right: description + links */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: "1rem", lineHeight: 1.7, mb: 2 }}
                  >
                    {project.description}
                  </Typography>

                  {(project.liveDemoURL || project.gitRepoURL) && (
                    <Stack direction="row" spacing={3}>
                      {project.liveDemoURL && (
                        <Box
                          component="a"
                          href={project.liveDemoURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.75,
                            textDecoration: "none",
                            color: "text.disabled",
                            fontSize: "0.85rem",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              color: "text.primary",
                              "& .link-arrow": {
                                transform: "translate(2px, -2px)",
                              },
                            },
                          }}
                        >
                          <OpenInNewIcon sx={{ fontSize: 16 }} />
                          Live app
                          <ArrowOutwardIcon
                            className="link-arrow"
                            sx={{
                              fontSize: 14,
                              transition: "transform 0.2s ease",
                            }}
                          />
                        </Box>
                      )}
                      {project.gitRepoURL && (
                        <Box
                          component="a"
                          href={project.gitRepoURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.75,
                            textDecoration: "none",
                            color: "text.disabled",
                            fontSize: "0.85rem",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              color: "text.primary",
                              "& .link-arrow": {
                                transform: "translate(2px, -2px)",
                              },
                            },
                          }}
                        >
                          <GitHubIcon sx={{ fontSize: 16 }} />
                          Code
                          <ArrowOutwardIcon
                            className="link-arrow"
                            sx={{
                              fontSize: 14,
                              transition: "transform 0.2s ease",
                            }}
                          />
                        </Box>
                      )}
                    </Stack>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Projects;
