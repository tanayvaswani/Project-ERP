import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    course: "",
    contact: "",
  });

  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/api/auth/register", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/login");
        } else {
          alert("Error!");
        }
      })
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Server Error:", err.response.data);
        } else if (err.request) {
          // The request was made but no response was received
          // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.error("No response received:", err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error setting up the request:", err.message);
        }
        alert("Error occurred while making the request. Please try again later.");
      });
  };
  
  

  return (
    <>
      <div className="flex items-center justify-center my-16 mx-4 p-2">
        <form className="w-full max-w-lg">
          <a className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-8">
            Welcome! Please fill the details below to signup!
          </a>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstname"
              >
                FIRST NAME
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="first-name"
                type="text"
                placeholder="Enter your first name"
                onChange={(e) =>
                  setValues({ ...values, firstname: e.target.value })
                }
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastname"
              >
                LAST NAME
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="last-name"
                type="text"
                placeholder="Enter your last name here"
                onChange={(e) =>
                  setValues({ ...values, lastname: e.target.value })
                }
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="username"
              >
                USERNAME
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="username"
                type="text"
                placeholder="Enter your username here"
                onChange={(e) =>
                  setValues({ ...values, username: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="password"
                type="password"
                placeholder="*********"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-8">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                EMAIL
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Email here"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="course"
              >
                Select Course
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="course"
                  onChange={(e) =>
                    setValues({ ...values, course: e.target.value })
                  }
                >
                  <option>B.Tech</option>
                  <option>B.Tech (Lateral Entry)</option>
                  <option>BBA</option>
                  <option>B.Com</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="contact"
              >
                Contact
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="contact"
                type="tel"
                name="tel"
                placeholder="987-654-3210"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={(e) =>
                  setValues({ ...values, contact: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSignUp}
              type="submit"
            >
              Sign Up
            </button>

            <p>Already an user? Login here 👉</p>
            <Link
              to={"/login"}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationPage;
