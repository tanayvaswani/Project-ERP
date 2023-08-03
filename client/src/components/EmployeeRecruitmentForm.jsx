import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const EmployeeRecruitmentForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    // Contact Details
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    // Communication Details
    linkedInProfile: '',
    portfolioWebsite: '',
    // Parents Details
    fatherName: '',
    motherName: '',
    // Qualification
    education: '',
    specialization: '',
    passingYear: '',
    // Qualifying Details
    skills: '',
    experience: '',
    // Achievement
    achievements: '',
  });

  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object to include file upload
    const data = new FormData();
    data.append('resume', resume);

    // Append form data fields to FormData object
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      // Make a POST request to the API to submit the form
      const response = await axios.post('http://localhost:8081/api/recruitment', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Form submitted successfully!');
        history.push('/');
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('Error occurred while making the request. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Employee Recruitment Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        {/* ... */}
        {/* Contact Details */}
        {/* ... */}
        {/* Communication Details */}
        {/* ... */}
        {/* Parents Details */}
        {/* ... */}
        {/* Qualification */}
        {/* ... */}
        {/* Qualifying Details */}
        {/* ... */}
        {/* Achievement */}
        {/* ... */}
        <div>
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleResumeChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeRecruitmentForm;
