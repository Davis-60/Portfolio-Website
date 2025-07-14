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
  technologies: string[];
  logo: string;
  logoStyle?: React.CSSProperties;
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Rubrik",
    location: "Palo Alto, CA",
    duration: "May 2024 - August 2025",
    description: [
      "Developed full-stack web applications using React and Node.js",
      "Collaborated with cross-functional teams to deliver features on time",
      "Implemented automated testing and CI/CD pipelines",
      "Optimized database queries and improved application performance",
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    logo: "/rubrik_logo.png",
    logoStyle: { height: "80%", width: "80%" },
  },
  {
    id: 2,
    title: "CS 330 Teaching Assistant",
    company: "Duke University",
    location: "Durham, NC",
    duration: "August 2025 - Present",
    description: ["Boilerplate", "Text", "Here"],
    technologies: [],
    logo: "/duke_circular_logo.webp",
    logoStyle: { height: "110%", width: "110%" },
  },
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Aunalytics",
    location: "Traverse City, MI",
    duration: "June 2024 - August 2024",
    description: [
      "Developed full-stack web applications using React and Node.js",
      "Collaborated with cross-functional teams to deliver features on time",
      "Implemented automated testing and CI/CD pipelines",
      "Optimized database queries and improved application performance",
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    logo: "/rubrik_logo.png",
    logoStyle: { height: "80%", width: "80%" },
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

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1, mt: 3, fontWeight: "medium" }}
                    >
                      Technologies & Skills:
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {experience.technologies.map((tech) => (
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
