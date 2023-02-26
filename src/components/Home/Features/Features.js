import React from "react";
import banner1 from "../../../assets/banner1.jpg";
import { FcNext, FcPrevious } from "react-icons/fc";
import herobg from "../../../assets/herobg.png"
import "./Banner.css";

export default function Features() {
  return (
    <>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{height:"400px"}}>
            <img src={herobg} className="d-block w-100" alt="..." />
          </div>
        </div>
    </>
  );
}