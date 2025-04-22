import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/Register.css';

import StepOne from '../components/Register/StepOne';
import StepTwo from '../components/Register/StepTwo';
import StepThree from '../components/Register/StepThree';
import { Link } from "react-router-dom";

const steps = [
    {
      label: 'Chọn gói dịch vụ.',
    },
    {
      label: 'Chọn gói phù hợp với bạn.',
      plans: [
        {
          name: 'Di động',
          resolution: '480p',
          price: '70.000 ₫',
          quality: 'Trung bình',
          devices: 'Điện thoại, máy tính bảng',
          watch: 1,
          download: 1,
        },
        {
          name: 'Cơ bản',
          resolution: '720p (HD)',
          price: '108.000 ₫',
          quality: 'Tốt',
          devices: 'TV, máy tính, điện thoại, máy tính bảng',
          watch: 1,
          download: 1,
        },
        {
          name: 'Tiêu chuẩn',
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
      label: 'Chọn phương thức thanh toán',
      description: 'Thanh toán của bạn được mã hóa và bạn có thể thay đổi bất kỳ lúc nào.',
    },
]; 

const Register = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedPlan, setSelectedPlan] = React.useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);


  return (
    <div className="register">
        <Link to="/" className="logo-link">
            <img src="/assets/netflix.svg" alt="Netflix Logo" className="logo" />
        </Link>
        <div className="register-container">
            <div className="register-box">
            <Stepper activeStep={activeStep}>
                {steps.map((step) => (
                <Step key={step.label}>
                    <StepLabel>{step.label}</StepLabel>
                </Step>
                ))}
            </Stepper>

            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        Hoàn tất tất cả các bước – bạn đã đăng ký xong!
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button>
                            <Link to="/" style={{color:'#fff'}}>
                                 Trang chủ     
                            </Link>
                        </Button>
                    </Box>
                </React.Fragment>
                ) : (
                <React.Fragment>
                    {activeStep === 0 && <StepOne onNext={handleNext} />}
                    {activeStep === 1 && steps[1].plans && (
                    <>
                        <StepTwo
                            plans={steps[1].plans}
                            selectedPlan={selectedPlan}
                            setSelectedPlan={setSelectedPlan}
                        />
                        <div className="step-navigation">
                            <Button onClick={handleBack}>Quay lại</Button>
                            <Button onClick={handleNext}>Tiếp theo</Button>
                        </div>
                    </>
                    )}
                        {activeStep === 2 && (
                    <>
                        <StepThree
                            label={steps[2].label}
                            description={steps[2].description}
                        />
                        <div className="step-navigation">
                            <Button onClick={handleBack}>Quay lại</Button>
                            <Button onClick={handleNext}>Hoàn tất</Button>
                        </div>
                    </>
                    )}
                </React.Fragment>
            )}
        </div>
      </div>
    </div>
  );
};

export default Register;
