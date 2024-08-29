
import React from 'react';
import './StudentManagement.css';

function StudentManagement() {
  return (
    <div className="student-management margin">
      <h1>Student Management</h1>
      <div className="status-boxes">
        <div className="status-box red">
          <div className="icon">&#128100;</div>
          <div className="details">
            <p>Regular Students</p>
            <h2>8</h2>
          </div>
        </div>
        <div className="status-box purple">
          <div className="icon">&#128110;</div>
          <div className="details">
            <p>Remedial Students</p>
            <h2>13</h2>
          </div>
        </div>
        <div className="status-box green">
          <div className="icon">&#128101;</div>
          <div className="details">
            <p>In Paid Clubs</p>
            <h2>00</h2>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="menu-item">
          <div className="icon">&#128104;</div>
          <p>Regular Enrollment</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#128218;</div>
          <p>Remedial Enrollment</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#128101;</div>
          <p>Club Management</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#128213;</div>
          <p>Classroom Management</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#9993;</div>
          <p>SMS / EMAIL</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#128202;</div>
          <p>Attendance</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#127973;</div>
          <p>Clinic</p>
        </div>
      </div>
    </div>
  );
}

export default StudentManagement;
