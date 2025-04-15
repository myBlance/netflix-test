import React from 'react';

interface Plan {
    name: string;
    resolution: string;
    price: string;
    quality: string;
    devices: string;
    watch: number;
    download: number;
    spatialAudio?: boolean;
}

interface StepTwoProps {
    plans: Plan[];
    selectedPlan: number;
    setSelectedPlan: (index: number) => void;
  
}

const StepTwo: React.FC<StepTwoProps> = ({ plans, selectedPlan, setSelectedPlan }) => {
  return (
    <>
        <div className="step-title">STEP 2 OF 3</div>
        <div className="step-heading">Choose the plan that’s right for you</div>
        <div className="step2-container">
            {plans.map((plan, index) => (
                <div
                    key={index}
                    className={`step2-card ${selectedPlan === index ? 'selected' : ''} ${plan.name === 'Premium' ? 'premium' : ''}`}
                    onClick={() => setSelectedPlan(index)}
                >
                    {selectedPlan === index && (
                        <div className="check-icon">✔</div>
                    )}
                    <h3>
                        <div>{plan.name}</div>    
                        <div>{plan.resolution}</div>
                    </h3>
                    <div className='step2-card-item-1'>
                        <strong>Monthly price</strong>
                        <p> {plan.price}</p>
                    </div>
                    <div className="step2-card-item">

                        <strong>Video and sound quality</strong>
                        <p> {plan.quality}</p>
                    </div>
                    <div className="step2-card-item">
                        <strong>Resolution</strong>
                        <p> {plan.resolution}</p>
                    </div>
                    <div className="step2-card-item">
                        {plan.spatialAudio && <p><strong>Spatial audio (immersive sound):</strong> Included</p>}
                
                    </div>
                    <div className="step2-card-item">
                        <strong>Supported devices:</strong>
                        <p> {plan.devices}</p>
                    </div>
                    <div className="step2-card-item">
                        <strong>Devices your household can watch at the same time</strong>
                        <p> {plan.watch}</p>
                    </div>
                    
                    <div className="step2-card-item">
                        <strong>Download devices</strong>
                        <p> {plan.download}</p>
                    </div>
                </div>
            ))}
        </div>
    </>   
  );
};

export default StepTwo;
