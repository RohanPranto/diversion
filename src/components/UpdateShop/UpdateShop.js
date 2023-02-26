import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { updateShop } from "../../actions/shop";
import { useDispatch } from "react-redux";
export default function UpdateShop({ shopDetails }) {
  // console.log(shopDetails);
  const [shop, setShop] = useState(shopDetails);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(shop);
    dispatch(updateShop(shop._id, shop));
    alert(" details Updated...!!");
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <form onSubmit={submitHandler}>
        <div className="container-lg">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="contact-form">
                <h1>Join Us</h1>
                <p className="hint-text">
                  Join your shop with us for selling your items online!!!
                </p>

                {/* ---------------------------------------------name, phone, email--------------------------------------------- */}

                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        required
                        value={shop.ownerName}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            ownerName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        required
                        value={shop.email}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputPhone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        required
                        value={shop.phoneNo}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            phoneNo: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <br />

                {/* --------------------------------------------------city, shop name, ------------------------------------------------------- */}
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="workexperience">Work Experience</label>
                      <input
                        type="text"
                        className="form-control"
                        id="workexperience"
                        required
                        value={shop.workexperience}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            workexperience: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="city">city</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        required
                        value={shop.city}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                    <a
                    href="https://www.latlong.net/convert-address-to-lat-long.html"
                    className="col-sm-8 btn btn-primary buttionSize"
                    target="_blank"
                    rel="noopener noreferrer"
                    height="10px"
                  >
                    Get Location
                  </a>
                  </div>
                  {/* <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlFile1">
                        Choose Shop Photo
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                      />
                    </div>
                  </div> */}
                </div>
                <br />
                {/* ------------------------------------------------userName, password-------------------------------------------------------- */}
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="userName">userName</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        required
                        value={shop.userName}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            userName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="passWord">password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        value={shop.passWord}
                        onChange={(e) =>
                          setShop({
                            ...shop,
                            passWord: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <br />
                {/* ------------------------------------------------Shop type, address ------------------------------------------------------- */}

                {/* <div className="col-sm-4"> */}
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={shop.address}
                    onChange={(e) =>
                      setShop({
                        ...shop,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <br />
                {/* ------------------------------------------------shop type------------------------------------------------------ */}
                <div>
                  <label htmlFor="ShopType">ShopType:</label>
                  <select
                    name="ShopType"
                    id="ShopType"
                    onChange={(e) =>
                      setShop({
                        ...shop,
                        shopType: e.target.value,
                      })
                    }
                  >
                    <option value="plumbing">Carpenter</option>
                    <option value="electric">Electric</option>
                    <option value="mechanic">Mechanic</option>
                    <option value="gardener">Gardener</option>
                    <option value="househelp">House Help</option>
                  </select>
                </div>
                <br />
                {/* -------------------------------------------------Items ----------------------------------------------------- */}
                <div>
                  <p>
                    <a
                      className="btn btn-primary"
                      data-bs-toggle="collapse"
                      href="#pemitems"
                      role="button"
                      aria-expanded="false"
                      aria-controls="pemitems"
                    >
                      {shop.shopType}
                    </a>
                  </p>

                  <div className="row" id="pemitems" height="">
                   
                  </div>
                </div>
                <br />
                {/* ------------------------------------------------description------------------------------------------------------- */}

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Description About Yourself
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={shop.description}
                    onChange={(e) =>
                      setShop({
                        ...shop,
                        description: e.target.value,
                      })
                    }
                  />
                </div>

                {/* ----------------------------------------------------submit------------------------------------------------------------ */}
                <br />
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-paper-plane" /> Update your Shop
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </form>
    </>
  );
}
