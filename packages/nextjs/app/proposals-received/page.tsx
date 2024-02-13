"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { StarIcon } from "@heroicons/react/24/solid";
import advertisersData from "~~/utils/advertisersData.json";
import proposalsData from "~~/utils/proposals.json";

const ProposalsReceived: NextPage = () => {
  const getStatusBgColor = (status: string) => {
    switch (status) {
      case "accepted":
        return "border-green-400";
      case "pending":
        return "border-yellow-400";
      case "refused":
        return "border-red-400";
      default:
        return "border-gray-200";
    }
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex flex-col px-5">
          <h1 className="text-center mb-10">
            <span className="block text-4xl font-semibold mb-2">Advertisers Proposals to You</span>
            <span className="block text-lg">Check out opportunities and close great deals with advertisers</span>
          </h1>
        </div>

        <div className="bg-base-300 w-full flex flex-col justify-center items-center text-center py-12">
          {advertisersData.map((adv, index) => {
            // Find the proposal made to this creator
            const proposal = proposalsData.find(p => p.advertiser === adv.companyName);

            return (
              <div
                key={index}
                className="bg-base-100 py-6 px-6 mx-6 my-2 items-center flex flex-col rounded-xl shadow-lg transition-transform duration-300 w-full max-w-4xl"
                onMouseOver={e => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div className="grid md:grid-cols-2 gap-2 w-full">
                  <div className="flex flex-col items-center md:items-start sm:items-centergap-1 break-words">
                    <div className="font-bold text-2xl text-left">{adv.companyName}</div>
                    <div className="font-normal text-xl text-blue-500 hover:text-blue-800 text-left">
                      <Link href={adv.link} target="_blank" rel="noopener noreferrer" passHref>
                        {adv.link}
                      </Link>
                    </div>
                    <div className="flex flex-row font-normal text-md text-left">
                      {adv.totalAdsMade} <p className="m-0 ml-1">deals made</p>
                    </div>
                    <div className="flex flex-row items-center font-light text-md text-left">
                      <StarIcon className="w-4 h-4" />
                      <p className="m-0 ml-1"> {adv.stars} / 5.0</p>
                    </div>
                    <div className="font-semibold text-md text-left">{adv.email}</div>
                  </div>

                  <div className="flex flex-col items-center md:items-end gap-3">
                    <div className="text-md font-semibold bg-base-300 py-1 px-3 rounded-sm">
                      {proposal?.cpm} <span className="uppercase">{proposal?.token}</span> / 1,000 clicks
                    </div>
                    {proposal && (
                      <div className="font-light">
                        Status:{" "}
                        <span
                          className={`border py-1 px-2 rounded-sm font-semibold ${getStatusBgColor(proposal.status)}`}
                        >
                          {proposal.status}
                        </span>
                      </div>
                    )}
                    <div>
                      <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-1 px-3 rounded shadow-md">
                        Accept proposal
                      </button>
                    </div>
                    <div>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded shadow-md">
                        Deny proposal
                      </button>
                    </div>
                  </div>
                </div>
                {proposal && (
                  <div className="flex flex-col items-left text-left w-full mt-4 gap-2 break-words">
                    <div className="flex flex-row">
                      <p className="m-0 mr-1">Parametric link:</p>
                      {/* ... Proposal details ... */}
                      {proposal.parametricLink && (
                        <Link
                          href={proposal.parametricLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-800"
                          passHref
                        >
                          {proposal.parametricLink}
                        </Link>
                      )}
                    </div>
                    <div className="bg-base-300 p-4 text-left justify-left rounded-md w-full">
                      {proposal.description}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProposalsReceived;
