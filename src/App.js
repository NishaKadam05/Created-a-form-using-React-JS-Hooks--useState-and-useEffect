import React, { useState, useEffect } from 'react';
import './App.css';

const EmployeeForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    teams: '',
    designation: '',
    billableHours: '',
    isBillable: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log('Form values changed:', formValues);
  }, [formValues]);

  useEffect(() => {
    validate();
  }, [formValues]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formValues.firstName) errors.firstName = 'First Name is required';
    if (!formValues.lastName) errors.lastName = 'Last Name is required';
    if (!formValues.birthDate) errors.birthDate = 'Date is required';
    if (!formValues.email) errors.email = 'Email is required';
    if (!formValues.phoneNumber) errors.phoneNumber = 'Phone Number is required';
    if (!formValues.gender) errors.gender = 'Gender is required';
    if (!formValues.startTime) errors.startTime = 'Start Time is required';
    if (!formValues.endTime) errors.endTime = 'End Time is required';
    if (!formValues.jobPosition) errors.jobPosition = 'Job Position is required';
    if (!formValues.teams) errors.teams = 'Teams is required';
    if (!formValues.designation) errors.designation = 'Designation is required';
    if (!formValues.billableHours || formValues.billableHours <= 0) {
      errors.billableHours = 'Billable Hours is required and must be a positive number';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form is valid and ready for submission!');
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Employee Form</h2>
      <div className="form-row">
        <div className="form-group">
          <label className='label'>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label className='label'>Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={formValues.middleName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className='label'>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className='label'>Birth Date</label>
          <input
            type="date"
            name="birthDate"
            value={formValues.birthDate}
            onChange={handleInputChange}
          />
          {errors.birthDate && <span className="error">{errors.birthDate}</span>}
        </div>
        <div className="form-group">
          <label className='label'>Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label className='label'>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleInputChange}
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className='label'>Select Gender</label>
          <select
            name="gender"
            value={formValues.gender}
            onChange={handleInputChange}
          >
            <option value="">Choose Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div className="form-group">
          <label className='label'>Start Time</label>
          <input
            type="time"
            name="startTime"
            value={formValues.startTime}
            onChange={handleInputChange}
          />
          {errors.startTime && <span className="error">{errors.startTime}</span>}
        </div>
        <div className="form-group">
          <label className='label'>End Time</label>
          <input
            type="time"
            name="endTime"
            value={formValues.endTime}
            onChange={handleInputChange}
          />
          {errors.endTime && <span className="error">{errors.endTime}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className='label'>Job Position</label>
          <input
            type="text"
            name="jobPosition"
            value={formValues.jobPosition}
            onChange={handleInputChange}
          />
          {errors.jobPosition && <span className="error">{errors.jobPosition}</span>}
        </div>
        <div className="form-group">
          <label className='label'>Select Teams</label>
          <select
            name="teams"
            value={formValues.teams}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="team1">Team 1</option>
            <option value="team2">Team 2</option>
          </select>
          {errors.teams && <span className="error">{errors.teams}</span>}
        </div>
        <div className="form-group">
          <label className='label'>Select Designation</label>
          <select
            name="designation"
            value={formValues.designation}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="designation1">Manager</option>
            <option value="designation2">Developer</option>
          </select>
          {errors.designation && <span className="error">{errors.designation}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className='label'>Billable Hours</label>
          <input
            type="number"
            name="billableHours"
            value={formValues.billableHours}
            onChange={handleInputChange}
          />
          {errors.billableHours && <span className="error">{errors.billableHours}</span>}
        </div>
        <div className="form-group">
          <label className='check'>Is Billable</label>
          <input
            type="checkbox"
            name="isBillable"
            checked={formValues.isBillable}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
