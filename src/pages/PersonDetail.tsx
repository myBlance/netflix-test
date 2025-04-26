import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PersonInfo from "../components/PersonInfor";
import { API_KEY, BASE_URL } from "../services/tmdb";
import { useTranslation } from 'react-i18next'

const PersonDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [person, setPerson] = useState<any>(null);
    const { i18n } = useTranslation();

    useEffect(() => {
        const fetchPersonDetail = async () => {
            try {
                const response = await axios.get(
                    `${BASE_URL}/person/${id}`, 
                    {
                        params: {
                            api_key: API_KEY,
                            language: i18n.language,
                            append_to_response: 'combined_credits' // thêm vào params
                        }
                    }
                );
                setPerson(response.data);
            } catch (error) {
                console.error("Failed to fetch person detail", error);
            }
        };
    
        fetchPersonDetail();
    }, [id, i18n.language]);
    

    if (!person) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
                <PersonInfo person={person} />
            <Footer />
        </>
    );
};

export default PersonDetail;
