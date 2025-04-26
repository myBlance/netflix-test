import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/Register.css';

import StepOne from '../components/Register/StepOne';
import StepTwo from '../components/Register/StepTwo';
import StepThree from '../components/Register/StepThree';
import StepFour from '../components/Register/StepFour';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Plan {
    name: string;
    price: number;
  }

const Register = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedPlan, setSelectedPlan] = React.useState<Plan | null>(null);
    const location = useLocation();
    const email = location.state?.email ?? '';
    const { t } = useTranslation();
    const handleNext = () => setActiveStep((prev) => prev + 1);

    const steps = [
        { label: '' },
        { label: t('step.password') },
        {
            label: t('step.choosePlan'),
            plans: [
                {
                    name: t('plan.mobile.name'),
                    resolution: '480p',
                    price: '70.000 ₫',
                    quality: t('plan.mobile.quality'),
                    devices: t('plan.mobile.devices'),
                    watch: 1,
                    download: 1,
                },
                {
                    name: t('plan.basic.name'),
                    resolution: '720p (HD)',
                    price: '108.000 ₫',
                    quality: t('plan.basic.quality'),
                    devices: t('plan.basic.devices'),
                    watch: 1,
                    download: 1,
                },
                {
                    name: t('plan.standard.name'),
                    resolution: '1080p (Full HD)',
                    price: '220.000 ₫',
                    quality: t('plan.standard.quality'),
                    devices: t('plan.standard.devices'),
                    watch: 2,
                    download: 2,
                },
                {
                    name: t('plan.premium.name'),
                    resolution: '4K (Ultra HD) + HDR',
                    price: '260.000 ₫',
                    quality: t('plan.premium.quality'),
                    spatialAudio: true,
                    devices: t('plan.premium.devices'),
                    watch: 4,
                    download: 6,
                },
            ],
        },
        {
            label: t('step.chooseRightPlan'),
            description: t('step.planDescription'),
        },
        {
            label: t('step.choosePayment'),
            description: t('step.paymentDescription'),
        },
    ];

    return (
        <div className="register">
            <div className='navbar'>
                <Link to="/" className="logo-link">
                    <img src="/assets/netflix.svg" alt="Netflix Logo" className="logo" />
                </Link>
                <Link to="/login" className="nav-link">{t("login")}</Link>
            </div>

            <div className="register-container">
                <div className="register-box">
                    {activeStep === steps.length ? (
                        <>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                {t("register.success")}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button>
                                <Link to="/" style={{ color: '#fff' }}>{t("home")}</Link>
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <>
                        {activeStep === 0 && 
                            <StepOne 
                                onNext={handleNext} 
                                email={email} 
                            />
                            }
                        {activeStep === 1 && (                           
                            <StepTwo 
                                onNext={handleNext}
                            />                       
                        )}
                        {activeStep === 2 && (
                            <>
                                <StepThree
                                    plans={steps[2].plans!}
                                    selectedPlan={selectedPlan}
                                    setSelectedPlan={setSelectedPlan}
                                />
                                <div className="step-navigation">
                                    <Button onClick={handleNext}>{t("register.next")}</Button>
                                </div>
                            </>
                        )}
                        {activeStep === 3 && (
                            <>
                                <StepFour
                                    label={steps[3].label}
                                    description={steps[3].description}
                                />
                                <div className="step-navigation">
                                    <Button onClick={handleNext}>Hoàn tất</Button>
                                </div>
                            </>
                        )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Register;
