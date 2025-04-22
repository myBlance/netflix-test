import React from 'react';
import { Button } from '@mui/material';

interface StepOneProps {
    onNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
    return (
        <div className="step1-container">
            <div className="step1-check-icon">✔</div>
            <div className="step-title">BƯỚC 1 TRONG 3</div>
            <div className="step-heading">Chọn gói dịch vụ của bạn.</div>
            <ul className="step1-list">
                <li>Không ràng buộc, hủy bất cứ lúc nào.</li>
                <li>Xem toàn bộ nội dung Netflix với một mức giá thấp.</li>
                <li>Không quảng cáo, không phụ phí.</li>
            </ul>
            <Button onClick={onNext} className="step1-next-button">
                Tiếp theo
            </Button>
        </div>
    );
};

export default StepOne;
