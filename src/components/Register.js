import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({});
  const changeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
         "http://localhost/react_men_salon_project/salon_project/api/courses/registration.php",
        // "api/courses/registration.php",
        info
      )
      .then((res) => {
        if (res.data) {
          alert(res.data);
        }
      });
  };
  // console.log(info);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <h1 className="text-center">User Registration</h1>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="AptNumber" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="AptNumber"
                onChange={changeValue}
                className="form-control"
                id="AptNumber"
                aria-describedby="fnameHelp"
              />
            </div>
            <div className="mb-3">
              <label for="Name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="Name"
                onChange={changeValue}
                className="form-control"
                id="Name"
                aria-describedby="lnameHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                name="Email"
                onChange={changeValue}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Phone Number
              </label>
              <input
                type="PhoneNumber"
                name="PhoneNumber"
                onChange={changeValue}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
