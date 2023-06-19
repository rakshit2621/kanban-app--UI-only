import React, { useRef, useState } from "react";
import "./Tile.css";
import { resources } from "../../../resources/TileResources";

export default function Tile() {
  return (
    <div className="w-full min-h-[75%] flex justify-evenly items-start">
      <div className="w-[30%] h-[65vh] bg-[#F5F5F5] rounded-xl flex flex-col justify-start items-center">
        <div className="w-[90%] h-[10vh] flex flex-col justify-evenly items-center">
          <div className="w-full h-[50%] flex justify-between items-center">
            <div className="w-[40%] h-full flex justify-evenly items-center">
              <div className="w-[0.5vmax] h-[0.5vmax] bg-[#5030E5] rounded-full"></div>
              <span className="text-[0D062D] text-sm">To Do</span>
              <div className="w-[1.7vmax] h-[1.7vmax] bg-[#E0E0E0] flex justify-center items-center text-xs text-[#625F6D] rounded-full">
                4
              </div>
            </div>
            <div className="w-[20%] h-full flex justify-center items-center">
              <div className="p-1 rounded-sm bg-[rgba(80,48,229,0.2)]">
                {resources.fullPlus}
              </div>
            </div>
          </div>
          <div className="w-[95%] h-[3%] bg-[#5030E5]"></div>
        </div>
        <div className="w-[90%] h-[55vh] overflow-y-scroll card ">
          <div className="w-full h-fit ">
            <div className="w-full h-[30vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
              <div className="w-[90%] h-[20%] ">
                <div className="flex justify-between items-center">
                  <span className="bg-[rgba(223,168,116,0.2)] p-1 rounded-md  text-xs text-[#D58D49]">
                    Low
                  </span>
                  {resources.more}
                </div>
              </div>
              <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
                Brainstorming
              </div>
              <div className="w-[90%] h-[30%] text-xs text-[#787486]">
                Brainstorming brings team members' diverse experience into play.
              </div>
              <div className="w-[90%] h-[25%] flex justify-between items-center">
                <div className="w-[25%] h-full flex justify-center items-center">
                  <div className="flex justify-start items-center w-[5vw] h-[5vh]">
                    {resources.users.map((data, index) => {
                      return (
                        <>
                          {index < 3 && (
                            <img
                              src={data}
                              className="relative"
                              style={{
                                transform: `translateX(${index * -0.5}vw)`,
                              }}
                            />
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[75%] h-full flex justify-evenly items-center">
                  <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                    {resources.message}12 comments
                  </div>
                  <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                    {resources.files}0 files
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[30vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
              <div className="w-[90%] h-[20%] ">
                <div className="flex justify-between items-center">
                  <span className="bg-[rgba(216,114,125,0.1)] p-1 rounded-md  text-xs text-[#D8727D]">
                    High
                  </span>
                  {resources.more}
                </div>
              </div>
              <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
                Research
              </div>
              <div className="w-[90%] h-[30%] text-xs text-[#787486]">
                User research helps you to create an optimal product for users.
              </div>
              <div className="w-[90%] h-[25%] flex justify-between items-center">
                <div className="w-[25%] h-full flex justify-center items-center">
                  <div className="flex justify-start items-center w-[5vw] h-[5vh]">
                    {resources.users.map((data, index) => {
                      return (
                        <>
                          {index < 2 && (
                            <img
                              src={data}
                              className="relative"
                              style={{
                                transform: `translateX(${index * -0.5}vw)`,
                              }}
                            />
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[75%] h-full flex justify-evenly items-center">
                  <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                    {resources.message}10 comments
                  </div>
                  <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                    {resources.files}3 files
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[30vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
              <div className="w-[90%] h-[20%] ">
                <div className="flex justify-between items-center">
                  <span className="bg-[rgba(216,114,125,0.1)] p-1 rounded-md  text-xs text-[#D8727D]">
                    High
                  </span>
                  {resources.more}
                </div>
              </div>
              <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
                Wireframes
              </div>
              <div className="w-[90%] h-[30%] text-xs text-[#787486]">
                Low fidelity wireframes include the most basic content and
                visuals.
              </div>
              <div className="w-[90%] h-[25%] flex justify-between items-center">
                <div className="w-[25%] h-full flex justify-center items-center">
                  <div className="flex justify-start items-center w-[5vw] h-[5vh]">
                    {resources.users.map((data, index) => {
                      return (
                        <>
                          {index < 3 && (
                            <img
                              src={data}
                              className="relative"
                              style={{
                                transform: `translateX(${index * -0.5}vw)`,
                              }}
                            />
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[75%] h-full flex justify-evenly items-center">
                  <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                    {resources.message}10 comments
                  </div>
                  <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                    {resources.files}3 files
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] h-[65vh] bg-[#F5F5F5] rounded-xl flex flex-col justify-start items-center">
        <div className="w-[90%] h-[10vh] flex flex-col justify-evenly items-center">
          <div className="w-full h-[50%] flex justify-between items-center">
            <div className="w-[50%] h-full flex justify-evenly items-center">
              <div className="w-[0.5vmax] h-[0.5vmax] bg-[#FFA500] rounded-full"></div>
              <span className="text-[0D062D] text-sm">On Progress</span>
              <div className="w-[1.7vmax] h-[1.7vmax] bg-[#E0E0E0] flex justify-center items-center text-xs text-[#625F6D] rounded-full">
                3
              </div>
            </div>
            <div className="w-[20%] h-full flex justify-center items-center"></div>
          </div>
          <div className="w-[95%] h-[3%] bg-[#FFA500]"></div>
        </div>
        <div className="w-[90%] h-[55vh] overflow-y-scroll card ">
          <div className="w-full h-fit ">
            <div className="w-full h-[33vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
              <div className="w-[90%] h-fit">
                <div className="flex justify-between items-center">
                  <span className="bg-[rgba(223,168,116,0.2)] p-1 rounded-md  text-xs text-[#D58D49]">
                    Low
                  </span>
                  {resources.more}
                </div>
              </div>
              <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
                Onboarding Illustrations
              </div>
              <div className="w-[90%] h-[30%] text-xs text-[#787486] flex justify-evenly items-center">
                <img src={resources.images[2]} />
              </div>
              <div className="w-[90%] h-[25%] flex justify-between items-center">
                <div className="w-[25%] h-full flex justify-center items-center">
                  <div className="flex justify-start items-center w-[5vw] h-[5vh]">
                    {resources.users.map((data, index) => {
                      return (
                        <>
                          {index < 3 && (
                            <img
                              src={data}
                              className="relative"
                              style={{
                                transform: `translateX(${index * -0.5}vw)`,
                              }}
                            />
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[75%] h-full flex justify-evenly items-center">
                  <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                    {resources.message}14 comments
                  </div>
                  <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                    {resources.files}15 files
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[33vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
            <div className="w-[90%] h-fit">
              <div className="flex justify-between items-center">
                <span className="bg-[rgba(223,168,116,0.2)] p-1 rounded-md  text-xs text-[#D58D49]">
                  Low
                </span>
                {resources.more}
              </div>
            </div>
            <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
              Moodboard
            </div>
            <div className="w-[90%] h-[30%] text-xs text-[#787486] flex justify-evenly items-center">
              <img src={resources.images[0]} className="w-[40%]" />
              <img src={resources.images[1]} className="w-[40%]" />
            </div>
            <div className="w-[90%] h-[25%] flex justify-between items-center">
              <div className="w-[25%] h-full flex justify-center items-center">
                <div className="flex justify-start items-center w-[5vw] h-[5vh]">
                  {resources.users.map((data, index) => {
                    return (
                      <>
                        {index < 3 && (
                          <img
                            src={data}
                            className="relative"
                            style={{
                              transform: `translateX(${index * -0.5}vw)`,
                            }}
                          />
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="w-[75%] h-full flex justify-evenly items-center">
                <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                  {resources.message}14 comments
                </div>
                <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                  {resources.files}15 files
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] h-[65vh] bg-[#F5F5F5] rounded-xl flex flex-col justify-start items-center">
        <div className="w-[90%] h-[10vh] flex flex-col justify-evenly items-center">
          <div className="w-full h-[50%] flex justify-between items-center">
            <div className="w-[40%] h-full flex justify-evenly items-center">
              <div className="w-[0.5vmax] h-[0.5vmax] bg-[#76A5EA] rounded-full"></div>
              <span className="text-[0D062D] text-sm">Done</span>
              <div className="w-[1.7vmax] h-[1.7vmax] bg-[#E0E0E0] flex justify-center items-center text-xs text-[#625F6D] rounded-full">
                2
              </div>
            </div>
            <div className="w-[20%] h-full flex justify-center items-center"></div>
          </div>
          <div className="w-[95%] h-[3%] bg-[#8BC48A]"></div>
        </div>
        <div className="w-[90%] h-[55vh] overflow-y-scroll card ">
          <div className="w-full h-fit ">
            <div className="w-full h-[60vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
              <div className="w-[90%] h-fit">
                <div className="flex justify-between items-center">
                  <span className="bg-[rgba(131,194,157,0.2)] p-1 rounded-md  text-xs text-[#68B266]">
                    Completed
                  </span>
                  {resources.more}
                </div>
              </div>
              <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
                Mobile App Design
              </div>
              <div className="w-[90%] h-[30%] text-xs text-[#787486] flex justify-evenly items-center">
                <img src={resources.images[3]} />
              </div>
              <div className="w-[90%] h-[25%] flex justify-between items-center">
                <div className="w-[25%] h-full flex justify-center items-center">
                  <div className="flex justify-start items-center w-[5vw] h-[5vh]">
                    {resources.users.map((data, index) => {
                      return (
                        <>
                          {index < 2 && (
                            <img
                              src={data}
                              className="relative"
                              style={{
                                transform: `translateX(${index * -0.5}vw)`,
                              }}
                            />
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[75%] h-full flex justify-evenly items-center">
                  <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                    {resources.message}12 comments
                  </div>
                  <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                    {resources.files}15 files
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[30vh] p-2 bg-white rounded-xl mt-2 mb-2 flex flex-col justify-evenly items-center">
            <div className="w-[90%] h-[20%] ">
              <div className="flex justify-between items-center">
                <span className="bg-[rgba(131,194,157,0.2)] p-1 rounded-md  text-xs text-[#68B266]">
                  Completed
                </span>
                {resources.more}
              </div>
            </div>
            <div className="w-[90%] h-[15%] font-bold text-md text-[#0D062D]">
              Design System
            </div>
            <div className="w-[90%] h-[30%] text-xs text-[#787486]">
              It just needs to adapt the UI from what you did before
            </div>
            <div className="w-[90%] h-[25%] flex justify-between items-center">
              <div className="w-[25%] h-full flex justify-center items-center">
                <div className="flex justify-start items-center w-[5vw] h-[5vh]">
                  {resources.users.map((data, index) => {
                    return (
                      <>
                        {index < 3 && (
                          <img
                            src={data}
                            className="relative"
                            style={{
                              transform: `translateX(${index * -0.5}vw)`,
                            }}
                          />
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="w-[75%] h-full flex justify-evenly items-center">
                <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                  {resources.message}12 comments
                </div>
                <div className="p-1 text-[#787486] text-xs flex justify-between items-center">
                  {resources.files}15 files
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
