import React from 'react';
import { MdDashboard } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import "../SideBar/SideBar.css";
function SideBar() {
    return (
        <div className='side-bar'>
            <div className="side-bar-heading">
                <h4>Overview</h4>
            </div>
            <div className="side-bar-sub-head">
                <span><MdDashboard className="side-bar-sub-head-icon" /></span>
                <span className="text-subhead">DashBoard</span>
            </div>
            <div className="side-bar-heading">
                <h4>Jobs</h4>
            </div>
            <div className="side-bar-sub-head">
                <span><CiCirclePlus className="side-bar-sub-head-icon" /></span>
                <span className="text-subhead">Post-Jobs</span>
            </div>
        </div>
    )
}

export default SideBar
