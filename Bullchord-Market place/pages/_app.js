/* pages/_app.js */
import "../styles/globals.css";
import "../styles/style.css";
import Link from "next/link";
import { useState } from "react";
import { MoralisProvider } from "react-moralis";
import Moralis from "moralis";
import Image from "next/image";
import Sidebarnav from "../components/Sidebarnav";
import SearchIcon from "@mui/icons-material/Search";


// import { ConnectButton } from "@web3uikit/web3";

const app_id = process.env.NEXT_PUBLIC_APP_ID;
const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

const tags = [
  { id: 1, tagName: "All" },
  { id: 2, tagName: "Afrobeats" },
  { id: 3, tagName: "Hip  Hop" },
  { id: 4, tagName: "Amapiano" },
  { id: 5, tagName: " Soul" },
  { id: 6, tagName: "R & B" },
  { id: 7, tagName: "POP" },
  { id: 8, tagName: "House" },
];

function MyApp({ Component, pageProps }) {
  const [connect, setConnect] = useState("Connect Wallet");
  const connectWallet = async () => {
       Moralis.Web3.authenticate().then(function(user){
        setConnect("Connected");
       });
  };
  return (
    <div className="w-full">
      <nav className="p-4 mobile-text nav_bar_div flex justify-between items-center bg-black">
        <div>
          <Image src="/logo.png" height={30} width={128} />
        </div>

       <div className="flex search bg-gray-900 p-3 w-6/12">
         <SearchIcon className="bg-gray-900 text-2xl" />
         <input placeholder="" className="bg-gray-900 outline-none border-none w-full text-gray-700 bg-transparent"/>
        </div>
   
        <div className="connect_wallet">
          <button
            className="button btn-1 connect_wallet font-neueMachina bg-gray-600 sm:table-column"
            onClick={connectWallet}
          >
            {connect}
          </button>
        </div>
      </nav>

      <MoralisProvider appId={app_id} serverUrl={server_url}>
        <Component {...pageProps} />
      </MoralisProvider>
    </div>
  );
}

export default MyApp;
