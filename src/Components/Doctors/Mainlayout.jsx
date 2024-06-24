import React from 'react'
import Navbaar from './Navbaar'
import { Outlet } from 'react-router-dom'
import Footer from '../admin/Footer'

export default function Mainlayout({children}) {
  return (
    <>
      <Navbaar/>
      <Outlet/>
      {children}
      <Footer/>
    </>
  )
}
