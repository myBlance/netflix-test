import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


const Navbar: React.FC = () => {

    return (
        <nav className="navbar">
            <Link to="/" className="logo-link">
                <img src="/src/assets/netflix.svg" alt="Netflix Logo" className="logo" />
            </Link>
            <div className="nav-links">
                <Link to="/register" className="nav-link">
                    Đăng ký
                </Link>
                <Link to="/login" className="nav-link">
                    Đăng nhập
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
