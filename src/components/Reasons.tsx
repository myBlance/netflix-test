import React from "react";
import "../styles/Reasons.css";
import TvIcon from '@mui/icons-material/Tv';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useTranslation } from 'react-i18next';


const Reasons: React.FC = () => {
  const { t } = useTranslation();
  const reasons = [
    { title: t('reasons.watchOnTv'), description: t('reasons.watchOnTvDesc'), icon: TvIcon },
    { title: t('reasons.downloadShows'), description: t('reasons.downloadShowsDesc'), icon: ArrowCircleDownIcon },
    { title: t('reasons.watchEverywhere'), description: t('reasons.watchEverywhereDesc'), icon: TvIcon },
    { title: t('reasons.createProfiles'), description: t('reasons.createProfilesDesc'), icon: TvIcon },
  ];

  return (
    <section className="reasons">
      <h2 className="reasons-title">{t("reasons.title")}</h2>
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
