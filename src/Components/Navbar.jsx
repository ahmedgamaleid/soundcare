import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
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
            @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
            .navsty {
              font-family: 'Comfortaa', sans-serif;
            }
            .nav-right ul.navbar-nav, .nav-right li.nav-item {
              font-family: 'Comfortaa', sans-serif; /* Apply font family to ul and li elements on the right side */
            }
            .left-nav ul.navbar-nav, .left-nav li.nav-item {
              font-family: 'Comfortaa', sans-serif; /* Apply font family to ul and li elements on the left side */
            }
          `}
        </style>
        <div></div>
        {/* Styling for .logonav class */}
        <style>
          {`
            .logonav {
              color: #20B6A3;
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 left-nav">
            <li className="nav-item">
              {/* <div className=''><p className="">soundcare</p></div> */}
            </li>
          </ul>

          {/* Navbar right side */}
          <ul className="navbar-nav ulstyle ms-auto mb-2 mb-lg-0">
            <li className="nav-item ulstyle mx-2">
              {/* NavLink for login */}
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link   rounded" : "nav-link"
              } activeClassName="active" to="login">login</NavLink>
            </li>
            <li className="nav-item ulstyle mx-2">
              {/* NavLink for Register */}
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } activeClassName="active" to="">Register</NavLink>
            </li>
            {/* Repeat similar NavLinks for other pages */}
            <li className="nav-item ulstyle mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } activeClassName="active" to="Home">Home</NavLink>
            </li>
            <li className="nav-item ulstyle mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } activeClassName="active" to="About">About</NavLink>
            </li>
            <li className="nav-item  ulstyle mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } activeClassName="active" to="Doctors">Doctors</NavLink>
            </li>
            <li className="nav-item  ulstyle mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } activeClassName="active" to="DashBoard">DashBoard</NavLink>
            </li>
            <li className="nav-item ulstyle  mx-2">
              <NavLink className={({ isActive }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } activeClassName="active" to="Contactus">Contactus</NavLink>
            </li>
            <li className="nav-item ulstyle mx-2">
              {/* Icon for phone */}
              <div className='callic rounded-circle p-2'> <i className="fa-solid fa-phone text-light"></i></div>
            </li>
            <li className="nav-item ulstyle mx-2">
              <div className="consultations d-flex flex-column">
                <p style={{ margin: '0' }}>FREE CONSULTATIONS</p>
                <p style={{ color: '#20B6A3', margin: '0' }}>(888) 4000-234</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
