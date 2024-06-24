import React from 'react'
import PNavbar from './PNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../admin/Footer'
export default function PLayout({children}) {
  return (
    <>
      <PNavbar/>
      <Outlet/>
      {children}
      <Footer/>
    </>
  )
}
