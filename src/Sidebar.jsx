// src/Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div>
      <h2>Sidebar</h2>
      <nav>
        <ul>
          <li><a href="/student-management">Student Management</a></li>
          <li><a href="/financial-management">Financial Management</a></li>
          <li><a href="/quality-control">Quality Control</a></li>
          <li><a href="/report-delivery">Report Delivery</a></li>
          <li><a href="/attendance">Attendance</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
