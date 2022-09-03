import { api } from "./Api";

const vendorSignUp = (data, isSignUp, navigate, setErrors, setIsLoading) => {
  setIsLoading(true);
  if (isSignUp) {
    fetch(`${api}/vendor/register`, {
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
          localStorage.setItem("vendorprofile", JSON.stringify({ json }));
          navigate("/vendor/booking");
        }
      });
  } else {
    fetch(`${api}/vendor/login`, {
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
          localStorage.setItem("vendorprofile", JSON.stringify({ json }));
          navigate("/vendor/booking");
        }
      });
  }
};

const clientSignUp = (data, isSignUp, navigate, setErrors, setIsLoading) => {
  setIsLoading(true);
  if (isSignUp) {
    fetch(`${api}/customer/register`, {
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
          localStorage.setItem("customerprofile", JSON.stringify({ json }));
          navigate("/customer/pickup");
        }
      });
  } else {
    fetch(`${api}/customer/login`, {
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
          navigate("sign");
          setErrors(json.message);
        } else {
          localStorage.setItem("customerprofile", JSON.stringify({ json }));
          navigate("/customer/pickup");
        }
      });
  }
};

const adminSignIn = (data, setErrors, navigate) => {
  fetch(`${api}/admin/login`, {
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
        navigate("admin");
        setErrors(json.message);
      } else {
        localStorage.setItem("adminprofile", JSON.stringify({ json }));
        navigate("/admin/dashboard");
      }
    });
};

export { clientSignUp, vendorSignUp, adminSignIn };
