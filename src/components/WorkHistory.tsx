import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  CardContent,
  Card,
  Chip,
  Stack,
} from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
  logo: string;
  logoStyle?: React.CSSProperties;
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Rubrik",
    location: "Palo Alto, CA",
    duration: "May 2025 - Aug 2025",
    description: [
      "Created multi-agent system which dynamically generates API calls to replicate complete UI functionality in an agentic chat interface.",
      "Combined with RAG system and MCP server of troubleshooting info, the agent can triage and resolve thousands of potential Rubrik user issues by combining solution steps with dynamically generated API actions.",
      "Novel agentic solution was directly implemented into Rubrik's core product.",
      "Built with Python, Google Agent Development Kit, Pytorch, and Azure AI Vector Search.",
      "Worked closely with Distinguished and Staff engineers to implement my project into near-production builds.",
      "Contributed to open-source project LiteLLM to unblock team on bugs stemming from the library.",
    ],
    technologies: [
      "Python",
      "Google Agent Development Kit",
      "PyTorch",
      "Azure AI Vector Search",
      "LiteLLM",
    ],
    logo: "/rubrik_logo.png",
    logoStyle: { height: "80%", width: "80%" },
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "Aunalytics",
    location: "Traverse City, MI",
    duration: "June 2024 - August 2024",
    description: [
      "Worked on an Agile Development team with 8+ full-time engineers.",
      "Built React components and full pages, including a grid to show all information on users within an organization.",
      "Wrote APIs to create and augment user and organization metadata in the database backend.",
      "Handled bug fixes across the entire codebase.",
      "Worked closely with product managers and contributed process improvement suggestions which increased velocity.",
    ],
    technologies: ["TypeScript", "React", "MongoDB", "API Development"],
    logo: "/aunalytics_logo.jpeg",
    logoStyle: { height: "100%", width: "100%" },
  },
  {
    id: 3,
    title: "CS 330 Teaching Assistant",
    company: "Duke University",
    location: "Durham, NC",
    duration: "August 2025 - Present",
    description: [
      "Leading recitations and office hours for Duke's upper-level alogrithmic analysis course",
      "Starting Fall 2025 Semester",
    ],
    logo: "/duke_circular_logo.webp",
    logoStyle: { height: "110%", width: "110%" },
  },
];

const WorkHistory: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        py: 8,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            color="text.primary"
            fontWeight="bold"
            gutterBottom
          >
            Work Experience
          </Typography>
          <Divider sx={{ width: "80px", mx: "auto", borderBottomWidth: 3 }} />
        </Box>

        <Stack spacing={4}>
          {workExperiences.map((experience) => (
            <Card
              key={experience.id}
              sx={{
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                  borderColor: "primary.main",
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 3,
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      bgcolor: "background.paper",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: 2,
                      border: "1px solid",
                      borderColor: "divider",
                      overflow: "hidden",
                    }}
                  >
                    {/* Notice the style override for logos, adjust as needed */}
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      style={{
                        objectFit: "cover",
                        ...experience.logoStyle,
                      }}
                    />
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      color="text.primary"
                      fontWeight="bold"
                      gutterBottom
                    >
                      {experience.title}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <BusinessIcon color="primary" sx={{ fontSize: 20 }} />
                        <Typography
                          variant="body1"
                          color="text.primary"
                          fontWeight="medium"
                        >
                          {experience.company}
                        </Typography>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <LocationOnIcon color="primary" sx={{ fontSize: 20 }} />
                        <Typography variant="body2" color="text.secondary">
                          {experience.location}
                        </Typography>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <CalendarTodayIcon
                          color="primary"
                          sx={{ fontSize: 20 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {experience.duration}
                        </Typography>
                      </Box>
                    </Box>

                    {experience.description.map((item, idx) => (
                      <Typography
                        key={idx}
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          mb: 1,
                          pl: 2,
                          position: "relative",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "8px",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            bgcolor: "primary.main",
                          },
                        }}
                      >
                        {item}
                      </Typography>
                    ))}

                    {experience.technologies && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1, mt: 3, fontWeight: "medium" }}
                      >
                        Technologies & Skills:
                      </Typography>
                    )}
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {experience.technologies &&
                        experience.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            variant="outlined"
                            color="primary"
                            sx={{
                              fontSize: "0.75rem",
                              "&:hover": {
                                bgcolor: "primary.main",
                                color: "white",
                              },
                            }}
                          />
                        ))}
                    </Stack>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default WorkHistory;
