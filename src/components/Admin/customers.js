import React, { useEffect, useState } from "react";
import AdminNavbar from "../Navbar/adminNavbar/Navbar";
import axios from "axios";
import "./Admin.css";
import { api } from "../../Data/Api";

const CustomersData = () => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(`${api}/admin/customers`);
      const result = await response.json();
      console.log(result.body);
      setCustomerData(result.body);
    } catch (error) {
      console.log(error);
    }
  };
  const onDelete = async (id) => {
    axios.delete(`${api}/admin/customers/${id}`);
  };
  return (
    <div>
      <AdminNavbar />
      <div className="container graphs">
        <h5 className="text-center mb-3">Customers Information</h5>
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
          {customerData.map((customer) => (
            <tbody>
              <tr>
                <th>{customer.name}</th>
                <td>{customer.email}</td>
                <td>{customer.phone_number}</td>
                <td>{customer.address}</td>
                <td>
                  <div className=" m-2 ">
                    <button
                      className="btn btn-sm btn-danger m-2"
                      onClick={() => onDelete(customer._id)}
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
export default CustomersData;
