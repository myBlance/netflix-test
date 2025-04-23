import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/EmailForm.css';
import { Link } from 'react-router-dom';

const EmailForm: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
      // Xử lý logic tại đây (ví dụ gửi API)
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
                    <Link to="/Register" className="email-button" state={{ email }} >
                        Bắt đầu
                        <ArrowForwardIosIcon/>
                    </Link>                   
                </form>
            </div>
        </div>
    );
};

export default EmailForm;
