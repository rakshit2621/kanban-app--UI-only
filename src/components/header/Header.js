import React from "react";
import { resources } from "../../resources/HeaderResources";
import UserImage from "../../resources/Mask Group.png";

export default function Header() {
  return (
    <div className="w-full h-[10vh] border-b-[1.5px] border-b-[#DBDBDB] flex justify-center items-center">
      <div className="w-[20%] h-full border-r-[1.5px] border-r-[#DBDBDB] flex justify-between items-center">
        <div className="w-[70%] h-full flex justify-center items-center">
          <div>{resources.logo}</div>
          <b className="ml-1 text-lg">Project M.</b>
        </div>
        <div className="w-[30%] h-full flex justify-center items-center">
          {resources.arrow}
        </div>
      </div>

      <div className="w-[45%] h-full flex justify-start items-center">
        <div className="w-[80%] h-full flex justify-center items-center">
          <div className="w-[15%] h-[60%] bg-[#F5F5F5] rounded-l-md flex justify-center items-center">
            {resources.search}
          </div>
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-[70%] h-[60%] text-sm bg-[#F5F5F5] rounded-r-md outline-none"
          />
        </div>
      </div>

      <div className="w-[15%] h-full flex justify-evenly items-center">
        {resources.rowIcons.map((data) => {
          return data;
        })}
      </div>

      <div className="w-[20%] h-full flex justify-center items-center">
        <div className="w-[60%] h-full flex flex-col justify-center items-center">
          <div className="w-full h-[35%] text-sm text-[#0D062D] flex justify-end items-center">
            Anima Agrawal
          </div>
          <div className="w-full h-[35%] text-sm text-[#787486] flex justify-end items-center">
            UP, India
          </div>
        </div>
        <div className="w-[40%] h-full flex justify-evenly items-center">
          <img src={UserImage} />
          {resources.downArrow}
        </div>
      </div>
    </div>
  );
}
