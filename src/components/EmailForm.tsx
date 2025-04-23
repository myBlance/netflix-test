import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/EmailForm.css';
import { useNavigate } from 'react-router-dom';

const EmailForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/Register", { state: { email } });
    };

    return (
        <div className="email-form-container" id='form-email'>
            <div className='email-container'>

                <h2 className="email-form-title">
                    Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.
                </h2>
                <form onSubmit={handleSubmit} className="email-form">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Địa chỉ email"
                        className="email-input"
                        required
                    />
                    <button type="submit" className="email-button">
                        Bắt đầu
                        <ArrowForwardIosIcon />
                    </button>                   
                </form>
            </div>
        </div>
    );
};

export default EmailForm;
