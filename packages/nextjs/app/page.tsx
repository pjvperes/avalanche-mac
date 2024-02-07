import Link from "next/link";
import type { NextPage } from "next";
import { StarIcon } from "@heroicons/react/20/solid";
import creatorsData from "~~/utils/creatorsData.json";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex flex-col px-5">
          <h1 className="text-left mb-10">
            <span className="block text-5xl font-semibold mb-6">Find the perfect creator to advertise</span>
            <span className="block text-xl">Check out creators with the ideal profile for your company</span>
          </h1>
        </div>

        <div className="bg-base-300 w-full mt-2 px-8 py-12 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
            {/* Map over creatorsData to display each creator's information */}
            {creatorsData.map((creator, index) => (
              <div
                key={index}
                className="flex flex-col bg-base-100 p-10 text-center items-center max-w-xs rounded-xl transition-transform duration-300 hover:scale-105"
              >
                <p className="font-bold text-xl mb-0">{creator.name}</p>
                <Link
                  className="text-blue-500 hover:text-blue-800 visited:text-purple-600 text-md mt-0 mb-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={creator.channelLink}
                  passHref
                >
                  {creator.channelName}
                </Link>
                <p className="italic text-sm mt-0 mb-1">{creator.expertise}</p>
                <p className="text-sm mb-1">${creator.ratePerThousandClicks} per 1000 clicks</p>
                <div className="flex flex-row items-center gap-2 my-1">
                  <StarIcon className="h-4 w-4" />
                  <p className="text-sm m-0">{creator.stars} / 5.0</p>
                </div>
                <p className="text-sm text-gray-500">{creator.description}</p>
                <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded-full">
                  Book
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
