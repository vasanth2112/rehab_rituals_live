import { useState, useEffect, useRef } from "react";
import "./App.scss";
import HeaderContainer from "./Components/Header/HeaderContainer.jsx";
import AboutUsContainer from "./Components/AboutUs/AboutUsContainer.jsx";
import OurServiceContainer from "./Components/OurServices/OurServiceContainer.jsx";
import OurTeamContainer from "./Components/OurTeam/OurTeamContainer.jsx";
import FooterContainer from "./Components/ContactUs/FooterContainer.jsx";
import Tooltip from '@mui/material/Tooltip';

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

  return (
    <>
      {/* Add ref to HeaderContainer */}
      <div ref={headerRef}>
        <HeaderContainer />
      </div>
      <AboutUsContainer />
      <OurServiceContainer />
      <OurTeamContainer />
      <FooterContainer />
      

      {/* Scroll to Top Button */}
      {showButton && (
        <Tooltip title="Back to Top" placement="top">
          <img
            src="./arrow.png"
            className="scroll-to-top"
            onClick={scrollToTop}
          />
        </Tooltip>
      )}
    </>
  );
}

export default App;
