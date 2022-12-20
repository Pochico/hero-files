import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroesList = (publisher) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher));

    return (
        <>
            <div className="heroes-list">
                {heroes.map((hero) => (
                    <HeroCard
                        key={hero.id}
                        className="hero-card"
                        id={hero.id}
                        superhero={hero.superhero}
                        alter_ego={hero.alter_ego}
                        characters={hero.characters}
                        first_appearance={hero.first_appearance}
                        publisher={hero.publisher}
                    />
                ))}
            </div>
        </>
    );
};
