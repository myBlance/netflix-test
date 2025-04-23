import React from 'react';
import { Button } from '@mui/material';

interface StepTwoProps {
    onNext: () => void;
}

const StepOne: React.FC<StepTwoProps> = ({ onNext }) => {
    return (
        <div className="step2-container">
            <div className="step2-check-icon">✔</div>
            <div className="step-title">BƯỚC 2 TRONG 3</div>
            <div className="step-heading">Chọn gói dịch vụ của bạn.</div>
            <ul className="step2-list">
                <li>Không ràng buộc, hủy bất cứ lúc nào.</li>
                <li>Xem toàn bộ nội dung Netflix với một mức giá thấp.</li>
                <li>Không quảng cáo, không phụ phí.</li>
            </ul>
            <Button onClick={onNext} className="step2-next-button">
                Tiếp theo
            </Button>
        </div>
    );
};

export default StepOne;
