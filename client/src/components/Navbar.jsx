import React, { useContext } from "react";
import { AuthContext } from "../context/Auth/authState";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    // Remove the authentication token from local storage and update isLoggedIn state
    localStorage.removeItem("authtoken");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
          <div className="flex justify-between px-[20%] py-5 items-center mb-10 bg-slate-300">
            <Link to={"/"} className="bg-zinc-100 rounded-lg hover:cursor-pointer hover:bg-zinc-200 p-2 text-2xl">Home</Link>
          <p className="text-2xl">Welcome, you are logged in!</p>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex justify-between px-[20%] py-5 items-center mb-10 bg-slate-300">
        <Link to={"/"} className="bg-zinc-100 rounded-lg hover:cursor-pointer hover:bg-zinc-200 p-2 text-2xl">Home</Link>
          <p className="text-2xl"> You are not logged in!</p>
          {/* Render your login or signup button/link here */}
        </div>
      )}
    </div>
  );
};
