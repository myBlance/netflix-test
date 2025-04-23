import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type StepOneProps = {
    onNext: () => void;
    email: string;
};

const StepOne: React.FC<StepOneProps> = ({ onNext, email }) => {
    const [password, setPassword] = useState('');

    return (
        <div className="step1-container">
            <div className="step-title">
                BƯỚC 1 TRONG 3
            </div>

            <div className="step-heading">
                Chào mừng bạn quay lại! <br /> Tham gia Netflix thật đơn giản.
            </div>
            <div className="step1-content">
                Chỉ cần nhập mật khẩu và bạn sẽ được xem ngay lập tức.
            </div>

            <div className="email-info">
                <p>Email</p>
                <strong>{email}</strong>
            </div>

            <TextField
                fullWidth
                type="password"
                label="Nhập mật khẩu"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 0 , mt: 2}}
                className="password-field"
            />
            
            <div className="forgot-password">
                Bạn quên mật khẩu?
            </div>

            <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: 'red', color: '#fff' }}
                onClick={onNext}
                disabled={!password}
                className="next-button"
            >
                Tiếp theo
            </Button>
        </div>
    );
};

export default StepOne;
