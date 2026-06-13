// src/components/ScrollToTop.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Scroll to top instantly on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold before showing button: on home page (/) we wait till scroll > 400, on others > 300
      const threshold = pathname === "/" ? 400 : 300;
      if (window.scrollY > threshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set correct state on mount/refresh
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <img
          src="/arrow.png"
          className="scroll-to-top"
          onClick={scrollToTop}
          alt="scroll-to-top"
          style={{
            zIndex: 100000,
          }}
        />
      )}
    </>
  );
}
