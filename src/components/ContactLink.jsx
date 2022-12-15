import React, { useEffect } from "react";
import { Box, Typography, ThemeProvider } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import { translateAnim } from "../Animjs/common";
import { IconTheme } from "../material UI/IconsTheme";

const ContactLink = () => {
  let firstSectionWrapperAnim = {
    selector: "first-section-container",
    classes: "translate-left",
  };

  let contactIconsAnim = {
    selector: "contact-icons",
    classes: "translate-right",
  };

  useEffect(() => {
    translateAnim(firstSectionWrapperAnim);
    translateAnim(contactIconsAnim);
  }, []);
  return (
    <Box className="contact-link-wrapper">
      <Box className="contact-link-wrap">
        <Box className="first-section-container translate-left">
          <Box className="first-section">
            <ThemeProvider theme={IconTheme}>
              <PhoneIcon sx={{ fontSize: { lg: "40px", xs: "35px" } }} />
            </ThemeProvider>
            <Typography color="white" letterSpacing="1px" fontSize="17px">
              +91-9182289946
            </Typography>
          </Box>
          <Box className="first-section">
            <ThemeProvider theme={IconTheme}>
              <EmailIcon sx={{ fontSize: { lg: "40px", xs: "35px" } }} />
            </ThemeProvider>
            <Typography color="white" letterSpacing="1px" fontSize="17px">
              thapaswikonjarla5@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box className="contact-icons translate-right">
          <a>
            <ThemeProvider theme={IconTheme}>
              <GitHubIcon sx={{ fontSize: "40px" }} />
            </ThemeProvider>
          </a>
          <a>
            <ThemeProvider theme={IconTheme}>
              <LinkedInIcon sx={{ fontSize: "40px" }} />
            </ThemeProvider>
          </a>
          <a>
            <ThemeProvider theme={IconTheme}>
              <TwitterIcon sx={{ fontSize: "40px" }} />
            </ThemeProvider>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactLink;
