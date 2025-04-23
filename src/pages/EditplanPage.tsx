import React, { useState } from 'react';
import Editplan from './PayMoney/editplan';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Editplan.css';

const plans = [
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
];

const EditplanPage: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number } | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = () => {
        const previous = location.state?.from;
        if (previous === '/Momo') {
            navigate('/Momo');
        } else {
            navigate('/Visa');
        }
    };

    return (
        <div className='editplan'>
            <div className='navbar'>
                <Link to="/" className="logo-link">
                    <img src="/assets/netflix.svg" alt="Netflix Logo" className="logo" />
                </Link>
                <Link to="/login" className="nav-link">Đăng nhập</Link>
            </div>
            <div className='editplan-container'>

                <Editplan
                    plans={plans}
                    selectedPlan={selectedPlan}
                    setSelectedPlan={setSelectedPlan}
                />
            </div>
            <div className="step-navigation">
                <Button onClick={handleChange}>Tiếp theo</Button>
            </div>

        </div>
    );
};

export default EditplanPage;
