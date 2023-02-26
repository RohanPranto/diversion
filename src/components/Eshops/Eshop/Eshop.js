import React from "react";
import { Link } from "react-router-dom";

export default function Eshop({ EshopsObj }) {
  const num="+916291637232"
  return (
    <>
      {EshopsObj.length === 0 ? (
        <>
          <h1>Loading.......</h1>
        </>
      ) : (
        <>
          <div className="container eleccontainer">
          <div className="banner">
            <h1>Electrician</h1>
          </div>          
            <div className="row">
                {EshopsObj.map((Eshop, key) => (
                  <>
                    <div className="col-lg-4 mb-4">
                      <div className="card">
                      <img
                          src="https://www.build-review.com/wp-content/uploads/2022/03/Electrician.jpg"
                          alt=""
                          className="img-fluid card_image"
                        />
                        <div className="card-body">
                        
        
                          <h2 className="card-title">
                            <b>{Eshop.shopType}</b>
                          </h2>
                          <p className="card-text">{Eshop.description}</p>
                          <p>
                            City : <b>{Eshop.city}</b>
                          </p>
                          <p>
                            Address : <b>{Eshop.address}</b>
                          </p> 
                          <i className="fas fa-user"></i> Name :{" "}
                          {Eshop.ownerName} <br />
                          <i className="fas fa-phone-square"></i>  Phone :{"     "}
                          {Eshop.phoneNo} <br />
                          <i className="fas fa-envelope-square"></i>Mail Id:{" "}
                          {Eshop.email} <br /> <br />
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
