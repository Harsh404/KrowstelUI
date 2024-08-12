import React from 'react';
import CardDashboard from '../CardDashboard/CardDashboard';
import DonutComponent from '../DonutComponent/DonutComponent';
import "../MainContent/MainContent.css";
function MainContent() {
    return (
        <div className='main-content'>
            <div className="main-content-upper">
             <CardDashboard/>
             <DonutComponent/>
            </div>
            <div className="main-content-lower">

            </div>
        </div>
    )
}

export default MainContent
