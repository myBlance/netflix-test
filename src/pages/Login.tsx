import "../styles/Login.css";
import { useState } from 'react';
import { Checkbox } from '@mui/material';

const Login = () => {
    const [agree, setAgree] = useState(false);

    return (
        <div className="login">
            <div className="login-container">
                <h2>Đăng nhập</h2>
                <form>
                    <input type="email" placeholder="Email hoặc số điện thoại di động" required />
                    <input type="password" placeholder="Mật khẩu" required />
                    <button className="btn-login">Đăng nhập</button>
                    <div className="divider">HOẶC</div>
                    <button className="btn-code">Sử dụng mã đăng nhập</button>
                    <a href="#" className="forgot-password">Bạn quên mật khẩu?</a>

                    <div className="terms">
                        <Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                        <span>Nhớ mật khẩu</span>
                    </div>

                    <p className="signup-text">Bạn mới sử dụng Netflix? 
                        <a href="#">Đăng ký ngay.</a>
                    </p>

                    <p className="captcha-note">Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot.
                        <a href="#">Tìm hiểu thêm.</a>
                    </p>
                </form>
            </div>
        </div>
    )
};

export default Login;
