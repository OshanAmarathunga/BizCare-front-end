import React from 'react'
import Header from '../../components/header/Header'
import AboutUSMain from './AboutUSMain'
import { FaFacebook } from "react-icons/fa";
import Mission from './Mission';

export default function AboutUs() {
  return (
    <div className="bg-gray-100 relative">
      <Header/>
      <AboutUSMain/>
      <Mission/>

      <a
        href="https://www.facebook.com/profile.php?id=100089323530603"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-yellow-300 shadow-lg hover:bg-yellow-200 fixed bottom-10 flex right-4 rounded-full text-[30px] w-[50px] h-[50px] items-center justify-center">
          <FaFacebook />
        </div>
      </a>

    </div>
  )
}
