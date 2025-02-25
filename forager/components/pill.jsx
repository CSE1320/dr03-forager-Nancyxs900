import React from 'react';

export default function RoundedRectangle({ text }) {
  const styles = {
    display: 'inline-flex',
    padding: '0px 17px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    width: '100px',
    height: '22px',
    borderRadius: '100px',
    background: '#579076', // Primary color
    color: 'rgba(255, 255, 255, 1)', // White text
    fontSize: '14px',
    fontWeight: 'bold',
  };

  return <div style={styles}>{text}</div>;
}