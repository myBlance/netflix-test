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

const Banner: React.FC = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState([0, 0, 0]);
    const [playing, setPlaying] = useState(true);
    
    useEffect(() => {
        async function fetchMovies() {
            const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
            setMovies(response.data.results.slice(0, 3)); // Lấy 3 phim đầu tiên làm slide
    }

        fetchMovies();
    }, []);

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
                            <EmailForm />
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
            <div className="banner-curve"></div>

            <div className="slide-indicators">
                <button onClick={togglePlay}>
                    {playing ? <PauseIcon /> : <PlayArrowIcon />}
                </button>

                {movies.map((_, index) => (
                    <LinearProgress
                        key={index}
                        variant="determinate"
                        value={progress[index]}
                        className="slide-progress-bar"
                        sx={{
                            backgroundColor: 'rgba(236, 236, 236, 0.3)',
                            '& .MuiLinearProgress-bar': { backgroundColor: '#fff' },
                            
                        }}
                    />
                ))}
            </div>
        </header>
    );
};

export default Banner;
