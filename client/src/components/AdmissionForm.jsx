import React, { useState } from 'react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    // Initialize the state for each field
    // Personal Details
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    // Contact Details
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    // Communication Details
    preferredContact: '',
    // Parents Details
    fatherName: '',
    motherName: '',
    fatherOccupation: '',
    motherOccupation: '',
    // Qualification
    lastExamPassed: '',
    boardUniversity: '',
    passingYear: '',
    // Qualifying Details
    entranceExamName: '',
    rankScore: '',
    // Achievement
    achievements: '',
    // Registration Fee Details
    paymentMode: '',
    transactionId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here or call an API to submit the form data
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      email: '',
      preferredContact: '',
      fatherName: '',
      motherName: '',
      fatherOccupation: '',
      motherOccupation: '',
      lastExamPassed: '',
      boardUniversity: '',
      passingYear: '',
      entranceExamName: '',
      rankScore: '',
      achievements: '',
      paymentMode: '',
      transactionId: '',
    });
  };

  return (
    <div>
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <h3>Personal Details</h3>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        {/* Add more fields for other personal details */}
        {/* Contact Details */}
        <h3>Contact Details</h3>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        {/* Add more fields for other contact details */}
        {/* Communication Details */}
        <h3>Communication Details</h3>
        <label>
          Preferred Contact Method:
          <select
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
        </label>
        {/* Add more fields for other communication details */}
        {/* Parents Details */}
        <h3>Parents Details</h3>
        <label>
          Father's Name:
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
          />
        </label>
        {/* Add more fields for other parents' details */}
        {/* Qualification */}
        <h3>Qualification</h3>
        <label>
          Last Exam Passed:
          <input
            type="text"
            name="lastExamPassed"
            value={formData.lastExamPassed}
            onChange={handleChange}
          />
        </label>
        {/* Add more fields for other qualification details */}
        {/* Qualifying Details */}
        <h3>Qualifying Details</h3>
        <label>
          Entrance Exam Name:
          <input
            type="text"
            name="entranceExamName"
            value={formData.entranceExamName}
            onChange={handleChange}
          />
        </label>
        {/* Add more fields for other qualifying details */}
        {/* Achievement */}
        <h3>Achievement</h3>
        <label>
          Achievements:
          <textarea
            name="achievements"
            value={formData.achievements}
            onChange={handleChange}
          />
        </label>
        {/* Add more fields for other achievements */}
        {/* Registration Fee Details */}
        <h3>Registration Fee Details</h3>
        <label>
          Payment Mode:
          <input
            type="text"
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
          />
        </label>
        {/* Add more fields for other registration fee details */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
