import React, { useState } from 'react';
import { Checkbox, Button, TextField } from '@mui/material';
import '../../styles/SetupMomo.css';

// import momoLogo from '../assets/momo.png'; // tải ảnh momo logo vào thư mục assets
// import FlagIcon from '@mui/icons-material/Flag'; // icon quốc kỳ tạm thời

const SetupMomo: React.FC = () => {
  const [agree, setAgree] = useState(false);
  const [phone, setPhone] = useState('');

  return (
    <div className='payMomo'>
        <div className="momo-container">
            <div className="step-label">STEP 3 OF 3</div>
            <h2 className="step-title">
                Set up MoMo
            </h2>

            <p>Enter your MoMo mobile number.</p>
            <p className="subtext">
                Your number will also be used if you forget your password and for important account messages. SMS fees may apply.
            </p>

            <div className="phone-input">
                <span className="flag">🇻🇳 +84</span>
                <TextField
                    variant="outlined"
                    placeholder="Mobile number"
                    fullWidth
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div className="plan-info">
                <div>
                    <strong>260,000 ₫/month</strong>
                    <div className="plan-type">Premium</div>
                </div>
                    <button className="change-btn">Change</button>
            </div>
            <div>
                <span>
                    By checking the checkbox below, you agree to our <a href="#">Terms of Use</a>,{' '}
                    <a href="#">Privacy Statement</a>, and that you are over 18. Netflix will automatically continue your membership...
                </span>
            </div>

            <div className="terms">
                <Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                <span>
                    I agree.
                </span>
            </div>

            <Button
                variant="contained"
                fullWidth
                className="start-btn"
                disabled={!agree || !phone}
            >
                Start Membership
            </Button>

            <p className="note">You’ll be sent to MoMo to complete payment.</p>
        </div>
    </div>   
  );
};

export default SetupMomo;
