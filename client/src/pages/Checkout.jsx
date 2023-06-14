import { Typography } from "@mui/material";
import BodyContainer from "../components/BodyContainer";
import ServicesDisplay from "../components/ServicesDisplay";
const Checkout = () => {
  return (
    <>
      <BodyContainer sx={{ backgroundColor: "#fff" }}>
        <Typography variant="h2" marginBottom="30px">
          Choose a Service
        </Typography>
        <ServicesDisplay price={true} />
      </BodyContainer>
    </>
  );
};

export default Checkout;
