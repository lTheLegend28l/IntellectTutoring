import { Box, Typography } from "@mui/material";
import BodyContainer from "../components/BodyContainer";
import TutoringService from "../components/TutoringService";
import axios from "axios";

const CheckoutTutoring = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/.netlify/functions/create-tutoring-checkout-session", // "http://localhost:3001/create-tutoring-checkout-session"
        {},
        {
          headers: {
            Authorization: `Bearer ${process.env.STRIPE_KEY}`, // Replace with your actual API key
          },
        }
      );
      window.location.href = response.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <BodyContainer sx={{ backgroundColor: "#fff" }}>
        <Typography variant="h2">Preview Order</Typography>
        <Box
          sx={{
            marginTop: "20px",
            width: "100%",
          }}>
          <TutoringService onSubmit={onSubmit} price={true} />
        </Box>
      </BodyContainer>
    </>
  );
};

export default CheckoutTutoring;
