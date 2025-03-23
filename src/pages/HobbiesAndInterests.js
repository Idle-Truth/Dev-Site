import React from "react";
import CommanderCards from "../components/CommanderCards";



const HobbiesAndInterests = () => {
    return (
        <div className="container">
            <h1 className="title">Hobbies & Interests</h1>

            <section className="section">
                <h1>My Favorite Commanders</h1>
                <CommanderCards />
            </section>
        </div>
    );

}

export default HobbiesAndInterests;