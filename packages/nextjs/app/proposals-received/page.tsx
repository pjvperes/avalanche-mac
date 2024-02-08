"use client";

import Link from "next/link";
import type { NextPage } from "next";
import advertisersData from "~~/utils/advertisersData.json";

const ProposalsReceived: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex flex-col px-5">
          <h1 className="text-center mb-10">
            <span className="block text-4xl font-semibold mb-2">Advertisers Proposals to You</span>
            <span className="block text-lg">Check out opportunities and close great deals with advertisers</span>
          </h1>
        </div>

        <div className="bg-base-300 w-full flex flex-col justify-center items-center py-12">
          {advertisersData.map((advertiser, index) => (
            <div
              key={index}
              className="bg-base-100 py-6 px-6 mx-6 my-2 text-center items-center rounded-xl grid grid-cols-2 gap-4 transition-transform duration-100"
              style={{ width: "800px", transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
              onMouseOver={e => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div className="col-span-1 flex flex-col items-start gap-1">
                <div className="font-bold text-2xl text-left">{advertiser.companyName}</div>
                <div className="font-normal text-xl text-blue-500 hover:text-blue-800 text-left">
                  <Link href={advertiser.link} target="_blank" rel="noopener noreferrer" passHref>
                    {advertiser.link}
                  </Link>
                </div>
                <div className="font-normal text-lg italic text-left">{advertiser.totalAdsMade}</div>
                <div className="font-light text-md text-left">{advertiser.email}</div>
              </div>
              <div className="col-span-1 flex flex-col items-end gap-1">
                <div className="font-normal text-lg bg-base-300 py-1 px-3 rounded-sm">
                  US${advertiser.stars} / 1,000 clicks
                </div>
                <div className="font-light">Status</div>
                <div>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-1 px-3 rounded">
                    Accept proposal
                  </button>
                </div>
                <div>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-5 rounded">
                    Deny proposal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProposalsReceived;
