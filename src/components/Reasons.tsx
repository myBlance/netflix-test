import React from "react";
import "../styles/Reasons.css";
import TvIcon from '@mui/icons-material/Tv';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Reasons: React.FC = () => {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: TvIcon,
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favorites easily and always have something to watch.",
      icon: ArrowCircleDownIcon,
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: TvIcon,
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      icon: TvIcon,
    },
  ];

  return (
    <section className="reasons">
      <h2 className="reasons-title">More Reasons to Join</h2>
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
