/**
 * @copyright 2024 ZohaibMasoud
 * @license Apache-2.0
 */

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const activeBox = useRef(); // Ref for the active box

  const initActiveBox = () => {
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink && activeBox.current) {
      activeBox.current.style.top = activeLink.offsetTop + "px";
      activeBox.current.style.left = activeLink.offsetLeft + "px";
      activeBox.current.style.width = activeLink.offsetWidth + "px";
      activeBox.current.style.height = activeLink.offsetHeight + "px";
    }
  };

  useEffect(() => {
    initActiveBox(); // Initialize active box on mount
    window.addEventListener("resize", initActiveBox); // Update on window resize
    return () => window.removeEventListener("resize", initActiveBox); // Cleanup
  }, []);

  const handleLinkClick = (event) => {
    const currentActive = document.querySelector(".nav-link.active");
    currentActive?.classList.remove("active"); // Remove active class from the previous link
    event.target.classList.add("active"); // Add active class to the clicked link
    initActiveBox(); // Update the active box position
  };

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Reviews", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={`navbar${navOpen ? " active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          onClick={handleLinkClick}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
