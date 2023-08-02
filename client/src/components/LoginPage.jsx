import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth/authState";

const LoginPage = () => {
  const { loginValues, setLoginValues, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(event);
  };

  return (
    <div className="flex items-center justify-center my-16 mx-4 p-2">
      <div className="w-full max-w-sm">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Registration Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="regno"
              type="text"
              placeholder="Enter your Registration Number"
              name="credential"
              value={loginValues.credential}
              onChange={handleChange}
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
              name="password"
              placeholder="***********"
              onChange={handleChange}
              value={loginValues.password}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
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
              to="/registerstudent"
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
