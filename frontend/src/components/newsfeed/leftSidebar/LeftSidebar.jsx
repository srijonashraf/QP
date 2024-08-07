import React from "react";
import leftMenuItems from "../../../data/leftMenuItems.js";
import userAvatar from "../../../assets/image/user.png";
import useProfileStore from "../../../store/ProfileStore.js";
const LeftSidebar = () => {
  const { ProfileDetails, ProfilePic } = useProfileStore();
  return (
    <div className="bg-white p-4 h-screen rounded mt-2">
      <ul className="flex flex-col gap-5">
        <div className="profile flex items-center gap-2">
          <img
            className="w-full max-w-[30px] h-full max-h-[30px] rounded-full border
           border-gray-400 object-cover"
            src={ProfilePic}
            alt="User avatar"
          />
          <p className="font-medium font-poppins cursor-pointer">
            {ProfileDetails?.user?.first_name}
            {ProfileDetails?.user?.last_name}
          </p>
        </div>

        <hr />
        {leftMenuItems.map((item, id) => {
          // Create the Icon element dynamically
          const IconComponent = item.icon;
          return (
            <li
              key={id}
              className="flex items-center gap-2 font-normal 
              font-poppins hover:bg-gray-100 transition-all ease-linear cursor-pointer"
            >
              <IconComponent
                width="30"
                height="30"
                className="text-brand-primary"
              />{" "}
              <p> {item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
