// import React, { useEffect, useState, useContext } from 'react';
// import imgappiontment from '../../img/4619111.jpg';
// import axios from 'axios';
// import { DoctorContext } from '../../App';
// import { toast } from 'react-toastify';

// export default function DAppiontment() {
//   const { doctorId } = useContext(DoctorContext);
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showPatients, setShowPatients] = useState(false);
//   const [appointmentDate, setAppointmentDate] = useState('');
//   const [error, setError] = useState(null);
//   const [doctorAppointments, setDoctorAppointments] = useState([]);

//   useEffect(() => {
//     const fetchPatients = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/patients/all/${doctorId}`);
//         setPatients(response.data.data.patients);
//         setLoading(false);
//         localStorage.setItem('patients', JSON.stringify(response.data.data.patients));
//       } catch (error) {
//         console.error('Error fetching patients:', error);
//         toast.error('Failed to fetch patients.');
//       }
//     };

//     const cachedPatients = localStorage.getItem('patients');
//     if (cachedPatients) {
//       setPatients(JSON.parse(cachedPatients));
//       setLoading(false);
//     } else {
//       fetchPatients();
//     }
//   }, [doctorId]);

//   useEffect(() => {
//     const fetchDoctorAppointments = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/appointments/doctor_appointments/${doctorId}`);
//         setDoctorAppointments(response.data.data.refollow_dates);
//         localStorage.setItem('doctorAppointments', JSON.stringify(response.data.data.refollow_dates));
//       } catch (error) {
//         console.error('Error fetching doctor appointments:', error);
//         toast.error('Failed to fetch doctor appointments.');
//       }
//     };

//     const cachedDoctorAppointments = localStorage.getItem('doctorAppointments');
//     if (cachedDoctorAppointments) {
//       setDoctorAppointments(JSON.parse(cachedDoctorAppointments));
//     } else {
//       fetchDoctorAppointments();
//     }
//   }, [doctorId]);

//   const handleSelectPatient = (patient) => {
//     setSelectedPatient(patient);
//   };

//   const makeAppointment = async () => {
//     if (!selectedPatient) {
//       toast.error('Please select a patient.');
//       return;
//     }
//     if (!appointmentDate) {
//       toast.error('Please select an appointment date.');
//       return;
//     }

//     const appointmentData = {
//       patient_id: selectedPatient.id,
//       refollow_date: appointmentDate,
//       doc_id: doctorId,
//     };

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/appointments/store', appointmentData);

//       if (response.data && response.data.message === 'Appointment Successfully Created') {
//         setSelectedPatient(null);
//         setAppointmentDate('');
//         setError(null);
//         toast.success('Appointment created successfully');
//         const refreshResponse = await axios.get(`http://127.0.0.1:8000/api/appointments/doctor_appointments/${doctorId}`);
//         setDoctorAppointments(refreshResponse.data.data.refollow_dates);
//         localStorage.setItem('doctorAppointments', JSON.stringify(refreshResponse.data.data.refollow_dates));
//       } else {
//         toast.error('Failed to create appointment. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error creating appointment:', error);
//       toast.error('Failed to create appointment.');
//     }
//   };

//   const deleteAppointment = async (appointmentId) => {
//     try {
//       const response = await axios.delete(`http://127.0.0.1:8000/api/appointments/destroy/${appointmentId}`, {
//         data: {
//           appointment_id: appointmentId,
//         }
//       });

//       if (response.data.message === "Appointment not Found") {
//         toast.error('Appointment not found.');
//         return;
//       }
//       toast.success('Appointment deleted successfully');

//       const refreshResponse = await axios.get(`http://127.0.0.1:8000/api/appointments/doctor_appointments/${doctorId}`);
//       setDoctorAppointments(refreshResponse.data.data.refollow_dates);
//       localStorage.setItem('doctorAppointments', JSON.stringify(refreshResponse.data.data.refollow_dates));
//     } catch (error) {
//       console.error('Error deleting appointment:', error);
//       toast.error('Failed to delete appointment.');
//     }
//   };

//   const getLastAppointment = (patientId) => {
//     if (!Array.isArray(doctorAppointments)) {
//       return 'Loading...';
//     }

//     const patientAppointments = doctorAppointments.filter(appointment => appointment.patient_id === patientId);
//     if (patientAppointments.length > 0) {
//       const lastAppointment = patientAppointments[patientAppointments.length - 1];
//       return lastAppointment.refollow_date;
//     } else {
//       return 'No appointments found';
//     }
//   };

//   return (
//     <>
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}

//       <div className='appiontment container mt-0'>
//         <div className='appio p-5'>
//           <div className="row">
//             <div className="col">
//               <h1 className='my-5'>Appointment Booking</h1>
//               <p>Welcome to the Appointment Booking section! Here, you have access to view all the patients you've added previously. Take a moment to browse through the list, select any patient, and proceed to book an appointment for them. Feel free to schedule appointments according to their availability and medical needs. Our system makes it easy for you to manage appointments seamlessly. Let's ensure your patients receive the care they deserve promptly.</p>
//               <button className='btn fontb rounded-5 mx-1 py-2 my-2' onClick={() => setShowPatients(true)}>
//                 Show Patients
//               </button>
//             </div>
//             <div className="col">
//               <img src={imgappiontment} className='imgappiontment w-100 h-100' alt='' />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='row g-4 d-flex justify-content-center'>
//         {showPatients &&
//           patients.map((patient) => (
//             <div
//               className={`doctorli col-lg-2 m-3 p-3 border rounded-3 position-relative ${selectedPatient && selectedPatient.id === patient.id ? 'selected' : ''}`}
//               key={patient.id}
//               onClick={() => handleSelectPatient(patient)}
//               style={{ cursor: 'pointer' }}
//             >
//               <h4>{patient.fullName}</h4>
//               <p>ID: {patient.id}</p>
//               {selectedPatient && selectedPatient.id === patient.id && (
//                 <div>
//                   <hr></hr>
//                   <label>Select Appointment Date:</label>
//                   <input
//                     className='my-3'
//                     type='date'
//                     value={appointmentDate}
//                     onChange={(e) => setAppointmentDate(e.target.value)}
//                   />
//                   <button className='btn fontb rounded-5 mx-1 py-2' onClick={makeAppointment}>
//                     Make Appointment
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//       </div>

//       <div className='my-5 container appo'>
//         <h2>Last Appointments</h2>
//         <table className="table">
//           <thead>
//             <tr className='thhead'>
//               <th className='thh'>Patient Name</th>
//               <th className='thh'>Last Appointment Date</th>
//               <th className='thh'>Patient ID</th>
//               <th className='thh'>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {patients.map(patient => (
//               <tr key={patient.id}>
//                 <td>{patient.fullName}</td>
//                 <td>{getLastAppointment(patient.id)}</td>
//                 <td>{patient.id}</td>
//                 <td>
//                   <button 
//                     className='btn btn-danger' 
//                     onClick={() => {
//                       const lastAppointment = doctorAppointments.find(appointment => appointment.patient_id === patient.id);
//                       if (lastAppointment) {
//                         deleteAppointment(lastAppointment.appointment_id);
//                       } else {
//                         toast.error('No appointment to delete.');
//                       }
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }
import React, { useEffect, useState, useContext } from 'react';
import imgappiontment from '../../img/4619111.jpg';
import axios from 'axios';
import { DoctorContext } from '../../App';
import { toast } from 'react-toastify';

export default function DAppiontment() {
  const { doctorId } = useContext(DoctorContext);
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPatients, setShowPatients] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [error, setError] = useState(null);
  const [doctorAppointments, setDoctorAppointments] = useState([]);

  useEffect(() => {
    const cachedDoctorAppointments = localStorage.getItem('doctorAppointments');
    if (cachedDoctorAppointments) {
      setDoctorAppointments(JSON.parse(cachedDoctorAppointments));
    } else {
      fetchDoctorAppointments();
    }
  }, [doctorId]);

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/patients/all/${doctorId}`);
      const patientsData = response.data.data.patients;
      setPatients(patientsData);
      localStorage.setItem('patients', JSON.stringify(patientsData));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching patients:', error);
      toast.error('Failed to fetch patients.');
      setLoading(false);
    }
  };

  const fetchDoctorAppointments = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/appointments/doctor_appointments/${doctorId}`);
      const appointmentsData = response.data.data.refollow_dates;
      setDoctorAppointments(appointmentsData);
      localStorage.setItem('doctorAppointments', JSON.stringify(appointmentsData));
    } catch (error) {
      console.error('Error fetching doctor appointments:', error);
      toast.error('Failed to fetch doctor appointments.');
    }
  };

  const handleShowPatients = () => {
    fetchPatients();
    setShowPatients(true);
  };

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
        setSelectedPatient(null);
        setAppointmentDate('');
        setError(null);
        toast.success('Appointment created successfully');
        fetchDoctorAppointments();
      } else {
        toast.error('Failed to create appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error creating appointment:', error);
      toast.error('Failed to create appointment.');
    }
  };

  const deleteAppointment = async (appointmentId) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/appointments/destroy/${appointmentId}`, {
        data: {
          appointment_id: appointmentId,
        }
      });

      if (response.data.message === "Appointment not Found") {
        toast.error('Appointment not found.');
        return;
      }   
      toast.success('Appointment deleted successfully');
      fetchDoctorAppointments();
    } catch (error) {
      console.error('Error deleting appointment:', error);
      toast.error('Failed to delete appointment.');
    }
  };

  const getLastAppointment = (patientId) => {
    if (!Array.isArray(doctorAppointments)) {
      return 'No appointments found';
    }

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
              <button className='btn fontb rounded-5 mx-1 py-2 my-2' onClick={handleShowPatients}>
                Show Patients
              </button>
            </div>
            <div className="col">
              <img src={imgappiontment} className='imgappiontment w-100 h-100' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='margetop row g-4 d-flex justify-content-center'>
        {showPatients &&
          patients.map((patient) => (
            <div
              className={`doctorli col-lg-2 m-3 p-3 border rounded-3 position-relative ${selectedPatient && selectedPatient.id === patient.id ? 'selected' : ''}`}
              key={patient.id}
              onClick={() => handleSelectPatient(patient)}
              style={{ cursor: 'pointer',
                boxShadow: '0 0 10px rgba(32, 182, 163, 0.5)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', }}
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

      <div className=' mergefot my-5 container appo'>
        <h2>refollow date</h2>
        <table className="table mergefot">
          <thead>
            <tr className='thhead'>
              <th className='thh'>Patient Name</th>
              <th className='thh'>Last Appointment Date</th>
              <th className='thh'>Patient ID</th>
              <th className='thh'>Delete </th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <td>{patient.fullName}</td>
                <td>{getLastAppointment(patient.id)}</td>
                <td>{patient.id}</td>
                <td>
                  <button 
                    className='btn btn-danger' 
                    onClick={() => {
                      if (Array.isArray(doctorAppointments)) {
                        const lastAppointment = doctorAppointments.find(appointment => appointment.patient_id === patient.id);
                        if (lastAppointment) {
                          deleteAppointment(lastAppointment.appointment_id);
                        } else {
                          toast.error('No appointment to delete.');
                        }
                      } else {
                        toast.error('No appointment to delete.');
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
