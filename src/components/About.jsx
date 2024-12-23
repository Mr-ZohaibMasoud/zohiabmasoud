/**
 * @copyright 2024 ZohaibMasoud
 * @license Apache-2.0
 */

import React from "react";

const aboutItems = [
  {
    label: "Project done",
    number: 30,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-8 mt-0 rounded-2xl md:p-12 text-current reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! I&apos;m{" "}
            <span className="text-sky-400 font-semibold">Zohaib</span>, a
            proffessional and results-driven web developer specializing in
            creating modern, efficient, and visually stunning websites. With
            expertise in front-end and back-end development, I design and build
            digital solutions tailored to meet your unique needs.Whether you're
            looking to establish an online presence, optimize workflows, or
            enhance user engagement, I&apos;m here to bring your vision to life.{" "}
            <br /> <br />
            <span className="md:pl-[14rem]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let&apos;s
              collaborate to make your next project a success!{" "}
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div className="sm:w-auto w-[60%] mt-0 sm:mt-6" key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="../../logo.png"
              alt="logo"
              width={120}
              height={60}
              className="ml-auto md:max-w-[150px] md:max-h-[150px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
