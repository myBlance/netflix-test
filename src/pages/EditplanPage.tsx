import React, { useState } from 'react';
import Editplan from './PayMoney/Editplan';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Editplan.css';
import { useTranslation } from 'react-i18next';


const EditplanPage: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number } | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
        const { t } = useTranslation();

    const handleChange = () => {
        const previous = location.state?.from;
        if (previous === '/Momo') {
            navigate('/Momo');
        } else {
            navigate('/Visa');
        }
    };
    const plans = [
        {
            name: t('plan.mobile.name'),
            resolution: '480p',
            price: '70.000 ₫',
            quality: t('plan.mobile.quality'),
            devices: t('plan.mobile.devices'),
            watch: 1,
            download: 1,
        },
        {
            name: t('plan.basic.name'),
            resolution: '720p (HD)',
            price: '108.000 ₫',
            quality: t('plan.basic.quality'),
            devices: t('plan.basic.devices'),
            watch: 1,
            download: 1,
        },
        {
            name: t('plan.standard.name'),
            resolution: '1080p (Full HD)',
            price: '220.000 ₫',
            quality: t('plan.standard.quality'),
            devices: t('plan.standard.devices'),
            watch: 2,
            download: 2,
        },
        {
            name: t('plan.premium.name'),
            resolution: '4K (Ultra HD) + HDR',
            price: '260.000 ₫',
            quality: t('plan.premium.quality'),
            spatialAudio: true,
            devices: t('plan.premium.devices'),
            watch: 4,
            download: 6,
        },
    ];

    return (
        <div className='editplan'>
            <div className='navbar'>
                <Link to="/" className="logo-link">
                    <img src="/assets/netflix.svg" alt="Netflix Logo" className="logo" />
                </Link>
                <Link to="/login" className="nav-link">{t("login")}</Link>
            </div>
            <div className='editplan-container'>

                <Editplan
                    plans={plans}
                    selectedPlan={selectedPlan}
                    setSelectedPlan={setSelectedPlan}
                />
            </div>
            <div className="step-navigation">
                <Button onClick={handleChange}>{t("next")}</Button>
            </div>

        </div>
    );
};

export default EditplanPage;
