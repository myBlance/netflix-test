import React from 'react';
import "../styles/Footer.css";
import Language from './Language';
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-top">
                <a href="#">{t("contact-link")}</a>
                <Language/>
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="#">{t("faq")}</a></li>
                    <li><a href="#">{t("investors")}</a></li>
                    <li><a href="#">{t("privacy")}</a></li>
                    <li><a href="#">{t("speed-test")}</a></li>
                </ul>
                <ul>
                    <li><a href="#">{t("help-center")}</a></li>
                    <li><a href="#">{t("jobs")}</a></li>
                    <li><a href="#">{t("cookies")}</a></li>
                    <li><a href="#">{t("legal-notice")}</a></li>
                </ul>
                <ul>
                    <li><a href="#">{t("account")}</a></li>
                    <li><a href="#">{t("ways-to-watch")}</a></li>
                    <li><a href="#">{t("company-info")}</a></li>
                    <li><a href="#">{t("only-on-netflix")}</a></li>
                </ul>
                <ul>
                    <li><a href="#">{t("media-center")}</a></li>
                    <li><a href="#">{t("terms of use")}</a></li>
                    <li><a href="#">{t("contact")}</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>{t("country")}</p>
            </div>
        </footer>
    );
};

export default Footer;
