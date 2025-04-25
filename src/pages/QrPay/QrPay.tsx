import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, CircularProgress, Box } from '@mui/material';
import { io } from 'socket.io-client';
import { Link } from "react-router-dom";
import '../../styles/QrPay.css';
import { toast, ToastContainer } from 'react-toastify';
import axiosClient from '../../services/axiosClient';




// URL này trỏ tới Socket Server
const socket = io(import.meta.env.VITE_SOCKET_URL, {
    transports: ['websocket'],
});
  

const QrPay = () => {
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [orderId, setOrderId] = useState<string | null>(null);
    const [payStatus, setPayStatus] = useState<'Unpaid' | 'Paid'>('Unpaid');
    const [loading, setLoading] = useState<boolean>(false);

    const handleOrder = async () => {
        setLoading(true);
        try {
            const res = await axiosClient.post('/create-order', { name: 'Nguyen Van A', amount: 2000 });
                setQrCode(res.data.qrUrl);
                setOrderId(res.data.orderId);
                setPayStatus('Unpaid');
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error('Lỗi từ Axios:', err.response?.data || err.message);
            } else {
                console.error('Lỗi không xác định:', err);
            }
        } finally {
            setLoading(false);
        }
    };

    //  Lắng nghe sự kiện thanh toán từ server và hiển thị thông báo
    useEffect(() => {
        if (payStatus === 'Paid') {
            toast.dismiss('waiting-toast'); 
            toast.success('Thanh toán thành công!', {
                position: "top-right",
            });
        }
    }, [payStatus]);

    //  Kết nối socket theo orderId
    useEffect(() => {
        if (!orderId || payStatus === 'Paid') return;

        socket.emit('join_order', orderId); // Tham gia theo orderId

        const handlePaid = (data: any) => {
            if (data.orderId === orderId) {
                setPayStatus('Paid');
            }
        };

        socket.on('order_paid', handlePaid);

        return () => {
            socket.emit('leave_order', orderId);
            socket.off('order_paid', handlePaid);
        };
    }, [orderId, payStatus]);

    return (
        <div className='qrpay'>
            <ToastContainer position="top-right" />
            <div className='qrpay-container'>
                <Link to="/" className="logo-link">
                    <img src="/assets/netflix.svg" alt="Netflix Logo" className="logo" />
                </Link>
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
                            <p>Vui lòng quét mã QR để thanh toán:</p>
                            <img src={qrCode} alt="QR SePay" className='qrcode' />
                            
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
