import "../styles/Login.css";
import { useState } from 'react';
import { Checkbox, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import Footer from './../components/Footer';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next'

const Login = () => {
    const [agree, setAgree] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const { t } = useTranslation();

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
                        <h2>{t("login")}</h2>
                        <form>
                            <TextField
                                id="filled-multiline-flexible"
                                label={t("email")}
                            
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
                                label={t("password")}
                                
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

                            <button className="btn-login">{t("login")}</button>
                            <div className="divider">{t("or")}</div>
                            <button className="btn-code">{t("btn-code")}</button>
                            <a href="#" className="forgot-password">{t("forgot-password")}?</a>

                            <div className="terms">
                                <Checkbox 
                                    checked={agree} 
                                    onChange={(e) => setAgree(e.target.checked)}
                                    sx={{
                                        ml: -1.5,
                                        color: '#a3a1a1',
                                        '&.Mui-checked': {
                                            color: '#fff',
                                        },
                                    }}    
                                />
                                <span>{t("terms")}</span>
                            </div>

                            <p className="signup-text">{t("signup-text")}
                                <a href="#">{t("Sign up now")}.</a>
                            </p>
                            <div className="captcha-note">
                                <p>{t("captcha-note")}</p>
                                <a href="#">{t("learn-more")}</a>
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
