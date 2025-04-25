import "../styles/Login.css";
import { useState } from 'react';
import { Checkbox, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import Footer from './../components/Footer';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [agree, setAgree] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-page">     
            <div className="background">

            <div className='navbar'>
                <Link to="/" className="logo-link">
                    <img src="/assets/netflix.svg" alt="Netflix Logo" className="logo" />
                </Link>
                <Link to="/login" className="nav-link"></Link>
            </div>
            
            <div className="login">

                <div className="login-container">
                    <h2>Đăng nhập</h2>
                    <form>
                        <TextField
                            id="filled-multiline-flexible"
                            label="Email hoặc số điện thoại di động"
                          
                            maxRows={4}
                            variant="filled"
                            sx={{
                                width: '100%',
                                
                                '& .MuiFilledInput-root': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    borderRadius: '4px',
                                    color: '#fff',
                                    border: '2px solid #fff',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                        borderColor: '#666',
                                        border: '2px solid #fff',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#fff', 
                                    '&.Mui-focused': {
                                        color: '#fff',
                                    },
                                },
                                '& .MuiInputBase-root': {
                                    color: '#fff', 
                                },
                            }}
                        />
                        <TextField
                            id="filled-multiline-flexible"
                            label="Mật khẩu"
                            
                            maxRows={4}
                            variant="filled"
                            type={showPassword ? 'text' : 'password'}
                            sx={{
                                mb: 3,
                                mt: 3,
                                width: '100%',
                                '& .MuiFilledInput-root': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    borderRadius: '4px',
                                    color: '#fff',
                                    border: '2px solid #fff',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                                        borderColor: '#666',
                                        border: '2px solid #fff',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#fff', 
                                    '&.Mui-focused': {
                                        color: '#fff',
                                    },
                                },
                                '& .MuiInputBase-root': {
                                    color: '#fff', 
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleTogglePassword}
                                            edge="end"
                                            sx={{ color: '#fff',
                                                
                                             }}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <button className="btn-login">Đăng nhập</button>
                        <div className="divider">HOẶC</div>
                        <button className="btn-code">Sử dụng mã đăng nhập</button>
                        <a href="#" className="forgot-password">Bạn quên mật khẩu?</a>

                        <div className="terms">
                            <Checkbox 
                                checked={agree} 
                                onChange={(e) => setAgree(e.target.checked)}
                                sx={{
                                    ml: -1,
                                    color: '#a3a1a1',
                                    '&.Mui-checked': {
                                        color: '#fff',
                                    },
                                }}    
                            />
                            <span>Ghi nhớ tôi</span>
                        </div>

                        <p className="signup-text">Bạn mới sử dụng Netflix? 
                            <a href="#">Đăng ký ngay.</a>
                        </p>
                        <div className="captcha-note">
                            <p>Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot.</p>
                            <a href="#">Tìm hiểu thêm.</a>
                        </div>
                    </form>
                </div>
            </div> 
            </div>

            <Footer />
        </div>
        
    )
};

export default Login;
