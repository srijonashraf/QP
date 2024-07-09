import React, { useState } from "react";
import brandLogo from "../../../assets/image/logo.png";
import { NavLink } from "react-router-dom";
import CartIcon from "../../../assets/icons/navbar/CartIcon.jsx";
import GroupIcon from "../../../assets/icons/navbar/GroupIcon.jsx";
import HomeIcon from "../../../assets/icons/navbar/HomeIcon.jsx";
import ReelsIcon from "../../../assets/icons/navbar/ReelsIcon.jsx";
import MarketPlaceIcon from "../../../assets/icons/navbar/MarketplaceIcon.jsx";
import NotificationIcon from "../../../assets/icons/navbar/NotificationIcon.jsx";
import MessengerIcon from "../../../assets/icons/navbar/MessengerIcon.jsx";
import SearchIcon from "../../../assets/icons/navbar/SearchIcon.jsx";
import userAvatar from "../../../assets/image/user.png";
import useProfileStore from "../../../store/ProfileStore.js";
const NavbarLarge = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const { ProfilePic } = useProfileStore();

  const menuIcons = [
    {
      icon: <HomeIcon width={30} height={30} />,
      link: "/newsfeed",
      id: "home",
    },
    {
      icon: <ReelsIcon width={32} height={30} />,
      link: "/newsfeed",
      id: "reels",
    },
    {
      icon: <GroupIcon width={30} height={30} />,
      link: "/newsfeed",
      id: "group",
    },
    {
      icon: <MarketPlaceIcon width={32} height={30} />,
      link: "/newsfeed",
      id: "marketplace",
    },
    {
      icon: <CartIcon width={30} height={30} />,
      link: "/newsfeed",
      id: "cart",
    },
  ];

  return (
    <div className="bg-white shadow-sm h-[69px] lg:flex hidden">
      <div className="grid grid-cols-12 relative gap-6 w-full justify-center items-center px-2">
        <div className="col-span-4 flex gap-4">
          <img src={brandLogo} alt="Quantum Logo" className="max-w-[45px]" />
          <div className="relative flex items-center justify-center max-w-[241px] w-full">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="w-full rounded-3xl bg-body-base-color/15 pl-9 py-2 outline-none 
              placeholder:font-poppins placeholder:font-normal placeholder:text-[14px]"
            />
            <SearchIcon
              width="15"
              height="15"
              className="absolute left-4 top-4 text-black/60"
            />
          </div>
        </div>
        <div className="col-span-6">
          <ul className="flex items-center justify-around relative">
            {menuIcons.map((item) => (
              <li key={item.id} className="flex justify-center">
                <NavLink
                  to={item.link}
                  className={`${
                    activeIcon === item.id
                      ? "text-brand-primary"
                      : "text-black/30"
                  }`}
                  onClick={() => setActiveIcon(item.id)}
                >
                  {item.icon}
                </NavLink>
                {activeIcon === item.id && (
                  <hr className="w-20 h-1 absolute -bottom-5 rounded-full bg-brand-primary" />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 flex justify-end gap-3">
          <MessengerIcon width="45" height="45" />
          <NotificationIcon width="45" height="45" />
          <img
            className="w-[45px] h-[45px] bg-slate-300 rounded-full border-2
           border-brand-primary object-cover"
            src={ProfilePic}
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarLarge;
