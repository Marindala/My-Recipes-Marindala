import { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
//import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
//import Logo from "../../images/logo.svg";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
      
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink
            to={"/"}
            className={window.location.pathname === "/" ? "active" : ""}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/menu"}
            className={
              window.location.pathname.includes("/menu") ? "active" : ""
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={window.location.pathname === "/about" ? "active" : ""}
          >
            Marindala
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={window.location.pathname === "/contact" ? "active" : ""}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {/* <img src={Logo} alt="logo" height={"70"} width="250" /> */}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink
                    to={"/"}
                    className={window.location.pathname === "/" ? "active" : ""}
                  >
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/menu"}
                    className={
                      window.location.pathname.includes("/menu") ? "active" : ""
                    }
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    className={
                      window.location.pathname === "/about" ? "active" : ""
                    }
                  >
                    Marindala
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/contact"}
                    className={
                      window.location.pathname === "/contact" ? "active" : ""
                    }
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
