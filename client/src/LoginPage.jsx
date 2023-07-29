import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center my-16 mx-4 p-2">
      <div class="w-full max-w-sm">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="ssername"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="***********"
            />
            
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-600"
              href="#"
            >
              Forgot Password?
            </a>
          </div>


          <div class="flex items-center justify-between mt-10">
            <a
              class="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-600"
              href="#"
            >
              New user? Sign up here 👉
            </a>
            <Link to={'/register'}
              class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
