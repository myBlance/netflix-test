import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, CircularProgress } from '@mui/material';
import '../../styles/QrPay.css';

const QrPay = () => {
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [orderId, setOrderId] = useState<string | null>(null);
    const [payStatus, setPayStatus] = useState<'Unpaid' | 'Paid'>('Unpaid');
    const [loading, setLoading] = useState<boolean>(false);

    const handleOrder = async () => {
        setLoading(true);
        try {
            const res = await axios.post('/api/create-order', {
                name: 'Nguyen Van A',
                amount: 2000,
            });

            setQrCode(res.data.qrUrl);
            setOrderId(res.data.orderId);
            setPayStatus('Unpaid');
        } catch (err) {
            // Kiểm tra kiểu lỗi và xử lý tương ứng
            if (axios.isAxiosError(err)) {
                console.error('Lỗi từ Axios:', err.response?.data || err.message);
            } else {
                console.error('Lỗi không xác định:', err);
            }
        } finally {
            setLoading(false);
        }
    };

    // Kiểm tra trạng thái đơn hàng mỗi 1 giây
    useEffect(() => {
        if (!orderId || payStatus === 'Paid') return;

        const interval = setInterval(async () => {
            try {
                const res = await axios.post('/api/check-payment-status', {
                    orderId,
                });

                if (res.data.payment_status === 'Paid') {
                    setPayStatus('Paid');
                }
            } catch (error) {
                // Kiểm tra kiểu lỗi và xử lý tương ứng
                if (axios.isAxiosError(error)) {
                    console.error('Lỗi từ Axios:', error.response?.data || error.message);
                } else {
                    console.error('Lỗi không xác định:', error);
                }
            }
        }, 3000);

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
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Tạo QR Code thanh toán'}
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
