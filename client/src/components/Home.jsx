import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to our ERP where you can ease your workflow and manage most efficiently!
      </h1>
      <div className="flex justify-around">
        <Link to={"/recruitment"}><div className=" hover:cursor-pointer p-8 bg-blue-500 rounded-lg shadow-lg text-white text-xl font-bold">
          Employee Recruitment
        </div></Link>
        <Link to={"/registerstudent"}><div className="hover:cursor-pointer p-8 bg-green-500 rounded-lg shadow-lg text-white text-xl font-bold">
          Student Admission
        </div></Link>
      </div>
    </div>
  );
};

export default Home;
