import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import StoreIcon from "@mui/icons-material/Store";
import DashboardIcon from "@mui/icons-material/Dashboard";

const menuItems = [
  { id: 1, label: "Marketplace", icon: StoreIcon, link: "/" },
  { id: 2, label: "Dashboard", icon: DashboardIcon, link: "/dashboard" },
  { id: 2, label: "My NFTS ", icon: PersonIcon, link: "/my-nfts" },
  { id: 2, label: "Create", icon: AddIcon, link: "/create-nft" },
  { id: 2, label: "Profile", icon: PersonIcon, link: "/profile" },
];

const Sidebarnav = () => {
  const { toggleCollapse, setToggleCollapse } = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  return (
    <div>
      <div className="flex items-start  menu_div">
        {menuItems.map((menu, i) => {
          // console.log(menu);
          return (
            <div className="" key={menu.id}>
              <Link href={menu.link}>
                <a className="flex py-4 items-center w-full h-full text-gray-400 font-neueMachina text-base ml-2">
                  {/* <menu.icon className="text-xl mr-4 text-gray-400" /> */}
                  {menu.label}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Sidebarnav;
