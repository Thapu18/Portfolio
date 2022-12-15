import React from "react";
import Navbar from "./components/Navbar";
import Herobanner from "./components/Herobanner";
import Services from "./components/Services";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import { Browse }
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box } from "@material-ui/core";

import "./scss/main.css";
//import Blog from "./components/Blog";

const App = () => {
  return (
    <Router>
      {/* <Routes> */}
      <Box className="main-wrapper">
        <Navbar />
        <Herobanner />
        <Services />
        <Skills />
        {/* <Projects/>*/}
        {/*<Blog/>*/}
        <Contact />
      </Box>
      {/* </Routes> */}
    </Router>
  );
};

export default App;
