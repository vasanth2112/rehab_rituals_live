import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import HeaderContainer from "./Components/Header/HeaderContainer.jsx";
import FooterContainer from "./Components/ContactUs/FooterContainer.jsx";
import Tooltip from "@mui/material/Tooltip";
import GalleryContainer from "./Components/Gallery/GalleryContainer.jsx";
import BlogsContainer from "./Components/Blogs/BlogsContainer.jsx";
import BlogContent from "./Components/Blogs/BlogContent.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import SensoryContainer from "./Components/Sensory/SensoryContainer.jsx";
import SensoryHighlight from "./Components/Sensory/SensoryHighlight.jsx";

function App() {
  useEffect(() => {
    if (location.hash === "#blogs") {
      const element = document.getElementById("blogs");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Router>
        <ScrollToTop />

        <Routes>
          {/* Homepage Route */}
          <Route
            path="/"
            element={
              <div className="page-transition-enter">
                <HeaderContainer />
                <SensoryHighlight />
                <BlogsContainer />
                <GalleryContainer />
                <FooterContainer />
              </div>
            }
          />

          {/* Blog Detail Route */}
          <Route
            path="/blog/allblogs"
            element={
              <div className="page-transition-enter">
                <BlogContent />
              </div>
            }
          />

          {/* Sensory Page Route */}
          <Route
            path="/sensory"
            element={
              <div className="page-transition-enter">
                <SensoryContainer />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
