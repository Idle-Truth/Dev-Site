import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";  // Check that this file exists
import Particles from "./components/Particles";
import Home from "./pages/Home";
import Projects from "./pages/Projects";  // Ensure 'Projects.js' exists in the pages folder
import HobbiesAndInterests from "./pages/HobbiesAndInterests";  // Ensure this file exists
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Particles />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/hobbies" element={<HobbiesAndInterests />} />
            </Routes>
        </Router>
    );
}

export default App;
