import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import HouseHelp from "./HouseHelp/HouseHelp";

export default function HouseHelps() {
  const shop = useSelector((state) => state.shop);
  let es = [];
  if (shop.length !== 0) {
    es = shop.filter((househelp) => househelp.shopType === "househelp");
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <HouseHelp HouseHelpsObj={es} />
    </>
  );
}
