import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Appliancerepair from "./Appliancerepair/Appliancerepair"

export default function Appliancerepairs() {
  const shop = useSelector((state) => state.shop);
  let es = [];
  if (shop.length !== 0) {
    es = shop.filter((Appliancerepair) => Appliancerepair.shopType === "Appliancerepair");
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Appliancerepair AppliancerepairsObj={es} />
    </>
  );
}
