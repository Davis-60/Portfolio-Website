import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import type { CSSProperties } from "react";
import SectionHeader from "./SectionHeader";

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
  logo: string;
  logoStyle?: CSSProperties;
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Rubrik",
    location: "Palo Alto, CA",
    duration: "May 2025 - Aug 2025",
    description: [
      "Novel agentic solution for resolving customer issues directly implemented into Rubrik's core product.",
      "Worked closely with Distinguished and Staff engineers to implement project.",
      "Contributed to open-source project LiteLLM to unblock team on bugs stemming from the library.",
    ],
    technologies: [
      "Python",
      "Google Agent Development Kit",
      "PyTorch",
      "Vector Search",
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
      "Leading office hours for Duke's upper-level algorithm design and analysis course.",
      "Grading homework and exams.",
    ],
    logo: "/duke_logo.png",
    logoStyle: { height: "100%", width: "100%", objectFit: "contain" },
  },
];

const WorkHistory = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader title="Work Experience" eyebrow="Experience" variant="h3" />

        <Stack
          divider={
            <Box sx={{ borderTop: "1px solid rgba(63, 63, 70, 0.4)" }} />
          }
        >
          {workExperiences.map((experience, index) => (
            <Box
              key={experience.id}
              sx={{
                py: { xs: 3, md: 4 },
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 2.5, md: 3 },
                  alignItems: "flex-start",
                }}
              >
                {/* Company logo */}
                <Box
                  sx={{
                    width: { xs: 40, md: 48 },
                    height: { xs: 40, md: 48 },
                    borderRadius: "12px",
                    border: "1px solid rgba(63, 63, 70, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    overflow: "hidden",
                    mt: 0.5,
                  }}
                >
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
                  {/* Title + meta */}
                  <Typography
                    variant="h6"
                    component="h2"
                    color="text.primary"
                    fontWeight={600}
                    sx={{ mb: 0.5, fontSize: { xs: "1rem", md: "1.15rem" } }}
                  >
                    {experience.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "text.disabled",
                      mb: 2.5,
                    }}
                  >
                    {experience.company} &middot; {experience.location} &middot;{" "}
                    {experience.duration}
                  </Typography>

                  {/* Description */}
                  <Stack spacing={1} sx={{ mb: experience.technologies ? 2.5 : 0 }}>
                    {experience.description.map((item, idx) => (
                      <Typography
                        key={idx}
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          pl: 2,
                          position: "relative",
                          fontSize: "1rem",
                          lineHeight: 1.7,
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "8px",
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            bgcolor: "text.disabled",
                          },
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Stack>

                  {/* Tech chips */}
                  {experience.technologies && (
                    <Typography
                      sx={{
                        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "text.disabled",
                      }}
                    >
                      {experience.technologies.join("  ·  ")}
                    </Typography>
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

export default WorkHistory;
