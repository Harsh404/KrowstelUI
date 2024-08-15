import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Graph from './components/Graph';
import JobForm from './components/JobForm';
import MainContent from './components/MainContent/MainContent';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

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
            {/* <button onClick={toggleSidebar}>TogSide</button> */}
          </div>
          <div className="dashboard">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/job-form" element={<JobForm />} />
              <Route path="/graph" element={<Graph />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
