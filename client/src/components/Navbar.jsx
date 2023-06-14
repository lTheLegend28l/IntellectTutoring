import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoSrc from "../assets/images/logo.svg";

const NavbarText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  textDecoration: "none",
  color: "black",
  marginRight: "40px",
  alignItems: "center",

  "&:after": {
    content: "''",
    width: "0%",
    transition: "width .25s ease-out",
  },

  "&:hover": {
    transform: "translateY(1px)",
    "&:after": {
      borderBottom: "2px solid",
      width: "100%",
      display: "block",
      margin: "0 auto",
    },
  },
}));

const Logo = styled("img")({
  width: 250,
  height: "auto",
});

const NavbarCTAButton = styled(Button)({
  borderRadius: "5px",
  textTransform: "none",
  transition: "outline-width .2s ease-in-out",
  outline: "solid 0px rgba(177, 177, 177, 0.3)",

  "&:hover": {
    outlineWidth: "5px",
  },
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{ flexGrow: 1, display: { xs: "flex", sm: "flex", md: "none" } }}
        />
        <Box
          to="/"
          component={Link}
          sx={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
          <Logo src={LogoSrc} alt="Intellect Tutoring Logo" />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <NavbarText variant="h6" to="/tutors" component={Link}>
            Tutors
          </NavbarText>
          <NavbarText variant="h6" to="/services" component={Link}>
            Services
          </NavbarText>
          <NavbarText variant="h6" to="/about" component={Link}>
            About
          </NavbarText>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
            }}>
            <IconButton color="inherit" aria-label="menu" onClick={toggleMenu}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer
              anchor="right"
              open={isMenuOpen}
              onClose={toggleMenu}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "250px",
                },
              }}>
              <List>
                <ListItem button component={Link} to="/tutors">
                  <ListItemText primary="Tutors" />
                </ListItem>
                <ListItem button component={Link} to="/services">
                  <ListItemText primary="Services" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button component={Link} to="/checkout">
                  <Typography fontWeight="500">Start Now</Typography>
                </ListItem>
              </List>
            </Drawer>
          </Box>
          <NavbarCTAButton
            href="/checkout"
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
            }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "black" }}>
              Start Now
            </Typography>
          </NavbarCTAButton>
          <Box />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
