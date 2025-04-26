import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../services/tmdb";
import "../styles/Show.css";
import ViewTrailer from "./ViewTrailer"; 
import { useTranslation } from 'react-i18next';

interface ShowProps {
    id: number;
    type: "movie" | "tv";
}

const Show: React.FC<ShowProps> = ({ id, type }) => {
    const [show, setShow] = useState<any>(null);
    const [showTrailer, setShowTrailer] = useState(false);
    const { t, i18n } = useTranslation();


    useEffect(() => {
        async function fetchShowDetails() {
            try {
                const response = await axios.get(
                    `${BASE_URL}/${type}/${id}`,
                    {
                        params: {
                            api_key: API_KEY,
                            language: i18n.language,
                            
                        },
                    }
                );
                setShow(response.data);
            } catch (error) {
                console.error('Error fetching show details:', error);
            }
        }
        fetchShowDetails();
    }, [id, type, i18n.language]);
    

    if (!show) {
        return <div className="show-loading">Loading...</div>;
    }

    return (
        <div className="show-container">
            <div
                className="show-banner"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${show.backdrop_path})`,
                }}
            >
                <div className="show-overlay">
                    <div className="show-poster">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                            alt={show.title || show.name}
                        />
                    </div>
                    <div className="show-details">
                        <h1 className="show-title">
                            {show.title || show.name} ({new Date(show.release_date || show.first_air_date).getFullYear()})
                        </h1>
                        <p className="show-meta">
                            {show.adult ? "R" : "PG"} • {new Date(show.release_date || show.first_air_date).toLocaleDateString()} •{" "}
                            {show.genres.map((genre: any) => genre.name).join(", ")} • {show.runtime || show.episode_run_time?.[0]}m
                        </p>
                        <div className="show-user-score">
                            <div className="score-circle">
                                <svg viewBox="0 0 36 36" className="circular-chart green">
                                    <path
                                        className="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path
                                        className="circle"
                                        strokeDasharray={`${Math.round(show.vote_average * 10)}, 100`}
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="18.35" className="percentage">
                                        {Math.round(show.vote_average * 10)}
                                        %
                                    </text>
                                </svg>
                            </div>
                            <div>
                                <div><strong>{t("score")}</strong></div>
                            </div>
                        </div>
                        <p className="show-tagline">{show.tagline}</p>
                        <h2>{t("show-title")}</h2>
                        <p className="show-overview">{show.overview}</p>
                        <div className="show-credits">
                            {show.credits?.crew?.slice(0, 3).map((crew: any) => (
                                <div key={crew.id} className="show-credit">
                                    <p>{crew.name}</p>
                                    <p>{crew.job}</p>
                                </div>
                            ))}
                        </div>
                        <button 
                            className="play-trailer-button"
                            onClick={() => setShowTrailer(true)} // show trailer dạng Modal
                        >▶ {t("show-trailer")}
                        </button>
                    </div>
                </div>
            </div>
            <ViewTrailer
                id={id}
                type={type}
                open={showTrailer}
                onClose={() => setShowTrailer(false)}
            />
        </div>
    );
};

export default Show;
