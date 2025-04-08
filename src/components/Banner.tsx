import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Banner.css";
import { API_KEY, BASE_URL } from "../services/tmdb";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Banner: React.FC = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        async function fetchMovies() {
            const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
            setMovies(response.data.results.slice(0, 3)); // Lấy 3 phim đầu tiên làm slide
        }
            fetchMovies();
    }, []);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % movies.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
    };

    return (
        <header className="banner">
        {movies.length > 0 && (
            <div
                className="banner-slide"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[currentSlide]?.backdrop_path})`,
                }}
            >
                <div className="banner-content">
                    <h1>{movies[currentSlide]?.title || movies[currentSlide]?.name}</h1>
                    <p>{movies[currentSlide]?.overview}</p>
                    <button className="play-button">▶ Xem ngay</button>
                </div>
                <div className="banner-controls">
                    <button className="prev-button" onClick={handlePrev}>
                        <ArrowBackIosNewIcon/>
                    </button>
                    <button className="next-button" onClick={handleNext}>
                        <ArrowForwardIosIcon/>
                    </button>
                </div>
            </div>
        )}
        </header>
    );
};

export default Banner;
