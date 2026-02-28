import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
import Admin from "./pages/Admin";
import Pharmacist from "./pages/Pharmacist";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/pharmacist" element={<Pharmacist />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;