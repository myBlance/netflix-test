import React, { useState, useEffect } from 'react';
import { Checkbox, Button } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../../styles/SetupMomo.css';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

interface Plan {
    name: string;
    price: number;
}

interface SetupMomoProps {
    selectedPlan?: Plan;
    onChangePlan?: () => void;
}

const SetupMomo: React.FC<SetupMomoProps> = ({ selectedPlan }) => {
    const [agree, setAgree] = useState(false);
    const [phone, setPhone] = useState('');
    const [plan, setPlan] = useState<Plan>({ name: '', price: 0 });
    const navigate = useNavigate();
    const { t } = useTranslation();

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
                <Link to="/login" className="nav-link">{t("login")}</Link>
            </div>
            <div className="payMomo">
                <div className="momo-container">
                    <div className="pay-label">{t("step.step3.title")}</div>
                    <h2 className="pay-title">{t("setup")} Momo</h2>
                    <img src="/assets/momo.png" alt="MoMo" className="momo-logo" />
                    
                    <p className="instruction">{t("setup_momo.enter_phone")}</p>
                    <p className="sub-instruction">
                        {t("setup_momo.phone_note")}
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
                            placeholder: t("setup_momo.phone_placeholder")
                        }}
                        containerStyle={{ width: '100%', marginBottom: '20px' }}
                        inputStyle={{ width: '100%', height: '48px', fontSize: '16px' }}
                        buttonStyle={{ borderRight: '1px solid #ccc' }}
                    />

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
                        <Trans 
                            i18nKey="setup_momo.terms_text" 
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
                        disabled={!agree || !phone}
                    >
                        {t("start_membership")}
                    </Button>

                    <p className="note">{t("setup_momo.redirect_note")}</p>
                </div>
            </div>
        </div>
    );
};

export default SetupMomo;
