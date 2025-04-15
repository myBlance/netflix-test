import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import MovieDetail from "./pages/MovieDetail";
import Login from "./pages/Login";
import PersonDetail from "./pages/PersonDetail";
import Register from "./pages/Register";
import SetupMomo from "./pages/PayMoney/Momo";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/person/:id" element={<PersonDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Momo" element={<SetupMomo />} />
      </Routes>
    </Router>
  );
}

export default App;