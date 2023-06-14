import { Typography } from "@mui/material";
import BodyContainer from "../components/BodyContainer";
import ServicesDisplay from "../components/ServicesDisplay";

const Services = () => {
  return (
    <>
      <BodyContainer sx={{ backgroundColor: "#fff" }}>
        <Typography variant="h2" marginBottom="30px">
          Our Services
        </Typography>
        <ServicesDisplay price={true} />
      </BodyContainer>
    </>
  );
};

export default Services;
