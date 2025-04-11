import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from "../services/tmdb";
import '../styles/CastList.css';
import { useNavigate } from 'react-router-dom';

interface CastMember {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
}

interface Props {
    movieId: number;
}

const CastList: React.FC<Props> = ({ movieId }) => {
    const [cast, setCast] = useState<CastMember[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCast = async () => {
            try {
                const response = await axios.get(
                    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
                );
                setCast(response.data.cast.slice(0, 8 )); 
            } catch (error) {
                console.error('Error fetching cast:', error);
            }
        };

        fetchCast();
    }, [movieId]);

    return (
        <div className="cast-section">
            <h2 className="cast-title">Series Cast</h2>
            <div className="cast-list">
                {cast.map((member) => (
                    <div 
                        key={member.id} 
                        className="cast-card"
                        onClick={() => navigate(`/person/${member.id}`)}
                    >
                        {member.profile_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                                alt={member.name}
                                className="cast-image"
                            />
                        ) : (
                            <div className="cast-placeholder" />
                        )}
                        <div className="cast-info">
                            <p className="cast-name">{member.name}</p>
                            <p className="cast-character">{member.character}</p>
                        </div>
                    </div>
                ))}
                <div className="cast-viewmore">
                    <a href={`/movie/${movieId}/cast`} className="view-more">View More →</a>
                </div>
            </div>
        </div>
    );
};

export default CastList;
