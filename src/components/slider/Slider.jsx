import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ImageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
  };
  return (
    <div className="px-20">
      <Slider {...settings}>
        <div>
          <img src="/1.jpg" alt="Slide 1" className="w-full h-[500px]" />
        </div>
        <div>
          <img src="/2.jpg" alt="Slide 2" className="w-full h-[500px]" />
        </div>
        <div>
          <img src="/3.jpg" alt="Slide 3" className="w-full h-[500px]" />
        </div>
        <div>
          <img src="/4.jpg" alt="Slide 4" className="w-full h-[500px]" />
        </div>
        <div>
          <img src="/5.jpg" alt="Slide 5" className="w-full h-[500px]" />
        </div>
        <div>
          <img src="/6.jpg" alt="Slide 6" className="w-full h-[500px]" />
        </div>
      </Slider>
    </div>
  );
}
