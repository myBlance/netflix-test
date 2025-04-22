import React, { useState } from 'react';
import { 
    TextField,
    Checkbox, 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    List, 
    ListItemText 
} from '@mui/material';
import '../../styles/SetupVisa.css';

const plans = [
    { name: 'Mobile', price: 70000 },
    { name: 'Basic', price: 180000 },
    { name: 'Standard', price: 220000 },
    { name: 'Premium', price: 260000 },
];

const SetupCreditCard: React.FC = () => {
    const [agree, setAgree] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [selectedPlan, setSelectedPlan] = useState(plans[3]);  // Mặc định chọn gói Premium
    const [openDialog, setOpenDialog] = useState(false);

    const handlePlanChange = (plan: typeof plans[0]) => {
        setSelectedPlan(plan);
        setOpenDialog(false); // Đóng dialog sau khi chọn gói
    };

    return (
        <div className="setupCard">
            <div className="container">

                <div className="step-label">Bước 3 trong 3</div>
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
                        <strong>{selectedPlan.price.toLocaleString()} ₫/tháng</strong>
                        <div className="plan-type">{selectedPlan.name}</div>
                    </div>
                    <button className="change-btn" onClick={() => setOpenDialog(true)}>Thay đổi</button> {/* Mở dialog khi nhấn Change */}
                    </div>
                    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                        <DialogTitle>Select a Plan</DialogTitle>
                        <DialogContent>
                            <List>
                                {plans.map((plan) => (
                                    <Button
                                        key={plan.name}
                                        onClick={() => handlePlanChange(plan)}
                                        className={`plan-button ${selectedPlan.name === plan.name ? 'selected' : ''}`}
                                        
                                    >
                                        <ListItemText primary={`${plan.name} - ${plan.price.toLocaleString()}₫`} />
                                    </Button>
                                ))}
                            </List>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpenDialog(false)} color="primary">Thoát</Button>
                        </DialogActions>
                    </Dialog>

                    <div className="terms-text">
                        <span>
                            Your payments will be processed internationally. Addition bank fees may apply.
                        </span>
                    </div>

                    <div className="terms-text">
                        By checking the checkbox below, you agree to our <a href="#">Terms of Use</a>,{' '}
                        <a href="#">Privacy Statement</a>, and that you are over 18. Netflix will automatically continue
                        your membership and charge the membership fee (currently {selectedPlan.price.toLocaleString()}₫/month) to your payment method until you cancel.
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
    );
};

export default SetupCreditCard;
