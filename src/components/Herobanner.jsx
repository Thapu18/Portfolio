import React from "react";

import { Box, Typography, Button, ThemeProvider, Icon } from "@mui/material";
import { BtnTheme } from "../material UI/ButtonTheme";
import { IconTheme } from "../material UI/IconsTheme";
import {
  HeroIntroTypography,
  HeroSubHeadingTypo,
} from "../material UI/typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import { translateAnim } from "../Animjs/common";
//import heroImage from "../assets/images/portrait-hero.webp";
import heroImage from "../assets/images/ezgif.com-gif-maker-removebg-preview.png";
import { useState, useEffect } from "react";

const Herobanner = () => {
  let heroIntroObj = {
    selector: "hero-intro",
    classes: "translate-left",
  };

  let heroBannerImgWrap = {
    selector: "hero-image-wrapper",
    classes: "translate-right",
  };

  useEffect(() => {
    translateAnim(heroBannerImgWrap);
    translateAnim(heroIntroObj);
  }, []);
  return (
    <>
      <Box
        className="hero-banner-wrapper"
        id="hero-banner-wrapper"
        marginTop="100px"
      >
        <Box className="hero-banner">
          <Box
            className="hero-intro translate-left"
            gap="30px"
            marginTop="-20px"
          >
            <ThemeProvider theme={HeroIntroTypography}>
              <Typography
                sx={{
                  fontSize: { sm: "40px", xs: "24px" },
                }}
              >
                Hello! I'm
              </Typography>
              <Typography
                sx={{
                  fontSize: { sm: "55px", xs: "38px" },
                  marginTop: { sm: "-30px", xs: "-26px" },
                }}
              >
                Thapaswi Konjarla
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={HeroSubHeadingTypo}>
              <Typography>React web developer</Typography>
            </ThemeProvider>
            <ThemeProvider theme={BtnTheme}>
              <Button>Get Resume</Button>
            </ThemeProvider>
          </Box>
          <Box className="hero-image-wrapper translate-right">
            <Box component="img" className="hero-image" src={heroImage} />
            <Box className="half-circle-image"></Box>
            <Box className="social-icons">
              <a className="github" href="https://github.com/Thapu18">
                <ThemeProvider theme={IconTheme}>
                  <GitHubIcon className="github-icon" />
                </ThemeProvider>
              </a>
              <a
                className="linkdin"
                href="https://www.linkedin.com/in/thapaswi-konjarla/"
              >
                <ThemeProvider theme={IconTheme}>
                  <LinkedInIcon className="linkdin-icon" />
                </ThemeProvider>
              </a>
              <a className="twitter" href="https://github.com/Thapu18">
                <ThemeProvider theme={IconTheme}>
                  <TwitterIcon className="twitter-icon" />
                </ThemeProvider>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="top-left"></Box>
    </>
  );
};

export default Herobanner;
