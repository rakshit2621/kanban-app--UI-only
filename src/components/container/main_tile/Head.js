import React from "react";
import { resources } from "../../../resources/TileResources";

export default function Head() {
  return (
    <div className="w-full h-[25%]">
      <div className="w-full h-[60%] flex">
        <div className="w-[50%] h-full">
          <div className="w-[60%] h-full flex justify-evenly items-center">
            <span className="text-3xl text-[#0D062D] font-bold">
              Mobile App
            </span>
            <div className="p-1 bg-[rgba(80,48,229,0.2)] rounded-md">
              {resources.pencil}
            </div>
            <div className="p-1 bg-[rgba(80,48,229,0.2)] rounded-md">
              {resources.link}
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full flex justify-end items-center">
          <div className="flex justify-center items-center">
            <div className="p-2 bg-[rgba(80,48,229,0.2)] rounded-md">
              {resources.plus}
            </div>
            <span className="text-[#5030E5] font-bold ml-2 text-sm">
              Invite
            </span>
          </div>
          <div className="w-[16vw] h-fit">
            <div className="flex justify-end items-center w-[5vw] h-[5vh]">
              {resources.profiles.map((data, index) => {
                return (
                  <>
                    <img
                      src={data}
                      className="absolute"
                      alt=""
                      style={{ transform: `translateX(${index * 2.5}vw)` }}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40%] flex justify-between items-center">
        <div className="w-[30%] h-full flex justify-evenly items-center">
          <div className="p-2 flex justify-evenly items-center rounded-md border-[1.5px] border-[#787486]">
            {resources.filter}
            <select className="ml-2 text-[#787486] text-sm bg-transparent outline-none">
              <option selected disabled>
                Filter
              </option>
              <option>Filter-1</option>
              <option>Filter-2</option>
              <option>Filter-3</option>
            </select>
          </div>
          <div className="p-2 flex justify-evenly items-center rounded-md border-[1.5px] border-[#787486]">
            {resources.calender}
            <select className="ml-2 text-[#787486] text-sm bg-transparent outline-none">
              <option selected>Today</option>
              <option>Tommarow</option>
            </select>
          </div>
        </div>
        <div className="w-[25%] h-full flex justify-evenly items-center ">
          <div className="p-2 flex justify-evenly items-center rounded-md border-[1.5px] border-[#787486]">
            {resources.user}
            <span className="text-[#787486] text-sm ml-2">Share</span>
          </div>
          <div className="w-[1.35px] h-[40%] bg-[#787486]"></div>
          <div className="p-2 bg-[#5030E5] rounded-md">{resources.burger}</div>
          <span className="h-7 w-7">{resources.menu_fourdots}</span>
        </div>
      </div>
    </div>
  );
}
