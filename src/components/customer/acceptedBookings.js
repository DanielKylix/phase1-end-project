import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./sign.css";
import CustomerNavbar from "../Navbar/customerNavbar/Navbar";
import { getAcceptedRequests } from "../../Data/customerRequest";
const AcceptedBookings = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("customerprofile"))
  );
  const location = useLocation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAcceptedRequests(user.json.result._id, setData);
  }, [user.json.result._id]);

  useEffect(() => {
    // const token =user?.token;
    setUser(JSON.parse(localStorage.getItem("customerprofile")));
  }, [location]);

  const onClick = (id, bookingId) => {
    localStorage.setItem("VendorID", JSON.stringify({ id }));
    localStorage.setItem("BookID", JSON.stringify({ bookingId }));
    navigate("/customer/payment");
  };

  return (
    <div>
      <CustomerNavbar />
      <div className="container booking mt-5">
        {data.message ? (
          <div>
            <h5>You have not made any booking</h5>
          </div>
        ) : (
          <>
            <div className="row padding">
              <>
                {data.map((book) => (
                  <>
                    {book.payed === true ? (
                      <>
                        <div
                          className="card text-center row"
                          style={{ width: "20rem" }}
                        >
                          <div>
                            <p>
                              Your order number {book._id} was received and
                              accepted by {book.vendor.name}, please click on
                              the payment button to continue to complete the
                              payment
                            </p>
                            <div className="m-2">
                              <>
                                <button
                                  className="btn btn-md btn-danger"
                                  disabled={true}
                                >
                                  Paid
                                </button>
                              </>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {book.status === true ? (
                          <div
                            className="card text-center row"
                            style={{ width: "20rem" }}
                          >
                            <div>
                              <p>
                                Your order number {book._id} was received and
                                accepted by {book.vendor.name}, please click on
                                the payment button to continue to complete the
                                payment
                              </p>
                              <div className="m-2">
                                <>
                                  <button
                                    className="btn btn-md btn-success "
                                    onClick={() =>
                                      onClick(book.vendor._id, book._id)
                                    }
                                  >
                                    Payment
                                  </button>
                                </>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </>
                    )}
                  </>
                ))}
              </>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default AcceptedBookings;
