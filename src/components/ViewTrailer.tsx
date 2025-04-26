import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "../services/tmdb";
import "../styles/ViewTrailer.css"; 

interface ViewTrailerProps {
    id: number;
    type: "movie" | "tv";
    open: boolean;
    onClose: () => void;
}

const ViewTrailer: React.FC<ViewTrailerProps> = ({ id, type, open, onClose }) => {
    const [trailerKey, setTrailerKey] = useState<string | null>(null);

    useEffect(() => {
        if (!open) return;

        async function fetchTrailer() {
            try {
                const res = await axios.get(`${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}`);
                const trailers = res.data.results;
                const official = trailers.find(
                    (v: any) => v.type === "Trailer" && v.site === "YouTube"
                );
                setTrailerKey(official?.key || trailers[0]?.key || null);
            } catch (err) {
                console.error("Lỗi tải trailer", err);
            }
        }

        fetchTrailer();
    }, [id, type, open]);

    if (!open) return null;

    return (
        <div className="iframe-overlay" onClick={onClose}>
            <div className="iframe-content" onClick={(e) => e.stopPropagation()}>
                <button className="iframe-close" onClick={onClose}>✖</button>
                {trailerKey ? (
                    <div className="video-wrapper">
                        <iframe
                            width="90%"
                            height="90%"
                            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                            title="Trailer"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                ) : (
                    <p style={{ padding: 20 }}>Loading trailer...</p>
                )}
            </div>
        </div>
    );
};

export default ViewTrailer;
