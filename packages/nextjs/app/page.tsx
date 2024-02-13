"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import { BuildingStorefrontIcon, UserIcon } from "@heroicons/react/24/solid";

const LoginPage: NextPage = () => {
  // State to store email and password input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedType, setSelectedType] = useState("none");

  const router = useRouter();

  // Handler for form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <div className="flex flex-col h-screen bg-base-200">
      <div className="grid place-items-center mx-2 my-5 sm:my-auto">
        <div className="flex flex-row justify-around font-semibold text-lg w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 2xl:w-3/12 bg-base-100 border border-blue-700 rounded-xl shadow-lg mb-10">
          <div
            className={`flex flex-col items-center justify-center flex-grow rounded-l-xl border-r border-blue-700 p-12 sm:p-6 ${
              selectedType === "advertiser" ? "bg-base-300" : ""
            }`}
            onClick={() => setSelectedType("advertiser")}
          >
            <BuildingStorefrontIcon className="w-4 h-4" />
            <button>Im an advertiser</button>
          </div>

          <div
            className={`flex flex-col items-center justify-center flex-grow rounded-r-xl p-12 sm:p-6 ${
              selectedType === "creator" ? "bg-base-300" : ""
            }`}
            onClick={() => setSelectedType("creator")}
          >
            <UserIcon className="w-4 h-4" />
            <button>Im a creator</button>
          </div>
        </div>

        <div className="border border-blue-700 w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-4/12 2xl:w-3/12 sm:px-10 sm:py-6 bg-base-100 rounded-xl shadow-lg">
          <h2 className="text-center mt-8 font-semibold text-3xl lg:text-4xl">
            Login {selectedType === "advertiser" ? "as Advertiser" : selectedType === "creator" ? "as Creator" : ""}
          </h2>
          <form className="mt-10" onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-xs font-semibold uppercase">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Type your e-mail"
              autoComplete="email"
              className="block w-full py-3 px-2 mt-2 appearance-none 
                border-b-2 border-gray-300
                focus:text-gray-500 focus:outline-none focus:border-indigo-300"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password" className="block mt-10 text-xs font-semibold uppercase">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Type your password"
              autoComplete="current-password"
              className="block w-full py-3 px-2 mt-2 mb-4 appearance-none 
                border-b-2 border-gray-300
                focus:text-gray-500 focus:outline-none focus:border-indigo-300"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-3 mt-10 bg-indigo-600 rounded-md
                font-medium text-white uppercase
                focus:outline-none hover:bg-indigo-700 hover:shadow-none"
            >
              Login
            </button>
            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <div className="flex-2 underline text-indigo-600 hover:text-indigo-800">Forgot password</div>

              <p className="flex-1 text-gray-700 text-md mx-4 my-1 sm:my-auto">or</p>

              <div className="flex-2 underline text-indigo-600 hover:text-indigo-800">Register</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
