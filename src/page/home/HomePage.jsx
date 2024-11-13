import React from "react";
import Header from "../../components/header/Header";
import ImageSlider from "../../components/slider/OurClients";
import Services from "../../components/services/Services";
import MainView from "../../components/header/MainView";
import OurClients from "../../components/slider/OurClients";
import Footer from "../../components/header/Footer";
import { FaFacebook } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="bg-gray-100 realtive">
      <Header />
      <MainView />
      <Services />
      <OurClients />
      <Footer />
      <a href="https://www.facebook.com/profile.php?id=100089323530603" target="_blank" rel="noopener noreferrer">
      <div className="bg-yellow-300 shadow-lg hover:bg-yellow-200 fixed bottom-10 flex right-4 rounded-full text-[30px] w-[50px] h-[50px] items-center justify-center">
        <FaFacebook />
      </div>
      </a>
    </div>
  );
}
