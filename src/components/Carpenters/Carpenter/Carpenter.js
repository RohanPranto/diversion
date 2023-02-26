import React from "react";
import { Link } from "react-router-dom";

export default function  Carpenters({  CarpentersObj }) {
  const num="+916291737273"
  return (
    <>
      { CarpentersObj.length === 0 ? (
        <>
          <h1>Loading.......</h1>
        </>
      ) : (
        <>
          <div className="container eleccontainer">
          <div className="banner">
            <h1>Carpenter</h1>
          </div>          
            <div className="row">
                { CarpentersObj.map(( Carpenter, key) => (
                  <>
                    <div className="col-lg-4 mb-4">
                      <div className="card">
                        <img
                          src="https://images.app.goo.gl/C6kwDGHbfjWhaQRH6"
                          alt=""
                          className="card_image"
                        />
                        <div className="card-body">
                          <h2 className="card-title">
                            <b>{Carpenter.shopType}</b>
                          </h2>
                          <p className="card-text">{Carpenter.description}</p>
                          <p>
                            City : <b>{Carpenter.city}</b>
                          </p>
                          <p>
                            Address : <b>{Carpenter.address}</b>
                          </p>
                          <br /> <br /> <br />
                          <i className="fas fa-user"></i> Name :{" "}
                          {Carpenter.ownerName} <br />
                          <i className="fas fa-phone-square"></i>  Phone :{"     "}
                          {Carpenter.phoneNo} <br />
                          <i className="fas fa-envelope-square"></i>Mail Id:{" "}
                          {Carpenter.email} <br /> <br />
                          <button
                                    type="button"
                                    className="btn btn-primary distclass"
                                    onClick={() => {
                                      fetch(
                                        `https://oneclicker.onrender.com/send-text?recipient=${num}& Done`
                                      ).catch((err) => console.error(err));
                                      alert`Your location has been shared`
                                    }}
                                  >
                                    Get Location
                                  </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
        </>
      )}
    </>
  );
}
