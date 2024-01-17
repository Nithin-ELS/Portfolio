import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scrollToTop">
      <button
        aria-label="scroll to top"
        type="button"
        onClick={scrollToTop}
        className={isVisible ? "button-visible" : "button-invisible"}
      >
        <BiArrowFromBottom aria-hidden="true" />
      </button>
    </div>
  );
};

export default ScrollToTop;
