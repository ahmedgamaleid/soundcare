import React, { useState, useEffect , useContext } from 'react';
import axios from 'axios';
import { DoctorContext } from '../../App';

const Dpatients = () => {
  const [patientList, setPatientList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editedPatient, setEditedPatient] = useState(null);
  const {doctorId} = useContext(DoctorContext)
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/patients/all/${doctorId}`);
        setPatientList(response.data.data.patients);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleUpdate = async (id) => {
    try {
      const patientToUpdate = patientList.find(patient => patient.id === id);

      if (patientToUpdate) {
        const response = await axios.post(`http://127.0.0.1:8000/api/patients/update/${id}`, {
          fullName: patientToUpdate.fullName,
          phone: patientToUpdate.phone,
          address: patientToUpdate.address,
          age: patientToUpdate.age,
          gender: patientToUpdate.gender
        });

        console.log(response.data);
        setEditedPatient(null);
      } else {
        console.error('Patient not found for id:', id);
      }
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/patients/destroy/${id}`);
      console.log(response.data);
      setPatientList(prevPatients => prevPatients.filter(patient => patient.id !== id));
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const handleEditPatient = (id) => {
    setEditedPatient(id);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    console.log("Name:", name, "Value:", value);
    setPatientList(prevPatients =>
      prevPatients.map(patient =>
        patient.id === id ? { ...patient, [name]: value } : patient
      )
    );
  };

  return (
    <>
      {loading ? (
        <div className='listdocload text-center fs-1 d-flex justify-content-center align-content-center'>Loading patients ...</div>
      ) : (
        <div className='container'>
          <h1 className='p-2 mb-5 w-25' style={{ borderBottom: '1px solid #20B6A3' }}>List of Patients</h1>

          <div className='row g-4 d-flex justify-content-center'>
            {patientList.map(patient => (
              <div className='custom-patient-item col-lg-2 m-3 p-3 border rounded-3 position-relative' key={patient.id}>
                <div>
                  {editedPatient === patient.id ? (
                    <>
                      <input type="text" name="fullName" value={patient.fullName} onChange={(e) => handleChange(e, patient.id)} />
                      <input type="text" name="phone" value={patient.phone} onChange={(e) => handleChange(e, patient.id)} />
                      <input type="text" name="address" value={patient.address} onChange={(e) => handleChange(e, patient.id)} />
                      <input type="number" name="age" value={patient.age} onChange={(e) => handleChange(e, patient.id)} />
                      <input type="text" name="gender" value={patient.gender} onChange={(e) => handleChange(e, patient.id)} />
                    </>
                  ) : (
                    <>
                      <h3 className='patient-name'>{patient.fullName}</h3>
                      <p>Phone: {patient.phone}</p>
                      <p>Address: {patient.address}</p>
                      <p>Age: {patient.age}</p>
                      <p>Gender: {patient.gender}</p>
                    </>
                  )}
                </div>
                <div className='custom-button-container position-absolute start-0 end-0 bottom-0 m-3'>
                  {editedPatient === patient.id ? (
                    <button className='btn fontb rounded-5 mx-1 py-2' onClick={() => handleUpdate(patient.id)}>Update</button>
                  ) : (
                    <>
                      <button className='btn fontb rounded-5 mx-1 py-2' onClick={() => handleEditPatient(patient.id)}>Edit</button>
                      <button className='btn fontb rounded-5 mx-1 py-2' onClick={() => handleDelete(patient.id)}>Delete</button>
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

export default Dpatients;
