import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


const Navbar: React.FC = () => {

    return (
        <nav className="navbar">
            <Link to="/" className="logo-link">
                <img src="/assets/netflix.svg" alt="Netflix Logo" className="logo" />
            </Link>
            <div className="nav-links">
                <Link to="/qrpay" className="nav-link">
                    Thanh toán
                </Link>
                <Link to="/login" className="nav-link">
                    Đăng nhập
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
