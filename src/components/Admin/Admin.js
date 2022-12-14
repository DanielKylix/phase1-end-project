import React, { useState } from "react";
import "../customer/sign.css";
import { adminSignIn } from "../../Data/Auth";
import { useNavigate } from "react-router-dom";

const AdminSign = () => {
  const initialState = { email: "", password: "" };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    adminSignIn(formData, setErrors, navigate);
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
          <div className="text-center icon">
            <i className="fa fa-user "></i>
          </div>
          <h3 className="text-center mb-3">Admin Login</h3>
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
              <button className="btn btn-primary btn-md">Log In</button>
            </div>
          </form>
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
export default AdminSign;
