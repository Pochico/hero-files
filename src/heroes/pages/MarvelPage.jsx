import React from 'react';
import { HeroesList } from '../components/HeroesList';

export const MarvelPage = () => {
    return (
        <>
            <h2>Marvel Heroes</h2>
            <br />
            <HeroesList publisher={'Marvel Comics'} />
        </>
    );
};
