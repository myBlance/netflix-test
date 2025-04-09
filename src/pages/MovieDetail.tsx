import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Show from '../components/Show';

const MovieDetail = () => {
    const { id } = useParams();
    const numericId = id ? parseInt(id, 10) : undefined;

    return (
        <div>
            <Navbar />
            {numericId !== undefined && <Show id={numericId} type="movie" />}
            <Footer/>
        </div>
    );
};

export default MovieDetail;
