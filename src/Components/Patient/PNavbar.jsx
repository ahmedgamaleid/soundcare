import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

export default function PNavbar() {
  const navigate = useNavigate();
  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem('doctor');
    localStorage.removeItem('patient');
    // Navigate to the login page
    navigate('/');
  };
  return (
    <>
      <nav className="navbar navsty navbar-expand-md navbar-light  d-flex justify-content-around">
      <div className="container">
        {/* Importing Wavefont font family */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Wavefont:wght@300&display=swap');
            .logonav {
              font-family: 'Wavefont', system-ui;
              /* Adjust the font size as needed */
            }
          `}
        </style>
        <div></div>
        {/* Styling for .logonav class */}
        <style>
          {`
            .logonav {
              color: #63e6be;
              transition: transform 0.3s ease;
            }
            .logonav:hover {
              transform: scale(1.1);
            }
          `}
        </style>
        {/* Logo with Wavefont font family and hover effect */}
        <p className="logonav fs-1" href="#">sound care system logo style</p>
        {/* Navbar toggler button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar collapse */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar left side */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <div className=''><p className="">soundcare</p></div> */}
            </li>
          </ul>

          {/* Navbar right side */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            

            {/* Repeat similar NavLinks for other pages */}
            <li className="nav-item mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              }  to="Report">Report</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              }  to="Appiontement">Appiontement</NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              }  to="Feedback">Feedback</NavLink>
            </li>
            

       <li className="nav-item mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } to="Contactus">Contact us</NavLink>
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
    </>
  )
}
