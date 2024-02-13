"use client";

import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { StarIcon } from "@heroicons/react/20/solid";
import creatorsData from "~~/utils/creatorsData.json";

const Home: NextPage = () => {
  // State to manage which dropdown is visible
  const [visibleDropdown, setVisibleDropdown] = useState<number | null>(null);

  // State to manage proposal form values
  const [formValues, setFormValues] = useState({
    description: "",
    cpm: "",
    totalDollars: "",
    link: "",
    parameter: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setFormValues({ ...formValues, [field]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with values:", formValues);
    // Add your form submission logic here
  };

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
              <div key={index}>
                <div
                  className="flex flex-col bg-base-100 px-10 pt-4 pb-10 h-full text-center items-center min-h-[350px] max-w-xs rounded-xl shadow-lg transition-transform duration-300"
                  onMouseOver={e => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
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
                  <p className="italic text-sm my-0">{creator.expertise}</p>
                  <p className="text-sm mb-1">${creator.ratePerThousandClicks} per 1000 clicks</p>
                  <div className="flex flex-row items-center gap-2 my-1">
                    <StarIcon className="h-4 w-4" />
                    <p className="text-sm m-0">{creator.stars} / 5.0</p>
                  </div>
                  <p className="text-sm text-gray-500 my-0">{creator.description}</p>
                  <button
                    className="mt-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full shadow-md"
                    onClick={() => setVisibleDropdown(visibleDropdown === index ? null : index)}
                  >
                    Book
                  </button>
                  {/* Dropdown Banner */}
                  {visibleDropdown === index && (
                    <div
                      className="bg-gray-200 w-full mt-3 p-2 text-center items-center max-w-xs mx-auto shadow-sm rounded-sm transition-transform duration-300"
                      style={{ marginLeft: "-20px", marginRight: "-20px", width: "calc(100% + 40px)" }}
                    >
                      <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                          <label className="block text-gray-700 text-sm font-bold" htmlFor="description">
                            Description
                          </label>
                          <textarea
                            id="description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={formValues.description}
                            onChange={e => handleInputChange(e, "description")}
                            rows={2}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block text-gray-700 text-sm font-bold" htmlFor="totalDollars">
                            Total US$ for the campaign
                          </label>
                          <input
                            id="totalDollars"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={formValues.totalDollars}
                            onChange={e => handleInputChange(e, "totalDollars")}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block text-gray-700 text-sm font-bold" htmlFor="cpm">
                            CPM
                          </label>
                          <input
                            id="cpm"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={formValues.cpm}
                            onChange={e => handleInputChange(e, "cpm")}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block text-gray-700 text-sm font-bold" htmlFor="link">
                            Link
                          </label>
                          <input
                            id="link"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={formValues.link}
                            onChange={e => handleInputChange(e, "link")}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block text-gray-700 text-sm font-bold" htmlFor="parameter">
                            Parameter
                          </label>
                          <input
                            id="parameter"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={formValues.parameter}
                            onChange={e => handleInputChange(e, "parameter")}
                          />
                        </div>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
