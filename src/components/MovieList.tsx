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
    overview: string; 
    vote_average: number; 
    release_date?: string; 
    genre_ids?: number[]; 
}

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        async function fetchMovies() {
            const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
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

                <div className="movie-slider-wrapper">
                    <div
                        className="movie-slider"
                        style={{
                            transform: `translateX(-${startIndex * (100 / 7)}%)`,
                            transition: "transform 0.5s ease-in-out",
                            width: `${(movies.length * 43) / 7}%`, // để đủ độ dài trượt
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