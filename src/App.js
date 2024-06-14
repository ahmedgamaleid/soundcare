import React, { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import ReactLoading from "react-loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Components/ProtectedRoute";

// Import Components
// Admin Components
import About from "./Components/admin/About";
import Layout from "./Components/admin/Layout";
import Errormsg from "./Components/admin/Errormsg";
import Home from "./Components/admin/Home";
import Doctors from "./Components/admin/Doctors";
import DashBoard from "./Components/admin/DashBoard";

// Patient Components
import PFeedback from "./Components/Patient/PFeedback";
import PLayout from "./Components/Patient/PLayout";
import Report from "./Components/Patient/Report";
import Appiontement from "./Components/Patient/Appiontement";

// Doctor Components
import Contactus from "./Components/Doctors/Contactus";
import Mainlayout from "./Components/Doctors/Mainlayout";
import ProfileDoctor from "./Components/Doctors/ProfileDoctor";
import Ddashboad from "./Components/Doctors/Ddashboad";
import Dpatients from "./Components/Doctors/Dpatients";
import DAppiontment from "./Components/Doctors/DAppiontment";
import DProfile from "./Components/Doctors/DProfile";

// Login Component
import Login from "../src/Components/login/Login ";

// Create a context for doctor's information
export const DoctorContext = createContext();
// Create a context for patient's information
export const PatientContext = createContext();

function App() {
  const doctor = localStorage.getItem("doctor");
  const patient = localStorage.getItem("patient");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [doctorId, setDoctorId] = useState(doctor || null);
  const [patientId, setPatientId] = useState(patient || null);
  const [patientName, setPatientName] = useState("");
  const [token, setToken] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const doctorData = localStorage.getItem("doctor");
    const patientData = localStorage.getItem("patient");

    if (doctorData) {
      setDoctorId(doctorData);
    }

    if (patientData) {
      const { id, fullName } = JSON.parse(patientData);
      setPatientId(id);
      setPatientName(fullName);
    }
  }, []);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  return (
    <DoctorContext.Provider value={{ doctorId, setDoctorId, setToken }}>
      <PatientContext.Provider
        value={{
          patientId,
          setPatientId,
          patientName,
          setPatientName,
          setToken,
        }}
      >
        <div>
          {isLoading ? (
            <div className="loading-container">
              <Loading />
            </div>
          ) : (
            <Router>
              <ToastContainer />
              <Routes>
                {!isLoggedIn ? (
                  <Route path="/" element={<Login onLogin={handleLogin} />} />
                ) : (
                  <>
                    {userRole === "admin" && (
                      <Route path="/" element={<Navigate to="/admin/home" />} />
                    )}
                    {userRole === "doctor" && (
                      <Route
                        path="/"
                        element={<Navigate to="/doctor/home" />}
                      />
                    )}
                    {userRole === "patient" && (
                      <Route
                        path="/"
                        element={<Navigate to="/patient/report" />}
                      />
                    )}
                  </>
                )}
                <Route path="/admin/*" element={<AdminRoutes />} />
                <Route path="/doctor/*" element={<DoctorRoutes />} />
                <Route path="/patient/*" element={<PatientRoutes />} />
                <Route path="*" element={<Errormsg />} />
              </Routes>
            </Router>
          )}
        </div>
      </PatientContext.Provider>
    </DoctorContext.Provider>
  );
}
//loading
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

function AdminRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/home" />} />
        <Route
          path="home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="Doctors"
          element={
            <ProtectedRoute>
              <Doctors />
            </ProtectedRoute>
          }
        />
        <Route
          path="DashBoard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
        {/* Moved the error route to the end */}
        <Route path="*" element={<Errormsg />} />
      </Routes>
    </Layout>
  //   <Layout>
  //   <Routes>
  //     <Route path="/" element={<Navigate to="/admin/home" />} />
  //     <Route path="home" element={<Home />} />
  //     <Route path="about" element={<About />} />
  //     <Route path="doctors" element={<Doctors />} />
  //     <Route path="dashboard" element={<DashBoard />} />
  //     <Route path="*" element={<Errormsg />} />
  //   </Routes>
  // </Layout>

  );
}

function DoctorRoutes() {
  return (
    <Mainlayout>
      <Routes>
        <Route path="/" element={<Navigate to="/doctor/home" />} />
        <Route
          path="home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="Ddashboad"
          element={
            <ProtectedRoute>
              <Ddashboad />
            </ProtectedRoute>
          }
        />
        <Route
          path="Dpatients"
          element={
            <ProtectedRoute>
              <Dpatients />
            </ProtectedRoute>
          }
        />
        <Route
          path="profileDoctor"
          element={
            <ProtectedRoute>
              <ProfileDoctor />
            </ProtectedRoute>
          }
        />
        <Route
          path="DAppiontment"
          element={
            <ProtectedRoute>
              <DAppiontment />
            </ProtectedRoute>
          }
        />
        <Route
          path="DProfile"
          element={
            <ProtectedRoute>
              <DProfile />
            </ProtectedRoute>
          }
        />
        {/* Moved the error route to the end */}
        <Route path="*" element={<Errormsg />} />
      </Routes>
    </Mainlayout>
  );
}

function PatientRoutes() {
  return (
    <PLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/patient/report" />} />
        <Route
          path="Report"
          element={
            <ProtectedRoute>
              <Report />
            </ProtectedRoute>
          }
        />
        <Route
          path="Feedback"
          element={
            <ProtectedRoute>
              <PFeedback />
            </ProtectedRoute>
          }
        />
        <Route
          path="Appiontement"
          element={
            <ProtectedRoute>
              <Appiontement />
            </ProtectedRoute>
          }
        />
        <Route
          path="Contactus"
          element={
            <ProtectedRoute>
              <Contactus />
            </ProtectedRoute>
          }
        />
        {/* Moved the error route to the end */}
        <Route path="*" element={<Errormsg />} />
      </Routes>
    </PLayout>
  );
}

export function useDoctorInfo() {
  return useContext(DoctorContext);
}

export function usePatientInfo() {
  return useContext(PatientContext);
}

export default App;
