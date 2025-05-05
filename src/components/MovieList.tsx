import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../services/tmdb";
import Movie from "./Movie";
import "../styles/MovieList.css";
import { useTranslation } from 'react-i18next';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string; 
    vote_average: number; 
    release_date?: string; 
    genre_ids?: number[]; 
}

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [startIndex, setStartIndex] = useState(0);
    const { t, i18n } = useTranslation();

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
            setMovies(response.data.results);
        }
        fetchMovies();
    }, [i18n.language]);



    const getSlidesPerView = () => {
        const width = window.innerWidth;
        if (width <= 768) return 2;
        if (width <= 1024) return 4;
        return 7;
    };
    
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
        setStartIndex((prev) => {
            const nextIndex = prev + slidesPerView;
            return nextIndex >= movies.length ? 0 : nextIndex;
        });
    };
    
    const handlePrev = () => {
        setStartIndex((prev) => {
            const prevIndex = prev - slidesPerView;
            const maxStart = movies.length - slidesPerView;
            return prevIndex < 0 ? Math.max(0, maxStart) : prevIndex;
        });
    };
    

    return (
        <div className="movie-list">
            <h2>{t("movie-title")}</h2>
            <div className="movie-list-controls">
                <button className="prev-button" onClick={handlePrev}>
                    <ArrowBackIosNewIcon />
                </button>

                <div className="movie-slider-wrapper">
                    <div
                        className="movie-slider"
                        style={{
                            
                            transform: `translateX(-${startIndex * (100 / slidesPerView)}%)`,
                            transition: "transform 0.5s ease-in-out",
                            width: `${(movies.length * 43) / slidesPerView}%`,
                            
                        }}
                    >
                        {movies.map((movie) => (
                            <div className="movie-slide" key={movie.id}>
                                <Movie
                                    movie={{
                                        id: movie.id,
                                        title: movie.title,
                                        description: movie.overview,
                                        posterPath: movie.poster_path,
                                        year: movie.release_date ? movie.release_date.split("-")[0] : "Unknown",
                                        genres: movie.genre_ids ? movie.genre_ids.map(String) : [],
                                        rating: movie.vote_average ? movie.vote_average.toString() : "N/A",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button className="next-button" onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>

    );
};

export default MovieList;