import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/EmailForm.css';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next'

const EmailForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/Register", { state: { email } });
    };

    return (
        <div className="email-form-container" id='form-email'>
            <div className='email-container'>

                <h2 className="email-form-title">
                    {t("emailformtitle")}
                </h2>
                <form onSubmit={handleSubmit} className="email-form">           
                    <TextField
                        id="filled-multiline-flexible"
                        label={t("email address")}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        maxRows={4}
                        variant="filled"
                        sx={{
                            
                            width: '65%',
                            
                            '& .MuiFilledInput-root': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                borderRadius: '40px',
                                color: '#fff',
                                border: '2px solid #fff',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                                },
                                '&.Mui-focused': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    borderColor: '#666',
                                    border: '2px solid #fff',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: '#fff', 
                                '&.Mui-focused': {
                                    color: '#fff',
                                },
                            },
                            '& .MuiInputBase-root': {
                                color: '#fff', 
                            },
                        }}
                    />
                    <button type="submit" className="email-button">
                        {t("started")}
                        <ArrowForwardIosIcon />
                    </button>                   
                </form>
            </div>
        </div>
    );
};

export default EmailForm;
