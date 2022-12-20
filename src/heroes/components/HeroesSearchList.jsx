import React, { useMemo } from 'react';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { HeroCard } from './HeroCard';

export const HeroesSearchList = (name) => {
    const heroes = useMemo(() => getHeroesByName(name));
    console.log(heroes);

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
 