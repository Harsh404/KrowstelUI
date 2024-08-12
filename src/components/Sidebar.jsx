import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../components/styles/Sidebar.css';
import { FaQuestionCircle, FaVideo } from 'react-icons/fa';
import { MdDashboard, MdHistory, MdNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsSuitcaseLg } from "react-icons/bs";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineCurrencyDollar, HiOutlineDocumentDuplicate } from "react-icons/hi";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    {
      section: 'OVERVIEW',
      items: [
        { label: 'Dashboard', icon: <MdDashboard />, path: '/dashboard' }
      ],
    },
    {
      section: 'JOBS',
      items: [
        { label: 'Post Job', icon: <IoIosAddCircleOutline />, path: '/job-form' },
        { label: 'Active Jobs', icon: <BsSuitcaseLg />, path: '/active-jobs' },
        { label: 'Closed Jobs', icon: <BiSolidBriefcaseAlt2 />, path: '/closed-jobs' },
      ],
    },
    {
      section: 'CANDIDATES',
      items: [
        { label: 'Source Talent', icon: <IoPeopleSharp />, path: '/source-talent' },
        { label: 'Applicants', icon: <GrDocumentText />, path: '/applicants' },
      ],
    },
    {
      section: 'SUBSCRIPTION',
      items: [
        { label: 'Subscription Plans', icon: <HiOutlineCurrencyDollar />, path: '/subscription-plans' },
        { label: 'Payment History', icon: <MdHistory />, path: '/payment-history' },
      ],
    },
    {
      section: 'RESOURCES',
      items: [
        { label: 'Help Center', icon: <FaQuestionCircle />, path: '/help-center' },
        { label: 'Documentation', icon: <HiOutlineDocumentDuplicate />, path: '/documentation' },
        { label: 'Tutorial', icon: <FaVideo />, path: '/tutorial' },
      ],
    },
  ];

  return (
    <div className="sidebar-wrapper">
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-content">
          {menuItems.map((menu, index) => (
            <div className="sidebar-menu" key={index}>
              <div className="menu-section">
                <h3>{menu.section}</h3>
                {menu.items.map((item, idx) => (
                  <NavLink 
                    key={idx}
                    to={item.path} 
                    className="menu-item"
                    activeClassName="active"
                  >
                    {item.icon}
                    {!isCollapsed && <span>{item.label}</span>}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isCollapsed ? <MdOutlineNavigateNext /> : <MdNavigateBefore />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
