import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({ id, superhero, publisher, alter_ego }) => {
    const heroImage = `/assets/heroes/${id}.jpg`;

    return (
        <Link className="hero-card" to={`/hero/${id}`}>
            <div>
                <div>
                    <img src={heroImage} className="card-img" alt={superhero} />
                </div>
                <div className="card-data">
                    <h3>{superhero}</h3>
                    <p>{alter_ego}</p>
                </div>
            </div>
        </Link>
    );
};
