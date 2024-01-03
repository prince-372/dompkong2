import React from "react";
import secthree from "../assets/image/sec-three-img.png";

const About = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-3 flex flex-wrap pt-5 md:pt-[129px]">
      <div data-aos="flip-left" data-aos-once="true" className=" w-full md:w-1/2 justify-center flex flex-col ">
        <h2 className="text-[64px] font-normal leading-[108%] text-white font-azo">
          About
        </h2>
        <p className="text-base font-normal text-white max-w-[506px] font-Montserrat">
          Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet
          et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta
          , adipiscing sed mus diam amet, ac sed tellus.{" "}
        </p>
      </div>
      <div className=" w-full md:w-1/2 relative">
    <img data-aos="flip-left" data-aos-once="true" className="w-full" src={secthree} alt="secthree" />
    <div className="w-[216px] h-[216px] bg-[#FDDA60] blur-[131px] absolute bottom-2 z-[-2] left-[23%] hidden md:block"></div>
      </div>
    </div>
  );
};

export default About;
