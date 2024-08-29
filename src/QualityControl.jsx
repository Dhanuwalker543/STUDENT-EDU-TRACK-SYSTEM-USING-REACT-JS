
import React from 'react';
import './StudentManagement.css';
function QualityControl() {
  return (
    <div className='margin'>
      <h1>Quality Control</h1>
      <p>Monitor and manage quality standards within the institution.</p>
      <div className="quality-menu">
        <div className="menu-item">
          <div className="icon">&#9881;</div>
          <p>Quality Inspections</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#128202;</div>
          <p>Performance Metrics</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#128295;</div>
          <p>Improvement Plans</p>
        </div>
      </div>
    </div>
  );
}

export default QualityControl;
