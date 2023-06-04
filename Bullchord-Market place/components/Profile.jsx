import React, { useState } from "react";
export default function Profile() {
  const [formInput, updateFormInput] = useState({
    username: "",
    walletAddress: "",
    description: "",
  });

  const handleSubmit = () => {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl) return;
  };

  return (
    <form>
      <div className="flex justify-center">
        <div className="flex flex-col pb-12">
          <div className="flex justify-between border-b border-gray-300 mb-4 ">
            <h2 className="uppercase p-4 text-center  font-neueMachina text-2xl ">
              Your Profile
            </h2>
            <button className="">withdraw funds</button>
          </div>
          <div className="flex justify-between align-middle bg-gray-900 p-4 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-400 md:text-lg">
              Your Earnings
            </h2>
            <small>0.000 BHT</small>
          </div>
          <div className="flex justify-between align-middle bg-gray-900 p-4 shadow-lg mt-4">
            <h2 className="text-xl font-semibold text-gray-400 md:text-lg">
              Total amount spent
            </h2>
            <small>0.000 BHB</small>
          </div>
          <div className="flex justify-between align-middle bg-gray-900 p-4 shadow-lg mt-4">
            <h2 className="text-xl font-semibold text-gray-400 md:text-lg sm:text-base">
              Total Plays
            </h2>
            <small>0 plays</small>
          </div>
        </div>
      </div>
    </form>
  );
}
