
import React from 'react';
const CardComponent = ({ icon: Icon, number, text, smalltext, bgColor, iconBgColor }) => {
  return (
    <div style={{ ...styles.card, backgroundColor: bgColor }} >
      <div style={{ ...styles.iconContainer, backgroundColor: iconBgColor }} >
        <Icon style={styles.icon} />
      </div>
      <div style={styles.textContainer}>
        <div style={styles.number}>
          {number}
        </div>
        <div style={styles.text}>
          {text}
        </div>
        <div style={styles.smalltext}>
          {smalltext}
        </div>
      </div>
    </div>
  )
};

const styles = {
  card: {
    width: '35%',
    height: '5%',
    // margin: '20px 0px 10px 5px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem 0.5rem',
  },
  iconContainer: {
    height: '25px',
    width: '25px',
    margin: '1rem',
    padding: '0.2rem',
    borderRadius: '50%',
  },
  icon: {
    height: '20px',
    width: '20px',
    color: '#fff',
    margin:'0.2rem'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0rem 0rem 0.4rem 0.4rem'
  },
  number: {
    fontSize: '22px',
    fontWeight: 'bold',
    padding: '6px'
  },
  text: {
    fontSize: '16px',
    color: '#333',
    padding: '6px'
  },
  smalltext: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#4079ED',
    padding: '6px'
  },
};

export default CardComponent;
