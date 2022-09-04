import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./sign.css";
import CustomerNavbar from "../Navbar/customerNavbar/Navbar";
import { getAcceptedPayments } from "../../Data/customerRequest";
const AcceptedPayments = () => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("customerprofile"))
  );
  const location = useLocation();
  const [data, setData] = useState([]);
  console.log(user.json.result._id);
  useEffect(() => {
    getAcceptedPayments(user.json.result._id, setData);
  }, [user.json.result._id]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("customerprofile")));
  }, [location]);

  return (
    <div>
      <CustomerNavbar />
      <div className="container booking mt-5">
        {data.message ? (
          <div>
            <h5>No payment has been received</h5>
          </div>
        ) : (
          <>
            <div className="row padding">
              {data.map((pay) => (
                <>
                  {pay.received === true ? (
                    <div
                      className="card text-center row"
                      style={{ width: "20.5rem" }}
                    >
                      <h5>Payment Receipt</h5>
                      <div style={{ display: "flex", padding: "10px" }}>
                        <h6>Order No: </h6>{" "}
                        <p style={{ marginLeft: "5px" }}> {pay._id}</p>
                      </div>
                      <div style={{ display: "flex", padding: "10px" }}>
                        <h6>Received By: </h6>{" "}
                        <p style={{ marginLeft: "5px" }}> {pay.vendor.name}</p>
                      </div>
                      <div style={{ display: "flex", padding: "10px" }}>
                        <h6>Paid By: </h6>{" "}
                        <p style={{ marginLeft: "5px" }}>
                          {" "}
                          {user.json.result.name}
                        </p>
                      </div>
                      <div style={{ display: "flex", padding: "10px" }}>
                        <h6>Paid Via: </h6>{" "}
                        <p style={{ marginLeft: "5px" }}>{pay.type}</p>
                      </div>
                      <div style={{ display: "flex", padding: "10px" }}>
                        <h6>Amount: </h6>{" "}
                        <p style={{ marginLeft: "5px" }}>{pay.amount} only</p>
                      </div>
                      <div style={{ display: "flex", padding: "10px" }}>
                        <h6>Paid On: </h6>{" "}
                        <p style={{ marginLeft: "5px" }}>
                          {new Date(pay.createdAt).toLocaleDateString(
                            undefined,
                            options
                          )}
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default AcceptedPayments;
