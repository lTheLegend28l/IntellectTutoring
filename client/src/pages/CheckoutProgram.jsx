import { Box, Typography } from "@mui/material";
import BodyContainer from "../components/BodyContainer";
import Program from "../components/Program";
import axios from "axios";

const CheckoutProgram = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/.netlify/functions/create-program-checkout-session", // "http://localhost:3001/create-program-checkout-session"
        {},
        {
          headers: {
            Authorization: `Bearer ${process.env.STRIPE_KEY}`, // Replace with your actual API key
          },
        }
      );
      console.log(response);
      window.location.href = response.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <BodyContainer sx={{ backgroundColor: "#fff" }}>
        <Typography variant="h2">Preview Order</Typography>
        <Box sx={{ marginTop: "20px", width: "100%" }}>
          <Program onSubmit={onSubmit} price={true} />
        </Box>
      </BodyContainer>
    </>
  );
};

export default CheckoutProgram;
