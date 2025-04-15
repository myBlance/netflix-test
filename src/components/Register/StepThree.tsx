import React from 'react';
import { Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

interface StepThreeProps {
  label: string;
  description?: string;
}

const StepThree: React.FC<StepThreeProps> = ({ label, description }) => {
    return (
        <div className="step3-container">
            <div className='look-icon'>
                <LockOutlinedIcon style={{ fontSize: 40 }} />
            </div>
            <div className="step-title">STEP 3 OF 3</div>
            <h2 className="step-heading">{label}</h2>
            <div className='step3-description'>
                <p>{description}</p>
                <p><strong>Secure for peace of mind.</strong><br /><strong>Cancel easily online.</strong></p>
            </div>

            <div className='end-to-end'>
                <span>End-to-end encrypted 🔒</span>
            </div>

            <div className="step3-button">
                <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<CreditCardIcon />}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: 12 }}>Credit or Debit Card</span>
                        
                        <img src="/src/assets/visa.png" alt="Visa" width={40} style={{ marginRight: 4 }} />
                        <img src="/src/assets/visa.png" alt="MasterCard" width={40} style={{ marginRight: 4 }} />
                        <img src="/src/assets/visa.png" alt="Amex" width={40} />
                    </div>
                </Button>

                <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<AccountBalanceWalletIcon />}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: 12 }}>Digital Wallet</span>
                        <img src="/src/assets/visa.png" alt="MoMo" width={30} />
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default StepThree;
