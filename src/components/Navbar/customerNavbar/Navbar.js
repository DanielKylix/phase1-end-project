import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import { getAcceptedRequests } from "../../../Data/customerRequest";
import "../../customer/sign.css";
const CustomerNavbar = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("customerprofile"))
  );
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    localStorage.removeItem("customerprofile");
    navigate("/");
    setUser(null);
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("customerprofile")));
  }, [location]);
  const name = user.json.result.name;
  const date = new Date();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAcceptedRequests(user.json.result._id, setData);
  }, [user.json.result._id]);

  return (
    <div>
      {user ? (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Garbage Hauler System
              </a>
              <button
                style={{ color: "black" }}
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  style={{ color: "black" }}
                  className="navbar-toggler-icon"
                ></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/customer/pickup">
                      Book
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/customer/accepted-orders">
                      Accepted orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href=" /customer/accepted-payment">
                      Payment receipts
                    </a>
                  </li>
                </ul>
                <div className="">
                  <h6 style={{ color: "white" }} className="mt-4">
                    {" "}
                    Welcome, {user.json.result.name}
                  </h6>{" "}
                  <br />
                </div>
                <ul>
                  <li
                    className="nav-item dropdown mt-3 "
                    style={{ marginRight: "180px" }}
                  >
                    <a
                      className="nav-link "
                      href="#home"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ color: "white" }}
                    >
                      <i
                        className="fa fa-user"
                        style={{ fontSize: "28px", color: "white" }}
                      ></i>{" "}
                      Profile
                    </a>
                    <div className="container mt-2 ">
                      <div
                        className="dropdown-menu "
                        style={{ color: "black" }}
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="mb-1 p-1" style={{ display: "flex" }}>
                          <div
                            className="card text-center "
                            style={{ width: "50px", borderRadius: "70px" }}
                          >
                            <h4>{name.charAt(0)} </h4>
                          </div>
                          <div className="mb-3">
                            <h7 style={{ marginLeft: "10px" }} className="pt-1">
                              {" "}
                              {user.json.result.email}
                            </h7>
                          </div>
                        </div>
                        <div
                          style={{ display: "flex", paddingLeft: "20px" }}
                          className="p-2"
                        >
                          <div
                            className="card text-center"
                            style={{ width: "200px" }}
                          >
                            <h5>You have made {data.length} Bookings</h5>
                          </div>
                        </div>
                        <div>
                          <div className=" p-2">
                            <Link to="/customer/pickup">
                              <button className="btn btn-primary btn-sm">
                                Schedule booking
                              </button>
                            </Link>
                            <hr />
                            <div style={{ paddingLeft: "20px" }}>
                              <h5 className="p-1">
                                {date.toLocaleDateString("en-US")}
                              </h5>
                            </div>
                          </div>
                          <div className=" p-1">
                            <Link to="/customer/accepted-orders">
                              <button className="btn btn-primary btn-sm">
                                View bookings
                              </button>
                            </Link>
                          </div>
                          <div className=" p-1">
                            <button
                              className="btn btn-danger btn-md"
                              onClick={logout}
                            >
                              Logout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
};
export default CustomerNavbar;
