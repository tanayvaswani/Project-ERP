import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthState = ({ children }) => {
  const navigate = useNavigate();

  // State for login and registration forms
  const [loginValues, setLoginValues] = useState({
    credential: "",
    password: "",
  });

  const [registerValues, setRegisterValues] = useState({
    regno: "",
    name: "",
    password: "",
    email: "",
    course: "",
    contact: "",
  });

  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function for handling login API call
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/api/auth/login",
        loginValues
      );

      if (response.data.authtoken) {
        // Authentication successful, save the authToken in the local storage and update isLoggedIn state
        localStorage.setItem("authtoken", response.data.authtoken);
        setIsLoggedIn(true);
        navigate("/admissionform");
      } else {
        // Authentication failed, display an error message
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("Error occurred while making the request. Please try again later.");
    }
  };

  // Function to check if the user is already logged in on component mount
  useEffect(() => {
    const authToken = localStorage.getItem("authtoken");
    setIsLoggedIn(!!authToken);
  }, []);

  // Function for handling registration API call
  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/api/auth/register",
        registerValues
      );

      if (response.data.Status === "Success") {
        navigate("/login");
      } else {
        alert("Error!");
      }
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
      alert("Error occurred while making the request. Please try again later.");
    }
  };

  // Other state and functions, if any...

  return (
    <AuthContext.Provider
      value={{
        // Other state and functions, if any...
        loginValues,
        setLoginValues,
        handleLogin,
        registerValues,
        setRegisterValues,
        handleSignUp,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthState };
