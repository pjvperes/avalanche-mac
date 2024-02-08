"use client";

import Link from "next/link";
import type { NextPage } from "next";
import creatorsData from "~~/utils/creatorsData.json";

const ProposalsMade: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex flex-col px-5">
          <h1 className="text-center mb-10">
            <span className="block text-4xl font-semibold mb-2">Your Proposal Overview</span>
            <span className="block text-lg">Monitor the status and responses to your proposals</span>
          </h1>
        </div>

        <div className="bg-base-300 w-full flex flex-col justify-center items-center py-12">
          {creatorsData.map((creator, index) => (
            <div
              key={index}
              className="bg-base-100 py-6 px-6 mx-6 my-2 text-center items-center rounded-xl grid grid-cols-2 gap-4 transition-transform duration-100"
              style={{ width: "800px", transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
              onMouseOver={e => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div className="col-span-1 flex flex-col items-start gap-1">
                <div className="font-bold text-2xl text-left">{creator.name}</div>
                <div className="font-normal text-xl text-blue-500 hover:text-blue-800 text-left">
                  <Link href={creator.channelLink} target="_blank" rel="noopener noreferrer" passHref>
                    {creator.channelName}
                  </Link>
                </div>
                <div className="font-normal text-lg italic text-left">{creator.expertise}</div>
                <div className="font-light text-md text-left">{creator.description}</div>
              </div>
              <div className="col-span-1 flex flex-col items-end gap-1">
                <div className="font-normal text-lg bg-base-300 py-1 px-3 rounded-sm">
                  US${creator.ratePerThousandClicks} / 1,000 clicks
                </div>
                <div className="font-light">Status</div>
                <div>
                  <button className="bg-blue-400 hover:bg-blue-800 text-white font-semibold py-1 px-3 rounded">
                    Notify again
                  </button>
                </div>
                <div>
                  <button className="border border-red-500 bg-base-100 text-red-500 text-xs  font-semibold py-1 px-2 rounded mt-2 hover:bg-red-500 hover:text-white">
                    Cancel proposal
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

export default ProposalsMade;
