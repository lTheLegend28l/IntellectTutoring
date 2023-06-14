import { Box, Typography, styled } from "@mui/material";
import CardImage1 from "../assets/images/cardImage1.svg";
import CardImage2 from "../assets/images/cardImage2.svg";
import CardImage3 from "../assets/images/cardImage3.svg";

const FeaturesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const FeatureContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  minHeight: "200px",
  margin: "0 40px",
  [theme.breakpoints.down("md")]: {
    margin: "20px 20px",
  },
}));

const FeatureImg = styled("img")({
  margin: "0",
  width: "100px",
  height: "auto",
});

const Features = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ marginBottom: { xs: "40px", sm: "40px", md: "80px" } }}>
        The INTELLECT Difference
      </Typography>
      <FeaturesContainer
        sx={{ marginBottom: { xs: "40px", sm: "40px", md: "80px" } }}>
        <FeatureContainer>
          <FeatureImg src={CardImage1} />
          <Typography variant="h4">Tutors with INTELLECT</Typography>
          <Typography variant="h5">
            All of our tutors are top 1% students
          </Typography>
        </FeatureContainer>
        <FeatureContainer>
          <FeatureImg src={CardImage2} />
          <Typography variant="h4">Results Based Tutoring</Typography>
          <Typography variant="h5">
            Our services are designed to give you real results
          </Typography>
        </FeatureContainer>
        <FeatureContainer>
          <FeatureImg src={CardImage3} />
          <Typography variant="h4">Personalized Tutoring</Typography>
          <Typography variant="h5">
            We cater each session to you for quick progress
          </Typography>
        </FeatureContainer>
      </FeaturesContainer>
    </>
  );
};

export default Features;
