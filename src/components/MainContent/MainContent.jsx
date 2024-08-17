import React from 'react';
import CardDashboard from '../CardDashboard/CardDashboard';
import DonutComponent from '../DonutComponent/DonutComponent';
import "../MainContent/MainContent.css";
import LowerDonutComponent from '../LowerDonutComponent/LowerDonutComponent';
function MainContent() {
    return (
        <div className='main-content'>
            <div className="main-cardboard">
             <CardDashboard/>
             </div>
             <div className="graph">
             <DonutComponent/>
             </div>
             <div className="application">

             </div>
            </div>
            //   {/* <LowerDonutComponent/>  */}
      
    )
}

export default MainContent
