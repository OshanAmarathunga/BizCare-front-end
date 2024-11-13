import React from "react";

export default function AboutUSMain() {
  return (
    <div className="bg-white mx-10 rounded-2xl mt-3">
      <div className="flex flex-col justify-center text-center bg-yellow-300 rounded-3xl w-full py-[50px]">
        <h1 className="text-[30px] md:text-[35px] font-bold p-3 font-poppins">
          Learn more about us, our values & how we build great financial
          solutions. !
        </h1>

        <div>
          <button className="bg-black text-white px-5 py-2 mb-3 rounded-2xl shadow-2xl font-poppins">
            Call US....
          </button>
        </div>
      </div>
    </div>
  );
}
