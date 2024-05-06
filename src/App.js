import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ReactLoading from 'react-loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Components
// Admin Components
import About from './Components/admin/About';
import Layout from './Components/admin/Layout';
import Errormsg from './Components/admin/Errormsg';
import Home from './Components/admin/Home';
import Doctors from './Components/admin/Doctors';
import DashBoard from './Components/admin/DashBoard';

// Patient Components
import PFeedback from './Components/Patient/PFeedback';
import PLayout from './Components/Patient/PLayout';
import Report from './Components/Patient/Report';
import Appiontement from './Components/Patient/Appiontement';

// Doctor Components
import Contactus from './Components/Doctors/Contactus';
import Mainlayout from './Components/Doctors/Mainlayout';
import ProfileDoctor from './Components/Doctors/ProfileDoctor';
import Ddashboad from './Components/Doctors/Ddashboad';
import Dpatients from './Components/Doctors/Dpatients';
import DAppiontment from './Components/Doctors/DAppiontment';

// Login Component
import Login from '../src/Components/login/Login ';

// Create a context for doctor's information
export const DoctorContext = createContext();

function App() {
  const doctor = localStorage.getItem("doctor")
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // Set the user role here
  const [doctorId, setDoctorId] = useState(doctor || null); // Set the user role here

  useEffect(() => {
    // Simulating loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle user login
  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  return (
    <DoctorContext.Provider value={{
      doctorId, setDoctorId
    }}>
      <div>
        {isLoading ? (
          <div className="loading-container">
            <Loading />
          </div>
        ) : (
          <Router>
            <ToastContainer />
            <Routes>
              {/* Render login page if not logged in */}
              {!isLoggedIn ? (
                <Route path="/" element={<Login onLogin={handleLogin} />} />
              ) : (
                <>
                  {/* Redirect to respective dashboard based on user role */}
                  {userRole === 'admin' && (
                    <Route path="/" element={<Navigate to="/admin/home" />} />
                  )}
                  {userRole === 'doctor' && (
                    <Route path="/" element={<Navigate to="/doctor/home" />} />
                  )}
                  {userRole === 'patient' && (
                    <Route path="/" element={<Navigate to="/patient/appiontement" />} />
                  )}
                </>
              )}

              {/* Admin Routes */}
              <Route path="/admin/*" element={<AdminRoutes />} />

              {/* Doctor Routes */}
              <Route path="/doctor/*" element={<DoctorRoutes />} />

              {/* Patient Routes */}
              <Route path="/patient/*" element={<PatientRoutes />} />

              {/* Catch-all route */}
              <Route path="*" element={<Errormsg />} />
            </Routes>
          </Router>
        )}
      </div>
    </DoctorContext.Provider>
  );
}

// Loading component
function Loading() {
  return (
    <div className="loadingstart text-center d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="test">
          <span>s</span>
          <span>o</span>
          <span>u</span>
          <span>n</span>
          <span>d</span>
          <span>&nbsp;</span>
          <span>c</span>
          <span>a</span>
          <span>r</span>
          <span>e</span>
        </h2>
        <ReactLoading type="bars" color="#20B6A3" height={100} width={100} />
      </div>
    </div>
  );
}

// Admin Routes
function AdminRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="*" element={<Errormsg />} />
      </Routes>
    </Layout>
  );
}

// Doctor Routes
function DoctorRoutes() {
  return (
    <Mainlayout>
      <Routes>
        <Route path="/" element={<Navigate to="/doctor/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Ddashboad" element={<Ddashboad />} />
        <Route path="Dpatients" element={<Dpatients />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="profileDoctor" element={<ProfileDoctor />} />
        <Route path="DAppiontment" element={<DAppiontment />} />
      </Routes>
    </Mainlayout>
  );
}

// Patient Routes
function PatientRoutes() {
  return (
    <PLayout>
      <Routes>
        <Route path="feedback" element={<PFeedback />} />
        <Route path="appiontement" element={<Appiontement />} />
        <Route path="report" element={<Report />} />
      </Routes>
    </PLayout>
  );
}

// Custom hook to access doctor's information
export function useDoctorInfo() {
  return useContext(DoctorContext);
}

export default App;
