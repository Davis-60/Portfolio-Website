import { Box, Container, Typography } from "@mui/material";
import SectionHeader from "./SectionHeader";

const educationDetails: { label: string; value: string }[] = [
  { label: "Institution", value: "Duke University" },
  { label: "Degree", value: "B.S. in Computer Science" },
  { label: "Graduating", value: "2026" },
  {
    label: "Coursework",
    value:
      "Data Structures & Algorithms, Network Architecture, Machine Learning, Operating Systems, Algorithmic Design and Analysis",
  },
];

const skills = [
  "Agentic AI",
  "Google ADK",
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "Java",
  "MongoDB",
  "Git",
  "Docker",
  "REST APIs",
  "GraphQL",
];

const About = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* About Me Section */}
        <Box sx={{ mb: { xs: 7, md: 9 }, animation: "fadeInUp 0.6s ease-out" }}>
          <SectionHeader title="About Me" eyebrow="01 — Introduction" variant="h3" />
          <Box sx={{ maxWidth: "68ch" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "text.secondary",
                mb: 3,
              }}
            >
              I'm a Computer Science student at Duke University with a deep
              interest in technology, innovation, and software development. My
              journey began with curiosity about how technology can be used to
              positively shape our world, and has evolved into a focused
              pursuit of excellence in programming, problem-solving, and
              creating impact with all I do.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8, color: "text.secondary" }}
            >
              I specialize in full-stack development with a focus on agentic
              AI. When I'm not coding, I do all I can to build a purposeful
              and balanced life. For me, this means exploring the latest tech
              trends, improving my personal fitness, engaging in outdoor
              activities, and reading about a broad range of subjects from
              philosophy to politics.
            </Typography>
          </Box>
        </Box>

        {/* Skills Section */}
        <Box sx={{ mb: { xs: 7, md: 9 }, animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          <SectionHeader title="Technical Skills" eyebrow="02 — Stack" variant="h3" />
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.95rem",
              lineHeight: 2,
              color: "text.secondary",
              maxWidth: "68ch",
            }}
          >
            {skills.join("  ·  ")}
          </Typography>
        </Box>

        {/* Education */}
        <Box sx={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
          <SectionHeader title="Education" eyebrow="03 — Background" variant="h3" />
          <Box
            component="dl"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "160px 1fr" },
              rowGap: 2.5,
              columnGap: 3,
              m: 0,
              maxWidth: "68ch",
            }}
          >
            {educationDetails.map((item) => (
              <Box key={item.label} sx={{ display: "contents" }}>
                <Typography
                  component="dt"
                  sx={{
                    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "text.disabled",
                    pt: 0.3,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  component="dd"
                  sx={{
                    m: 0,
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    color: "text.secondary",
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
