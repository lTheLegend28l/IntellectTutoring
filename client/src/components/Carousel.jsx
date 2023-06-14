import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardImage1 from "../assets/images/cardImage1.svg";
import CardImage2 from "../assets/images/cardImage2.svg";
import CardImage3 from "../assets/images/cardImage3.svg";

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f7f7f7",
  borderRadius: "20px",
  width: "70% !important",
  height: "fit-content",
  [theme.breakpoints.down("md")]: {
    minHeight: "550px",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "600px",
  },
  margin: "40px 0",
  padding: "20px",
  color: "black",
}));

const CardImg = styled("img")(({ theme }) => ({
  borderRadius: "20px",
  width: "220px",
  [theme.breakpoints.down("md")]: {
    width: "175px",
    margin: "0",
    alignSelf: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "125px",
  },
  height: "auto",
  marginLeft: "20px",
  marginTop: "20px",
  marginBottom: "20px",
  marginRight: "40px",
}));

const carouselItems = [
  {
    id: 3,
    title: "Tutors with INTELLECT",
    content:
      "Unlock your true potential with our exceptional tutors who embody INTELLECT. Handpicked from the top 1% of academics, our mentors bring unrivaled expertise to guide you towards academic excellence and personal growth. Embrace the opportunity to learn from the best of the best and unleash your full capabilities.",
    imgSrc: CardImage1,
  },
  {
    id: 2,
    title: "Results Based Programs",
    content:
      "Experience the power of our Score Boost program designed to drive your success, backed by a guarantee of at least a 200 point increase within just 8 weeks! We are committed to making your dream score our shared goal. Trust us to provide the support and resources you need to achieve remarkable results and reach new heights in your academic journey.",
    imgSrc: CardImage2,
  },
  {
    id: 1,
    title: "Personalized Learning",
    content:
      "Unlock your true potential with our Personalized 1-to-1 Format. Our tutoring revolves entirely around you, unlike crowded classrooms, taking into consideration your unique strengths and weaknesses. We are dedicated to helping you effortlessly achieve your desired score. With each session tailored to your individual needs, you'll experience the power of focused attention and personalized guidance.",
    imgSrc: CardImage3,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: null,
  prevArrow: null,
};

const Carousel = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          margin: {
            xs: "20px 0",
            sm: "20px 0",
            md: "80px 0 40px 0",
          },
        }}>
        The INTELLECT Difference
      </Typography>
      <Slider
        {...settings}
        style={{ textAlign: "center" }}
        autoplay={true}
        autoplaySpeed={6000}>
        {carouselItems.map((item) => (
          <CardContainer key={item.id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}>
              <CardImg alt="card Image" src={item.imgSrc} />
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h4" mt="10px">
                  {item.title}
                </Typography>
                <Typography variant="h6" mt="10px" fontWeight="400">
                  {item.content}
                </Typography>
              </Box>
            </Box>
          </CardContainer>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
