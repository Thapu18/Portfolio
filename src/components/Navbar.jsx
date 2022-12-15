import React, { useState } from "react";

import { Stack, Box, Typography, Button, ThemeProvider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { logoTypography } from "../material UI/typography";
import { BtnTheme } from "../material UI/ButtonTheme";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  const [sideNavbarOpen, setSideNavbarOpen] = useState(false);
  const html = document.querySelector("html");

  sideNavbarOpen
    ? (html.style.overflowY = "hidden")
    : (html.style.overflowY = "auto");

  return (
    <>
      <Box className="navbar-wrapper">
        <Box className="navbar">
          <Box>
            <ThemeProvider theme={logoTypography}>
              <Typography
                sx={{
                  fontSize: { lg: "32px", md: "28px", sm: "24px", xs: "20px" },
                }}
              >
                Thapaswi Konjarla
              </Typography>
            </ThemeProvider>
          </Box>
          <Box className="nav-items-wrapper">
            <Box className="nav-menu">
              <Stack direction="row" spacing={8}>
                <a href="#hero-banner-wrapper" className="nav-link">
                  Home
                </a>
                <a href="#services-wrapper" className="nav-link">
                  Services
                </a>
                <a href="#skills-wrapper" className="nav-link">
                  Skills
                </a>
                {/*    <a href="#project-wrapper" className="nav-link">
                  Work
                </a>
                <a href="#blog-wrapper" className="nav-link">
                  Blog
              </a>*/}
              </Stack>
            </Box>
            <Box>
              <ThemeProvider theme={BtnTheme}>
                <a href="#contact-wrapper">
                  <Button>Contact me</Button>
                </a>
              </ThemeProvider>
            </Box>
          </Box>
          <Box component="span" className="menu-icon">
            <MenuIcon
              onClick={() => setSideNavbarOpen(true)}
              sx={{
                color: "var(--color-white)",
                fontSize: "29px",
                "&:hover": {
                  color: "var(--light-whiteColor)",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <SideNavbar
        NavbarOpen={sideNavbarOpen}
        setSideNavbarOpen={setSideNavbarOpen}
      />
    </>
  );
};

export default Navbar;
