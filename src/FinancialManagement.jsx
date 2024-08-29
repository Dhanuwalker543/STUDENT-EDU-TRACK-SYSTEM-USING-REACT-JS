
import React from 'react';
import './StudentManagement.css';
function FinancialManagement() {
  return (
    <div className='margin'>
      <h1>Financial Management</h1>
      <p>Manage all financial aspects including fees, expenses, and budgeting.</p>
      <div className="financial-menu">
        <div className="menu-item">
          <div className="icon">&#128178;</div>
          <p>Fees Collection</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#128179;</div>
          <p>Budgeting</p>
        </div>
        <div className="menu-item">
          <div className="icon">&#128200;</div>
          <p>Financial Reports</p>
        </div>
      </div>
    </div>
  );
}

export default FinancialManagement;
