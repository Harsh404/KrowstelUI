import React from 'react';
import "../src/App.css";
import MainContent from './components/MainContent/MainContent';
import NavBar from './components/Navbar/NavBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <NavBar />
      <MainContent/>
    </div>
  )
}

export default App
