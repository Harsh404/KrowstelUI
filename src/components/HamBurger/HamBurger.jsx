import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { MdQuestionAnswer } from "react-icons/md";
import '../HamBurger/HamBurger.css';
function HamBurger() {

  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="navbar-container">
      <button onClick={toggleMenu} className="hamburger">
        <GiHamburgerMenu />
      </button>


      {isOpen && (
        <div className="slider-container">
          <img id='dp' src='./images/dp.png' /><span> Profile</span>
          <div className='icons'>
            <a className='icon-link'>
              <MdQuestionAnswer className="icon-image-ques" /><span> Messages</span>
            </a>
          </div>
          <div className='icons'>
            <a className='btn-icon'>
              <IoIosNotifications className="icon-image" /><span> Notifications</span>
            </a>
          </div>

          <div className='icons'>
            <a className='btn-icon'>
              <IoMdSettings className="icon-image" /><span> Settings</span>
            </a>
          </div>
        </div>

      )}
    </div>
  );
}

export default HamBurger;
