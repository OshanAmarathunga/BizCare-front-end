import React from "react";

export default function Services() {
  return (
    <div className="bg-white mx-10 rounded-2xl mt-3 md:flex-col ">
      <h1 className="text-[20px] md:text-[50px] font-bold p-3">
        What we can offer for you !
      </h1>
      <div className="mx-10">
        <div className="bg-gray-100 pt-1 px-5 rounded-2xl mb-2 w-full">
          <h1 className="text-[15px] md:text-[20px] font-bold">
            Finance Services
          </h1>
          <ul className="list-disc pl-5 md:flex sm:flex-row">
            <div className="flex-col justify-between">
              <li className="mb-4 mx-4">
                <div className="font-semibold hover:text-yellow-500">
                  New Company Registrations
                </div>
              </li>
              <li className="mb-4 mx-4">
                <div className="font-semibold hover:text-yellow-500">
                  Secretarial Works
                </div>
              </li>
              <li className="mb-4 mx-4">
                <div className="font-semibold hover:text-yellow-500">
                  Income Tax Consultation
                </div>
              </li>
            </div>
            <div className="flex-col  justify-between">
              <li className="mb-4 mx-4">
                <div className="font-semibold hover:text-yellow-500">
                  Company Audit{" "}
                </div>
              </li>
              <li className="mb-4 mx-4">
                <div className="font-semibold hover:text-yellow-500">
                  Book Keeping
                </div>
              </li>
              <li className="mb-4 mx-4">
                <div className="font-semibold hover:text-yellow-500">
                  Preparation of Management Accounts & Final Accounts
                </div>
              </li>
            </div>
            <div className="flex-col  justify-between">
              <li className="mb-4 mx-4">
                <div className="font-semibold hover:text-yellow-500">
                  Tender Registration
                </div>
              </li>
              <li className="mb-4 mx-4">
                <div className="font-semibold hover:text-yellow-500">
                  "CIDA" Registration
                </div>
              </li>
              <li className="mb-4 mx-4">
                <div className="font-semibold hover:text-yellow-500">
                  Providing Accounting Software
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 pt-1 px-5 mx-10 rounded-2xl mb-2">
        <h1 className="text-[15px] md:text-[20px] font-bold">
          Direct & Indirect agricultural exports
        </h1>
        <ul className="list-disc pl-5 md:flex sm:flex-row">
          <div className="flex-col justify-between">
            <li className="mb-4 mx-4">
              <div className="font-semibold hover:text-yellow-500">
                King Coconut
              </div>
            </li>
            <li className="mb-4 mx-4">
              <div className="font-semibold hover:text-yellow-500">Tapioca</div>
            </li>
            <li className="mb-4 mx-4">
              <div className="font-semibold hover:text-yellow-500">Papaya</div>
            </li>
          </div>
        </ul>
      </div>

      <div className="bg-gray-100 pt-1 px-5 mx-10 rounded-2xl mb-2">
        <h1 className="text-[15px] md:text-[20px] font-bold">
          Agricultural export consultancy
        </h1>
        <div className="flex">
        <ul className="list-disc pl-5 md:flex sm:flex-row">
          <div className="flex-col justify-between">
            <li className="mb-4 mx-4">
              <div className="font-semibold hover:text-yellow-500">
                Preparation of agriculture project proposal
              </div>
            </li>
            <li className="mb-4 mx-4">
              <div className="font-semibold hover:text-yellow-500">
                "TIN" / Temporary "VAT" Registration
              </div>
            </li>
            <li className="mb-4 mx-4">
              <div className="font-semibold hover:text-yellow-500">
                Coconut board Registration
              </div>
            </li>
          </div>

          <div className="flex-col justify-between">
            <li className="mb-4 mx-4">
              <div className="font-semibold hover:text-yellow-500">
                Customs registration work
              </div>
            </li>
            <li className="mb-4 mx-4">
              <div className="font-semibold hover:text-yellow-500">
                Custom clearance and forwarding services
              </div>
            </li>
            <li className="mb-4 mx-4">
              <div className="font-semibold hover:text-yellow-500">Papaya</div>
            </li>
          </div>
          </ul>
        </div>
      </div>
    </div>
  );
}