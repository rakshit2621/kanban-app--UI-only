import React from "react";
import Head from "./Head";
import Tile from "./Tile";

export default function Main() {
  return (
    <div className="w-[80%] h-full">
      <Head />
      <Tile />
    </div>
  );
}
