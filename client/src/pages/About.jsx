import { useEffect, useRef, useState } from "react";
import { Box, Typography, keyframes } from "@mui/material";
import HeroContainer from "../components/HeroContainer";
import BodyContainer from "../components/BodyContainer";
import Carousel from "../components/Carousel";
import styled from "@emotion/styled";
import aboutBG from "../assets/images/aboutBG.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const rotatingAnimation = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const RotatingText = styled(Typography)`
  animation: ${rotatingAnimation} 6s linear infinite;
`;

const About = () => {
  const [rotatingText, setRotatingText] = useState("college success");
  const bodyContainerRef = useRef(null);

  const scrollToBodyContainer = () => {
    bodyContainerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const texts = [
      "college success",
      "brighter futures",
      "intellectual achievement",
      "academic excellence",
    ];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setRotatingText(texts[currentIndex]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeroContainer
        sx={{
          backgroundImage: `url(${aboutBG})`,
        }}>
        <Box
          sx={{
            margin: {
              xs: "50px 0 30px 25px",
              sm: "50px 0 30px 25px",
              md: "50px 0 30px 50px",
            },
          }}>
          <Box minHeight="225px">
            <Typography variant="h1" fontWeight="400">
              We empower students for
            </Typography>
            <RotatingText
              variant="h1"
              component="Typography"
              sx={{
                fontFamily: "MongolianBaiti",
                fontStyle: "italic",
                fontWeight: "500",
              }}>
              {rotatingText}
            </RotatingText>
          </Box>

          <Typography
            variant="h4"
            sx={{ marginTop: "80px", lineHeight: "1.75" }}>
            <strong>SAT Tutoring</strong> <br />
            From top <strong>1%</strong> students
            <br /> <strong>Personalized</strong> to your needs <br />
            Optimized for quick <strong>growth</strong> <br />
            Built to get you<strong> results</strong>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "40px",
            }}
            onClick={scrollToBodyContainer}>
            <Typography variant="h6" sx={{ textDecoration: "underline" }}>
              Read More
            </Typography>
            <ArrowDropDownIcon />
          </Box>
        </Box>
      </HeroContainer>
      <BodyContainer
        sx={{ alignItems: "normal", overflowX: "hidden" }}
        ref={bodyContainerRef}>
        <Carousel />
      </BodyContainer>
    </>
  );
};

export default About;
