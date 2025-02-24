import React from 'react';
import { FaCircle, FaChevronLeft, FaBolt } from 'react-icons/fa';
import '../styles/background.css'; // Import external CSS file

export default function CameraScreen() {
  return (
    <div className="camera-container">
      {/* Background Image */}
      <img src="/icons/mush_1.png" alt="Camera View" className="background-image" />

      {/* Status Bar */}
      <img src="/icons/status_bar.png" alt="Status Bar" className="status-bar" />

      {/* Top Navigation (Back & Flash Buttons) */}
      <div className="top-nav">
        <button className="nav-button">
          <FaChevronLeft />
        </button>
        <button className="nav-button">
          <FaBolt />
        </button>
      </div>

      {/* Focus Area (Yellow Rectangle) */}
      <img src="/icons/Rectangle.png" alt="Focus Area" className="focus-box" />

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <img src="/icons/bottom.png" alt="Bottom Navigation" className="bottom-nav-img" />
      </div>

      {/* Camera Button */}
      <button className="camera-button">
        <FaCircle className="camera-icon" />
      </button>
    </div>
  );
}
