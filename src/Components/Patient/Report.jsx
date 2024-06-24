import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { PatientContext } from '../../App';

export default function Report() {
  const { patientName, patientId } = useContext(PatientContext);
  const [result, setResult] = useState(null);
  const [date, setDate] = useState(null);
  const [refollowDate, setRefollowDate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data is in localStorage
        const storedData = localStorage.getItem(`report_${patientId}`);
        const storedDate = localStorage.getItem(`date_${patientId}`);
        const storedRefollowDate = localStorage.getItem(`refollowDate_${patientId}`);

        if (storedData && storedDate && storedRefollowDate) {
          // Use data from localStorage
          setResult(JSON.parse(storedData));
          setDate(storedDate);
          setRefollowDate(storedRefollowDate);
        } else {
          // Fetch data from API
          const [reportResponse, appointmentResponse] = await Promise.all([
            axios.get(`zz/api/report/patient_report/${patientId}`),
            axios.get(`http://127.0.0.1:8000/api/appointments/patient_appointment/${patientId}`)
          ]);

          const reportData = reportResponse.data.data;
          const appointmentData = appointmentResponse.data.data;

          setResult(reportData);
          setDate(reportData.date);
          setRefollowDate(appointmentData.refollow_dates);

          // Save data to localStorage
          localStorage.setItem(`report_${patientId}`, JSON.stringify(reportData));
          localStorage.setItem(`date_${patientId}`, reportData.date);
          localStorage.setItem(`refollowDate_${patientId}`, appointmentData.refollow_dates);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [patientId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container vh-100">
      <div className="report rounded-5 mt-5"  style={{
          boxShadow: '0 0 10px rgba(32, 182, 163, 0.7)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        }}>
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
              <strong>Doctor's name:</strong> {result.doctor_name}
            </p>
            <p>
              <strong>Date:</strong> {date}
            </p>
           
          </div>
        </div>
        <div className="diagnoses">
          <p>
            <strong>Diagnoses:</strong> {result.diagnosis}
          </p>
        </div>
        <div className="my-0">
          <p className="px-4">
            Best wishes for a speedy recovery! For detailed information about your condition and to explore more about diseases, please visit our Education page.
          </p>
        </div>
      </div>
    </div>
  );
}
