import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import MovieDetail from "./pages/MovieDetail";
import Login from "./pages/Login";
import PersonDetail from "./pages/PersonDetail";
import Register from "./pages/Register";
import SetupMomo from "./pages/PayMoney/Momo";
import SetupVisa from "./pages/PayMoney/Visa";
import QrPay from "./pages/QrPay/QrPay";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/person/:id" element={<PersonDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/momo" element={<SetupMomo />} />
        <Route path="/visa" element={<SetupVisa />} />
        <Route path="/qrpay" element={<QrPay/>} />
      </Routes>
    </Router>
  );
}

export default App;