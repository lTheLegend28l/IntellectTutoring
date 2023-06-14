import { Box, Typography } from "@mui/material";
import ServiceContainer from "./ServiceContainer";
import CTAButton from "./CTAButton";
import CTATypography from "./CTATypography";
import servicesImage2 from "../assets/images/servicesImage2.svg";

const TutoringService = ({ onSubmit, price }) => {
  return (
    <ServiceContainer
      sx={{
        backgroundImage: `url(${servicesImage2})`,
        width: { xs: "80%", sm: "80%", md: "40%" },
        height: { xs: "425px", sm: "425px", md: "580px" },
      }}>
      <Typography variant="h2" fontWeight="600" sx={{ margin: "20px 0" }}>
        1-1 Tutoring
      </Typography>
      <Typography variant="h5" lineHeight="1.75">
        Session by Session <br />
        Learn from our top 1% tutors <br />
        Take your learning at a flexible pace <br />
        Get personalized lessons
      </Typography>
      <Box sx={{ flexGrow: "1" }} />
      {price && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}>
          <Typography variant="h3" fontWeight="700">
            $35
          </Typography>
          <Typography
            variant="h3"
            marginLeft="10px"
            marginTop={{ xs: "3px" }}
            fontSize={{ xs: "25px", sm: "30px" }}>
            Per session
          </Typography>
        </Box>
      )}
      {onSubmit ? (
        <Box component="form" onSubmit={onSubmit} sx={{ width: "100%" }}>
          <CTAButton type="submit" sx={{ marginBottom: "20px", width: "100%" }}>
            <Typography variant="h4" fontWeight="600">
              Checkout
            </Typography>
          </CTAButton>
        </Box>
      ) : (
        <CTAButton href="/checkout/tutoring" sx={{ marginBottom: "20px" }}>
          <CTATypography text="Schedule Now" />
        </CTAButton>
      )}
    </ServiceContainer>
  );
};

export default TutoringService;
