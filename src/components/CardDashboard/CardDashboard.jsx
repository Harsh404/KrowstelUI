import React from 'react';
import { BsFileBarGraph } from "react-icons/bs";
import { MdDriveFolderUpload, MdOutlineDiscount, MdOutlineNewspaper, MdPersonAddAlt1 } from "react-icons/md";
import CardComponent from '../CardComponent/CardComponent';
import "../CardDashboard/CardBoard.css";
function CardDashboard() {

  const cardData = [
    {
      icon: MdPersonAddAlt1,
      number: '45',
      text: "New Application",
      smalltext: '+8% from yesterday',
      bgColor: '#FFE2E5',
      iconBgColor: '#BF83FF',

    },
    {
      icon: BsFileBarGraph,
      number: '33',
      text: "New Messages",
      smalltext: "+5% from yesterday",
      bgColor: '#FFF4DE',
      iconBgColor: '#FA5A7D',

    },
    {
      icon: MdOutlineNewspaper,
      number: '2',
      text: "New Job Posts",
      smalltext: "+12% from yesterday",
      bgColor: '#DCFCE7',
      iconBgColor: '#FF947A',

    },
    {
      icon: MdOutlineDiscount,
      number: '3',
      text: "Active Jobs",
      smalltext: "+7% from yesterday",
      bgColor: '#F3E8FF',
      iconBgColor: '#3CD856',

    },

  ]
  return (
    <div className='card-dashboard'>
      <div className="upper-card">
        <div className="upper-card-head">
          <h4>Today's Summary</h4>
        </div>
        <div className="upper-card-btn">
          <button className="btn-card">
            <span><MdDriveFolderUpload className='folder-icon' /></span>Export</button>
        </div>
      </div>
      {/* Upper Part end */}
      <div className="lower-card">
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            icon={card.icon}
            number={card.number}
            text={card.text}
            smalltext={card.smalltext}
            bgColor={card.bgColor}
            iconBgColor={card.iconBgColor}
          />
        ))}

      </div>
    </div>
  )
}

export default CardDashboard
