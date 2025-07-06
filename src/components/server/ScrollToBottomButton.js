import React, { useEffect, useState } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

export default function ScrollToBottomButton() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // If you are within 1 viewport height from the top
      if (window.scrollY < window.innerHeight) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };

    // Initialize state on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (atTop) {
      // Scroll to bottom
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    } else {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

   return (
    <button
      className="scroll-to-bottom"
      onClick={handleClick}
    >
      {atTop ? <FiArrowDown /> : <FiArrowUp />}
    </button>
  );
}
