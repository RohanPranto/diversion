import React from "react";
import { Link } from "react-router-dom";

export default function HouseHelp({ HouseHelpsObj }) {
  const num="+916291637373"
  return (
    <>
      {HouseHelpsObj.length === 0 ? (
        <>
          <h1>Loading.......</h1>
        </>
      ) : (
        <>
          <div className="container eleccontainer">
          <div className="banner">
            <h1>HouseHelp</h1>
          </div>          
            <div className="row">
                {HouseHelpsObj.map((HouseHelp, key) => (
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
                            <b>{HouseHelp.shopType}</b>
                          </h2>
                          <p className="card-text">{HouseHelp.description}</p>
                          <p>
                            City : <b>{HouseHelp.city}</b>
                          </p>
                          <p>
                            Address : <b>{HouseHelp.address}</b>
                          </p>
                          <br /> <br /> <br />
                          <i className="fas fa-user"></i> Name :{" "}
                          {HouseHelp.ownerName} <br />
                          <i className="fas fa-phone-square"></i>  Phone :{"     "}
                          {HouseHelp.phoneNo} <br />
                          <i className="fas fa-envelope-square"></i>Mail Id:{" "}
                          {HouseHelp.email} <br /> <br />
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
                                    Location Send!
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
