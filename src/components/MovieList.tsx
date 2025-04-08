import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../services/tmdb";
import Movie from "./Movie";
import "../styles/MovieList.css";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string; // Add overview for movie description
}

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        async function fetchMovies() {
            const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
            setMovies(response.data.results);
        }
        fetchMovies();
    }, []);

    const handleNext = () => {
        setStartIndex((prev) => {
            const nextIndex = prev + 7;
            return nextIndex >= movies.length ? 0 : nextIndex; // Loop back to the start
        });
    };

    const handlePrev = () => {
        setStartIndex((prev) => {
            const prevIndex = prev - 7;
            return prevIndex < 0 ? movies.length - (movies.length % 7 || 7) : prevIndex; // Loop to the end
        });
    };

    return (
        <div className="movie-list">
            <h2>Trending Now</h2>
            <div className="movie-list-controls">
                <button className="prev-button" onClick={handlePrev}>
                    <ArrowBackIosNewIcon />
                </button>
                <div className="movie-grid">
                    {movies.slice(startIndex, startIndex + 7).map((movie) => (
                        <Movie
                            key={movie.id}
                            movie={{
                                id: movie.id,
                                title: movie.title,
                                description: movie.overview,
                                posterPath: movie.poster_path,
                                year: "Unknown", // Default value or fetch from API if available
                                genres: [], // Default value or fetch from API if available
                                rating: "N/A", // Default value or fetch from API if available
                            }}
                        />
                    ))}
                </div>
                <button className="next-button" onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    );
};

export default MovieList;