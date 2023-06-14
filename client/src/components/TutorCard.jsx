import { Box, Typography, styled } from "@mui/material";
import CTAButton from "./CTAButton";
import CTATypography from "./CTATypography";

const TutorCardContainer = styled(Box)(({ theme }) => ({
  width: "50vw",
  [theme.breakpoints.down("lg")]: {
    width: "80vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90vw",
    padding: "20px",
  },
  borderRadius: "30px",
  backgroundColor: "#f7f7f7",
  padding: "30px",
}));

const TutorImg = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "150px",
    height: "150px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "110px",
    height: "110px",
  },
  width: "175px",
  height: "175px",
  borderRadius: "50%",
  outline: "solid 4px black",
}));

const TutorCard = (props) => {
  return (
    <TutorCardContainer>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h2" fontWeight="600" marginBottom="10px">
              {props.name}
            </Typography>
            <Typography variant="h4" lineHeight="1.8">
              SAT Score: {props.score} <br />
              Strength: {props.strength} <br />
            </Typography>
          </Box>
          <Box flexGrow="1" />
          <TutorImg src={props.picture} alt={`${props.name}'s picture`} />
        </Box>
        <Box textAlign="left" marginTop="10px">
          <Typography variant="h6">{props.bio}</Typography>
          <CTAButton href="/checkout/tutoring" sx={{ maxWidth: "400px" }}>
            <CTATypography text="Schedule Now" />
          </CTAButton>
        </Box>
      </Box>
    </TutorCardContainer>
  );
};

export default TutorCard;
