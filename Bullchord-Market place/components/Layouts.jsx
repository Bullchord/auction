import React from "react";
import Sidebarnav from "./Sidebarnav";
import Image from "next/image";
import bgNew from "../public/bg-new.png"


const Layouts = ({ children }) => {
  return (
    <div className="flex flex-col bg-black justify-center items-center p-2 box-border">
    
    <div className ="mt-2 justify-center items-center hero-div">
         <div className="pl-5 content_div_sec flex flex-col w-10/12">
                <p className="head_p text-5xl text-gray-200 font-bold font-neueMachina w-11/12 mb-3">BullChord NFT Market and Musicverse</p>
                <p className="second_p text-xl text-gray-500 poppins mb-3">List songs, Sell songs, Buy songs, Listen and Earn. Explore the market place</p>
                <button className="button btn-1 font-neueMachina text-gray-800 p-4 explore_btn">Explore the Market</button>
        </div> 
    
      <div>
        <Image
          src={bgNew}
          alt="right"
          width={400}
          height={400}
      />
      </div>
    </div>
    
      <Sidebarnav />
      <div className="flex-1 p-4 text-white">{children}</div>

    </div>
  );
};

export default Layouts;
