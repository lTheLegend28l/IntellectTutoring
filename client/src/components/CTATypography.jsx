import { Typography } from "@mui/material";

const CTATypography = ({ text }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.15rem" },
        fontWeight: "600",
      }}>
      {text}
    </Typography>
  );
};

export default CTATypography;
