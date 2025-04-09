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
    vote_average: number; // Add vote_average for movie rating
    release_date?: string; // Add release_date for extracting year
    genre_ids?: number[]; // Add genre_ids for genres
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
            const nextIndex = prev + 3;
            return nextIndex >= movies.length ? 0 : nextIndex; // Loop back to the start
        });
    };

    const handlePrev = () => {
        setStartIndex((prev) => {
            const prevIndex = prev - 3;
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
                                year: movie.release_date ? movie.release_date.split("-")[0] : "Unknown", 
                                genres: movie.genre_ids ? movie.genre_ids.map(String) : [], 
                                rating: movie.vote_average ? movie.vote_average.toString() : "N/A", 
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