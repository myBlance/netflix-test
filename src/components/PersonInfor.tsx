import React from "react";
import { Link } from 'react-router-dom';
import '../styles/PersonInfor.css';
import { useTranslation } from 'react-i18next';


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

    const viDepartment = (dep: string) => {
        const map: Record<string, string> = {
          Acting: 'Diễn viên',
          Directing: 'Đạo diễn',
          Writing: 'Biên kịch',
          Production: 'Sản xuất',
          Camera: 'Quay phim',
          Editing: 'Biên tập',
          Art: 'Nghệ thuật',
          Sound: 'Âm thanh',
        }
        return map[dep] || dep
      }


    const groupedByYear: Record<string, any[]> = person.combined_credits.cast.reduce((acc: any, movie: any) => {
        const year = movie.release_date?.substring(0, 4) || "—";
        if (!acc[year]) acc[year] = [];
        acc[year].push(movie);
        return acc;
    }, {});
    
    const { t } = useTranslation();

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
                        <h2 className="person-title1">{person.name}</h2>
                        <p><strong>{t('person.knownFor')}</strong><br />{viDepartment(person.known_for_department)}</p>
                        <p><strong>{t('person.totalWorks')}</strong><br />{person.combined_credits?.cast?.length || 0}</p>
                        <p><strong>{t('person.gender')}</strong><br />{person.gender === 1 ? t('person.female') : t('person.male')}</p>
                        <p><strong>{t('person.birthday')}</strong><br />{person.birthday} ({calculateAge(person.birthday)} {t('person.age')})</p>
                        <p><strong>{t('person.placeOfBirth')}</strong><br />{person.place_of_birth}</p>
                    </div>
                </div>
    
                <div className="person-right">
                    {person.combined_credits?.cast?.length > 0 && (
                        <div className="person-acting-container">
                            <div className="person-biography">
                                <h2 className="person-title2">{person.name}</h2>
                                {person.biography ? (
                                    <p className="biography-text">
                                        <strong>{t('person.biography')}</strong><br />
                                        {person.biography}</p>
                                ) : (
                                    <p className="biography-text">{t('person.updating')}</p>
                                )}
                            </div>
                            <div className="person-acting">
                                <h3>{t('person.roles')}</h3>

                                {Object.entries(groupedByYear)
                                    .sort(([yearA], [yearB]) => yearB.localeCompare(yearA))
                                    .map(([year, movies]) => (
                                        
                                        <div key={year} className="acting-year-group">
                                            <div className="acting-row-group">
                                                <div className="acting-year">
                                                    <h4>{year}</h4>
                                                </div>
                                                <div className="acting-movie-list">
                                                    <ul className="acting-list">
                                                        {movies.map((movie: any, index: number) => (
                                                            <li key={index} className="acting-item">
                                                                <div className="acting-info">
                                                                    <span className="acting-title">
                                                                        <Link to={`/movie/${movie.id}`}>
                                                                            {movie.title || movie.name}
                                                                        </Link>
                                                                    </span>
                                                                    <span className="acting-character">
                                                                        <span className="acting-character">
                                                                        {t('person.roles')} <span style={{ color: "#d85959" }}>{movie.character || "—"}</span>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>                               
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );    
};

export default PersonInfo;
