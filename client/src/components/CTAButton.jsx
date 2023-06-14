import { Button, styled } from "@mui/material";

const CTAButton = styled(Button)({
  backgroundColor: "white",
  borderRadius: "5px",
  padding: "15px 25px",
  textTransform: "none",
  marginTop: "20px",
  transition: "outline-width .2s ease-in-out",
  outline: "solid 0px rgba(255, 255, 255, 0.3)",
  color: "black",

  "&:hover": {
    backgroundColor: "white",
    outlineWidth: "10px",
  },
});

export default CTAButton;
