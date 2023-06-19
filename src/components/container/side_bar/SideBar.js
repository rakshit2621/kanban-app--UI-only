import React from "react";
import { resources } from "../../../resources/SideBarResources";

export default function SideBar() {
  return (
    <div className="w-[20%] h-full flex flex-col justify-evenly items-center border-r-[1.5px] border-r-[#DBDBDB]">
      <div className="w-[90%] h-[35%] border-b-[#DBDBDB] border-b-[1.5px] flex flex-col justify-evenly items-center">
        {resources.icons.map((data, index) => {
          return (
            <div className="w-[80%] h-[15%] flex justify-start items-center">
              {data}
              <span className="text-[#787486] text-sm ml-3">
                {resources.badge[index]}
              </span>
            </div>
          );
        })}
      </div>

      <div className="w-[80%] h-[30%]  flex flex-col justify-evenly items-center">
        <div className="w-[80%] h-fit flex justify-between items-center">
          <span className="text-xs text-[#787486]">MY PROJECTS</span>
          {resources.squarePlus}
        </div>
        <div className="w-[100%] h-[20%] flex justify-evenly items-center rounded-md bg-[rgba(80,48,229,0.08)]">
          <div className="w-[0.5vmax] h-[0.5vmax] rounded-full bg-[#7AC555]"></div>
          <div className=" w-[60%] h-full text-sm flex justify-start items-center">
            <b>Mobile App</b>
          </div>
          <div className="w-[10%] h-full flex justify-center items-center">
            {resources.more}
          </div>
        </div>
        <div className="w-[100%] h-[20%] flex justify-evenly items-center rounded-md">
          <div className="w-[0.5vmax] h-[0.5vmax] rounded-full bg-[#FFA500]"></div>
          <div className="w-[60%] h-full text-sm text-[#787486] flex justify-start items-center">
            Website Redesign
          </div>
          <div className="w-[10%] h-full flex justify-center items-center"></div>
        </div>
        <div className="w-[100%] h-[20%] flex justify-evenly items-center rounded-md ">
          <div className="w-[0.5vmax] h-[0.5vmax] rounded-full bg-[#E4CCFD]"></div>
          <div className="w-[60%] h-full text-sm text-[#787486] flex justify-start items-center">
            Design System
          </div>
          <div className="w-[10%] h-full flex justify-center items-center"></div>
        </div>
        <div className="w-[100%] h-[20%] flex justify-evenly items-center rounded-md ">
          <div className="w-[0.5vmax] h-[0.5vmax] rounded-full bg-[#76A5EA]"></div>
          <div className="w-[60%] h-full text-sm text-[#787486] flex justify-start items-center">
            Wireframes
          </div>
          <div className="w-[10%] h-full flex justify-center items-center"></div>
        </div>
      </div>

      <div className="w-[80%] h-[30%] flex justify-center items-end">
        <div className="w-full h-[90%] flex flex-col justify-evenly items-center bg-[#F5F5F5] rounded-xl">
          <div className="w-[4vmax] h-[4vmax] -translate-y-20 rounded-full bg-[#F5F5F5]  absolute flex justify-center items-center">
            <div className="absolute -z-1 w-[50%] h-[50%] rounded-full bg-[#FCD64A] blur-[17px]"></div>
            {resources.bulb}
          </div>
          <div className="w-[80%] h-fit flex flex-col justify-evenly items-center">
            <div className="text-black">Thoughts Time</div>
            <div className="w-[90%] text-center text-xs text-[#787486]">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </div>
            <div className="w-[90%] h-[20%] bg-white flex justify-center items-center p-2">
              Write a message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
