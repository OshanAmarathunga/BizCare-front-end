import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`bg-white rounded-2xl flex justify-between items-center px-7 mx-10 shadow-lg transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="h-[60px] flex items-center">
        <img src="/logo.jpg" alt="Logo" className="h-full" />
      </div>

      <div className="hidden sm:flex h-[40px] justify-end space-x-2 sm:space-x-4">
      <Link to={"/"}>
            <button className="block w-full text-left rounded-md p-2 font-bold hover:bg-yellow-300 font-poppins">
              Home
            </button>
          </Link>
        <Link to={"/about-us"}>
          <button className="rounded-md p-1 sm:p-2 text-sm sm:text-base font-bold hover:bg-yellow-300 font-poppins">
            About Us
          </button>
        </Link>
        <button className="rounded-md p-1 sm:p-2 text-sm sm:text-base font-bold hover:bg-yellow-300 font-poppins">
          Gallery
        </button>
        
        <button className="rounded-md font-poppins bg-yellow-300 p-1 sm:p-2 text-sm sm:text-base font-bold hover:bg-yellow-300">
          Contact Us
        </button>
      </div>

      <div className="flex sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 font-bold hover:bg-yellow-300"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[60px] right-0 bg-white w-full p-4 space-y-2 sm:hidden">
          <Link to={"/"}>
            <button className="block w-full text-left rounded-md p-2 font-bold hover:bg-yellow-300">
              Home
            </button>
          </Link>
          <Link to={"/about-us"}>
            <button className="block w-full text-left rounded-md p-2 font-bold hover:bg-yellow-300">
              About Us
            </button>
          </Link>
          <button className="block w-full text-left rounded-md p-2 font-bold hover:bg-yellow-300">
            Gallery
          </button>
          
          <button className="block w-full text-left rounded-md p-2 font-bold hover:bg-yellow-300">
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
}
