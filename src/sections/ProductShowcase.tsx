"use client";
import productImage from "@/assets/dashboard.png";
import starImage from "@/assets/star_blue.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import painpointsImage from "@/assets/painpoints.png";

const pricingTiers = [
  {
    title: "1. Connect Sources",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Automatically gather feedback from 25+ sources, including reviews, social media mentions, and customer interactions.",
      "Get real-time updates with smart filtering to focus on what matters most.",
      // "2GB storage",
      // "Integrations",
      // "Basic support",
    ],
  },
  {
    title: "2. Gain Insights",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Understand your audience with sentiment analysis and keyword tracking.",
      "Identify trends, uncover pain points, and compare performance over time.",
      // "50GB storage",
      // "Integrations",
      // "Priority support",
      // "Advanced support",
      // "Export support",
    ],
  },
  {
    title: "3. Make Decisions",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Receive tailored action plans powered by AI. Address issues, amplify strengthsm, and seize new opportunities.",
      "Download reports and collaborate with your team to drive results.",
    ],
  },
];

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          {/* <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div> */}
          <h2 className="section-title mt-5">
            A smarter way to understand your customers
          </h2>
          <p className="section-description mt-5">
            Streamline feedback collection, gain insights, and accelerate growth with data-driven recommendations for better decision making.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10 shadow-2xl shadow-purple-800" />
          <motion.img
            src={starImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-44"
            style={{
              translateY,
            }}
          />
        </div>

        <div className="section-heading mt-28">
          <h2 className="section-title">How it works</h2>
          {/* <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p> */}
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 md:flex-row md:items-start md:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }, index) => (
              <div
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
                key={index}
              >
                <div key={index} className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/75",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                </div>
                <ul className="flex flex-col lg:w-64 gap-5 mt-1">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-4">
                      {/* <ArrowRight className="h-6 w-6" /> */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
        <Image src={painpointsImage} alt="Product Image" className="mt-20 shadow-2xl shadow-purple-800" />
      </div>
    </section>
  );
};
