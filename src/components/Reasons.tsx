import React from "react";
import "../styles/Reasons.css";
import TvIcon from '@mui/icons-material/Tv';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Reasons: React.FC = () => {
  const reasons = [
    {
      title: "Thưởng thức trên TV của bạn",
      description: "Xem trên Smart TV, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray, và nhiều hơn nữa.",
      icon: TvIcon,
    },
    {
      title: "Tải xuống chương trình để xem ngoại tuyến",
      description: "Lưu lại chương trình yêu thích và luôn có thứ để xem bất cứ lúc nào.",
      icon: ArrowCircleDownIcon,
    },
    {
      title: "Xem mọi nơi",
      description: "Truyền phát vô hạn phim và chương trình TV trên điện thoại, máy tính bảng, laptop và TV.",
      icon: TvIcon,
    },
    {
      title: "Tạo hồ sơ cho trẻ em",
      description: "Gửi các bé vào những cuộc phiêu lưu với các nhân vật yêu thích trong không gian được tạo riêng cho chúng — miễn phí với thẻ thành viên của bạn.",
      icon: TvIcon,
    },
  ];

  return (
    <section className="reasons">
      <h2 className="reasons-title">Nhiều lý do hơn để tham gia</h2>
      <div className="reasons-list">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-item">
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
            <div className="reason-icon"><reason.icon /></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reasons;
