import React, { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { getHeroById } from '../helpers';

export const HeroPage = () => {
    const { id } = useParams();

    const hero = useMemo(() => getHeroById(id));

    if (!hero) {
        return <Navigate to="/" />;
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } =
        getHeroById(id);

    const heroImage = `/assets/heroes/${id}.jpg`;

    return (
        <div className="hero-detail">
            <div className="row">
                <img className="hero-img" src={heroImage} alt={superhero} />
                {/* <img className="bg-img" src={heroImage} alt={superhero} /> */}
                <div className="hero-info">
                    <h2>{superhero}</h2>
                    <p>
                        <b>Alter ego:</b> {alter_ego}
                    </p>
                    <p>
                        <b>Publisher:</b> {publisher}
                    </p>
                    <p>
                        <b>First Appearance:</b> {first_appearance}
                    </p>
                    {/* <p>{characters}</p> */}
                </div>
            </div>
        </div>
    );
};
