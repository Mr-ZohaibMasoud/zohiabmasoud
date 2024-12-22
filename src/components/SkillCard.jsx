/**
 * @copyright 2024 ZohaibMasoud 
 * @license Apache-2.0
*/

import React from "react";
import propTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={
        "flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group " +
        classes
      }
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group group-hover:bg-zinc-900 transition-colors">
        <img src={imgSrc} alt={label} width={32} height={32} />
      </figure>
      <div>
          <h3 className="headline-3">{label}</h3>
          <p className="text-zinc-400 text-sm ">{desc}</p>
        </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  desc: propTypes.string.isRequired,
  classes: propTypes.string,
};

export default SkillCard;
