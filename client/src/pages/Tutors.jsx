import { Typography } from "@mui/material";
import BodyContainer from "../components/BodyContainer";
import TutorCard from "../components/TutorCard";
import AlexPicture from "../assets/images/Alex.svg";

const Tutors = () => {
  return (
    <>
      <BodyContainer sx={{ backgroundColor: "#fff" }}>
        <Typography variant="h2" sx={{ marginBottom: "30px" }}>
          Our Tutors
        </Typography>
        <TutorCard
          name="Alex"
          picture={AlexPicture}
          score="1570"
          strength="Math"
          bio="Alex has never missed a math question on the SAT."
        />
      </BodyContainer>
    </>
  );
};

export default Tutors;
