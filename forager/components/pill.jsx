import React from 'react';

export default function RoundedRectangle({ text, isGreen }) {
  const styles = {
    display: 'inline-flex',
    padding: '0px 17px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    width: '100px',
    height: '22px',
    borderRadius: '100px',
    background: isGreen ? '#579076' : '#D9D9D9', // Green or Gray
    color: isGreen ? '#FFFFFF' : '#7C7C7C', // White text for green, dark text for gray
    fontSize: '14px',
    fontWeight: 'bold',
  };

  return <div style={styles}>{text}</div>;
}
