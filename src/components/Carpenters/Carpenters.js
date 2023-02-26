import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Carpenter from "./Carpenter/Carpenter";

export default function Carpenters() {
  const shop = useSelector((state) => state.shop);
  let es = [];
  if (shop.length !== 0) {
    es = shop.filter((carpenter) => carpenter.shopType === "carpenter");
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Carpenter CarpentersObj={es} />
    </>
  );
}
