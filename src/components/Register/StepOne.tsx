import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTranslation, Trans } from 'react-i18next'

type StepOneProps = {
    onNext: () => void;
    email: string;
};

const StepOne: React.FC<StepOneProps> = ({ onNext, email }) => {
    const [password, setPassword] = useState('');
    const { t, i18n } = useTranslation()

    return (
        <div className="step1-container">
            <div className="step-title">
                {t("step.step1.title")}
            </div>

            <div className="step-heading">
                <Trans i18nKey="step1.heading">
                   {t("step.step1.heading")}
                </Trans>    
            </div>

            <div className="step1-content">
                {t("step.step1.content")}
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
                {t("forgot-password")}
            </div>

            <Button
                
                variant="contained"
                sx={{ 
                    backgroundColor: 'red', 
                    color: '#fff',  
                    width:'150px',
                    height:'50px', 
                }}
                onClick={onNext}
                disabled={!password}
                className="next-button"
            >
                {t("register.next")}
            </Button>
        </div>
    );
};

export default StepOne;
