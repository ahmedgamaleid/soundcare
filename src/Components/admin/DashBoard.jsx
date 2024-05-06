import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';
import axios from 'axios';
import Joi from 'joi';

const DashBoard = () => {
  // add doctor from input and save in another copy
  const [userDoc, setUserDoc] = useState({
    name: '',
    phone: '',
    address: '',
    years_of_experience: '',
    email: '',
    password: ''
  });
  // patients": [
  //   {
  //       "id": 1,
  //       "fullName": "jimmy",
  //       "phone": "01554935486",
  //       "address": "banha",
  //       "age": 23,
  //       "gender": "Male",
  //       "token": null,
  //       "email": "jimmy@gmail.com",
  //       "password": "1234",
  //       "doc_id": 11,
  //       "created_at": null,
  //       "updated_at": null
  //   }
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

  useEffect(() => {
    async function getDoctor() {
      try {
        let { data } = await axios.get('http://127.0.0.1:8000/api/doctors/all');
        console.log(data); // Check the entire response
        setDoctorContainer(data.data.doctors); // Update state with doctors array from response
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    }

    getDoctor();
  }, []);

  const addDoctor = async () => {
    // Validate form input using Joi schema
    const { error } = doctorSchema.validate(userDoc, { abortEarly: false });
  
    if (error) {
      setMessage(error.details.map(detail => detail.message).join(', '));
      return;
    }
  
    // If validation passes, proceed with adding the doctor
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

  // Joi validation schema for doctor details
  const doctorSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().min(6).required(),
    years_of_experience: Joi.number().integer().min(0).required(),
    address: Joi.string().required(),
    phone: Joi.string().min(10).max(15).required(), // Assuming phone number as string
  });

  // Rest of your component code...
  
  //  side bar 
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
      <div className='row' style={{ height: '100vh' }}>
        <div className='col-lg-1  sidebars d-flex flex-column justify-content-around '>
          <button onClick={() => handleButtonClick('button1')} className={`buttons ${selectedButton === 'button1' ? 'selected' : ''}`}>
            <i className="fa-solid fa-house fs-2"></i>
          </button>
          <button onClick={() => handleButtonClick('button2')} className={`buttons ${selectedButton === 'button2' ? 'selected' : ''}`}>
            <i className="fa-solid fa-user-plus fs-2"></i>
          </button>
          <button onClick={() => handleButtonClick('button3')} className={`buttons ${selectedButton === 'button3' ? 'selected' : ''}`}>
            <i className="fa-solid fa-bell  fs-2"></i>
          </button>
        </div>
        <div className='col-lg-11 col-md-10 Contentside container' style={{ height: '100%' }}>
          {selectedButton === 'button1' && (
            <div className=' container'>
              <main className='main-container'>
                <div className='main-title'>
                  <h1 className='p-3'>information</h1>
                  <hr className='hrline' />
                </div>
                <div className='main-cards d-flex justify-content-around'>
                  <div className='card p-5'>
                    <div className='card-inner'>
                      <h3>Reports</h3>
                      <i className="fa-solid fa-book icon"></i>
                    </div>
                    <h1>300</h1>
                  </div>
                  <div className='card p-5'>
                    <div className='card-inner'>
                      <h3>Records</h3>
                      <i className="fa-regular fa-file-audio"></i>
                    </div>
                    <h1>12</h1>
                  </div>
                  <div className='card p-5'>
                    <div className='card-inner'>
                      <h3>Doctors</h3>
                      <i className="fa-solid fa-user-group icon "></i>
                    </div>
                    <h1>{doctorcontainer.length}</h1>
                  </div>
                  <div className='card p-5'>
                    <div className='card-inner'>
                      <h3>ALERTS</h3>
                      <i className="fa-solid fa-bell"></i>
                    </div>
                    <h1>42</h1>
                  </div>
                </div>

                <div className='charts d-flex mt-5'>
                  <div style={{ width: '50%', height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div style={{ width: '50%', height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </main>
            </div>
          )}
          {/* Here we will add the form to add a doctor */}
          {selectedButton === 'button2' && (
            <div className='container'>
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
          )}
          {selectedButton === 'button3' && (
            <div>
              <h1>Not now, baby</h1>
              {/* Content for button3 */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
