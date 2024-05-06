// Navbaar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbaar() {
  return (
    <nav className="navbar navsty navbar-expand-md navbar-light  d-flex justify-content-around">
      <div className="container">
        {/* Importing Wavefont font family */}
        <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Wavefont:wght@300&display=swap');
          .logonav {
            font-family: 'Wavefont', system-ui;
            color: #63e6be;
            transition: transform 0.3s ease;
            text-decoration: none; /* Removing underline for links */
            cursor: pointer; /* Changing cursor to pointer on hover */
          }
          .logonav:hover {
            transform: scale(1.1);
          }
          .nav{
            font-family: "Comfortaa", sans-serif;
          }
        `}
    </style>

    <a href="#" className="logonav fs-1">sound care system logo style</a>
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
              } to="Home">Home</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } to="About">About</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } to="Ddashboad">DashBoard</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } to="Dpatients">patients</NavLink>
            </li>
            {/* <li className="nav-item mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } to="Dpatients">patients</NavLink>
            </li> */}
            <li className="nav-item mx-2">
              {/* NavLink for login */}
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } to="DAppiontment">DAppiontment</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } to="Contactus">Contact us</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive, isPending }) =>
                isActive ? "active nav-link  rounded" : "nav-link"
              } ><i className="fa-solid fa-right-from-bracket"></i> </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
