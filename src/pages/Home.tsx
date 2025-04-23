import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import Reasons from "../components/Reasons";
import AskedQuestions from '../components/AskedQuestion';
import EmailForm from "../components/EmailForm";

const Home: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <MovieList />
        <Reasons />
        <AskedQuestions/>
        <EmailForm/>
        <Footer/>
    </div>
  );
};

export default Home;
