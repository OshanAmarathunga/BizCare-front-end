import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4">
      <div className="h-[60px] flex items-center">
        <img src="/logo.jpg" alt="Logo" className="h-full" />
      </div>
      <div className="hidden sm:flex h-[60px] justify-end space-x-2 sm:space-x-4">
        <button className="rounded-md p-1 sm:p-2 text-sm sm:text-base font-bold hover:bg-yellow-300">
          About Us
        </button>
        <button className="rounded-md p-1 sm:p-2 text-sm sm:text-base font-bold hover:bg-yellow-300">
          Gallery
        </button>
        <button className="rounded-md p-1 sm:p-2 text-sm sm:text-base font-bold hover:bg-yellow-300">
          Services
        </button>
        <button className="rounded-md p-1 sm:p-2 text-sm sm:text-base font-bold hover:bg-yellow-300">
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
          <button className="block w-full text-left rounded-md p-2 font-bold hover:bg-yellow-300">
            About Us
          </button>
          <button className="block w-full text-left rounded-md p-2 font-bold hover:bg-yellow-300">
            Gallery
          </button>
          <button className="block w-full text-left rounded-md p-2 font-bold hover:bg-yellow-300">
            Services
          </button>
          <button className="block w-full text-left rounded-md p-2 font-bold hover:bg-yellow-300">
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
}
