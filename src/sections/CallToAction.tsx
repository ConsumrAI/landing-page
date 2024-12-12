"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/cog.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const handleJoinWaitlistClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeYGyRhyOUBlay63K-shFmf7hM9tZSiRzm-9FrJlBA1V_y-Qg/viewform?usp=dialog", "_blank");
  };

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title py-2">Ready to turn insights into growth?</h2>
          <p className="section-description mt-5">
            Unlock the power of customer insights with our AI-driven platform. Get actionable recommendations, monitor reviews, and schedule detailed reports - all in one place.
          </p>
          <p className="section-description mt-5">
            Get insights 3x faster than traditional analysis methods.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary text-xl px-5" onClick={handleJoinWaitlistClick}>First 50 waitlist members get 50% lifetime discount!</button>
          {/* <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button> */}
        </div>
      </div>
    </section>
  );
};
