
import React from 'react';
import './StudentManagement.css';
function Attendance() {
  return (
    <div className='margin'>
      <h1>Attendance</h1>
      <p>Track and manage student attendance records.</p>
      <div className="attendance-menu">
        <div className="menu-item">
          <div className="icon">&#128100;</div>
          <p>Student Attendance</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#128366;</div>
          <p>Attendance Summary</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#128736;</div>
          <p>Attendance Alerts</p>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
