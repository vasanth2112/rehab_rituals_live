import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    // Configure Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60px 0px", // Trigger when element is 60px inside viewport for better visual timing
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target); // Unobserve once animated in
        }
      });
    }, observerOptions);

    // Target elements with transition base classes
    const selector = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
    const revealElements = document.querySelectorAll(selector);

    revealElements.forEach((el) => {
      if (!el.classList.contains("revealed")) {
        observer.observe(el);
      }
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }); // Run on every render/update to capture dynamically rendered elements
}
