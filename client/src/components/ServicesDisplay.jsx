import { Container } from "@mui/material";
import Program from "./Program";
import TutoringService from "./TutoringService";
const ServicesDisplay = ({ price }) => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: " row" },
        }}>
        <Program price={price} />
        <TutoringService price={price} />
      </Container>
    </>
  );
};

export default ServicesDisplay;
