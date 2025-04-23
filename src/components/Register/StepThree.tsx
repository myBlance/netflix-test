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

interface StepThreeProps {
  plans: Plan[];
  selectedPlan: number;
  setSelectedPlan: (index: number) => void;
}

const StepThree: React.FC<StepThreeProps> = ({ plans, selectedPlan, setSelectedPlan }) => {
  return (
    <>
      <div className="step-title">BƯỚC 2 TRONG 3</div>
      <div className="step-heading">Chọn gói phù hợp với bạn</div>
      <div className="step3-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`step3-card ${selectedPlan === index ? 'selected' : ''} ${plan.name === 'Premium' ? 'premium' : ''}`}
            onClick={() => setSelectedPlan(index)}
          >
            {selectedPlan === index && (
              <div className="check-icon">✔</div>
            )}
            <h3>
              <div>{plan.name}</div>
              <div>{plan.resolution}</div>
            </h3>
            <div className='step3-card-item-1'>
              <strong>Giá mỗi tháng</strong>
              <p>{plan.price}</p>
            </div>
            <div className="step3-card-item">
              <strong>Chất lượng video và âm thanh</strong>
              <p>{plan.quality}</p>
            </div>
            <div className="step3-card-item">
              <strong>Độ phân giải</strong>
              <p>{plan.resolution}</p>
            </div>
            <div className="step3-card-item">
              {plan.spatialAudio && (
                <p><strong>Âm thanh vòm (trải nghiệm sống động):</strong> Có sẵn</p>
              )}
            </div>
            <div className="step3-card-item">
              <strong>Thiết bị hỗ trợ:</strong>
              <p>{plan.devices}</p>
            </div>
            <div className="step3-card-item">
              <strong>Số thiết bị có thể xem cùng lúc</strong>
              <p>{plan.watch}</p>
            </div>
            <div className="step3-card-item">
              <strong>Số thiết bị có thể tải xuống</strong>
              <p>{plan.download}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StepThree;
