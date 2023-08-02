import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Auth/authState";
const RegistrationPage = () => {
  const { registerValues, setRegisterValues, handleSignUp } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterValues({ ...registerValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp(event);
  };

  return (
    <>
      <div className="flex items-center justify-center my-16 mx-4 p-2">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <a className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-8 text-center" >
            {/* Welcome to our ERP where you can ease your worlflow and manage most efficiently! */}
            REGISTER
          </a>
          <div className="flex flex-wrap -mx-3 mb-6">

            <div className=" w-1/2 md:w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="regno"
              >
                Registration Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="regno"
                type="int"
                name="regno"
                value={registerValues.regno}
                placeholder="Enter your registration number here"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">

            <div className=" w-1/2 md:w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="regno"
              >
                Applicant's Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                name="name"
                value={registerValues.name}
                placeholder="Enter your full name here"
                onChange={handleChange}
                required
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
                name="password"
                value={registerValues.password}
                minLength="6"
                placeholder="*********"
                onChange={handleChange}
                required
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
                name="email"
                type="email"
                value={registerValues.email}
                placeholder="Email here"
                onChange={handleChange}
                required
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
                  name="course"
                  placeholder="-Course-"
                  value={registerValues.course}
                  onChange={handleChange  }
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
                name="contact"
                placeholder="987-654-3210"
                value={registerValues.contact}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={handleChange}
                required
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
              to={"/loginstudent"}
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
