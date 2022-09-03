import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./sign.css";
import CustomerNavbar from "../Navbar/customerNavbar/Navbar";
import { makeBooking } from "../../Data/customerRequest";

const CustomerBooking = () => {
  const navigate = useNavigate();

  const [currentvendorName, setCurrentvendorName] = useState(
    JSON.parse(localStorage.getItem("currentvendor"))
  );
  const [currentvendorId, setCurrentvendorId] = useState(
    JSON.parse(localStorage.getItem("currentvendorId"))
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("customerprofile"))
  );
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const location = useLocation();
  useEffect(() => {
    setCurrentvendorName(JSON.parse(localStorage.getItem("currentvendor")));
    setCurrentvendorId(JSON.parse(localStorage.getItem("currentvendorId")));
    setUser(JSON.parse(localStorage.getItem("customerprofile")));
  }, [location]);

  const initialState = { details: "" };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const phoneNumber = user.json.result.phone_number;
  const email = user.json.result.email;
  const name = user.json.result.name;

  const onSubmit = (e) => {
    e.preventDefault();
    const vendor = currentvendorId.id;
    const customer = user.json.result._id;
    const date = startDate;
    const details = formData.details;

    const post = {
      date,
      details,
      vendor,
      customer,
    };
    makeBooking(
      post,
      setIsLoading,
      setErrors,
      navigate,
      customer,
      currentvendorName.name
    );
  };

  return (
    <div>
      <CustomerNavbar />
      <div className="container vendor-booking mt-2">
        <h5 className="text-center">
          Make a booking from, {currentvendorName.name}
        </h5>
        <div className="card">
          <form onSubmit={onSubmit}>
            <div class="form-floating mb-3">
              <input
                type="text"
                disabled={true}
                value={name}
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="type"
                required
              />
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                disabled={true}
                value={email}
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="type"
                required
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                disabled={true}
                value={phoneNumber}
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="type"
                required
              />
              <label for="floatingInput">Phone Number</label>
            </div>
            <div class="form-floating mb-3">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="form-control date"
              />
            </div>

            <div class="form-floating mb-3">
              <textarea
                rows="3"
                type="text"
                onChange={handleChange}
                class="form-control"
                id="floatingInput"
                placeholder="07********"
                name="details"
                required
              />
              <label for="floatingInput">Details</label>
            </div>

            <div className="text-center mb-3">
              {isLoading ? (
                <button className="btn btn-primary btn-md" disabled>
                  Booking
                </button>
              ) : (
                <button className="btn btn-primary btn-md">Book</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerBooking;
