import React, { useState } from 'react';
import { Modal, Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom'; // 👉 thêm dòng này
import '../styles/Movie.css'; 

interface MovieProps {
    movie: {
        id: number;
        title: string;
        description: string;
        posterPath: string;
        year: string;
        genres: string[];
        rating: string;
    };
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); 

    const toggleModal = (open: boolean) => () => {
        setIsModalOpen(open);
    };

    const handleWatchNow = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <>
            <div className="movie-item" onClick={toggleModal(true)}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`} alt={movie.title} />
                <p>{movie.title}</p>
            </div>

            <Modal
                open={isModalOpen}
                onClose={toggleModal(false)}
                aria-labelledby="movie-title"
                aria-describedby="movie-description"
            >
                <Box className="modal-box">
                    <Box className="modal-header">
                        <img
                            src={`https://image.tmdb.org/t/p/w780/${movie.posterPath}`}
                            alt={movie.title}
                            className="modal-image"
                        />
                        <h2 className="modal-title">{movie.title}</h2>
                        <IconButton className="close-button" onClick={toggleModal(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Box className="modal-content">
                        <p className="movie-details">
                            {movie.year} • {movie.rating} • Movie •{' '}
                            {movie.genres.includes('Horror') && movie.genres.includes('Comedy')
                                ? 'Horror • Comedy'
                                : movie.genres.length > 0
                                ? movie.genres.join(' • ')
                                : 'No genres available'}
                        </p>
                        <p className="movie-description">{movie.description}</p>
                        <Button 
                            variant="contained"
                            className="signup-button"
                            onClick={handleWatchNow} 
                        >
                            ▶ Xem ngay
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default Movie;
