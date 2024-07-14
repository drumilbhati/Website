import './MemTiers';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Jokes() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios.get('/api/jokes')
        .then((response) => {
            setJokes(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    })

    return (
        <div className="jokes">
            <h1>Jokes</h1>
            <h2>Count: {jokes.length}</h2>

            {
                jokes.map((joke) => (
                    <div className="joke">
                        <h3>{joke.joke}</h3>
                        <p>{joke.answer}</p>
                    </div>
                ))
            }
        </div>
    );
}