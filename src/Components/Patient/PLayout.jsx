import React from 'react'
import PNavbar from './PNavbar'
import { Outlet } from 'react-router-dom'

export default function PLayout({children}) {
  return (
    <>
      <PNavbar/>
      <Outlet/>
      {children}
    </>
  )
}
