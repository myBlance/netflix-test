import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Login = () => {
    
    return (
        <div>
            <Navbar />
            <div className="login-container">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
            <Footer />
        </div>
    )
};

export default Login;
