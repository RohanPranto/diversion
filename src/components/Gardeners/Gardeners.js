import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Gardener from "./Gardener/Gardener";

export default function Gardeners() {
  const shop = useSelector((state) => state.shop);
  let es = [];
  if (shop.length !== 0) {
    es = shop.filter((gardener) => gardener.shopType === "gardener");
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Gardener GardenersObj={es} />
    </>
  );
}
