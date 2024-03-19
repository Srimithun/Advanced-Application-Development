import React from 'react'

import '../../assets/css/Footer.css';

function Footer() {
  return (
    <>
        <footer className="footer-container">
            <div className="footer-section">
                <h2 className="footer-sec-title">Chess Academy</h2>
                <ul className="footer-links">
                    <li><a href="#" className="footer-link">About us</a></li>
                    <li><a href="#" className="footer-link">Terms and Conditions</a></li>
                    <li><a href="#" className="footer-link">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-section">
            <h2 className="footer-sec-title">Chess Academy</h2>
                <ul className="footer-links">
                    <li><a href="#" className="footer-link">About us</a></li>
                    <li><a href="#" className="footer-link">Terms and Conditions</a></li>
                    <li><a href="#" className="footer-link">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-section">
            <h2 className="footer-sec-title">Chess Academy</h2>
                <ul className="footer-links">
                    <li><a href="#" className="footer-link">About us</a></li>
                    <li><a href="#" className="footer-link">Terms and Conditions</a></li>
                    <li><a href="#" className="footer-link">Privacy Policy</a></li>
                </ul>
            </div>

            <div className="footer-content">
                <p className='footer-text-center'><i className="bx bx-copyright"></i> 2024 Chess Academy. All rights reserved</p>
                <ul className="footer-social-media-links">
                    <li><a href="#"><i className="bx bxl-whatsapp"></i></a></li>
                    <li><a href="#"><i className="bx bxl-instagram"></i></a></li>
                    <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
                    <li><a href="#"><i className="bx bxl-youtube"></i></a></li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer