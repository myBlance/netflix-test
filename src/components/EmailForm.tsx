import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/EmailForm.css';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify';

interface EmailFormProps {
    setPlaying: (playing: boolean) => void;
}

const EmailForm: React.FC<EmailFormProps> = ({ setPlaying }) => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { t } = useTranslation();


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Kiểm tra email hợp lệ
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email || !emailRegex.test(email)) {
            // Hiển thị thông báo lỗi nếu email không hợp lệ
            toast.error('Vui lòng nhập email hợp lệ!');
            return;
        }

        // Xử lý nếu email hợp lệ
        toast.success(`Email đã được gửi: ${email}`);
        navigate("/Register", { state: { email } }); // Chuyển hướng trang với email
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
                        className="textfield"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        onFocus={() => setPlaying(false)}
                        onBlur={() => setPlaying(true)}
                        maxRows={4}
                        variant="filled"
                        sx={{
                            width: '65%',
                            '& .MuiFilledInput-root': {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                borderRadius: '40px',
                                color: '#fff',
                                border: '2px solid var(--text-color)',
                                boxShadow: 'none',
                                paddingLeft: '24px',
                                transition: 'background-color 0s',           // không đổi màu khi hover
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // giữ nguyên màu khi hover
                                },'&.Mui-focused': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // giữ nguyên khi focus
                                },
                                '&:before': {
                                    borderBottom: 'none !important',
                                },
                                '&:after': {
                                    borderBottom: 'none !important',
                                },
                                '&:hover:before': {
                                    borderBottom: 'none !important',
                                },
                                '& input': {
                                    caretColor: '#fff',
                                },
                                '& input:-webkit-autofill': {
                                    WebkitBoxShadow: '0 0 0 1000px rgba(0,0,0,0) inset !important',
                                    WebkitTextFillColor: '#fff !important',
                                    transition: 'background-color 0s 600000s, color 0s 600000s',
                                    borderRadius:'40px',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: '#fff',
                                left: '24px',
                                '&.Mui-focused': {
                                    color: '#fff',
                                },
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
