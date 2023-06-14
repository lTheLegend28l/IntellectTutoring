import { Box, Typography } from "@mui/material";
import ServiceContainer from "./ServiceContainer";
import CTAButton from "./CTAButton";
import CTATypography from "./CTATypography";
import servicesImage1 from "../assets/images/servicesImage1.svg";

const Program = ({ onSubmit, price }) => {
  return (
    <ServiceContainer
      sx={{
        backgroundImage: `url(${servicesImage1})`,
        width: { xs: "80%", sm: "80%", md: "40%" },
        height: { xs: "425px", sm: "425px", md: "580px" },
        marginBottom: { xs: "40px", sm: "40px", md: "0px" },
      }}>
      <Typography variant="h2" fontWeight="600" sx={{ margin: "20px 0" }}>
        Score Boost
      </Typography>
      <Typography variant="h5" lineHeight="1.75">
        <strong>Raise your score by 150 points Guaranteed</strong> * <br />
        8 Week Program <br />
        Quickly learn the best strategies <br />
        Bonus custom testing resources
      </Typography>
      <Box sx={{ flexGrow: "1" }} />
      {price ? (
        <>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography variant="h3" fontWeight="700">
                $985
              </Typography>
            </Box>
            <Box marginLeft="10px">
              <Typography variant="h6" fontWeight="700" lineHeight="1.4">
                * Money Back <br /> Guarantee
              </Typography>
              <Typography
                variant="h7"
                sx={{
                  display: { xs: "none", sm: "none", md: "inline-block" },
                }}>
                If your current score is 1200 or less
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h7"
            sx={{
              display: { xs: "inline-block", sm: "inline-block", md: "none" },
            }}>
            If your current score is 1200 or less
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="h5" fontWeight="700">
            * Money Back Guarantee
          </Typography>
          <Typography variant="h6">
            If your current score is 1200 or less
          </Typography>
        </>
      )}
      {onSubmit ? (
        <Box component="form" onSubmit={onSubmit} sx={{ width: "100%" }}>
          <CTAButton type="submit" sx={{ marginBottom: "20px", width: "100%" }}>
            <Typography variant="h4" fontWeight="600">
              Checkout
            </Typography>
          </CTAButton>
        </Box>
      ) : (
        <CTAButton href="/checkout/program" sx={{ marginBottom: "20px" }}>
          <CTATypography text="Start Now" />
        </CTAButton>
      )}
    </ServiceContainer>
  );
};

export default Program;
