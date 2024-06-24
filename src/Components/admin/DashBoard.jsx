import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';
import axios from 'axios';
import Joi from 'joi';

const DashBoard = () => {
  const [userDoc, setUserDoc] = useState({
    name: '',
    phone: '',
    address: '',
    years_of_experience: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [doctorcontainer, setDoctorContainer] = useState([]);

  useEffect(() => {
    if (
      userDoc.name !== '' ||
      userDoc.phone !== '' ||
      userDoc.address !== '' ||
      userDoc.years_of_experience !== '' ||
      userDoc.password !== ''
    ) {
      console.log(userDoc);
    }
  }, [userDoc]);

  // useEffect(() => {
  //   async function getDoctor() {
  //     try {
  //       let { data } = await axios.get('http://127.0.0.1:8000/api/doctors/all');
  //       console.log(data);
  //       setDoctorContainer(data.data.doctors);
  //     } catch (error) {
  //       console.error('Error fetching doctors:', error);
  //     }
  //   }

  //   getDoctor();
  // }, []);

  const addDoctor = async () => {
    const { error } = doctorSchema.validate(userDoc, { abortEarly: false });

    if (error) {
      setMessage(error.details.map(detail => detail.message).join(', '));
      return;
    }

    try {
      let { data } = await axios.post('http://127.0.0.1:8000/api/doctors/store', userDoc);
      console.log(data);
      if (data.message === 'The email has already been taken.') {
        setMessage('The email provided is already in use. Please choose another email.');
      } else {
        setMessage('Doctor added successfully!');
      }
    } catch (error) {
      console.error('Error adding doctor:', error);
      setMessage('An error occurred while adding the doctor. Please try again later.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDoc(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const doctorSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().min(6).required(),
    years_of_experience: Joi.number().integer().min(0).required(),
    address: Joi.string().required(),
    phone: Joi.string().min(10).max(15).required(),
  });

  const [selectedButton, setSelectedButton] = useState('button1');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  ];

  return (
    <>
      <div className='container vh-100'>
        <h1 className='p-2 mb-5 w-25' style={{ borderBottom: '1px solid #20B6A3' }}>Add Doctor</h1>
        <div className='d-flex justify-content-center'>
          <div className='divformdoc'>
            <div className='overlayformdoc'></div>
            <div className='contactformdoc'>
              <h1 className='text-white p-5 formdoc'>Please fill out all entries in this form to add a new doctor.</h1>
            </div>
          </div>
          <form className='row g-4 d-flex justify-content-center' onSubmit={(e) => { e.preventDefault(); addDoctor(); }}>
            <div className="col-5">
              <label htmlFor="doctorName" className="form-label">Doctor's Name</label>
              <input onChange={handleInputChange} type="text" className="form-control" name="name" placeholder="Enter doctor's name" />
            </div>
            <div className="col-5">
              <label htmlFor="doctorEmail" className="form-label">Doctor's Email</label>
              <input onChange={handleInputChange} type="email" className="form-control" name="email" placeholder="Enter doctor's email" />
            </div>
            <div className="col-5">
              <label htmlFor="doctorPassword" className="form-label">Doctor's Password</label>
              <input onChange={handleInputChange} type="password" className="form-control" name="password" placeholder="Enter doctor's password" />
            </div>
            <div className="col-5">
              <label htmlFor="yearsExperience" className="form-label">Years of Experience</label>
              <input onChange={handleInputChange} type="number" className="form-control" name="years_of_experience" placeholder="Enter years of experience" />
            </div>
            <div className="col-5">
              <label htmlFor="doctorAddress" className="form-label">Doctor's Address</label>
              <input onChange={handleInputChange} type="text" className="form-control" name="address" placeholder="Enter doctor's address" />
            </div>
            <div className="col-5">
              <label htmlFor="doctorPhone" className="form-label">Doctor's Phone</label>
              <input onChange={handleInputChange} type="number" className="form-control" name="phone" placeholder="Enter doctor's phone" />
            </div>
            <div className="container mx-5">
              <button type="submit" className="btn fontb rounded-5 my-3 mx-5">Add Doctor</button>
            </div>
          </form>

          {message && (
            <div className="container mx-5">
              <div className={`alert ${message.includes('error') ? 'alert-danger' : 'alert-success'}`}>{message}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
