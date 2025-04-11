import "../styles/Login.css";

const Login = () => {
    
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

                    <div className="remember-me">
                        <label>
                            <input type="checkbox"  /> Ghi nhớ tôi
                        </label>
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
