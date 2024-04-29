
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFormData } from '../redux/formSlice';
import './FormComponent.css';

const FormComponent = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    postalCode: '',
    phoneNumber: '',
    highestEducation: '',
    passingYear: '2020', 
  });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };


const handleChange = (e) => {
	const { name, value } = e.target;
  
	
	if (name === 'highestEducation' || name === 'fullName') {
	  
	  if (/^[a-zA-Z\s .]*$/.test(value)) {
		setFormData({ ...formData, [name]: value });
	  }
	} 
	
	else if (name === 'address') {
	  
	  if (/^[a-zA-Z0-9\s,-]*$/.test(value)) {
		setFormData({ ...formData, [name]: value });
	  }
	} else {

	  setFormData({ ...formData, [name]: value });
	}
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFormData(formData));
    setFormData({
      fullName: '',
      address: '',
      postalCode: '',
      phoneNumber: '',
      highestEducation: '',
      passingYear: '2020', 
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
		  placeholder=' Enter your Full Name'
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
		  placeholder='Enter your Address'
        />
      </div>
      <div>
        <label>Postal Code:</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
		  maxlength={6}
          required
		  placeholder='Enter your PIN Code'
        />
      </div>
      <div>
        <label>Phone Phone:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
  		  maxlength={10}
          required
		  placeholder='Enter your Phone Number'
        />
      </div>
      <div>
        <label>Highest Education:</label>
        <input
          type="text"
          name="highestEducation"
          value={formData.highestEducation}
          onChange={handleChange}
          required
		  placeholder=' Enter your Highest Education'
        />
      </div>
      <div>
        <label>Passing Year:</label>
        <select
          name="passingYear"
          value={formData.passingYear}
          onChange={handleChange}
          required >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <button type="submit" className='submit-btn'>Submit</button>
    </form>
  );
};

export default FormComponent;
