/**
 * @copyright 2024 ZohaibMasoud
 * @license Apache-2.0
 */

import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors" +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover " />
      </figure>

      <div className="flex justify-between items-center gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap gap-2 items-center">
            {tags.map((tag, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-500/5 grid items-center rounded-lg px-3"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="w-11 h-11 rounded-lg bg-zinc-500/5 grid place-items-center bg-sky-400 shrink-0 ">
          <span className="" aria-hidden="true">
            <img src="../../arrow-outward.svg" alt="" />
          </span>
        </div>
      </div>

      <a href={projectLink} className="absolute inset-0 " target="_blank"></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
