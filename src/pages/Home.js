import React from "react";
import aboutMeImage from "../about-me.png";
import catHorror from "../Cat-Horror.png";

const Home = () => {
    return (
        <div className="app">
            {/* Hero Section */}
            <section className="hero">
                <img src={catHorror} alt="cat" style={{ width: "250px", height: "auto" }} />
                <h2>Welcome to My Portfolio</h2>
                <p>I'm a passionate developer building amazing things.</p>
                <a href="#projects" className="cta-button">View My Work</a>
            </section>

            {/* About Me Section */}
            <section id="about" className="about-section">
                <div className="about-content">
                    <div className="about-text">
                        <h2>About Me</h2>
                        <p>
                            Hi! I'm  Trey, a software developer with a passion for building robust backend systems and exploring new programming languages.
                            I love designing efficient, scalable solutions that power modern applications.
                        </p>
                        <p>
                            When I’m not coding, you’ll find me experimenting with new technologies, gaming, or spending way too much time making Magic: The Gathering proxies instead of just buying the damn cards.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={aboutMeImage} alt="About Me" />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
                <h2>My Projects</h2>
                <div className="project-container">
                    <a href="https://github.com/your-repo-1" className="project-card left" target="_blank" rel="noopener noreferrer">
                        <img src="/project1.png" alt="Project 1" />
                        <h3>Project 1</h3>
                        <p>A cool project I built using React.</p>
                    </a>
                    <a href="https://github.com/your-repo-2" className="project-card right" target="_blank" rel="noopener noreferrer">
                        <img src="/project2.png" alt="Project 2" />
                        <h3>Project 2</h3>
                        <p>Another awesome project with animations.</p>
                    </a>
                    <a href="https://github.com/your-repo-3" className="project-card left" target="_blank" rel="noopener noreferrer">
                        <img src="/project3.png" alt="Project 3" />
                        <h3>Project 3</h3>
                        <p>Building creative things with JavaScript!</p>
                    </a>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
                <h2>Contact Me</h2>
                <p>Let's work together! Reach out to me at <a href="mailto:TreyHarry190@gmail.com">TreyHarry190.com</a></p>
            </section>
        </div>
    );
};

export default Home;
