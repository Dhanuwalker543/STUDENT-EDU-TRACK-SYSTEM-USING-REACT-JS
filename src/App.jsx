import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentManagement from './StudentManagement';
import FinancialManagement from './FinancialManagement';
import QualityControl from './QualityControl';
import ReportDelivery from './ReportDelivery';
import Attendance from './Attendance';
import Sidebar from './Sidebar';
import './global.css'; // Import global CSS

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
          <Sidebar />
        </div>
        <div className={`content ${sidebarOpen ? 'shifted' : ''}`}>
          <div className={`hamburger ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Routes>
            <Route path="/student-management" element={<StudentManagement />} />
            <Route path="/financial-management" element={<FinancialManagement />} />
            <Route path="/quality-control" element={<QualityControl />} />
            <Route path="/report-delivery" element={<ReportDelivery />} />
            <Route path="/attendance" element={<Attendance />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
