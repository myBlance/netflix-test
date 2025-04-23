import React, { useState, useEffect } from 'react';
import { 
    TextField,
    Checkbox, 
    Button, 
} from '@mui/material';
import '../../styles/SetupVisa.css';
import { useNavigate, Link } from 'react-router-dom';

interface Plan {
    name: string;
    price: number;
}
  
interface SetupCreditCardProps {
    selectedPlan?: Plan; // cho phép undefined để fallback sang localStorage
    onChangePlan?: () => void;
}

const SetupCreditCard: React.FC<SetupCreditCardProps> = ({ selectedPlan}) => {
    const [agree, setAgree] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [plan, setPlan] = useState<Plan>({ name: '', price: 0 });

    const navigate = useNavigate();
    
    const handleChangePlan = () => {
        navigate('/editplan', { state: { from: '/Visa' } });
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
            <div className="setupCard">
                <div className="container">
                    <div className="step-label">BƯỚC 3 TRONG 3</div>
                    <h2 className="title">Thiết lập thẻ tín dụng hoặc thẻ ghi nợ</h2>
                    <div className='logo-container'>
                        <img src="/assets/visa.png" alt="Visa" className="logo" />
                        <img src="/assets/mastercard.png" alt="MasterCard" className="logo" />
                        <img src="/assets/amex.png" alt="Amex" className="logo" />
                    </div>
                    <div className="input-field">
                        <TextField
                            variant="outlined"
                            placeholder="Card Number"
                            fullWidth
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="card-input"
                        />
                    </div>

                    <div className="input-fields-row">
                        <div className="input-field">
                            <TextField
                                variant="outlined"
                                placeholder="Expiry Date (MM/YY)"
                                fullWidth
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                className="card-input"
                                                    // Chấp nhận định dạng MM/YY
                            />
                        </div>
                
                        <div className="input-field">
                            <TextField
                                variant="outlined"
                                placeholder="CVV"
                                fullWidth
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                className="card-input"
                                                    // Chấp nhận tối đa 3 ký tự cho CVV
                            />
                        </div>
                    </div>

                    <div className="input-field">
                        <TextField
                            variant="outlined"
                            placeholder="Name on Card"
                            fullWidth
                            value={cardHolder}
                            onChange={(e) => setCardHolder(e.target.value)}
                            className="card-input"
                        />
                    </div>
                
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
                        <span>
                            Your payments will be processed internationally. Addition bank fees may apply.
                        </span>
                    </div>

                    <div className="terms-text">
                        By checking the checkbox below, you agree to our <a href="#">Terms of Use</a>,{' '}
                        <a href="#">Privacy Statement</a>, and that you are over 18. Netflix will automatically continue
                        your membership and charge the membership fee (currently {plan.price.toLocaleString()}₫/month) to your payment method until you cancel.
                        You may cancel at any time to avoid future charges.
                    </div>

                    <div className="terms">
                        <Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                        <span>Tôi đồng ý</span>
                    </div>
                
                    <Button
                        variant="contained"
                        fullWidth
                        className="start-btn"
                        disabled={!agree || !cardNumber || !expiryDate || !cvv || !cardHolder}
                    >
                        Bắt đầu thành viên
                    </Button>

                    <p className="note">You’ll be sent to Credit to complete payment.</p>
                </div>
            </div>
        </div>
    );
};

export default SetupCreditCard;
