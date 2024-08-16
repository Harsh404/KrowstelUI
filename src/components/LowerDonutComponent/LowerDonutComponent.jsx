import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../LowerDonutComponent/LowerDonutComponent.css';

ChartJS.register(ArcElement, Tooltip, Legend);
const LowerDonutComponent = () => {
    const data = {
        labels: ["+2.5%", "-0.5%", "+0.4%"],
        datasets: [
            {
                data: [25, 15, 35],
                backgroundColor: ["#00bcd4", "#283593", "#f57c00"],
                hoverBackgroundColor: ["#00acc1", "#1a237e", "#ef6c00"],
                borderWidth: 5,
                borderColor: '#fff'
            },
        ],
    };

    const options = {
        cutout: "60%",
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    return (
        <div className="doughnut">
            <div className="lower-donut-heading">
                <h5 style={{ marginBottom: "1rem", fontSize: '1rem' }}>Application Response</h5>
                <div className="lower-donut-btn">
                    <button className="btn-donut">Download Response</button>
                </div>
            </div>
             <div  className= ' lower-donut-icon' >
            <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}

export default LowerDonutComponent
