import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import JobForm from './components/JobForm';
import Graph from './components/Graph';
import CardDashboard from './components/CardDashboard';

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="body">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="dashboard">
            <Routes>
              <Route path="/" element={<CardDashboard />} />
              <Route path="/job-form" element={<JobForm />} />
              <Route path="/graph" element={<Graph />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
