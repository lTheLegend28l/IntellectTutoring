import { Container, styled } from "@mui/material";

const ServiceContainer = styled(Container)({
  textAlign: "left",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  color: "white",
  borderRadius: "10px",
  width: { xs: "80%", sm: "80%", md: "40%" },
  height: { xs: "425px", sm: "425px", md: "580px" },
});

export default ServiceContainer;
