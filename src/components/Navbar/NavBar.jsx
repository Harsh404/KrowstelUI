import React from 'react';
import "../Navbar/NavBar.css";
import { MdMessage, MdOutlineNotificationsNone, MdOutlineSettings,MdOutlineSearch  } from "react-icons/md";
function NavBar() {
    return (
        <div className='nav-bar'>
           <h2 className="logo">HunterPro</h2>
            <div className="navbar-section">
                <div className="search-bar">
                    <span className='search-icon'><MdOutlineSearch/></span><input className = "search-input" type="text" placeholder='Search Something here' />
                </div>
                <div className="message-icon">
                <span><MdMessage className='message-icon-content'/></span>
                </div>
                <div className="message-icon">
                   <span><MdOutlineNotificationsNone className='message-icon-content'/></span> 
                </div>
                <div className="message-icon">
                <span ><MdOutlineSettings className='message-icon-content'/></span> 
                </div>
                <div className="profile-image">
                    <img src="/images/profile.png" alt="profile image" />
                </div>
            </div>
        </div>
    )
}

export default NavBar

