/**
 * @copyright 2024 ZohaibMasoud
 * @license Apache-2.0
 */

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const activeBox = useRef(); // Ref for the active box
  const sections = useRef([]); // Ref to store all section elements

  const initActiveBox = () => {
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink && activeBox.current) {
      activeBox.current.style.top = `${activeLink.offsetTop}px`;
      activeBox.current.style.left = `${activeLink.offsetLeft}px`;
      activeBox.current.style.width = `${activeLink.offsetWidth}px`;
      activeBox.current.style.height = `${activeLink.offsetHeight}px`;
    }
  };

  useEffect(() => {
    const updateActiveLink = (entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`
        );

        if (entry.isIntersecting) {
          document
            .querySelector(".nav-link.active")
            ?.classList.remove("active");
          link?.classList.add("active");
          initActiveBox();
        }
      });
    };

    const observer = new IntersectionObserver(updateActiveLink, {
      root: null,
      threshold: 0.2,
      rootMargin: "0px 0px -50% 0px", // Trigger when section enters top half of viewport
    });

    // Wait for sections to be ready
    const initializeSections = () => {
      sections.current = navItems.map(({ link }) => document.querySelector(link));
      sections.current.forEach((section) => {
        if (section) observer.observe(section);
      });
    };

    initializeSections();
    window.addEventListener("resize", initActiveBox);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", initActiveBox);
    };
  }, []); // Empty dependency array ensures initialization only happens once

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
