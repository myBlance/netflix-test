import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import '../../styles/QrPay.css';

const QrPay = () => {
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [orderId, setOrderId] = useState<string | null>(null);
    const [payStatus, setPayStatus] = useState<'Unpaid' | 'Paid'>('Unpaid');

    const handleOrder = async () => {
        const res = await axios.post('http://localhost:4000/api/create-order', {
            name: 'Nguyen Van A',
            amount: 2000,
        });

        setQrCode(res.data.qrUrl);
        setOrderId(res.data.orderId);
        setPayStatus('Unpaid');
    };

    // Kiểm tra trạng thái đơn hàng mỗi giây
    useEffect(() => {
        if (!orderId || payStatus === 'Paid') return;

        const interval = setInterval(async () => {
            try {
                const res = await axios.post('http://localhost:4000/api/check-payment-status', {
                    orderId,
                });

                if (res.data.payment_status === 'Paid') {
                    setPayStatus('Paid');
                }
            } catch (error) {
                console.error('Lỗi kiểm tra thanh toán:', error);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [orderId, payStatus]);

    return (
        <div className='qrpay'>
            <div className='qrpay-container'>
                <img src="/src/assets/netflix.svg" alt="Netflix Logo" className="logo" />
                <div className='qrpay-title'>
                    <h2>Thanh toán bằng QR Code</h2>
                    <p>Vui lòng nhấn nút bên dưới để tạo mã QR thanh toán.</p>
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOrder}
                >
                    Tạo QR Code thanh toán
                </Button>

                <div className='qrpay-content'>
                    {qrCode && payStatus === 'Unpaid' && (
                        <>
                            <div>
                                <p>Vui lòng quét mã QR để thanh toán:</p>
                                <img src={qrCode} alt="QR SePay" className='qrcode' />
                            </div>
                            <div className='order-id'>
                                <p>Order ID: {orderId}</p>
                            </div>
                        </>
                    )}

                    {payStatus === 'Paid' && (
                        <div className="success-box">
                        <h3>✅ Thanh toán thành công!</h3>
                        <p>Cảm ơn bạn đã sử dụng dịch vụ.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QrPay;
