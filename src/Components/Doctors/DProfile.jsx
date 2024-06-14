import React, { useState, useEffect, useContext } from 'react';
import { DoctorContext } from '../../App';


const DProfile = () => {
  const { doctorId } = useContext(DoctorContext);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/doctors/${doctorId}/show`);
        const data = await response.json();
        setDoctor(data.data.doctor);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctorData();
  }, [doctorId]);

  return (
    <div className="container full-height d-flex align-items-center justify-content-center"> {/* Added full-height class */}
      <div className="row justify-content-center ">
        <div className="col-md-8">
          <div className="profile">
            {doctor ? (
              <div className="profile-info">
                <div className="row">
                  <div className="col-md-4">
                    <div className="profile-img">
                      {/* Profile image upload component can be added here */}
                      
                    </div>
                  </div>
                  <div className="col-md-8 ">
                    <div className="info-edit">
                      <h2>{doctor.name}</h2>
                      <p>Email: {doctor.email}</p>
                      <p>Phone: {doctor.phone}</p>
                      <p>Address: {doctor.address}</p>
                      <p>Years of Experience: {doctor.years_of_experience}</p>
                      {/* Edit profile information component can be added here */}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>No doctor found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DProfile;
