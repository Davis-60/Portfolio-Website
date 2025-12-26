import { Typography, Divider } from "@mui/material";

interface SectionHeaderProps {
  title: string;
  variant?: "h2" | "h3" | "h4";
  gutterBottom?: boolean;
}

const SectionHeader = ({ 
  title, 
  variant = "h4",
  gutterBottom = true 
}: SectionHeaderProps) => (
  <>
    <Typography
      component="h2"
      variant={variant}
      align="center"
      color="text.primary"
      gutterBottom={gutterBottom}
      fontWeight="bold"
    >
      {title}
    </Typography>
    <Divider
      sx={{ mb: 6, width: "80px", mx: "auto", borderBottomWidth: 3 }}
    />
  </>
);

export default SectionHeader;

