import React from "react";

export default function LeaderMessage() {
  return (
    <div className="bg-white mx-10 rounded-2xl mt-10">
      <div className="flex flex-col md:flex-row font-poppins px-10 py-5 ">
        <div className="m-4 rounded-3xl">
          <img src="ceo.jpg" />
        </div>
        <div className="bg-gray-100 rounded-3xl p-5">
          <h1 className="font-bold text-[40px] text-center">Message from our Leaders</h1>
          <h1 className="text-justify mt-5">
            "At Rootcode, our passion lies in building technology that helps
            businesses win in the global market. Reflecting on a decade of
            creating impactful technology, it's great to see the technology that
            we built being used by millions of people around the world. And our
            team, Rootcoders, are at the core of everything we do. Together,
            we're not just engineering world-class digital products; we're
            elevating standards of excellence, pushing relentlessly towards
            success."
          </h1>
          <h1 className="mt-4 font-bold">Pasidu Udayanga</h1>
          <h1 className="">Founder & CEO, BizCare</h1>
        </div>
      </div>
    </div>
  );
}
