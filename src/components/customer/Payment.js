import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./sign.css";
import CustomerNavbar from "../Navbar/customerNavbar/Navbar";
import { makePayment } from "../../Data/customerRequest";
const CustomerPayment = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("customerprofile"))
  );
  const [vendor, setVendor] = useState(
    JSON.parse(localStorage.getItem("VendorID"))
  );
  const [booking, setBooking] = useState(
    JSON.parse(localStorage.getItem("BookID"))
  );
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("customerprofile")));
    setBooking(JSON.parse(localStorage.getItem("BookID")));
    setVendor(JSON.parse(localStorage.getItem("VendorID")));
  }, [location]);

  function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let amount = getRandomNumberBetween(100, 1000);

  const onSubmit = (e) => {
    e.preventDefault();

    const type = "paypal";
    const post = {
      type,
      amount,
      customer: user.json.result._id,
      vendor: vendor.id,
    };
    makePayment(post, setIsLoading, navigate, user.json.result._id);
  };

  return (
    <div>
      <CustomerNavbar />
      <div className="container vendor-booking mt-2">
        <h5 className="text-center">
          Complete your payment <i class="fa fa-cc-visa"></i>
        </h5>
        <div className="card">
          <form onSubmit={onSubmit}>
            <div class="form-floating mb-3">
              <input
                type="text"
                disabled={true}
                value="Paypal"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="type"
                required
              />
              <label for="floatingInput">Payment mode</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="currency"
                disabled={true}
                value={amount}
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="amount"
                required
              />
              <label for="floatingInput">Amount</label>
            </div>

            <div className="text-center mb-3">
              {isLoading ? (
                <button className="btn btn-primary btn-md" disabled>
                  making payment
                </button>
              ) : (
                <button className="btn btn-primary btn-md">Pay</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerPayment;
