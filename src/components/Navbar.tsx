import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    return (
        <nav className="navbar">
            <Link to="/" className="logo-link">
                <img src="/assets/netflix.svg" alt="Netflix Logo" className="logo" />
            </Link>
            <div className="nav-links">
                <Link to="/qrpay" className="nav-link">
                    {t("pay")}
                </Link>
                <Link to="/login" className="nav-link">
                    {t("login")}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
