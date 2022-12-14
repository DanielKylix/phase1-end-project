import React, { useEffect, useState } from "react";
import AdminNavbar from "../Navbar/adminNavbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import { api } from "../../Data/Api";

const VendorsData = () => {
  const [vendorData, setVendorData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(`${api}/admin/vendors`);
      const result = await response.json();
      console.log(result.body);
      setVendorData(result.body);
    } catch (error) {
      console.log(error);
    }
  };
  const onDelete = async (id) => {
    axios.delete(`${api}/admin/vendors/${id}`);
    navigate(0);
  };
  return (
    <div>
      <AdminNavbar />
      <div className="container graphs">
        <h5 className="text-center mb-3">Vendors Information</h5>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">phone number</th>
              <th scope="col">address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {vendorData.map((vendor) => (
            <tbody>
              <tr>
                <th>{vendor.name}</th>
                <td>{vendor.email}</td>
                <td>{vendor.phone_number}</td>
                <td>{vendor.location}</td>
                <td>
                  <div className=" m-2 ">
                    <button
                      className="btn btn-sm btn-danger m-2"
                      onClick={() => onDelete(vendor._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
export default VendorsData;
