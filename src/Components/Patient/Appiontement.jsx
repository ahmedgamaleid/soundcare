import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PatientContext } from "../../App";

export default function Appointment() {
  const [appointmentData, setAppointmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { patientId } = useContext(PatientContext); // Assuming PatientContext provides patientId

  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        // Check if data is in localStorage
        const storedAppointmentData = localStorage.getItem(`appointment_${patientId}`);

        if (storedAppointmentData) {
          // Use data from localStorage
          setAppointmentData(JSON.parse(storedAppointmentData));
        } else {
          // Fetch data from API
          const response = await axios.get(
            `http://127.0.0.1:8000/api/appointments/patient_appointment/${patientId}`
          );
          const fetchedAppointmentData = response.data.data;

          setAppointmentData(fetchedAppointmentData);

          // Save data to localStorage
          localStorage.setItem(`appointment_${patientId}`, JSON.stringify(fetchedAppointmentData));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointmentData();
  }, [patientId]);

  if (loading) {
    return <p className="padding-20">Loading...</p>;
  }

  if (error) {
    return <p className="padding-20">Error: {error}</p>;
  }

  return (
    <>
      <div className="container vh-100">
        <div className="background-container rounded-5 mt-5">
          <div className="overlay rounded-5">
            {appointmentData ? (
              <div className="container text-light p-4 ">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="my-5">
                      <h1>Appointment Details</h1>
                    </div>
                    <div className="my-3">
                      <h4>Doctor Name: {appointmentData.doctor_name}</h4>
                    </div>
                    <div className="my-3">
                      <h4>Patient Name: {appointmentData.patient_name}</h4>
                    </div>
                    <div className="my-3">
                      <h4>Refollow Dates: {appointmentData.refollow_date}</h4>
                    </div>
                  </div>
                  <div className="col-lg-7 text-left align-self-start">
                    {" "}
                    {/* Added align-self-start */}
                    <p className="padding-20  text-start">
                      Appointments are essential for managing responsibilities
                      effectively. They ensure dedicated time for important
                      discussions, reflect respect for time, and help in making
                      informed decisions. Being prepared and punctual for
                      appointments enhances professionalism and productivity.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="padding-20">No appointment data available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
