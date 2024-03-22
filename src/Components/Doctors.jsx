import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Doctors = () => {
  const [doctorcontainer, setdoctors] = useState([]);

 async function getdoctor() {
  try {
    let { data } = await axios.get('http://127.0.0.1:8000/api/doctors/all');
    console.log(data); // Check the entire response
    setdoctors(data.data.doctors); // Update state with doctors array from response
  } catch (error) {
    console.error('Error fetching doctors:', error);
  }
}

  

  useEffect(() => {
    getdoctor();
  }, []);

  console.log(doctorcontainer); // Check doctorcontainer after it's set

  return (
    <>
      <div className='container'>
        <h1>List of Doctors</h1>
        <div className='row'>
          {doctorcontainer && doctorcontainer.map(doctor => (
            <div className='col-lg-3' key={doctor.id}>
              <div>
                <h2>{doctor.name}</h2>
                <p>Phone: {doctor.phone}</p>
                <p>Address: {doctor.address}</p>
                <p>Years of Experience: {doctor.years_of_experience}</p>
                {/* Add more details to display */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;
