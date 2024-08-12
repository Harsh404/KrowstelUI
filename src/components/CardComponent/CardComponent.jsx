
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
    width: '180px',
    height: '211px',
    margin: '36px 0px 12px 5px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column'

  },
  iconContainer: {
    height: '25px',
    width: '25px',
    margin: '18px 12px',
    padding: '10px',
    borderRadius: '50%',
  },
  icon: {
    height: '24px',
    width: '24px',
    color: '#fff',

  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 10px'
  },
  number: {
    fontSize: '24px',
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
