import { Box, Container, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const footerLinks = [
  { icon: <GitHubIcon sx={{ fontSize: 16 }} />, href: "https://github.com/Davis-60", label: "GitHub" },
  { icon: <LinkedInIcon sx={{ fontSize: 16 }} />, href: "https://linkedin.com/in/davis-featherstone", label: "LinkedIn" },
  { icon: <EmailIcon sx={{ fontSize: 16 }} />, href: "mailto:davis.featherstone@duke.edu", label: "Email" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: "1px solid rgba(63, 63, 70, 0.4)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "text.disabled" }}>
            &copy; {new Date().getFullYear()} Davis Featherstone
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            {footerLinks.map((item) => (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                target={item.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={item.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  textDecoration: "none",
                  color: "text.disabled",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "text.primary",
                  },
                }}
              >
                {item.icon}
                {item.label}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
