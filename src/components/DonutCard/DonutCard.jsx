
import React from "react";

const DonutCard = ({ heading, linkValue, indValue, ambiValue }) => {
    return (
        <div style={{...styles.donutCard}}>
            <div style={{}}>
                {heading}
            </div>
            <div style={{...styles.donutIcon}}>
                {/* Doughnut */}
            </div>
            <div style={{...styles.cardBottom}}>
                <div style={{...styles.bottomtext}}>
                    <div><span></span> <span>LinkedIn</span></div>
                    <div><span></span> <span>Indeed</span></div>
                    <div><span></span> <span>AmbitionBox</span></div>
                </div>
                <div>
                    <div>{linkValue}%</div>
                    <div>{indValue}%</div>
                    <div>{ambiValue}%</div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    donutCard: {
        display: 'flex',
        flexDirection: 'column'
    },
    donutIcon:{
        display: 'flex',
        alignItems: 'center',
    },
    cardBottom:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    bottomtext:{
        margin: '0px 2px'
    }
}
export default DonutCard;