import React, { useState } from 'react';
import { 
    Checkbox, 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    List, 
    ListItemText
} from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../../styles/SetupMomo.css';

const plans = [
    { name: 'Mobile', price: 70000 },
    { name: 'Basic', price: 180000 },
    { name: 'Standard', price: 220000 },
    { name: 'Premium', price: 260000 },
];

const SetupMomo: React.FC = () => {
    const [agree, setAgree] = useState(false);
    const [phone, setPhone] = useState('');
    const [selectedPlan, setSelectedPlan] = useState(plans[3]);  // Mặc định chọn gói Premium
    const [openDialog, setOpenDialog] = useState(false);

    const handlePlanChange = (plan: typeof plans[0]) => {
        setSelectedPlan(plan);
        setOpenDialog(false); // Đóng dialog sau khi chọn gói
    };

    return (
        <div className="payMomo">
            <div className="momo-container">
                <div className="pay-label">Bước 3 trong 3</div>
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
                    inputStyle={{
                        width: '100%',
                        height: '48px',
                        fontSize: '16px'
                    }}
                    buttonStyle={{
                        borderRight: '1px solid #ccc'
                    }}
                />

                <div className="plan-info">
                    <div>
                        <strong>{selectedPlan.price.toLocaleString()} ₫/tháng</strong>
                        <div className="plan-type">{selectedPlan.name}</div>
                    </div>
                    <button className="change-btn" onClick={() => setOpenDialog(true)}>Thay đổi</button> {/* Mở dialog khi nhấn Change */}
                </div>

                {/* Dialog để chọn gói */}
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
                        <Button onClick={() => setOpenDialog(false)} color="primary">Cancel</Button>
                    </DialogActions>
                </Dialog>

                <div className="terms-text">
                    By checking the checkbox below, you agree to our <a href="#">Terms of Use</a>,{' '}
                    <a href="#">Privacy Statement</a>, and that you are over 18. Netflix will automatically continue
                    your membership and charge the membership fee (currently {selectedPlan.price.toLocaleString()}₫/month) to your payment method until you cancel.
                    You may cancel at any time to avoid future charges.
                </div>

                <div className="terms">
                    <Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                    <span>Tôi đông ý</span>
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
