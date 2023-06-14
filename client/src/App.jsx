import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Tutors from "./pages/Tutors";
import Services from "./pages/Services";
import Checkout from "./pages/Checkout";
import CheckoutTutoring from "./pages/CheckoutTutoring";
import CheckoutProgram from "./pages/CheckoutProgram";
import Schedule from "./pages/Schedule";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Global, css } from "@emotion/react";
import MongolianBaiti from "./assets/fonts/monbaiti.ttf";

// xs, : 0px.
// sm, : 600px.
// md, : 900px.
// lg, : 1200px.
// xl, : 1536px.

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#ffffff",
      },
    },
    typography: {
      fontFamily: "Montserrat",
      h1: {
        fontWeight: "600",
        fontSize: "6rem",
        "@media (max-width: 899px)": {
          fontSize: "4rem",
        },
        "@media (max-width: 599px)": {
          fontSize: "3rem",
        },
      },
      h2: {
        fontWeight: "400",
        fontSize: "3.75rem",
        "@media (max-width: 899px)": {
          fontSize: "3rem",
        },
        "@media (max-width: 599px)": {
          fontSize: "2.5rem",
        },
      },
      h3: {
        fontWeight: "400",
        fontSize: "3rem",
        "@media (max-width: 899px)": {
          fontSize: "2.75rem",
        },
        "@media (max-width: 599px)": {
          fontSize: "2.5rem",
        },
      },
      h4: {
        fontSize: "2.15rem",
        "@media (max-width: 899px)": {
          fontSize: "1.75rem",
        },
        "@media (max-width: 599px)": {
          fontSize: "1.25rem",
        },
      },
      h5: {
        fontSize: "1.5rem",
        "@media (max-width: 899px)": {
          fontSize: "1.25rem",
        },
        "@media (max-width: 599px)": {
          fontSize: "1rem",
        },
      },
      h6: {
        fontSize: "1.3rem",
        "@media (max-width: 899px)": {
          fontSize: "1.15rem",
        },
        "@media (max-width: 599px)": {
          fontSize: "1rem",
        },
      },
    },
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            @font-face {
              font-family: "Mongolian Baiti";
              src: url(${MongolianBaiti}) format("ttf");
              font-weight: normal;
              font-style: normal;
            }
          `}
        />
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/tutors" element={<Tutors />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/tutoring" element={<CheckoutTutoring />} />
              <Route path="/checkout/program" element={<CheckoutProgram />} />
              <Route path="/schedule" element={<Schedule />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
