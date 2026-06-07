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

function App() {
  const [showButton, setShowButton] = useState(false);
  const headerRef = useRef(null); // Reference to HeaderContainer

  // Scroll event listener to toggle the button visibility based on HeaderContainer height
  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the HeaderContainer
      const headerHeight = headerRef.current?.offsetHeight || 0;

      // Show the button only after scrolling past the HeaderContainer
      if (window.pageYOffset > headerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call the handler once to ensure correct initial state
    handleScroll();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
                <div ref={headerRef}>
                  <HeaderContainer />
                </div>
                <BlogsContainer />
                <GalleryContainer />
                <FooterContainer />
                {showButton && (
                  <Tooltip title="Back to Top" placement="top">
                    <img
                      src="./arrow.png"
                      className="scroll-to-top"
                      onClick={scrollToTop}
                      alt="scroll-to-top"
                    />
                  </Tooltip>
                )}
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
