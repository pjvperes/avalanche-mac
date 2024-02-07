import type { NextPage } from "next";

const MyProposals: NextPage = () => {
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
            className="bg-base-100 py-10 px-10 text-center items-center rounded-xl mx-auto"
            style={{ width: "400px" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default MyProposals;
