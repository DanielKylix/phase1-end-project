import React, { useState } from "react";
import "../customer/sign.css";
import { clientSignUp } from "../../Data/Auth";

import { useNavigate } from "react-router-dom";
const CustomerSign = () => {
  const initialState = {
    name: "",
    email: "",
    phone_number: "",
    address: "",
    password: "",
  };
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState();
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const switchmode = () => {
    setIsSignUp((prev) => !prev);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    clientSignUp(formData, isSignUp, navigate, setErrors, setIsLoading);
  };

  return (
    <div className="container sign mt-5">
      {errors ? (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          {errors}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        ""
      )}

      <div className="row padding">
        <div className="col-lg-6 col-md-6 col-sm-12">
          {isSignUp ? (
            <>
              <div className="text-center icon">
                <i className="fa fa-user "></i>
              </div>
              <h3 className="text-center mb-3">Customer Registration</h3>
            </>
          ) : (
            <>
              <div className="text-center icon">
                <i className="fa fa-user login-header "></i>
              </div>
              <h3 className="text-center">Customer Login</h3>
            </>
          )}
          {isSignUp ? (
            <form onSubmit={onSubmit}>
              <div className="row padding">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      onChange={handleChange}
                      class="form-control"
                      id="floatingInput"
                      placeholder="John"
                      name="name"
                      required
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      onChange={handleChange}
                      class="form-control"
                      id="floatingInput"
                      placeholder="07********"
                      name="phone_number"
                      required
                    />
                    <label for="floatingInput">Phone Number</label>
                  </div>
                </div>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="email"
                  onChange={handleChange}
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                  required
                />
                <label for="floatingInput">Email Address</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  onChange={handleChange}
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Kikuyu"
                  name="address"
                  required
                />
                <label for="floatingPassword">Address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  onChange={handleChange}
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                  required
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="text-center mb-3">
                {isloading ? (
                  <button className="btn btn-primary btn-md" disabled>
                    Registering
                  </button>
                ) : (
                  <button className="btn btn-primary btn-md">Register</button>
                )}
              </div>
              <div className="text-center mb-3">
                <button className="btn btn-outline btn-md" onClick={switchmode}>
                  Already have an account,click here to login
                </button>
              </div>
            </form>
          ) : (
            <form className="login" onSubmit={onSubmit}>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  onChange={handleChange}
                  class="form-control"
                  id="floatingPassword"
                  placeholder="name@example.com"
                  name="email"
                  required
                />
                <label for="floatingPassword">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  onChange={handleChange}
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                  required
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="text-center mb-3">
                {isloading ? (
                  <button className="btn btn-primary btn-md" disabled>
                    Logging in
                  </button>
                ) : (
                  <button className="btn btn-primary btn-md">Log In</button>
                )}
              </div>
              <div className="text-center mb-3">
                <button className="btn btn-outline btn-md" onClick={switchmode}>
                  Don't have an account,click here to Register
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="col-lg-6">
          <img
            src="https://images.pexels.com/photos/7048045/pexels-photo-7048045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            class="img-fluid"
            alt="Responsive"
          />
        </div>
      </div>
    </div>
  );
};
export default CustomerSign;
