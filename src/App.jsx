import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";
import Graph from './components/Graph';
import JobForm from './components/JobForm';
import MainContent from './components/MainContent/MainContent';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function App() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  // const toggleSidebar = () => {
  //     setIsSidebarHidden(!isSidebarHidden);
  // };
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="body">
          <button className='togglebtn' onClick={()=>{setIsSidebarHidden(!isSidebarHidden)}}><GiHamburgerMenu /></button>
          <div className={`sidebar ${isSidebarHidden ? 'hidden' : 'show'}`} 
          >
            <Sidebar />
          </div>
          <div className={`dashboard ${isSidebarHidden ? 'expanded' : ''}`}>
            <Routes>
              <Route path="/dashboard" element={<MainContent />} />
              <Route path="/job-form" element={<JobForm />} />
              <Route path="/graph" element={<Graph />} />
            </Routes>
          </div>
        </div>


      </div>
    </Router>
  );
}
