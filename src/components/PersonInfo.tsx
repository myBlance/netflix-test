import React from "react";
import { Link } from 'react-router-dom';

import '../styles/PersonInfor.css';

interface Props {
    person: any;
}

const PersonInfo: React.FC<Props> = ({ person }) => {
    const calculateAge = (birthdate: string) => {
        const birth = new Date(birthdate);
        const ageDifMs = Date.now() - birth.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    return (
        <div className="person-info-container">
            <div className="person-info-main">
                <div className="person-left">
                    <img
                        src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
                        alt={person.name}
                        style={{ borderRadius: "10px", width: "100%" }}
                    />
                    <div className="person-infor-content">
                        
                        <p><strong>Known For</strong><br />{person.known_for_department}</p>
                        <p><strong>Known Credits</strong><br />{person.combined_credits?.cast?.length || 0}</p>
                        <p><strong>Gender</strong><br />{person.gender === 1 ? "Female" : "Male"}</p>
                        <p><strong>Birthday</strong><br />{person.birthday} ({calculateAge(person.birthday)} years old)</p>
                        <p><strong>Place of Birth</strong><br />{person.place_of_birth}</p>
                    </div>
                </div>
    
                <div className="person-right">
                    {person.combined_credits?.cast?.length > 0 && (
                        <div className="person-acting-container">
                            <div className="person-biography">
                                <h2 className="person-title">{person.name}</h2>
                                {person.biography ? (
                                    <p className="biography-text">
                                        <strong>Biography </strong><br />
                                        {person.biography}</p>
                                ) : (
                                    <p className="biography-text">Tiểu sử đang được cập nhật...</p>
                                )}
                            </div>
                            <div className="person-acting">
                                <h3>Acting</h3>
                                <ul className="acting-list">
                                    {person.combined_credits.cast
                                        .sort((a: any, b: any) => (b.release_date || '').localeCompare(a.release_date || ''))
                                        .map((movie: any, index: number) => (
                                            <li key={index} className="acting-item">
                                                <div className="acting-row">
                                                    <div className="acting-year">
                                                        {movie.release_date?.substring(0, 4) || "—"}
                                                    </div>
                                                    <div className="acting-info">
                                                        <span className="acting-title">
                                                            <Link to={`/movie/${movie.id}`} className="acting-title">
                                                                {movie.title || movie.name}
                                                            </Link>
                                                        </span>
                                                        <span className="acting-character">as {movie.character || "—"}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
    
};

export default PersonInfo;
