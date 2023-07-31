import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [values, setValues] = useState({
    credential: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8081/api/auth/login", values)
      .then((res) => {
        if (res.data.authtoken) {
          // Authentication successful, redirect to the homepage or dashboard
          navigate("/");
        } else {
          // Authentication failed, display an error message
          alert("Invalid Credentials");
        }
      })
      .catch((err) => {
        console.error("Error:", err.message);
        alert("Error occurred while making the request. Please try again later.");
      });
  };

  return (
    <div className="flex items-center justify-center my-16 mx-4 p-2">
      <div className="w-full max-w-sm">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setValues({ ...values, credential: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="***********"
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleLogin} // Call handleLogin when the button is clicked
            >
              Log In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-600"
              href="#"
            >
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center justify-between mt-10">
            <a
              className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-600"
              href="#"
            >
              New user? Sign up here 👉
            </a>
            <Link
              to="/register"
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
