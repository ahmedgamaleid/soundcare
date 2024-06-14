import React, { useEffect, useState, useContext } from 'react';
import imgappiontment from '../../img/4619111.jpg';
import axios from 'axios';
import { DoctorContext } from '../../App';
import { toast } from 'react-toastify';

export default function DAppiontment() {
  const { doctorId } = useContext(DoctorContext);
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPatients, setShowPatients] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [error, setError] = useState(null);
  const [doctorAppointments, setDoctorAppointments] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/patients/all/${doctorId}`);
        setPatients(response.data.data.patients);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patients:', error);
        toast.error('Failed to fetch patients.');
      }
    };

    fetchPatients();
  }, [doctorId]);

  useEffect(() => {
    const fetchDoctorAppointments = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/appointments/doctor_appointments/${doctorId}`);
        setDoctorAppointments(response.data.data.refollow_dates);
      } catch (error) {
        console.error('Error fetching doctor appointments:', error);
        toast.error('Failed to fetch doctor appointments.');
      }
    };

    fetchDoctorAppointments();
  }, [doctorId]);

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  const makeAppointment = async () => {
    if (!selectedPatient) {
      toast.error('Please select a patient.');
      return;
    }
    if (!appointmentDate) {
      toast.error('Please select an appointment date.');
      return;
    }

    const appointmentData = {
      patient_id: selectedPatient.id,
      refollow_date: appointmentDate,
      doc_id: doctorId,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/appointments/store', appointmentData);

      if (response.data && response.data.message === 'Appointment Successfully Created') {
        // Reset selected patient and appointment date
        setSelectedPatient(null);
        setAppointmentDate('');
        setError(null);
        toast.success('Appointment created successfully');
        // Refresh appointments after creating new appointment
        const refreshResponse = await axios.get(`http://127.0.0.1:8000/api/appointments/doctor_appointments/${doctorId}`);
        setDoctorAppointments(refreshResponse.data.data.refollow_dates);
      } else {
        toast.error('Failed to create appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error creating appointment:', error);
      toast.error('Failed to create appointment.');
    }
  };

  const getLastAppointment = (patientId) => {
    const patientAppointments = doctorAppointments.filter(appointment => appointment.patient_id === patientId);
    if (patientAppointments.length > 0) {
      const lastAppointment = patientAppointments[patientAppointments.length - 1];
      return lastAppointment.refollow_date;
    } else {
      return 'No appointments found';
    }
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className='appiontment container mt-0'>
  <div className='appio p-5'>
    <div className="row">
      <div className="col">
        <h1 className='my-5'>Appointment Booking</h1>
        <p>Welcome to the Appointment Booking section! Here, you have access to view all the patients you've added previously. Take a moment to browse through the list, select any patient, and proceed to book an appointment for them. Feel free to schedule appointments according to their availability and medical needs. Our system makes it easy for you to manage appointments seamlessly. Let's ensure your patients receive the care they deserve promptly.</p>
        <button className='btn fontb rounded-5 mx-1 py-2 my-2' onClick={() => setShowPatients(true)}>
          Show Patients
        </button>
      </div>
      <div className="col">
        <img src={imgappiontment} className='imgappiontment w-100 h-100' alt='' />
      </div>
    </div>
  </div>
</div>




      <div className='row g-4 d-flex justify-content-center'>
        {showPatients &&
          patients.map((patient) => (
            <div
              className={`doctorli col-lg-2 m-3 p-3 border rounded-3 position-relative ${selectedPatient && selectedPatient.id === patient.id ? 'selected' : ''}`}
              key={patient.id}
              onClick={() => handleSelectPatient(patient)}
              style={{ cursor: 'pointer' }}
            >
              <h4>{patient.fullName}</h4>
              <p>ID: {patient.id}</p>
              {selectedPatient && selectedPatient.id === patient.id && (
                <div>
                  <hr></hr>
                  <label>Select Appointment Date:</label>
                  <input
                    className='my-3'
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

      <div className='my-5 container appo'>
        <h2>Last Appointments</h2>
        <table className="table">
        <thead>
  <tr className='thhead'>
    <th className='thh'>Patient Name</th>
    <th className='thh'>Last Appointment Date</th>
    <th className='thh'>Patient ID</th>
  </tr>
</thead>

          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <td>{patient.fullName}</td>
                <td>{getLastAppointment(patient.id)}</td>
                <td>{patient.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
