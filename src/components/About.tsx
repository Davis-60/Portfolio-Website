import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Divider,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";

const About = () => {
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

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        {/* About Me Section */}
        <Box sx={{ mb: 8 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 500px" } }}>
              <Typography
                variant="h3"
                fontWeight="bold"
                color="text.primary"
                gutterBottom
                align="center"
              >
                About Me
              </Typography>
              <Divider
                sx={{ mb: 4, width: "60px", borderBottomWidth: 3, mx: "auto" }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
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
                sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
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
        </Box>

        {/* Skills Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            align="center"
          >
            Technical Skills
          </Typography>
          <Divider
            sx={{ mb: 4, width: "60px", mx: "auto", borderBottomWidth: 3 }}
          />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: "center",
            }}
          >
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                color="primary"
                sx={{
                  fontSize: "0.9rem",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "white",
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Info Cards */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          <Box
            sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(33.333% - 16px)" } }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: 3,
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <SchoolIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                <Typography variant="h5" fontWeight="bold" color="text.primary">
                  Education
                </Typography>
              </Box>
              <Typography variant="h6" color="primary.main" gutterBottom>
                Duke University
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                B.S. in Computer Science
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expected Graduation: 2026
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Relevant Coursework: Data Structures & Algorithms, Network
                Architecture, Machine Learning, Operating Systems, and
                Algorithmic Design and Analysis
              </Typography>
            </Paper>
          </Box>

          <Box
            sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(33.333% - 16px)" } }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: 3,
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <CodeIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                <Typography variant="h5" fontWeight="bold" color="text.primary">
                  Technical Focus
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Full-stack and AI development
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                • Frontend: React, TypeScript, Material-UI
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                • Backend: Node.js, Python, REST APIs, GraphQL
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • AI: Pytorch, Ollama, Google ADK
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
