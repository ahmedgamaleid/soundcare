import React from 'react'
import Navbaar from './Navbaar'
import { Outlet } from 'react-router-dom'

export default function Mainlayout({children}) {
  return (
    <>
      <Navbaar/>
      <Outlet/>
      {children}
    </>
  )
}
