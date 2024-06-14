import React, { useContext, useEffect, useState } from 'react';
import { PatientContext } from '../../App'; // Ensure this import is necessary
import axios from 'axios';

export default function Report() {
  const { patientName, patientId } = useContext(PatientContext);
  const [result, setResult] = useState(null);
  const [date, setDate] = useState(null);
  const [refollowDate, setRefollowDate] = useState(null);

  useEffect(() => {
    const savedResult = localStorage.getItem(`result-${patientId}`);
    const savedDate = localStorage.getItem(`date-${patientId}`);
    const savedRefollowDate = localStorage.getItem(`refollowDate-${patientId}`);

    if (savedResult && savedDate && savedRefollowDate) {
      setResult(JSON.parse(savedResult));
      setDate(savedDate);
      setRefollowDate(savedRefollowDate);
    } else {
      // Fetch patient report
      axios.get(`http://127.0.0.1:8000/api/report/patient_report/${patientId}`)
        .then(response => {
          const data = response.data.data;
          setResult(data);
          setDate(data.date);
          localStorage.setItem(`result-${patientId}`, JSON.stringify(data));
          localStorage.setItem(`date-${patientId}`, data.date);
        })
        .catch(error => {
          console.error('Error fetching patient result:', error);
        });

      // Fetch patient appointment
      axios.get(`http://127.0.0.1:8000/api/appointments/patient_appointment/${patientId}`)
        .then(response => {
          const data = response.data.data;
          setRefollowDate(data.refollow_dates);
          localStorage.setItem(`refollowDate-${patientId}`, data.refollow_dates);
        })
        .catch(error => {
          console.error('Error fetching patient appointment:', error);
        });
    }
  }, [patientId]);

  // Check if result exists and render accordingly
  if (!result) {
    return <div>Loading...</div>; // or any other loading indicator you prefer
  }
  return (
    <div className="report">
      <h2 className="hreport">Report</h2>
      <div className="reportinfo d-flex">
        <div className="column w-50">
          <p>
            <strong>Patient's Name:</strong> {patientName}
          </p>
          <p>
            <strong>Patient's ID:</strong> {patientId}
          </p>
        </div>
        <div className="column w-50">
          <p>
            <strong>Doctor's name:</strong> {result?.doctor_name || 'Loading...'}
          </p>
          <p>
            <strong>Date:</strong> {date || 'Loading...'}
          </p>
          <p>
            <strong>Refollow Date:</strong> {refollowDate || 'Loading...'}
          </p>
        </div>
      </div>
      <div className="diagnoses">
        <p>
          <strong>Diagnoses:</strong> {result?.diagnosis || 'Loading...'}
        </p>
      </div>
    </div>
  );
}
