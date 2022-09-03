import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getVendorData } from "../../Data/customerRequest";
import CustomerNavbar from "../Navbar/customerNavbar/Navbar";
import "./sign.css";
const SchedulePickUp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getVendorData(setData);
  }, []);

  const buttonHandler = (id, name) => {
    localStorage.setItem("currentvendorId", JSON.stringify({ id }));
    localStorage.setItem("currentvendor", JSON.stringify({ name }));
  };
  return (
    <div>
      <CustomerNavbar />
      <div className="container booking mt-5">
        <div className="row padding">
          {data.map((vendor) => (
            <div className="card" style={{ width: "20rem" }}>
              <h5 className="card-header text-center ">{vendor.company}</h5>

              <div className="card-body">
                <img
                  src="https://i.pinimg.com/736x/cd/cc/b0/cdccb0f1158ad41f0217496ab2757e9a.jpg"
                  className="img-fluid"
                  alt="Responsive"
                />
                <p className="display-8 text-center">
                  {vendor.company} is located in {vendor.location}, make a
                  booking or reach {vendor.name}, on phone number{" "}
                  {vendor.phone_number}
                </p>
                <Link to="/customer/booking">
                  <div className="text-center">
                    <button
                      className="btn btn-md btn-info"
                      onClick={() => buttonHandler(vendor._id, vendor.name)}
                    >
                      Make a booking
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SchedulePickUp;
