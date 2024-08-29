
import React from 'react';
import './StudentManagement.css';
function ReportDelivery() {
  return (
    <div className='margin'>
      <h1>Report Delivery</h1>
      <p>Handle the delivery and management of student reports and grades.</p>
      <div className="report-menu">
        <div className="menu-item">
          <div className="icon">&#128196;</div>
          <p>Generate Reports</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#128200;</div>
          <p>View Reports</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#128466;</div>
          <p>Archive Reports</p>
        </div>
      </div>
    </div>
  );
}

export default ReportDelivery;
