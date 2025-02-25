import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

export default function SearchBar() {
  const containerStyle = {
    display: 'flex',
    width: '337.336px',
    height: '39px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '13px',
  };

  const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '305px',
    height: '39px',
    flexShrink: 0,
    borderRadius: '19.5px',
    background: '#FFF',
    padding: '0 10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    flex: 1,
    border: 'none',
    outline: 'none',
    color: 'rgba(0, 0, 0, 0.50)',
    textAlign: 'center',
    fontFamily: 'Nunito, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    background: 'transparent',
  };

  const iconStyle = {
    width: '25.24px',
    height: '24px',
    color: 'rgba(0, 0, 0, 0.5)',
  };

  const filterIconStyle = {
    width: '19.34px',
    height: '21.75px',
    color: '#579076', // Primary color
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      {/* Search Bar */}
      <div style={searchBarStyle}>
        <FaSearch style={iconStyle} />
        <input type="text" placeholder="Search for a mushroom" style={inputStyle} />
      </div>

      {/* Filter Icon */}
      <FaFilter style={filterIconStyle} />
    </div>
  );
}
