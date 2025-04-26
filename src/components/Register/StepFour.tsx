import React from 'react';
import { Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

interface StepFourProps {
    label: string;
    description?: string;
}

const StepFour: React.FC<StepFourProps> = ({ label, description }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handlePayVisa = () => {
        navigate(`/Visa`);
    };

    const handlePayMomo = () => {
        navigate(`/Momo`);
    };

    return (
        <div className="step4-container">
            <div className='look-icon'>
                <LockOutlinedIcon style={{ fontSize: 40 }} />
            </div>
            <div className="step-title">{t("step.step4.title")}</div>
            <h2 className="step-heading">{label}</h2>
            <div className='step4-description'>
                <p>{description}</p>
                <p>
                    <strong>{t("step.step4.safe")}</strong><br />
                    <strong>{t("step.step4.cancel")}</strong>
                </p>
            </div>

            <div className='end-to-end'>
                <span>{t("step.step4.encryption")} 🔒</span>
            </div>

            <div className="step4-button">
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={handlePayVisa}
                    startIcon={<CreditCardIcon />}
                    endIcon={<ArrowForwardIosIcon sx={{ ml: "155px" }} />}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: 12 }}>{t("step.step4.creditCard")}</span>
                        <img src="/assets/visa.png" alt="Visa" style={{ marginRight: 4 }} />
                        <img src="/assets/mastercard.png" alt="MasterCard" style={{ marginRight: 4 }} />
                        <img src="/assets/amex.png" alt="Amex" />
                    </div>
                </Button>

                <Button
                    variant="outlined"
                    fullWidth
                    onClick={handlePayMomo}
                    startIcon={<AccountBalanceWalletIcon />}
                    endIcon={<ArrowForwardIosIcon sx={{ ml: "247px" }} />}
                    >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: 12 }}>{t("step.step4.eWallet")}</span>
                        <img src="/assets/momo.png" alt="MoMo" />
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default StepFour;
