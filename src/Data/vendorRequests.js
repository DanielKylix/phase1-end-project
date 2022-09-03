import { api } from "./Api";
import axios from "axios";

const requestsMade = async (id, setData) => {
  try {
    const response = await fetch(`${api}/vendor/book/${id}`);
    const result = await response.json();
    console.log(result);
    setData(result);
  } catch (error) {
    console.log(error);
  }
};
const acceptedRequests = async (id, setData) => {
  try {
    const response = await fetch(`${api}/vendor/book/${id}`);
    const result2 = await response.json();
    setData(result2);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
};

const payments = async (id, setData) => {
  try {
    const response = await fetch(`${api}/vendor/pay/${id}`);
    const result = await response.json();
    console.log(result);
    setData(result);
  } catch (error) {
    console.log(error);
  }
};
const onPatchPayment = (id) => {
  axios.patch(`${api}/vendor/pay/${id}`);
};

const onPatchRequest = (id) => {
  axios.patch(`${api}/vendor/book/${id}`);
};
const onDeleteRequest = async (id) => {
  axios.delete(`${api}/vendor/book/${id}`);
};

export {
  requestsMade,
  onPatchRequest,
  onDeleteRequest,
  acceptedRequests,
  payments,
  onPatchPayment,
};
