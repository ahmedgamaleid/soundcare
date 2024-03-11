import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';

const DashBoard = () => {
  const [selectedButton, setSelectedButton] = useState('button1');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  // Define your data here or import it from elsewhere
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    // Add more data as needed
  ];

  return (
    <div className='row' style={{ height: '100vh' }}>
      {/* Sidebar */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Monoton&display=swap');`}
      </style>
      <div className='col-lg-1 rounded-3 sidebars d-flex flex-column justify-content-around'>
        <button onClick={() => handleButtonClick('button1')} className={`buttons ${selectedButton === 'button1' ? 'selected' : ''}`}>
          <i className="fa-solid fa-house fs-2"></i>
        </button>
        <button onClick={() => handleButtonClick('button2')} className={`buttons ${selectedButton === 'button2' ? 'selected' : ''}`}>
          <i className="fa-solid fa-user-doctor fs-2"></i>
        </button>
        <button onClick={() => handleButtonClick('button3')} className={`buttons ${selectedButton === 'button3' ? 'selected' : ''}`}>
          <p className='side'>Doctors   <i className="fa-solid fa-user-doctor"></i></p>
        </button>
        <button onClick={() => handleButtonClick('button4')} className={`buttons ${selectedButton === 'button4' ? 'selected' : ''}`}>
          <p>ALERTS </p>
        </button>
        <button onClick={() => handleButtonClick('button5')} className={`buttons ${selectedButton === 'button5' ? 'selected' : ''}`}>
          Button 5
        </button>
      </div>

      {/* Content */}
      <div className='col-lg-11 Contentside' style={{ height: '100%' }}>
        {/* Render content based on selected button */}
        {selectedButton === 'button1' && (
          <div className=' '>
            <main className='main-container  '>
              <div className='main-title'>
                <h3>DASHBOARD</h3>
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
          <div>
            Content for Button 2
          </div>
        )}
        {selectedButton === 'button3' && (
          <div>
            Content for Button 3
          </div>
        )}
        {selectedButton === 'button4' && (
          <div>
            Content for Button 4
          </div>
        )}
        {selectedButton === 'button5' && (
          <div>
            Content for Button 5
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
