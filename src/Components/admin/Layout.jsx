import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
   <Outlet/>
   {children}
   <Footer/>
    </>
  )
}

export default Layout;
