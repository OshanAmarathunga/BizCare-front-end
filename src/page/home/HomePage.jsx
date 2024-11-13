import React from "react";
import Header from "../../components/header/Header";
import ImageSlider from "../../components/slider/OurClients";
import Services from "../../components/services/Services";
import MainView from "../../components/header/MainView";
import OurClients from "../../components/slider/OurClients";
import Footer from "../../components/header/Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-100 ">
      <Header />
      <MainView/>
      <Services/>
      <OurClients/>
      <Footer/>
      
    </div>
  );
}
