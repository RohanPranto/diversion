import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
import Payment from "../Payment/Payment";
import service1 from "../../../assets/service1.jpg";
import service2 from "../../../assets/service2.png";
import service3 from "../../../assets/service3.png";
import service4 from "../../../assets/service4.png";
import service5 from "../../../assets/service5.png";
import service6 from "../../../assets/service6.png";
import AdminSignUp from "../../Admin/AdminSignUp";

export default function Service({ customerDetails }) {
  return (
    <>
      <div className="container servicecontainer" id="services">
        <h1 className="serviceheader">Our Services</h1>
        <div className="cards_parent">

          <div className="card workcard">
            <div className=" workcard_body">
              <img
                src={service1}
                alt="Electrical Shops"
              />
              <h3 className="  text-truncate workname">
                Electrician
              </h3>
              <span className="text justify-content  ">
                Find the nearest shops of your electrical  materials.
              </span>
              <div className="d-block  ">
                <Link to="/Eshops">
                  <button className=" btn service_btn btn-warning">e-Shop</button>
                </Link>
                <Link to="/Payment">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Pay-Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service2} width={30} alt="Mechanic shops" />
              <h3 className="  text-truncate workname">Mechanic</h3>
              <span className="text justify-content  ">
                Find the nearest Mechanic shops of your mechanical needs.
              </span>
              <div className="d-block  ">
              <Link to="/Mshops">
                  <button className=" btn service_btn btn-warning">m-Shop</button>
                </Link>
                <Link to="/Payment">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Pay-Now
                  </button>
                </Link>
               
              </div>
            </div>
          </div>

          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service3} width={30} alt="Plumbing shops" />
              <h3 className="  text-truncate workname">Plumber</h3>
              <span className="text justify-content  ">
                Find the nearest  shops of your Hardware materials.              </span>
              <div className="d-block  ">
              <Link to="/Pshops">
                  <button className=" btn service_btn btn-warning">Hardware-Shop</button>
                </Link>
                <Link to="/Payment">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Pay-Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service3} width={30} alt="Plumbing shops" />
              <h3 className="  text-truncate workname">Homepainting</h3>
              <span className="text justify-content  ">
                Find the nearest  shops of your Hardware materials.              </span>
              <div className="d-block  ">
              <Link to="/Homepaintings">
                  <button className=" btn service_btn btn-warning">Hardware-Shop</button>
                </Link>
                <Link to="/Payment">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Pay-Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service3} width={30} alt="Plumbing shops" />
              <h3 className="  text-truncate workname">Carpenter</h3>
              <span className="text justify-content  ">
                Find the nearest  shops of your Hardware materials.              </span>
              <div className="d-block  ">
              <Link to="/Carpenters">
                  <button className=" btn service_btn btn-warning">Hardware-Shop</button>
                </Link>
                <Link to="/Payment">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Pay-Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service3} width={30} alt="Plumbing shops" />
              <h3 className="  text-truncate workname">Appliancerepair</h3>
              <span className="text justify-content  ">
                Find the nearest  shops of your Hardware materials.              </span>
              <div className="d-block  ">
              <Link to="/Homepaintings">
                  <button className=" btn service_btn btn-warning">Hardware-Shop</button>
                </Link>
                <Link to="/Appliancerepairs">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Pay-Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service3} width={30} alt="Plumbing shops" />
              <h3 className="  text-truncate workname">Gardeners</h3>
              <span className="text justify-content  ">
                Find the nearest  shops of your Hardware materials.              </span>
              <div className="d-block  ">
              <Link to="/Gardeners">
                  <button className=" btn service_btn btn-warning">Househelp</button>
                </Link>
                <Link to="/Payment">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Pay-Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service3} width={30} alt="Plumbing shops" />
              <h3 className="  text-truncate workname">HouseHelp</h3>
              <span className="text justify-content  ">
                Find the nearest  shops of your Hardware materials.              </span>
              <div className="d-block  ">
              <Link to="/Househelps">
                  <button className=" btn service_btn btn-warning">Hardware-Shop</button>
                </Link>
                <Link to="/Payment">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Pay-Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card workcard">
            <div className=" workcard_body">
              <img src={service5} width={30} alt="Shop Join" />
              <h3 className="  text-truncate workname">Join Us</h3>
              <span className="text justify-content  ">
                Join your shop with us and sell your items online
              </span>
              <br />
              <div className="d-block  ">
                <Link to="/ShopJoin">
                  <button className="  btn service_btn btn-warning" data-inline="true">
                    Add Shop
                  </button>
                </Link>
                <Link to="/ShopSignin">
                  <button
                    className=" btn service_btn btn-warning"
                    data-inline="true"
                    style={{ marginLeft: "10px" }}
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>

      
       

        </div>
      </div>
    </>
  );
}