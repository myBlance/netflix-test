import React from 'react';
import { Button } from '@mui/material';

interface StepOneProps {
  onNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({onNext }) => {
  return (
    <div className="step1-container">
      <div className="step1-check-icon">✔</div>
      <div className="step-title">STEP 1 OF 3</div>
      <div className="step-heading">Choose your plan.</div>
      <ul className="step1-list">
        <li>No commitments, cancel anytime.</li>
        <li>Everything on Netflix for one low price.</li>
        <li>No ads and no extra fees. Ever.</li>
      </ul>
      <Button onClick={onNext} className="step1-next-button">
        Next
      </Button>
    </div>
  );
};

export default StepOne;
