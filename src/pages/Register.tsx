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

const steps = [
    {   label: ''},
    {   label: 'Bước 1: Nhập mật khẩu để tiếp tục' },
    {
        label: 'Chọn gói dịch vụ.',
        plans: [
        {
            name: 'Mobile',
            resolution: '480p',
            price: '70.000 ₫',
            quality: 'Trung bình',
            devices: 'Điện thoại, máy tính bảng',
            watch: 1,
            download: 1,
        },
        {
            name: 'Basic',
            resolution: '720p (HD)',
            price: '108.000 ₫',
            quality: 'Tốt',
            devices: 'TV, máy tính, điện thoại, máy tính bảng',
            watch: 1,
            download: 1,
        },
        {
            name: 'Standard',
            resolution: '1080p (Full HD)',
            price: '220.000 ₫',
            quality: 'Rất tốt',
            devices: 'TV, máy tính, điện thoại, máy tính bảng',
            watch: 2,
            download: 2,
        },
        {
            name: 'Premium',
            resolution: '4K (Ultra HD) + HDR',
            price: '260.000 ₫',
            quality: 'Tuyệt vời',
            spatialAudio: true,
            devices: 'TV, máy tính, điện thoại, máy tính bảng',
            watch: 4,
            download: 6,
        },
        ],
    },
    {
        label: 'Chọn gói phù hợp với bạn.',
        description: 'Thông tin chi tiết từng gói để bạn dễ lựa chọn.',
    },
    {
        label: 'Chọn phương thức thanh toán',
        description: 'Thanh toán của bạn được mã hóa và bạn có thể thay đổi bất kỳ lúc nào.',
    },
];

interface Plan {
    name: string;
    price: number;
  }

const Register = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedPlan, setSelectedPlan] = React.useState<Plan | null>(null);
    const location = useLocation();
const email = location.state?.email ?? '';

    const handleNext = () => setActiveStep((prev) => prev + 1);

    return (
        <div className="register">
            <div className='navbar'>
                <Link to="/" className="logo-link">
                    <img src="/assets/netflix.svg" alt="Netflix Logo" className="logo" />
                </Link>
                <Link to="/login" className="nav-link">Đăng nhập</Link>
            </div>

            <div className="register-container">
                <div className="register-box">
                    {activeStep === steps.length ? (
                        <>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Hoàn tất tất cả các bước – bạn đã đăng ký xong!
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button>
                            <Link to="/" style={{ color: '#fff' }}>Trang chủ</Link>
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
                                    <Button onClick={handleNext}>Tiếp theo</Button>
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
