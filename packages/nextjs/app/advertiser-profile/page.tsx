"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { CheckIcon, PencilIcon, StarIcon } from "@heroicons/react/24/solid";
import advertisersData from "~~/utils/advertisersData.json";

const AdvertiserProfile: NextPage = () => {
  // Select the first advertiser for the purpose of this example
  const advertiser = advertisersData[0];

  const [editable, setEditable] = useState({
    companyName: advertiser.companyName,
    totalAdsMade: advertiser.totalAdsMade,
    stars: advertiser.stars,
    link: advertiser.link,
    email: advertiser.email,
  });

  const [isEditable, setIsEditable] = useState(false);

  const saveProfile = () => {
    console.log("Profile saved with data:", editable);
    setIsEditable(false);
  };

  // Handler to update local state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setEditable({ ...editable, [field]: e.target.value });
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex flex-col px-5">
          <h1 className="text-center mb-10">
            <span className="block text-4xl font-semibold mb-2">Your Advertiser Profile</span>
            <span className="block text-lg">Showcase your brand to attract the best content creators</span>
          </h1>
        </div>

        <div className="bg-base-300 w-full flex justify-center items-center pt-16 pb-20">
          <div
            className="bg-base-100 py-10 px-10 text-center items-center rounded-xl mx-auto shadow-lg transition-transform duration-300 hover:scale-105"
            style={{ width: "400px" }}
          >
            <div className="flex flex-grow justify-end">
              {isEditable ? (
                <CheckIcon className="h-5 w-5 ml-2 cursor-pointer" onClick={() => setIsEditable(false)} />
              ) : (
                <PencilIcon className="h-5 w-5 ml-2 cursor-pointer" onClick={() => setIsEditable(true)} />
              )}
            </div>

            <div className="flex items-center text-center py-1">
              {isEditable ? (
                <input
                  className="font-bold flex-grow text-3xl mb-0 text-center w-full py-2"
                  value={editable.companyName}
                  onChange={e => handleChange(e, "companyName")}
                />
              ) : (
                <div className="font-bold text-3xl mb-0 text-center w-full py-2">{editable.companyName}</div>
              )}
            </div>

            <div className="flex items-center text-center py-1">
              {isEditable ? (
                <input
                  className="text-center text-lg w-full break-words"
                  value={editable.email}
                  onChange={e => handleChange(e, "email")}
                />
              ) : (
                <div className="text-lg w-full break-words">{editable.email}</div>
              )}
            </div>

            <div className="flex items-center text-center py-1">
              {isEditable ? (
                <input
                  className="text-blue-500 hover:text-blue-800 text-center text-lg w-full break-words"
                  value={editable.link}
                  onChange={e => handleChange(e, "link")}
                />
              ) : (
                <div className="text-blue-500 hover:text-blue-800 text-lg w-full break-words">{editable.link}</div>
              )}
            </div>

            <div className="flex flex-row justify-center gap-2 my-1 w-full py-1">
              <StarIcon className="h-5 w-5" />
              <span className="text-md text-center">{editable.stars} / 5.0</span>
            </div>

            <div className="flex items-center py-1">
              <div className="text-md text-center p-2 w-full">Total Ads Made: {editable.totalAdsMade}</div>
            </div>

            <button
              className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-10 shadow-md rounded-full"
              onClick={saveProfile}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvertiserProfile;
