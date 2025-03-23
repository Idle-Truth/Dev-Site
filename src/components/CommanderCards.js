import React, { useState, useEffect } from "react";

const commanderNames = [
    "Jolene, the Plunder Queen",
    "Shalai, Voice of Plenty",
    "Obeka, Brute Chronologist",
    "Shorikai, Genesis Engine",
    "The Ur-Dragon"
];

const CommanderCards = () => {
    const [commanders, setCommanders] = useState([]);
    const [hoveredCommander, setHoveredCommander] = useState(null);

    // Fetch data from Scryfall API
    useEffect(() => {
        const fetchCommanders = async () => {
            try {
                const responses = await Promise.all(
                    commanderNames.map(name =>
                        fetch(`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`)
                    )
                );
                const data = await Promise.all(responses.map(res => res.json()));
                setCommanders(data);
            } catch (error) {
                console.error("Error fetching commander cards:", error);
            }
        };
        fetchCommanders();
    }, []);

    return (
        <div style={{ position: "relative", display: "flex", padding: "20px" }}>
            {commanders.map((commander, index) => (
                <div
                    key={commander.id}
                    style={{
                        position: "relative",
                        marginLeft: index !== 0 ? "-50px" : "0px", // Overlapping effect
                        transition: "transform 0.2s ease-in-out",
                        zIndex: hoveredCommander === commander.id ? 2 : 1
                    }}
                    onMouseEnter={() => setHoveredCommander(commander.id)}
                    onMouseLeave={() => setHoveredCommander(null)}
                >
                    {/* Normal Sized Card */}
                    <img
                        src={commander.image_uris?.normal}
                        alt={commander.name}
                        style={{
                            width: "2.5in",
                            height: "3.5in",
                            border: "1px solid black",
                            cursor: "pointer",
                            display: "block"
                        }}
                    />

                    {/* Enlarged Image on Hover */}
                    {hoveredCommander === commander.id && (
                        <img
                            src={commander.image_uris?.large}
                            alt={commander.name}
                            style={{
                                position: "absolute",
                                left: "120%",
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "4in",
                                height: "5.6in",
                                border: "2px solid black",
                                boxShadow: "5px 5px 10px rgba(0,0,0,0.5)",
                                zIndex: 10
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default CommanderCards;
