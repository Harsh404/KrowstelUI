
import { MdQuestionAnswer } from "react-icons/md";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import React from 'react';
import '../components/styles/Navbar.css';
import HamBurger from "./HamBurger/HamBurger";

export default function Navbar() {

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src='./images/logo.svg'></img>
            </div>
            <div className="res-container">
            <div class="search-box-res">
                    <input type="text" placeholder="Search for something" id="searchInput" />
                </div>
            <div className="nav-hamburger" >
                    <HamBurger />
                </div>
                </div>
            <div className='toolbar'>
              
                <div class="search-box">
                    <input type="text" placeholder="Search for something" id="searchInput" />
                </div>
                <div className="iconbar">
                    <div className='icons'>
                        <a className='icon-link'>
                            <MdQuestionAnswer className="icon-image-ques" />
                        </a>
                    </div>
                    <div className='icons'>
                        <a className='btn-icon'>
                            <IoIosNotifications className="icon-image" />
                        </a>
                    </div>

                    <div className='icons'>
                        <a className='btn-icon'>
                            <IoMdSettings className="icon-image" />
                        </a>
                    </div>

                    <div className='profile-img'>
                        <img id='dp' src='./images/dp.png' />
                    </div>
                </div>
            </div>



        </div>
    )
}
