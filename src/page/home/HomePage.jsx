import React from "react";
import Header from "../../components/header/Header";
import ImageSlider from "../../components/slider/Slider";
import Services from "../../components/services/Services";
import MainView from "../../components/header/MainView";

export default function HomePage() {
  return (
    <div className="bg-gray-100 ">
      <Header />
      <MainView/>
      <Services/>
      
    </div>
  );
}
