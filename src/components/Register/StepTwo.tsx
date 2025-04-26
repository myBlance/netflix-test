import React from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next'

interface StepTwoProps {
    onNext: () => void;
}

const StepOne: React.FC<StepTwoProps> = ({ onNext }) => {
    const { t, i18n } = useTranslation()

    return (
        <div className="step2-container">
            <div className="step2-check-icon">✔</div>
            <div className="step-title">{t("step.step2.title")}</div>
            <div className="step-heading">{t("step.step2.heading")}</div>
            <ul className="step2-list">
                <li>{t("step.step2.benefits.cancel")}</li>
                <li>{t("step.step2.benefits.fullAccess")}</li>
                <li>{t("step.step2.benefits.noAds")}</li>
            </ul>
            <Button onClick={onNext} className="step2-next-button">
                {t("next")}
            </Button>
        </div>
    );
};

export default StepOne;
