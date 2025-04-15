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

const steps = [
  {
    label: 'Choose your plan.',
  },
  {
    label: 'Choose the plan that’s right for you.',
    plans: [
      {
        name: 'Mobile',
        resolution: '480p',
        price: '70,000 ₫',
        quality: 'Fair',
        devices: 'Mobile phone, tablet',
        watch: 1,
        download: 1,
      },
      {
        name: 'Basic',
        resolution: '720p (HD)',
        price: '108,000 ₫',
        quality: 'Good',
        devices: 'TV, computer, mobile phone, tablet',
        watch: 1,
        download: 1,
      },
      {
        name: 'Standard',
        resolution: '1080p (Full HD)',
        price: '220,000 ₫',
        quality: 'Great',
        devices: 'TV, computer, mobile phone, tablet',
        watch: 2,
        download: 2,
      },
      {
        name: 'Premium',
        resolution: '4K (Ultra HD) + HDR',
        price: '260,000 ₫',
        quality: 'Best',
        spatialAudio: true,
        devices: 'TV, computer, mobile phone, tablet',
        watch: 4,
        download: 6,
      },
    ],
  },
  {
    label: 'Choose how to pay',
    description: 'Your payment is encrypted and you can change how you pay anytime.',  
  },
];

const Register = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedPlan, setSelectedPlan] = React.useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  return (
    <div className="register">
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
                All steps completed - you're finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
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
                    <Button onClick={handleBack}>Back</Button>
                    <Button onClick={handleNext}>Next</Button>
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
                    <Button onClick={handleBack}>Back</Button>
                    <Button onClick={handleNext}>Finish</Button>
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
