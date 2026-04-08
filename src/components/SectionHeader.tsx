import { Box, Typography } from "@mui/material";

interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
  variant?: "h2" | "h3" | "h4";
  align?: "left" | "center";
}

const SectionHeader = ({
  title,
  eyebrow,
  variant = "h3",
  align = "left",
}: SectionHeaderProps) => (
  <Box sx={{ textAlign: align, mb: 6 }}>
    {eyebrow && (
      <Typography
        sx={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: "0.7rem",
          fontWeight: 500,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "text.disabled",
          mb: 1.5,
        }}
      >
        {eyebrow}
      </Typography>
    )}
    <Typography
      component="h2"
      variant={variant}
      color="text.primary"
      sx={{
        fontSize: { xs: "2.6rem", md: "3.4rem" },
        lineHeight: 1.05,
      }}
    >
      {title}
    </Typography>
  </Box>
);

export default SectionHeader;
