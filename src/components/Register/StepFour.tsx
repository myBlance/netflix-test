// components/Register/StepFour.tsx
import React from 'react';
import { Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface StepFourProps {
  label: string;
  description?: string;
}

const StepFour: React.FC<StepFourProps> = ({ label, description }) => {
    const navigate = useNavigate(); 

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
            <div className="step-title">BƯỚC 3 TRONG 3</div>
            <h2 className="step-heading">{label}</h2>
            <div className='step4-description'>
                <p>{description}</p>
                <p><strong>An toàn cho sự an tâm.</strong><br /><strong>Hủy trực tuyến dễ dàng.</strong></p>
            </div>

            <div className='end-to-end'>
                <span>Được mã hóa đầu cuối 🔒</span>
            </div>

            <div className="step4-button">
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => handlePayVisa()}
                    startIcon={<CreditCardIcon />}
                    endIcon={< ArrowForwardIosIcon sx={{ml:"155px"}}/>}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: 12 }}>Thẻ tín dụng</span>
                        <img src="/assets/visa.png" alt="Visa"  style={{ marginRight: 4 }} />
                        <img src="/assets/mastercard.png" alt="MasterCard"  style={{ marginRight: 4 }} />
                        <img src="/assets/amex.png" alt="Amex" />
                    </div>
                </Button>

                <Button
                    variant="outlined"
                    fullWidth  
                    onClick={handlePayMomo}
                    startIcon={<AccountBalanceWalletIcon />}
                    endIcon={< ArrowForwardIosIcon sx={{ml:"247px"}}/>}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: 12 }}>Ví điện tử</span>
                        <img src="/assets/momo.png" alt="MoMo"/>
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default StepFour;
