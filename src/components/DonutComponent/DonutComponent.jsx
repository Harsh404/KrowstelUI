import React from 'react';
import DonutCard from '../DonutCard/DonutCard';
import "../DonutComponent/DonutComponent.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function DonutComponent() {
    const donutData = [
        {
            heading: "Sales Development Executive",
            linkValue: "60",
            indValue: "20",
            ambiValue: "20"
        },
        {
            heading: "Python Developer",
            linkValue: "10",
            indValue: "19",
            ambiValue: "71"
        },
        {
            heading: "Data Analyst",
            linkValue: "45",
            indValue: "25",
            ambiValue: "30"
        }
    ]
    return (
        <div className='donut-component'>
            <div className="arrow">
                <IoIosArrowBack className='left-arrow' />
            </div>
            <div className="card-donut-com">
                {donutData.map((donut, index) => (
                    <DonutCard
                        key={index}
                        heading={donut.heading}
                        linkValue={donut.linkValue}
                        ambiValue={donut.ambiValue}
                        indValue={donut.indValue}
                    />
                )

                )
                }
            </div>
            <div className="arrow">
                <IoIosArrowForward className='right-arrow' />
            </div>
        </div>
    )
}

export default DonutComponent
