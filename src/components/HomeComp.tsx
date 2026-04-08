import { Box, Container, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const HomeComp = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        pt: { xs: 5, md: 6 },
        pb: 6,
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow behind content */}
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 5, md: 8 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              animation: "fadeInUp 0.6s ease-out",
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: "3.5rem", md: "4.8rem" },
                color: "text.primary",
                lineHeight: 1,
                mb: 2,
              }}
            >
              Davis Featherstone
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "text.disabled",
                fontWeight: 400,
                mb: 3,
              }}
            >
              Computer Science Student
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 5,
                maxWidth: "500px",
                mx: { xs: "auto", md: 0 },
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              I'm a student at Duke University studying Computer Science and
              Economics. Passionate about full-stack development and agentic AI.
            </Typography>
            <Stack
              direction="row"
              spacing={4}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {[
                { label: "Resume", to: "/resume" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <Box
                  key={item.label}
                  component={Link}
                  to={item.to}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.75,
                    textDecoration: "none",
                    color: "text.disabled",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "text.primary",
                      "& .link-arrow": {
                        transform: "translate(2px, -2px)",
                      },
                    },
                  }}
                >
                  {item.label}
                  <ArrowOutwardIcon
                    className="link-arrow"
                    sx={{
                      fontSize: 16,
                      transition: "transform 0.2s ease",
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: "fadeInUp 0.6s ease-out 0.15s both",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 260, md: 340, lg: 420 },
                height: { xs: 320, md: 420, lg: 520 },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: -30,
                  borderRadius: "32px",
                  background: "rgba(59, 130, 246, 0.1)",
                  filter: "blur(50px)",
                  animation: "glowPulse 4s ease-in-out infinite",
                  zIndex: -1,
                },
              }}
            >
              <Box
                component="img"
                src="/ProfilePicture.jpeg"
                alt="Davis Featherstone"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "24px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  position: "relative",
                  zIndex: 1,
                  border: "1px solid rgba(63, 63, 70, 0.4)",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
                }}
              />

            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeComp;
