import React from "react";

export default function MainView() {
  return (
    <div className="bg-white mx-10 rounded-2xl mt-3 md:flex  justify-between">
      <div className="flex flex-col justify-center text-center bg-yellow-300 rounded-3xl w-full">
        <h1 className="text-[30px] md:text-[50px] font-bold p-3">Ultimate Business Solution Provider !</h1>
        <h1 className="text-[15px] md:text-[20px] font-light p-2 ">
          We provide the all around financial consultations for enterprises,
          startups, and governments worldwide to develop cutting-edge technology
          products and Artificial Intelligence solutions that help them achieve
          their goals.
        </h1>
        <div>
        <button className="bg-black text-white px-5 py-2 mb-3 rounded-2xl shadow-2xl" >Contact US....</button>
        </div>
      </div>
      <div className="w-full p-4 flex justify-center">
        <img
          src="/1.jpg"
          className="rounded-lg"
          alt="New Company Registration"
        />
      </div>
    </div>
  );
}
