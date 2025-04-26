import React, { useState, useEffect } from 'react';
import { 
    TextField,
    Checkbox, 
    Button, 
} from '@mui/material';
import '../../styles/SetupVisa.css';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

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
    const { t } = useTranslation();

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
                    <Link to="/login" className="nav-link">{t("login")}</Link>
                </div>
            <div className="setupCard">
                <div className="container">
                    <div className="step-label">{t("step.step3.title")}</div>
                    <h2 className="title">{t("setup")} Master Card</h2>
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
                            <strong>{plan.price.toLocaleString()} ₫/{t("month")}</strong>
                            <div className="plan-type">{plan.name}</div>
                        </div>
                        
                        <button className="change-btn" onClick={handleChangePlan}>
                            {t("change")}
                        </button>
                        
                    </div>

                    <div className="terms-text">
                        <span>{t("setup_credit.international_payment_notice")}</span>
                    </div>

                    <div className="terms-text">
                        <Trans 
                            i18nKey="setup_credit.terms_text" 
                            values={{ price: plan.price.toLocaleString() }} 
                            components={{
                            termsLink: <a href="#" />,
                            privacyLink: <a href="#" />
                            }} 
                        />
                    </div>

                    <div className="terms">
                        <Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                        <span>{t("agree_text")}</span>
                    </div>
                
                    <Button
                        variant="contained"
                        fullWidth
                        className="start-btn"
                        disabled={!agree || !cardNumber || !expiryDate || !cvv || !cardHolder}
                    >
                        {t("start_membership")}
                    </Button>

                    <p className="note">{t("setup_credit.redirect_note")}</p>
                </div>
            </div>
        </div>
    );
};

export default SetupCreditCard;
