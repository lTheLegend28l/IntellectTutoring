import { Typography } from "@mui/material";
import BodyContainer from "../components/BodyContainer";
import { useEffect } from "react";

const Schedule = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  return (
    <BodyContainer sx={{ backgroundColor: "#fff" }}>
      {/* Calendly widget */}
      <Typography
        variant="h2"
        marginBottom={{ xs: "30px", sm: "30px", md: "0px" }}>
        Schedule Session
      </Typography>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/intellect-tutoring-test"
        style={{ minWidth: "320px", width: "100%", height: "700px" }}
      />
    </BodyContainer>
  );
};

export default Schedule;
