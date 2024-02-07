"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { CheckIcon, PencilIcon, StarIcon } from "@heroicons/react/24/solid";
import creatorsData from "~~/utils/creatorsData.json";

const CreatorProfile: NextPage = () => {
  // Select the first creator for the purpose of this example
  const creator = creatorsData[0];

  const [editable, setEditable] = useState({
    name: creator.name,
    channelName: creator.channelName,
    channelLink: creator.channelLink,
    expertise: creator.expertise,
    ratePerThousandClicks: creator.ratePerThousandClicks,
    description: creator.description,
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
            <span className="block text-4xl font-semibold mb-2">Your Creator profile</span>
            <span className="block text-lg">Create an amazing profile to impress Advertisers</span>
          </h1>
        </div>

        <div className="bg-base-300 w-full flex justify-center items-center pt-16 pb-20">
          <div
            className="bg-base-100 py-10 px-10 text-center items-center rounded-xl mx-auto transition-transform duration-300 hover:scale-105"
            style={{ width: "400px" }}
          >
            <div className="flex flex-grow justify-end">
              {isEditable ? (
                <CheckIcon className="h-5 w-5 ml-2 cursor-pointer" onClick={() => setIsEditable(false)} />
              ) : (
                <PencilIcon className="h-5 w-5 ml-2 cursor-pointer" onClick={() => setIsEditable(true)} />
              )}
            </div>

            <div className="flex items-center py-1">
              {isEditable ? (
                <input
                  className="font-bold text-3xl mb-0 text-center w-full py-2"
                  value={editable.name}
                  onChange={e => handleChange(e, "name")}
                />
              ) : (
                <div className="font-bold text-3xl mb-0 text-center w-full py-2">{editable.name}</div>
              )}
            </div>

            <div className="flex items-center text-center py-1 flex-grow px-4 min-w-0">
              {isEditable ? (
                <input
                  className="flex text-lg w-full flex-grow text-center"
                  value={editable.channelName}
                  onChange={e => handleChange(e, "channelName")}
                />
              ) : (
                <div className="flex flex-grow text-lg w-full justify-center">{editable.channelName}</div>
              )}
            </div>

            <div className="flex items-center py-1">
              <div className="flex-grow px-4 min-w-0">
                {isEditable ? (
                  <input
                    className="text-blue-500 hover:text-blue-800 text-lg w-full break-words"
                    value={editable.channelLink}
                    onChange={e => handleChange(e, "channelLink")}
                  />
                ) : (
                  <div className="text-blue-500 hover:text-blue-800 text-lg w-full break-words">
                    {editable.channelLink}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center py-1 flex-grow px-4 min-w-0">
              {isEditable ? (
                <input
                  className="italic text-md w-full"
                  value={editable.expertise}
                  onChange={e => handleChange(e, "expertise")}
                />
              ) : (
                <div className="italic text-md w-full">{editable.expertise}</div>
              )}
            </div>

            <div className="flex items-center py-1 justify-between">
              <div className="flex items-center flex-grow justify-center">
                <div className="flex items-center justify-center">
                  {isEditable ? (
                    <input
                      style={{ width: "40px" }} // Set the width as needed
                      className="text-md text-center"
                      value={editable.ratePerThousandClicks}
                      onChange={e => handleChange(e, "ratePerThousandClicks")}
                    />
                  ) : (
                    <div className="text-md flex-grow text-center py-2 mr-2">{editable.ratePerThousandClicks}</div>
                  )}
                  <span className="text-gray-500 text-md ml-0 whitespace-nowrap">USD per 1,000 clicks</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center gap-2 my-2 w-full py-1">
              <StarIcon className="h-5 w-5" />
              <span className="text-md text-center">{creator.stars} / 5.0</span>
            </div>

            <div className="flex items-center py-1">
              {isEditable ? (
                <textarea
                  className="text-md text-gray-500 text-center p-2 w-full"
                  value={editable.description}
                  rows={3}
                  onChange={e => handleChange(e, "description")}
                />
              ) : (
                <div className="text-md text-gray-500 text-center p-2 w-full">{editable.description}</div>
              )}
            </div>

            <button
              className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-10 rounded-full"
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

export default CreatorProfile;
