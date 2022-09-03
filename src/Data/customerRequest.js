import { api } from "./Api";
const getVendorData = async (setData) => {
  try {
    const response = await fetch(`${api}/vendor/register`);
    const result = await response.json();
    console.log(result);
    setData(result);
  } catch (error) {
    console.log(error);
  }
};

const makeBooking = (
  data,
  setIsLoading,
  setErrors,
  navigate,
  id,
  vendorName
) => {
  fetch(`${api}/customer/book/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log("json", json);
      if (json.message) {
        setIsLoading(false);
        setErrors(json.message);
      } else {
        alert("The request has been sent to " + vendorName);
        navigate("/customer/pickup");
      }
    });
};
const makePayment = (data, setIsLoading, navigate, id) => {
  fetch(`${api}/customer/pay/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log("json", json);
      if (json.message) {
        setIsLoading(false);
      } else {
        alert("Confirm your payment");
        navigate("/customer/pickup");
      }
    });
};
const getAcceptedPayments = async (id, setData) => {
  try {
    const response = await fetch(`${api}/customer/pay/${id}`);
    const result2 = await response.json();
    setData(result2);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
};
const getAcceptedRequests = async (id, setData) => {
  try {
    const response = await fetch(`${api}/customer/book/${id}`);
    const result2 = await response.json();
    setData(result2);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
};

export {
  getVendorData,
  makeBooking,
  makePayment,
  getAcceptedPayments,
  getAcceptedRequests,
};
