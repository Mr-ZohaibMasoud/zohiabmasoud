/**
 * @copyright 2024 ZohaibMasoud
 * @license Apache-2.0
 */

import React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ReviewCard from "./ReviewCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    imgSrc: "/people-1.jpg",
    company: "PixelForge",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Akash Hanif",
    imgSrc: "/people-2.jpg",
    company: "for personal Project",
  },
  {
    content:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Muhammad Masoud",
    imgSrc: "/people-3.jpg",
    company: "For Startup",
  },
  {
    content:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Hafiz Ishtaiq",
    imgSrc: "/people-4.jpg",
    company: "No Company",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "M.Sulman Khan",
    imgSrc: "/people-5.jpg",
    company: "Individual",
  },
  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Jonathan",
    imgSrc: "/people-6.jpg",
    company: "Skyline Digital",
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        scrub: true,
        markers: false,
        start: "top 89%",
        end: "400% 80%",
      },
      x: -880,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
  });
  return (
    <section id="reviews" className="section">
      <div className="container overflow-hidden">
        <h2 className="headline-2 mb-8 reveal-up">What our clients say</h2>
        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key} // Added key here
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
