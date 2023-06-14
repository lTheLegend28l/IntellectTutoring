import { Container, Typography, Box, styled } from "@mui/material";
import EmailIcon from "@mui/icons-material/MailOutline";

const FooterContainer = styled(Container)({
  backgroundColor: "white",
  height: "150px",
  minWidth: "100%",
  color: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const Footer = () => {
  return (
    <FooterContainer disableGutters>
      <Typography variant="h4" flex>
        © Intellect Tutoring
      </Typography>
      <Box
        component="a"
        href="mailto:Intelllecttutoring@gmail.com"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "10%",
          textDecoration: "none",
          color: "black",
        }}>
        <EmailIcon sx={{ marginLeft: "5px" }} />
      </Box>
    </FooterContainer>
  );
};

export default Footer;
