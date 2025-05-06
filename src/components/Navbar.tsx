import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useTranslation } from 'react-i18next';
import { useTheme } from './ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const [menuActive, setMenuActive] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo-link">
                <img src="/assets/netflix.svg" alt="Netflix Logo" className="logo" />
            </Link>

            <div className="hamburger-menu" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="nav-links">
                <Link to="/qrpay" className="nav-link">
                    {t("pay")}
                </Link>
                <Link to="/login" className="nav-link">
                    {t("login")}
                </Link>
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'dark' ? <BrightnessHighIcon /> : <Brightness4Icon />}
                </button>
            </div>

            {/* Navbar Links */}
            <div className={`nav-links ${menuActive ? "mobile active" : "mobile"}`}>
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
