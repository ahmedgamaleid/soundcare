import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import log from '../../img/Computer login-bro (2).png';
import Dpatients from '../Doctors/Dpatients'; // Import the Dpatients component
import { DoctorContext, PatientContext } from '../../App'; // Import PatientContext
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();
  const [showDpatients, setShowDpatients] = useState(false); // State to manage whether to show Dpatients
  const [loading, setLoading] = useState(false); // State to manage loading state
  const { doctorId, setDoctorId } = useContext(DoctorContext);
  const { patientId, setPatientId } = useContext(PatientContext); // Use PatientContext

  const handleLogin = async () => {
    if (!type || type === '') {
      alert('Please choose account type');
      return;
    }

    setLoading(true); // Set loading state to true while waiting for response

    const apiUrl = {
      admin: 'http://127.0.0.1:8000/api/admin_login',
      doctor: 'http://127.0.0.1:8000/api/doctor_login',
      patient: 'http://127.0.0.1:8000/api/patient_login',
    };

    try {
      const response = await fetch(apiUrl[type], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      const userData = data.data[`${type}_data`];

      if (userData.role === 'doctor') {
        localStorage.setItem("doctor", userData.id);
        setDoctorId(userData.id); // Store doctor's ID
        setShowDpatients(true); // Show Dpatients component
        toast.success(`Hello, Dr. ${userData.name}`);
      } else if (userData.role === 'patient') {
        localStorage.setItem("patient", userData.id);
        setPatientId(userData.id); // Store patient's ID
        toast.success(`Hello, Patient ${userData.fullName}`);
      }

      switch (userData.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'doctor':
          navigate('/doctor');
          break;
        case 'patient':
          navigate('/patient');
          break;
        default:
          navigate('/'); // Redirect to homepage or error page
      }
    } catch (error) {
      toast.error('Invalid credentials');
      console.error(error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-container container border-primary rounded">
      <div className="row">
        <div className="login col-lg-6">
          <a href="#" className="logologin fs-1 my-4">
            sound care system logo style
          </a>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
              />
            </div>
            <div>
              <label htmlFor="type">Login as</label>
              <select
                name="type"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select type</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
                <option value="patient">Patient</option>
              </select>
            </div>
            <button type="submit" className="fontb rounded-5 py-2" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>

        <div className="img col-lg-6 d-flex justify-content-center align-content-center">
          {showDpatients && <Dpatients doctorId={doctorId} />} {/* Make sure doctorId is not null */}
          <img src={log} className="w-100" alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
