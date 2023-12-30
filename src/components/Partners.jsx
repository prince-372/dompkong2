import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/image/img-1.png";
import img2 from "../assets/image/img-2.png";
import img3 from "../assets/image/img-3.png";
import img4 from "../assets/image/img-4.png";

function Section6() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    easing: 'linear',
    speed: '5000',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#0A0A0A]">
        <div className="max-w-[1164px] px-3 mx-auto py-6">
          <h2 className="text-white text-center font-azo text-[50px] sm:text-[64px] not-italic font-normal leading-[108.744%] pb-[52px]">
            Partners
          </h2>
          <div className="mb-[94px]">
            <Slider {...settings}>
              <div>
                <img className="h-[135px]" src={img1} alt="logo" />
              </div>
              <div>
                <img
                  className="h-[135px] ml-[22px]"
                  src={img2}
                  alt="logo"
                />
              </div>
              <div>
                <img className="h-[135px]" src={img3} alt="logo" />
              </div>
              <div>
                <img className="h-[135px]" src={img4} alt="logo" />
              </div>
              <div>
                <img className="h-[135px]" src={img1} alt="logo" />
              </div>
              <div>
                <img
                  className="h-[135px] ml-[22px]"
                  src={img2}
                  alt="logo"
                />
              </div>
              <div>
                <img className="h-[135px]" src={img3} alt="logo" />
              </div>
              <div>
                <img className="h-[135px]" src={img4} alt="logo" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
