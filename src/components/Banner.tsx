import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Banner.css";
import { API_KEY, BASE_URL } from "../services/tmdb";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EmailForm from "./EmailForm";
import { motion, AnimatePresence } from "framer-motion";
import LinearProgress from '@mui/material/LinearProgress';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useTranslation } from 'react-i18next';
import { useTheme } from "./ThemeContext";

const Banner: React.FC = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState([0, 0, 0]);
    const [playing, setPlaying] = useState(true);
    const { i18n } = useTranslation();
    const theme = useTheme();

    useEffect(() => {
        async function fetchMovies() {
          const response = await axios.get(
            `${BASE_URL}/trending/movie/day`,
            {
              params: {
                api_key: API_KEY,
                language: i18n.language // Thêm language vào đây
              }
            }
          );
          setMovies(response.data.results.slice(0, 3));
        }
    
        fetchMovies();
      }, [i18n.language]); 

    useEffect(() => {
        if (progress[currentSlide] === 100) {
            handleNext();
        }
    }, [progress, currentSlide]);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % movies.length);
        setProgress([0, 0, 0]); 
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
        setProgress([0, 0, 0]); 
    };

    const togglePlay = () => {
        setPlaying((prev) => !prev);
    };

    useEffect(() => {
        if (playing && progress[currentSlide] < 100) {
            const timer = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = [...prevProgress];
                    newProgress[currentSlide] += 1; 
                    return newProgress;
                });
            }, 100);

            return () => clearInterval(timer); 
        }
    }, [progress, currentSlide, playing]);

    const backgroundImage = theme.palette.mode === "dark"
        ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) `
        : `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))`;

    return (
        <header className="banner">

            {movies.length > 0 && (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className="banner-slide"
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[currentSlide]?.backdrop_path})`,
                        }}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.6 }}
                    >
                        <div className="banner-content">
                            <h1>{movies[currentSlide]?.title || movies[currentSlide]?.name}</h1>
                            <p>{movies[currentSlide]?.overview}</p>
                            <div className="email-form">
                                <EmailForm setPlaying={setPlaying} />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
            <div className="banner-controls">
                <button className="prev-button" onClick={handlePrev}>
                    <ArrowBackIosNewIcon />
                </button>
                <button className="next-button" onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
            <div className="banner-curve" 
                style={{ backgroundImage }}>
            </div>

            <div className="slide-indicators">
                <button onClick={togglePlay}>
                    {playing ? <PauseIcon /> : <PlayArrowIcon />}
                </button>

                {movies.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setCurrentSlide(index);
                            setProgress([0, 0, 0]);
                        }}
                        className={`progress-wrapper ${index === currentSlide ? 'active' : ''}`}
                    >
                        <LinearProgress
                            variant="determinate"
                            value={progress[index]}
                            className="slide-progress-bar"
                            sx={{
                                backgroundColor: 'rgba(236, 236, 236, 0.3)',
                                '& .MuiLinearProgress-bar': { backgroundColor: 'var(--text-color)' },
                            }}
                        />
                    </div>
                ))}
            </div>
        </header>
    );
};

export default Banner;
