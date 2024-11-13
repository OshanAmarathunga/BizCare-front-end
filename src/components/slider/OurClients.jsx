import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function OurClients() {
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ]
  };
  return (
    <div className="bg-white mx-10 rounded-2xl mt-3">
        <h1 className="text-[20px] md:text-[40px] font-bold p-3 px-6 font-poppins">
        Some of our clients!
      </h1>
      <div className="">
      <div className="slider-container px-10">
      <Slider {...settings}>
        
        <div>
          <img src="/2.jpg" alt="Slide 2" className="w-[200px]  h-[150px] mx-2" />
        </div>
        <div>
          <img src="/3.jpg" alt="Slide 3" className="w-[200px]  h-[150px] mx-2" />
        </div>
        <div>
          <img src="/4.jpg" alt="Slide 4" className="w-[200px]  h-[150px] mx-2" />
        </div>
        
      </Slider>
    </div>
      </div>

    </div>
  );
}
