import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import Reasons from "../components/Reasons";
import AskedQuestions from '../components/AskedQuestion';
import EmailForm from "../components/EmailForm";
import {  ToastContainer } from 'react-toastify';

const Home: React.FC = () => {
    return (
        <div>
            <ToastContainer position="top-right" />
            <Navbar />
            <Banner />
            <MovieList />
            <Reasons />
            <AskedQuestions/>
            <EmailForm setPlaying={(playing: boolean) => console.log("Playing:", playing)} />
            <Footer/>
        </div>
    );
};

export default Home;
