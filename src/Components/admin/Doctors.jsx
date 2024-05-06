import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Doctors = () => {
  const [doctorContainer, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  useEffect(() => {
    if (!loading) {
      const fetchDoctors = async () => {
        try {
          const { data } = await axios.get('http://127.0.0.1:8000/api/doctors/all');
          console.log(data); // Check the entire response
          setDoctors(data.data.doctors); // Update state with doctors array from response
        } catch (error) {
          console.error('Error fetching doctors:', error);
        }
      };

      fetchDoctors();
    }
  }, [loading]);

  const handleUpdate = async (id) => {
    try {
      const doctorToUpdate = doctorContainer.find(doctor => doctor.id === id);
      const response = await axios.put(`http://127.0.0.1:8000/api/doctors/update?_method=PUT`, doctorToUpdate);
      console.log(response.data); // Handle the response accordingly
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/doctors/destroy/${id}?_method=DELETE`);
      console.log(response.data); // Handle the response accordingly
      // Remove the deleted doctor from the list
      setDoctors(prevDoctors => prevDoctors.filter(doctor => doctor.id !== id));
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  const handleEdit = (id) => {
    // Set a flag in the doctor object to enable editing
    setDoctors(prevDoctors => 
      prevDoctors.map(doctor =>
        doctor.id === id ? { ...doctor, editing: true } : doctor
      )
    );
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setDoctors(prevDoctors => 
      prevDoctors.map(doctor =>
        doctor.id === id ? { ...doctor, [name]: value } : doctor
      )
    );
  };

  return (
    <>
      {loading ? (
        <div className='listdocload text-center fs-1 d-flex justify-content-center align-content-center'>Current doctors ...</div>
      ) : (
        <div className='container'>
          <h1 className='p-2 mb-5 w-25' style={{ borderBottom: '1px solid #20B6A3' }}>List of Doctors</h1>

          <div className='row g-4 d-flex justify-content-center'>
            {doctorContainer.map(doctor => (
              <div className='doctorli col-lg-2 m-3 p-3 border rounded-3 position-relative' key={doctor.id}>
                <div>
                  {doctor.editing ? (
                    <>
                      <input type="text" name="name" value={doctor.name} onChange={(e) => handleChange(e, doctor.id)} />
                      <input type="text" name="phone" value={doctor.phone} onChange={(e) => handleChange(e, doctor.id)} />
                      <input type="text" name="address" value={doctor.address} onChange={(e) => handleChange(e, doctor.id)} />
                      <input type="number" name="years_of_experience" value={doctor.years_of_experience} onChange={(e) => handleChange(e, doctor.id)} />
                    </>
                  ) : (
                    <>
                      <h3 className='named'>{doctor.name}</h3>
                      <p>Phone: {doctor.phone}</p>
                      <p>Address: {doctor.address}</p>
                      <p>Years of Experience: {doctor.years_of_experience}</p>
                    </>
                  )}
                </div>
                <div className='bbtcon-custom position-absolute start-0 end-0 bottom-0 m-3'>
                  {doctor.editing ? (
                    <button className='btn fontb rounded-5 mx-1 py-2' onClick={() => handleUpdate(doctor.id)}>Update</button>
                  ) : (
                    <>
                      <button className='btn fontb rounded-5 mx-1 py-2' onClick={() => handleEdit(doctor.id)}>Edit</button>
                      <button className='btn fontb rounded-5 mx-1 py-2' onClick={() => handleDelete(doctor.id)}>Delete</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Doctors;
