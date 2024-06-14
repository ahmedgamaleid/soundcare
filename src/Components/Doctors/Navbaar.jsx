import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbaar() {
  const navigate = useNavigate();

  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem('doctor');
    localStorage.removeItem('patient');
    // Navigate to the login page
    navigate('/');
  };

  return (
    <nav className="navbar navsty navbar-expand-md navbar-light d-flex justify-content-around">
      <div className="container">
        {/* Importing Comfortaa font family */}
        <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');
          .logonav {
            font-family: 'Wavefont';
            color: #63e6be;
            transition: transform 0.3s ease;
            text-decoration: none;
            cursor: pointer;
            
          }
          
          .logonav:hover {
            transform: scale(1.1);
          }
          .nav {
            font-family: "Comfortaa", sans-serif;
          }
        `}
        </style>
        

        <a href="#" className="logonav fs-1">sound  kjhgfjyt care system</a>
        {/* Navbar toggler button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar collapse */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar left side */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Placeholder for potential left-side items */}
            </li>
          </ul>

          {/* Navbar right side */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "active nav-link rounded" : "nav-link"} to="home">Home</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "active nav-link rounded" : "nav-link"} to="About">About</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "active nav-link rounded" : "nav-link"} to="Ddashboad">Dashboard</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "active nav-link rounded" : "nav-link"} to="Dpatients">Patients</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "active nav-link rounded" : "nav-link"} to="DAppiontment">Appointment</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "active nav-link rounded" : "nav-link"} to="dprofile">Profile</NavLink>
            </li>
            <li className="nav-item mx-2">
              {/* Logout button */}
              <button onClick={logout} className="btn btn-link nav-link">
                <i className="fa-solid fa-right-from-bracket"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
