import React from "react";
import SideBar from "./side_bar/SideBar";
import Main from "./main_tile/Main";

export default function Container() {
  return (
    <div className="w-full h-[90vh] flex justify-between items-center">
      <SideBar />
      <Main />
    </div>
  );
}
