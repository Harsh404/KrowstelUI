import React from 'react';
import CardDashboard from '../CardDashboard/CardDashboard';
import DonutComponent from '../DonutComponent/DonutComponent';
import "../MainContent/MainContent.css";
import LowerDonutComponent from '../LowerDonutComponent/LowerDonutComponent';
function MainContent() {
    return (
        <div className='main-content'>
            <div className="main-content-upper">
             <CardDashboard/>
             <DonutComponent/>
            </div>
              <LowerDonutComponent/> 
        </div>
    )
}

export default MainContent
