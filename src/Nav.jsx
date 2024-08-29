import React from 'react'
import { CiBadgeDollar } from "react-icons/ci";
import logo from "./images-removebg-preview (1).png"
import { PiStudentFill } from "react-icons/pi";
const Nav = () => {
  return (
    <div>
        <div><img src={logo} alt="logo" className='logo' width={150}/></div>
        <div className='nav'>
            <i><PiStudentFill/></i><br />
            <a href="#" className="nav-link">Student Management</a>
        </div>
        <div className='nav'>
            <i><CiBadgeDollar /></i><br />
            <a href="#" className="nav-link">Financial Management</a>
        </div>
        <div className='nav'>
            <i></i>
            <a href="#" className="nav-link">Quality control</a>
        </div>
        <div className='nav'>
            <i></i>
            <a href="#" className="nav-link">Report Delivery</a>
        </div>
        <div className='nav'>
            <i></i>
            <a href="#" className="nav-link">Attendance</a>
        </div>
    </div>
  )
}

export default Nav