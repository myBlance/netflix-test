import React from 'react';
import "../styles/Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="content">
                <img src="/src/assets/netflix-mobile-application-logo-free-png-600x600.webp" alt="Netflix Logo" className="footer-logo" />
                <p className='text'>© 2023 Netflix Demo. All rights reserved.</p>
                <div className='links'>
                    <a href="/terms" className='link' >Terms of Service</a>
                    <a href="/privacy" className='link'>Privacy Policy</a>
                    <a href="/contact" className='link'>Contact Us</a>
                </div>
            </div>
        </footer>
    );
};


export default Footer;