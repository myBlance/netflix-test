const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Biến lưu trạng thái đơn hàng tạm thời (dùng DB thực tế trong sản phẩm)
const orders = {};

// Tạo đơn hàng
app.post('/api/create-order', (req, res) => {
    const { name, amount } = req.body;

    const orderId = `ORDER_${Date.now()}`;
    const qrText = `https://img.vietqr.io/image/MB-0917436401-print.png?amount=${amount}&addInfo=${orderId}`;

    // Lưu đơn hàng tạm thời
    orders[orderId] = {
        name,
        amount,
        status: 'Unpaid',
    };

    res.json({
        qrUrl: qrText,
        status: 'pending',
        orderId,
    });
});

// SePay gọi webhook khi giao dịch thành công
app.post('/api/sepay-webhook', (req, res) => {
    const { transaction_id, description } = req.body;

    console.log('Giao dịch từ SePay:', req.body);

    // Giả sử SePay gửi description là ORDER_123456
    const orderId = description;

    if (orders[orderId]) {
        orders[orderId].status = 'Paid';
        console.log(`Đơn hàng ${orderId} đã thanh toán.`);
    }

    res.sendStatus(200);
});

// API kiểm tra trạng thái đơn hàng
app.post('/api/check-payment-status', (req, res) => {
    const { orderId } = req.body;

    const order = orders[orderId];
    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }

    res.json({
        payment_status: order.status,
    });
});

app.listen(4000, () => console.log('Server running at http://localhost:4000'));
