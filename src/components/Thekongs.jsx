import React from "react";
import bigkong from '../assets/image/big-kong.png'
import kongred from "../assets/image/kong-red.png";
import konggun from "../assets/image/kong-gun.png";
import kongwhite from "../assets/image/kong-white.png";
import kongPrince from "../assets/image/kong-prince.png";
import kongcat from "../assets/image/kong-cat.png";
import HeMan from "../assets/image/He-Man.png";
import Anonymous from "../assets/image/Anonymous.png";
import Pac from "../assets/image/2pac.png";
import Elvis from "../assets/image/Elvis.png";

function Thekongs() {
  return (
    <>
      <div className="min-h-[1124px] w-full bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
        <div className="absolute w-[182px] lg:w-[364px] h-[182px] lg:h-[364px] rounded-[50%] bg-[#FDDA60] blur-[180px] top-[10%] lg:top-[34%]"></div>
        <h1 className="pt-[44px] text-white text-center font-azo text-[47px] md:text-[64px] not-italic font-normal leading-[108.744%]">
          THE KONGS
        </h1>
        <img
          className="max-w-[786px] translate-y-[-70px] w-full relative z-[2]"
          src={bigkong}
          alt="golden ape"
        />
        <div className="hidden lg:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-0 left-[-2%] overflow-hidden">
          <img
            className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
            src={kongred}
            alt="brown ape"
          />
        </div>
        <div className="hidden lg:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[19%] left-[4%] overflow-hidden">
          <img
            className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
            src={konggun}
            alt="ape"
          />
        </div>
        <div className="hidden lg:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[38%] left-[12%] overflow-hidden">
          <img
            className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
            src={kongwhite}
            alt="ape"
          />
        </div>
        <div className="hidden lg:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[57%] left-[4%] overflow-hidden">
          <img
            className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
            src={kongPrince}
            alt="ape"
          />
        </div>
        <div className="hidden lg:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] bottom-[8%] left-[-2%] overflow-hidden">
          <img
            className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
            src={kongcat}
            alt="brown ape"
          />
        </div>
        <div className="hidden lg:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-0 right-[-2%] shadow-[0_0_15px_0_#FDDA60] overflow-hidden">
          <img
            className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
            src={HeMan}
            alt="brown ape"
          />
        </div>
        <div className="hidden lg:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-[19%] right-[4%] shadow-[0_0_15px_0_#FDDA60] overflow-hidden">
          <img
            className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
            src={Anonymous}
            alt="ape"
          />
        </div>
        <div className="hidden lg:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] top-[38%] right-[12%] shadow-[0_0_15px_0_#FDDA60] overflow-hidden">
          <img
            className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
            src={Pac}
            alt="ape"
          />
        </div>
        <div className="hidden lg:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] top-[57%] right-[4%] overflow-hidden">
          <img
            className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
            src={Elvis}
            alt="ape"
          />
        </div>
        <div className="hidden lg:block absolute w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] bottom-[8%] right-[-2%] overflow-hidden">
          <img
            className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
            src={kongred}
            alt="brown ape"
          />
        </div>

        <div className="flex flex-wrap justify-center block lg:hidden gap-3">
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] mt-3 overflow-hidden">
            <img
              className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
              src={kongred}
              alt="brown ape"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] mt-3 overflow-hidden">
            <img
              className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
              src={konggun}
              alt="ape"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] mt-3 overflow-hidden">
            <img
              className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
              src={kongwhite}
              alt="ape"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] mt-3 overflow-hidden">
            <img
              className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
              src={kongPrince}
              alt="ape"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] shadow-[0_0_15px_0_#FDDA60] mt-3 overflow-hidden">
            <img
              className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
              src={kongcat}
              alt="brown ape"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] mt-3 shadow-[0_0_15px_0_#FDDA60] overflow-hidden">
            <img
              className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
              src={HeMan}
              alt="brown ape"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] mt-3 shadow-[0_0_15px_0_#FDDA60] overflow-hidden">
            <img
              className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
              src={Anonymous}
              alt="ape"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 border-solid border-[#FDDA60] mt-3 shadow-[0_0_15px_0_#FDDA60] overflow-hidden">
            <img
              className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
              src={Pac}
              alt="ape"
            />
          </div>
          <div className="w-[180px] h-[180px] rounded-[8px] border-4 shadow-[0_0_15px_0_#FDDA60]  border-[#FDDA60] mt-3 overflow-hidden">
            <img
              className="rounded-[8px] border-none hover:scale-[1.1] duration-300"
              src={Elvis}
              alt="ape"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Thekongs;
