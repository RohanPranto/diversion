import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Homepainting from "./Homepainting/Homepainting";

export default function Homepaintings() {
  const shop = useSelector((state) => state.shop);
  let es = [];
  if (shop.length !== 0) {
    es = shop.filter((homepainting) => homepainting.shopType === "homepainting");
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Homepainting HomepaintingsObj={es} />
    </>
  );
}
