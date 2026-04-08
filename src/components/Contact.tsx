import { Box, Container, Typography, Stack } from "@mui/material";
import SectionHeader from "./SectionHeader";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const contactLinks = [
  {
    icon: <EmailIcon sx={{ fontSize: 20 }} />,
    label: "Email",
    value: "davis.featherstone@duke.edu",
    href: "mailto:davis.featherstone@duke.edu",
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 20 }} />,
    label: "GitHub",
    value: "github.com/Davis-60",
    href: "https://github.com/Davis-60",
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 20 }} />,
    label: "LinkedIn",
    value: "davis-featherstone",
    href: "https://linkedin.com/in/davis-featherstone",
  },
];

const Contact = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader title="Get in touch" eyebrow="Contact" variant="h3" />

        <Box sx={{ maxWidth: "68ch" }}>
          <Stack divider={<Box sx={{ borderTop: "1px solid rgba(63, 63, 70, 0.4)" }} />}>
            {contactLinks.map((link) => (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  py: 2.5,
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    "& .contact-value": { color: "text.primary" },
                    "& .arrow-icon": {
                      opacity: 1,
                      transform: "translate(4px, -4px)",
                    },
                  },
                }}
              >
                <Box sx={{ color: "text.disabled", display: "flex" }}>{link.icon}</Box>
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "text.disabled",
                    width: { xs: 60, md: 90 },
                    flexShrink: 0,
                  }}
                >
                  {link.label}
                </Typography>
                <Typography
                  className="contact-value"
                  sx={{
                    flex: 1,
                    fontSize: "1.1rem",
                    color: "text.secondary",
                    transition: "color 0.2s ease",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.value}
                </Typography>
                <ArrowOutwardIcon
                  className="arrow-icon"
                  sx={{
                    fontSize: 18,
                    color: "text.disabled",
                    opacity: 0,
                    transition: "all 0.2s ease",
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
