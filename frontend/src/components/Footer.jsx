import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About EduWebinar</h4>
          <p>A comprehensive platform for hosting and managing educational webinars and workshops online.</p>
        </div>
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li>Live webinars and workshops</li>
            <li>Resource sharing</li>
            <li>Participant management</li>
            <li>Recording and playback</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: praneeth17556@gmail.com</p>
          <p>Phone: +918184866737</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 EduWebinar. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
