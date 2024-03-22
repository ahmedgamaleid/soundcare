import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';
import Joi from 'joi'; // Import Joi for validation

const DashBoard = () => {
  const [selectedButton, setSelectedButton] = useState('button1');
  const [doctors, setDoctors] = useState([]);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  // Define validation schema using Joi
  const schema = Joi.object({
    doctorName: Joi.string().required(),
    doctorEmail: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    doctorPassword: Joi.string().min(6).required(),
    doctorAge: Joi.number().integer().min(18).max(120).required(),
    yearsExperience: Joi.number().integer().min(0).required(),
    doctorAddress: Joi.string().required(),
    doctorPhone: Joi.string().required(),
    doctorId: Joi.string().required(),
  });

  // Validation function
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Extract form data
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    // Validate form data
    const { error } = schema.validate(formObject, { abortEarly: false });

    if (error) {
      // Handle validation errors
      console.error(error.details);
      return;
    }

    // Store validated form data in local storage
    const newDoctorList = [...doctors, formObject];
    setDoctors(newDoctorList);

    // Clear the form
    event.target.reset();
  };

  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    // Add more data as needed
  ];

  return (
    <div className='row' style={{ height: '100vh' }}>
      {/* Sidebar */}
      <div className='col-lg-1 sidebars d-flex flex-column justify-content-around'>
        <button onClick={() => handleButtonClick('button1')} className={`buttons ${selectedButton === 'button1' ? 'selected' : ''}`}>
          <i className="fa-solid fa-house fs-2"></i>
        </button>
        <button onClick={() => handleButtonClick('button2')} className={`buttons ${selectedButton === 'button2' ? 'selected' : ''}`}>
          <i class="fa-solid fa-user-plus fs-2"></i>
        </button>
        <button onClick={() => handleButtonClick('button3')} className={`buttons ${selectedButton === 'button3' ? 'selected' : ''}`}>
          <i class="fa-solid fa-bell  fs-2"></i>
        </button>
      
      </div>

      {/* Content of button */}
      <div className='col-lg-11 col-md-10 Contentside' style={{ height: '100%' }}>
        {selectedButton === 'button1' && (
          <div className=' '>
            <main className='main-container  '>
              <div className='main-title'>
                <h1 className='p-3'>information</h1>
                <hr className='hrline  ' ></hr>
              </div>
              <div className='main-cards d-flex justify-content-around '>
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
                    <h3>Patients</h3>
                    <i className="fa-solid fa-user-group icon "></i>
                  </div>
                  <h1>33</h1>
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
        {selectedButton === 'button2' && (
          <div className='formdashd'>
            <h1 className='p-3 '> Add Doctor</h1>
            <hr className='hrline mx-3' />
            <div className=' mt-5'>
              <div className='container'>
                <div>
                  <form className='row g-4' onSubmit={handleFormSubmit}>
                    <div className="col-5">
                      <label htmlFor="doctorName" className="form-label">Doctor's Name</label>
                      <input type="text" className="form-control" id="doctorName" name="doctorName" placeholder="Enter doctor's name" />
                    </div>
                    <div className="col-5">
                      <label htmlFor="doctorEmail" className="form-label">Doctor's Email</label>
                      <input type="email" className="form-control" id="doctorEmail" name="doctorEmail" placeholder="Enter doctor's email" />
                    </div>
                    <div className="col-5">
                      <label htmlFor="doctorPassword" className="form-label">Doctor's Password</label>
                      <input type="password" className="form-control" id="doctorPassword" name="doctorPassword" placeholder="Enter doctor's password" />
                    </div>
                    <div className="col-5">
                      <label htmlFor="doctorAge" className="form-label">Doctor's Age</label>
                      <input type="number" className="form-control" id="doctorAge" name="doctorAge" placeholder="Enter doctor's age" />
                    </div>
                    <div className="col-5">
                      <label htmlFor="yearsExperience" className="form-label">Years of Experience</label>
                      <input type="number" className="form-control" id="yearsExperience" name="yearsExperience" placeholder="Enter years of experience" />
                    </div>
                    <div className="col-5">
                      <label htmlFor="doctorAddress" className="form-label">Doctor's Address</label>
                      <input type="text" className="form-control" id="doctorAddress" name="doctorAddress" placeholder="Enter doctor's address" />
                    </div>
                    <div className="col-5">
                      <label htmlFor="doctorPhone" className="form-label">Doctor's Phone</label>
                      <input type="number" className="form-control" id="doctorPhone" name="doctorPhone" placeholder="Enter doctor's phone" />
                    </div>
                    <div className="col-5">
                      <label htmlFor="doctorId" className="form-label">Doctor's ID</label>
                      <input type="number" className="form-control" id="doctorId" name="doctorId" placeholder="Enter doctor's ID" />
                    </div>

                    <div className="">
                      <button type="submit" className="btn fontb rounded-5 w-25 m-3">Add Doctor</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
       {selectedButton === 'button3' && (
  /* Render the content within the parentheses */
  <div>
    {/* Button 3 content */}
  </div>
)}

       
      </div>
    </div>
  );
};

export default DashBoard;
