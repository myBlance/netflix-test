import React, { useState, useEffect } from 'react';
import { Checkbox, Button } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../../styles/SetupMomo.css';
import { useNavigate, Link } from 'react-router-dom';

interface Plan {
    name: string;
    price: number;
}

interface SetupMomoProps {
    selectedPlan?: Plan; // cho phép undefined để fallback sang localStorage
    onChangePlan?: () => void;
}

const SetupMomo: React.FC<SetupMomoProps> = ({ selectedPlan }) => {
    const [agree, setAgree] = useState(false);
    const [phone, setPhone] = useState('');
    const [plan, setPlan] = useState<Plan>({ name: '', price: 0 });
    const navigate = useNavigate();
    
    const handleChangePlan = () => {
        navigate('/editplan', { state: { from: '/Momo' } });
    };
         

    useEffect(() => {
        if (selectedPlan) {
            setPlan(selectedPlan);
        } else {
            const stored = localStorage.getItem('selectedPlan');
            if (stored) {
                setPlan(JSON.parse(stored));
            }
        }
    }, [selectedPlan]);

    return (
        <div className='pay'>
            <div className='navbar'>
                <Link to="/" className="logo-link">
                    <img src="/assets/netflix.svg" alt="Netflix Logo" className="logo" />
                </Link>
                <Link to="/login" className="nav-link">Đăng nhập</Link>
            </div>
            <div className="payMomo">
                <div className="momo-container">
                    <div className="pay-label">BƯỚC 3 TRONG 3</div>
                    <h2 className="pay-title">Thiết lập Momo</h2>
                    <img src="/assets/momo.png" alt="MoMo" className="momo-logo" />
                    <p className="instruction">Nhập số điện thoại MoMo của bạn.</p>
                    <p className="sub-instruction">
                        Số của bạn cũng sẽ được sử dụng nếu bạn quên mật khẩu và cho các tin nhắn tài khoản quan trọng. Có thể áp dụng phí SMS.
                    </p>
                    <PhoneInput
                        country={'vn'}
                        value={phone}
                        onChange={setPhone}
                        enableSearch
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true,
                            placeholder: 'Mobile number'
                        }}
                        containerStyle={{ width: '100%', marginBottom: '20px' }}
                        inputStyle={{ width: '100%', height: '48px', fontSize: '16px' }}
                        buttonStyle={{ borderRight: '1px solid #ccc' }}
                    />

                    <div className="plan-info">
                        <div>
                            <strong>{plan.price.toLocaleString()} ₫/tháng</strong>
                            <div className="plan-type">{plan.name}</div>
                        </div>
                        
                        <button className="change-btn" onClick={handleChangePlan}>
                            Thay đổi
                        </button>
                        
                    </div>

                    <div className="terms-text">
                        Bằng cách chọn vào ô dưới đây, bạn đồng ý với <a href="#">Điều khoản sử dụng</a>,{' '}
                        <a href="#">Chính sách bảo mật</a> và bạn trên 18 tuổi. Netflix sẽ tự động tiếp tục gói và trừ tiền ({plan.price.toLocaleString()}₫/tháng) cho đến khi bạn huỷ.
                    </div>

                    <div className="terms">
                        <Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                        <span>Tôi đồng ý</span>
                    </div>

                    <Button
                        variant="contained"
                        fullWidth
                        className="start-btn"
                        disabled={!agree || !phone}
                    >
                        Bắt đầu thành viên
                    </Button>

                    <p className="note">Bạn sẽ được chuyển sang MoMo để hoàn tất thanh toán.</p>
                </div>
            </div>
        </div>
    );
};

export default SetupMomo;
