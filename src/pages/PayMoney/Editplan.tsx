import React from 'react';
import { useTranslation } from 'react-i18next'

// Định nghĩa interface Plan
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


// Định nghĩa props cho Editplan
interface EditplanProps {
  plans: Plan[];
  selectedPlan: { name: string; price: number } | null;
  setSelectedPlan: (plan: { name: string; price: number }) => void;
}

const Editplan: React.FC<EditplanProps> = ({ plans, selectedPlan, setSelectedPlan }) => {

    const handlePlanSelect = (plan: Plan) => {
        const selected = { name: plan.name, price: parseInt(plan.price.replace(/[^\d]/g, '')) };
        setSelectedPlan(selected);
        localStorage.setItem('selectedPlan', JSON.stringify(selected)); // Lưu vào localStorage
    };
    const { t } = useTranslation()

    return (
        <>
            <div className="step-heading">{t("step.step3.heading")}</div>
            <div className="step3-container">
                {plans.map((plan: any, index: number) => (
                    <div
                        key={index}
                        className={`step3-card ${selectedPlan?.name === plan.name ? 'selected' : ''} ${plan.name === 'Premium' ? 'premium' : ''}`}
                        onClick={() => {
                            const selected = { name: plan.name, price: parseInt(plan.price.replace(/[^\d]/g, '')) };
                            setSelectedPlan(selected);
                            localStorage.setItem('selectedPlan', JSON.stringify(selected));
                        }}
                    >
                        {selectedPlan?.name === plan.name && (
                            <div className="check-icon">✔</div>
                        )}
                        <h3>
                            <div>{plan.name}</div>
                            <div>{plan.resolution}</div>
                        </h3>
                        <div className="step3-card-item-1">
                            <strong>{t("step.step3.pricePerMonth")}</strong>
                            <p>{plan.price}</p>
                        </div>
                        <div className="step3-card-item">
                            <strong>{t("step.step3.quality")}</strong>
                            <p>{plan.quality}</p>
                        </div>
                        <div className="step3-card-item">
                            <strong>{t("step.step3.resolution")}</strong>
                            <p>{plan.resolution}</p>
                        </div>
                        <div className="step3-card-item">
                            {plan.spatialAudio && (
                                <p><strong>{t("step.step3.spatialAudio")}:</strong> {t("step.step3.available")}</p>
                            )}
                        </div>
                        <div className="step3-card-item">
                            <strong>{t("step.step3.devices")}:</strong>
                            <p>{plan.devices}</p>
                        </div>
                        <div className="step3-card-item">
                            <strong>{t("step.step3.watchDevices")}</strong>
                            <p>{plan.watch}</p>
                        </div>
                        <div className="step3-card-item">
                            <strong>{t("step.step3.downloadDevices")}</strong>
                            <p>{plan.download}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Editplan;
