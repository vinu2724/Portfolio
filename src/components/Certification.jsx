import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { certificates } from "../constants";
import { useMediaQuery } from "@mui/material";
const VerticalScrollCarousel = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-1%", "-95%"]);

  return (
    <section
      id="#certification"
      ref={targetRef}
      className=" bg-white dark:bg-[#191919]  relative  bg-transparent my-8"
    >
      <div className="sticky top-0  flex flex-col items-center overflow-hidden ">
        <div className="certificates ">
          {isNonMobileScreens && (
            <div className="my-8 font-semibold text-2xl px-16 happy-font ">
              My certificates represent a testament to my dedication and
              expertise in various fields. Whether it's academic achievements,
              professional qualifications, or specialized training, each
              certificate symbolizes my commitment to continual learning and
              growth.
            </div>
          )}
        </div>
        <div className="flex md:justify-center justify-center flex flex-col w-full gap-0">
          <div className=" flex  p-1 flex-row md:gap-2">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="box md:w-full md:h-52 w-40 h-40 object-cover rounded-md overflow-hidden shadow-lg"
              >
                <img
                  src={certificate.img}
                  alt="img"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* <div className="  flex p-1 flex-row  mt-20 md:gap-4">
            {certificates2.map((certificate, index) => (
              <div
                key={index}
                className="box md:w-full md:h-52 w-40 h-40 object-cover rounded-md overflow-hidden shadow-lg"
              >
                <img
                  src={certificate.img}
                  alt="img"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

const Certification = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <div className=" ">
      {!isNonMobileScreens && (
        <div className="flex items-center justify-center happy-font font-semibold text-xs md:text-2xl px-2 md:px-16 ">
          My certificates represent a testament to my dedication and expertise
          in various fields. Whether it's academic achievements, professional
          qualifications, or specialized training, each certificate symbolizes
          my commitment to continual learning and growth
        </div>
      )}
      <VerticalScrollCarousel />
    </div>
  );
};

export default Certification;
