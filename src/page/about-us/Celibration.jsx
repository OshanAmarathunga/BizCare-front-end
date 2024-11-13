import React from "react";

export default function Celibration() {
  return (
    <div className="bg-white mx-10 rounded-2xl mt-10">
      <div className="flex flex-col md:flex-row font-poppins px-10 py-5 ">
        <div className="bg-gray-100 rounded-3xl p-5">
          <h1 className="font-bold text-[30px] md:text-[35px] text-center">
            Celebrating a Decade of Building Great Solutions
          </h1>
          <h1 className="text-justify mt-5">
            "Over the past decade, we’ve grown from a small startup into a
            globally recognized tech organization. To celebrate our 10th
            anniversary, we wrote a book sharing our journey—the challenges we
            faced, the lessons we learned, and the successes we achieved along
            the way."
          </h1>
          <h1 className="mt-4 font-bold">Pasidu Udayanga</h1>
          <h1 className="">Founder & CEO, BizCare</h1>
        </div>
        <div className="m-4 rounded-3xl">
          <img src="cele.jpg" className="rounded-2xl"/>
        </div>
      </div>
    </div>
  );
}
