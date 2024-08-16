import React from 'react';
import "../DonutComponent/DonutComponent.css";
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
function DonutComponent() {
    
    const [currentIndex, setCurrentIndex] = useState(0);

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
    const createChartData = (donutCard) => ({
        labels: ['LinkedIn', 'Indeed', 'Ambition-Box'],
        datasets: [
            {
                data: [donutCard.linkValue, donutCard.indValue, donutCard.ambiValue],
                backgroundColor: ['#344BFD', '#F4A79D', '#F68D2B'],
                borderWidth: 0
                // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
        ]
    });
    const options = {
        plugins: {
            legend: {
                position: 'center',
                labels: {
                    usePointStyle: false,
                    padding: 0,
                    font: {
                        size: 0
                    }
                }
            },
            // tooltip: {
            //     callbacks: {
            //         label: function (context) {
            //             const label = context.label || '';
            //             const value = context.raw || 0;
            //             return `${label}: ${value}%`;
            //         }
            //     }
            // }
        },
        cutout: '60%',
    };
    
    const handlePrev = () => {
        const isFirstCard = currentIndex === 0;
        const newIndex = isFirstCard ? donutData.length - 1 : currentIndex - 1;
        console.log("Clicked")
        setCurrentIndex(newIndex);
    }
    const handleNext = () => {
        const isLastCard = currentIndex === donutData.length - 1;
        const newIndex = isLastCard ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    return (
        <div className='donut-component'>
            <div className="donut-heading">
                <button onClick={handlePrev} className='btnOne'><IoIosArrowBack className='left-arrow' /></button>
                <div className="heading">
                    <h5>{donutData[currentIndex].heading}</h5>
                </div>
                <button onClick={handleNext} className='btnTwo'><IoIosArrowForward className='right-arrow' /></button>
            </div>
            <div className="doughNut">
            <Doughnut  data={createChartData(donutData[currentIndex])}  options={options}/>
            </div>
            <div className="bottomData">
                <div className="text">
                    <ul typeof='circle' className='text-data'>
                    <li className='donut-list-item'>LinkedIn</li>
                    <li className='donut-list-item'>Indeed</li>
                    <li className='donut-list-item'>Ambition-Box</li>
                    </ul>
                </div>
                <div className="bottomNum">
                    <ul className='num-bullet'>
                    <li className='donut-list-item'>{donutData[currentIndex].linkValue}%</li>
                    <li className='donut-list-item'>{donutData[currentIndex].indValue}%</li>
                    <li className='donut-list-item'>{donutData[currentIndex].ambiValue}%</li>
                    </ul>
                    
                </div>
            </div>


        </div>
    )
}

export default DonutComponent
