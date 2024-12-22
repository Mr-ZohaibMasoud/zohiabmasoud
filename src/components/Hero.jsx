/**
 * @copyright 2024
 * @license Apache-2.0
 */

import React from "react";
import smallImage from "../../sm-img.jpg";
import cvIcon from "../../download.svg";
import arrowIcon from "../../arrow_downward.svg";
import mainPhoto from "../../mainPhoto.png";

const Hero = () => {
  return (
    <section className="sm:px-20 px-8 pt-24 pb-1 lg:p-25 lg:px-40" id="home">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-16">
        {/* Left Section */}
        <div>
          {/* Availability */}
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src={smallImage}
                width={40}
                height={40}
                alt="Zohaib Masoud"
                className="image-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-sm text-zinc-400 tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available Now!
            </div>
          </div>

          {/* Headline */}
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] mt-8 mb-12 lg:mb-12 animate-pulse">
            Building Scalable Modern <br />
            Websites for the Future
          </h2>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="btn btn-primary flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-sky-400 transition duration-300 animate-pulse hover:animate-none"
              download
            >
              <img src={cvIcon} alt="Download CV" className="w-5 h-5" />
              <span>Download CV</span>
            </a>
            <a
              href="#about"
              className="btn-outline flex items-center gap-2 border border-sky-500 text-sky-500 px-6 py-3 rounded-lg hover:bg-sky-400 hover:text-white transition duration-300"
            >
              <span>Scroll Down</span>
              <img src={arrowIcon} alt="Arrow Down" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:block ml-24 relative w-64 max-w-[480px]">
          {/* Background with Blur */}
          <div className="absolute inset-0 bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-60% rounded-[20px] blur animate-pulse"></div>

          {/* Foreground Image */}
          <figure className="relative w-64 max-w-[480px] rounded-[20px] overflow-hidden">
            <img
              src={mainPhoto}
              width={300}
              height={40}
              alt="Zohaib Masoud"
              className="object-cover"
            />
          </figure>
          <div className=" absolute bottom bg-zinc-900 h-28 w-80 translate-x-[-25px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
