/**
 * @copyright 2024 ZohaibMasoud
 * @license Apache-2.0
 */

import React from "react";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/Mr-ZohaibMasoud",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zohaib-masoud-747098315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=100085609996411",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zohaib.masoud?igsh=MWl3d3Y0aXl3cnc2dw==",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[16ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <h2 className="reveal-up">
              <a
                href="mailto:zohaibmasoud@gmail.com"
                className="btn btn-primary flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-sky-600 transition duration-300 animate-pulse hover:animate-none"
              >
                <span className="text-zinc-50"> Hire me</span>
                <img
                  src="../../chevron_right.svg"
                  alt="Download CV"
                  className="w-5 h-5"
                />
              </a>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul className="">
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-1">
              <p className="mb-2 reveal-up">Socials</p>

              <ul className="">
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8 border-t border-sky-400">
          <a href="/" className="reveal-up">
            <img src="../../logo.png" alt="Logo" width={150} height={150} />
          </a>
          <p className="text-sm text-zinc-500 reveal-up">
            &copy; 2024
            <span className="text-zinc-200"> Zohiab Masoud</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
