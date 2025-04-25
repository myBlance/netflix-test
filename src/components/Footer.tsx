import React, { useState } from 'react';
import "../styles/Footer.css";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Footer: React.FC = () => {
    const [language, setLanguage] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLanguage(event.target.value as string);
    };

    return (
        <footer className="footer">
            <div className="footer-top">
                <a href="#">Có câu hỏi? Liên hệ với chúng tôi.</a>
                <Select
                    value={language}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Chọn ngôn ngữ' }}
                >
                    <MenuItem value="">
                        <em>Tiếng Việt</em>
                    </MenuItem>
                    <MenuItem value="en">English</MenuItem>
                </Select>
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="#">Câu hỏi thường gặp</a></li>
                    <li><a href="#">Quan hệ đầu tư</a></li>
                    <li><a href="#">Chính sách bảo mật</a></li>
                    <li><a href="#">Kiểm tra tốc độ</a></li>
                </ul>
                <ul>
                    <li><a href="#">Trung tâm trợ giúp</a></li>
                    <li><a href="#">Công việc</a></li>
                    <li><a href="#">Tùy chọn cookie</a></li>
                    <li><a href="#">Thông báo pháp lý</a></li>
                </ul>
                <ul>
                    <li><a href="#">Tài khoản</a></li>
                    <li><a href="#">Các phương thức xem</a></li>
                    <li><a href="#">Thông tin công ty</a></li>
                    <li><a href="#">Chỉ có trên Netflix</a></li>
                </ul>
                <ul>
                    <li><a href="#">Trung tâm truyền thông</a></li>
                    <li><a href="#">Điều khoản sử dụng</a></li>
                    <li><a href="#">Liên hệ với chúng tôi</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>Netflix Việt Nam</p>
            </div>
        </footer>
    );
};

export default Footer;
