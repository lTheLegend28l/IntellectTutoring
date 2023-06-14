import { Typography, Box, styled } from "@mui/material";
import LogoSrc from "../assets/images/logoWhite.svg";
import bgImage from "../assets/images/homeBG.jpg";
import bgImage2 from "../assets/images/bgImage2.svg";
import CTAButton from "../components/CTAButton";
import CTATypography from "../components/CTATypography";
import BodyContainer from "../components/BodyContainer";
import Features from "../components/Features";
import ServicesDisplay from "../components/ServicesDisplay";
import HeroContainer from "../components/HeroContainer";

const Logo = styled("img")({
  width: 250,
  height: "auto",
});

const Home = () => {
  return (
    <>
      <HeroContainer
        sx={{
          backgroundImage: `url(${bgImage})`,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        <Logo src={LogoSrc} alt="Intellect Tutoring Logo" />
        <Typography
          variant="h1"
          sx={{
            mt: "10px",
          }}>
          Let Us Bring You <br />
          to Your Dream Score
        </Typography>
        <Box sx={{ mt: "10px" }}>
          <CTAButton href="/checkout">
            <CTATypography text="Start Now" />
          </CTAButton>
        </Box>
      </HeroContainer>
      <BodyContainer>
        <Features />
        <Typography
          variant="h2"
          sx={{ marginBottom: { xs: "50px", sm: "50px", md: "80px" } }}>
          Our SAT Tutoring Services
        </Typography>
        <ServicesDisplay />
      </BodyContainer>
      <HeroContainer
        sx={{
          backgroundImage: `url(${bgImage2})`,
          maxHeight: "600px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        <Typography variant="h1" fontWeight={600}>
          Time to bring out your
          <br /> INTELLECT
        </Typography>
        <CTAButton href="/checkout">
          <CTATypography text="Start Now" />
        </CTAButton>
      </HeroContainer>
    </>
  );
};

export default Home;
