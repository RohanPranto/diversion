import React from "react";
import { Link } from "react-router-dom";

export default function Appliancerepairs({ AppliancerepairsObj }) {
  const num="+916291637233"
  return (
    <>
      { AppliancerepairsObj.length === 0 ? (
        <>
          <h1>Loading.......</h1>
        </>
      ) : (
        <>
          <div className="container eleccontainer">
          <div className="banner">
            <h1>Appliancerepair</h1>
          </div>          
            <div className="row">
                { AppliancerepairsObj.map((Appliancerepair, key) => (
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
                            <b>{Appliancerepair.shopType}</b>
                          </h2>
                          <p className="card-text">{Appliancerepair.description}</p>
                          <p>
                            City : <b>{Appliancerepair.city}</b>
                          </p>
                          <p>
                            Address : <b>{Appliancerepair.address}</b>
                          </p>
                          <br /> <br /> <br />
                          <i className="fas fa-user"></i> Name :{" "}
                          {Appliancerepair.ownerName} <br />
                          <i className="fas fa-phone-square"></i>  Phone :{"     "}
                          {Appliancerepair.phoneNo} <br />
                          <i className="fas fa-envelope-square"></i>Mail Id:{" "}
                          {Appliancerepair.email} <br /> <br />
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
                                    Get location!
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
