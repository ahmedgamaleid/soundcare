import React, { useState, useEffect, useContext } from 'react';
import { DoctorContext } from '../../App';
import 'font-awesome/css/font-awesome.min.css';

const DProfile = () => {
  const { doctorId } = useContext(DoctorContext);
  const [doctor, setDoctor] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/doctors/${doctorId}/show`);
        const data = await response.json();
        setDoctor(data.data.doctor);
        // Retrieve saved image from local storage
        const savedImage = localStorage.getItem(`profileImage-${doctorId}`);
        if (savedImage) {
          setProfileImage(savedImage);
        } else {
          setProfileImage(data.data.doctor.profileImage); // Assuming the API response includes a profileImage field
        }
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctorData();
  }, [doctorId]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      setProfileImage(base64Image); // Update state with the new image
      localStorage.setItem(`profileImage-${doctorId}`, base64Image); // Save the new image in local storage
    };
    if (file) {
      reader.readAsDataURL(file); // Convert image file to Base64
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center full-height">
      <div className="profile w-100 h-50">
        {doctor ? (
          <div className="profile-info">
            <div className="profile-img position-relative">
              {profileImage ? (
                <img src={profileImage} alt="Profile" />
              ) : (
                <p>No image uploaded</p>
              )}
              <input
                type="file"
                accept="image/*"
                id="profileImageInput"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
              <label
                htmlFor="profileImageInput"
                className="position-absolute"
                style={{
                  top: '20%',
                  left: '20%',
                  transform: 'translate(-50%, -50%)',          
                  // boxShadow: '0 0 10px #20B6A3',
                  color: 'white',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              >
                <i className="fa fa-plus"></i>
              </label>
            </div>
            <div className="info-edit mx-5">
              <h2 className='my-4'>{doctor.name}</h2>
              <p className='my-3'>Email: {doctor.email}</p>
              <p className='my-3'>Phone: {doctor.phone}</p>
              <p className='my-3'>Address: {doctor.address}</p>
              <p className='my-3'>Your ID: {doctor.id}</p>
              <p className='my-3'>Years of Experience: {doctor.years_of_experience}</p>
              {/* Edit profile information component can be added here */}
            </div>
          </div>
        ) : (
          <p>No doctor found</p>
        )}
      </div>

      <style jsx>{`
        .full-height {
          height: 100vh;
        }

        .profile {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          width: 100%;
        }

        .profile-info {
          display: flex;
        }

        .profile-img {
          width: 200px;
          height: 200px;
          margin-right: 20px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
        }

        .profile-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .info-edit {
          flex: 1;
        }

        .profile h2 {
          margin-bottom: 10px;
          color: #20B6A3;
        }

        .profile p {
          margin-bottom: 5px;
        }

        .profile p:first-child {
          margin-top: 0;
        }

        .profile p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default DProfile;
