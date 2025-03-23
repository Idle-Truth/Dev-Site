import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    // Load dark mode preference from local storage
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    // Apply dark mode class to body when toggled
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/hobbies">Hobbies & Interests</Link></li>
            </ul>

            {/* Dark Mode Toggle */}
            <div className="toggle-container" onClick={() => setDarkMode(!darkMode)}>
                <div className={`toggle-switch ${darkMode ? "dark-mode" : "light-mode"}`}>
                    <div className="toggle-circle"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
