/**
 * @copyright 2024 ZohaibMasoud
 * @license Apache-2.0
 */

import React from "react";
import PropTypes from "prop-types";

const ratings = Array.from({ length: 5 }, () => ({
  icon: "star",
  style: {
    fontVariationSettings: '"FILL" 1',
  },
}));

const ReviewCard = ({ content, name, imgSrc, company, classes }) => {
  return (
    <div
    className={`review-card bg-zinc-800 md:w-auto text-white rounded-xl md:p-4 px-8 shadow-lg flex flex-col items-center text-center ${classes}`}
    style={{ minWidth: "350px", maxWidth: "280px" }}
  >
    {/* Ratings */}
    <div className="ratings flex mb-3 justify-center">
      {ratings.map(({ icon, style }, key) => (
        <span
          className="material-symbols-rounded text-amber-500 mr-1 text-lg"
          style={style}
          key={key}
        >
          {icon}
        </span>
      ))}
    </div>

    {/* Review Text */}
    <div className="mb-4 px-2">
      <p className="review-text text-sm text-zinc-300 leading-relaxed min-h-20">{content}</p>
    </div>

    {/* Reviewer Info */}
    <div className="flex items-center gap-3 mt-4 mb-5">
      <figure className="w-12 h-12 rounded-lg overflow-hidden border-2 border-sky-500">
        <img
          src={imgSrc}
          alt={name}
          loading="lazy"
          className="object-cover w-full h-full"
          width={40}
          height={40}
        />
      </figure>
      <div className="text-left">
        <p className="font-bold text-base text-white">{name}</p>
        <p className="text-sm text-zinc-400">{company}</p>
      </div>
    </div>
  </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ReviewCard;
