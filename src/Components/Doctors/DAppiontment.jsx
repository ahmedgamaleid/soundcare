// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import imgappiontment from '../../img/4619111.jpg';
import axios from 'axios';

export default function DAppiontment() {
  // State variables
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPatients, setShowPatients] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [error, setError] = useState(null);

  // Fetch patients from the API on component mount
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/patients/all/1');
        setPatients(response.data.data.patients);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patients:', error);
        setError('Failed to fetch patients.');
      }
    };
  
    if (loading) {
      fetchPatients();
    }
  }, [loading]);
  

  // Function to handle patient selection
  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  // Function to handle appointment creation
  const makeAppointment = async () => {
    if (!selectedPatient) {
      setError('Please select a patient.');
      return;
    }
    if (!appointmentDate) {
      setError('Please select an appointment date.');
      return;
    }
    
    const appointmentData = {
      patientId: selectedPatient.id,
      appointmentDate: appointmentDate,
    };
    
    try {
      // Replace `{{url}}` with the actual base URL of your API
      const response = await axios.post('{{url}}/api/appointments/create/1', appointmentData);
      
      // Check if the appointment was successfully created
      if (response.data && response.data.message === 'Appointment Successfully Created') {
        setSelectedPatient(null);
        setAppointmentDate('');
        setError(null);
        alert('Appointment created successfully');
      } else {
        setError('Failed to create appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error creating appointment:', error);
      setError('Failed to create appointment.');
    }
  };
  
  

  return (
    <>
      {/* Display loading indicator while fetching data */}
      {loading && <p>Loading...</p>}
      {/* Display error message if any */}
      {error && <p>{error}</p>}
      
      <div className='appiontment d-flex'>
        <div className='appio p-5'>
          <h1>Appointment Booking</h1>
          <p>You can see all patients you added before, select any patient and book an appointment for them</p>
          <button className='btn fontb rounded-5 mx-1 py-2' onClick={() => setShowPatients(true)}>
            Show Patients
          </button>
        </div>
        <img src={imgappiontment} className='imgappiontment w-25' alt='' />
      </div>
      
      <div className='row g-4 d-flex justify-content-center'>
        {showPatients &&
          patients.map((patient) => (
            <div
              className='doctorli col-lg-2 m-3 p-3 border rounded-3 position-relative'
              key={patient.id}
              onClick={() => handleSelectPatient(patient)}
              style={{ cursor: 'pointer' }}
            >
              <p>Name: {patient.fullName}</p>
              {selectedPatient && selectedPatient.id === patient.id && (
                <div>
                  <label>Select Appointment Date:</label>
                  <input
                    type='date'
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                  />
                  <button className='btn fontb rounded-5 mx-1 py-2' onClick={makeAppointment}>
                    Make Appointment
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
  
}
