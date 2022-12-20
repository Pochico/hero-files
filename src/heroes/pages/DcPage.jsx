import React from 'react';
import { HeroesList } from '../components/HeroesList';

export const DcPage = () => {
    return (
        <>
            <h2>DC Heroes</h2>

            <br />
            <HeroesList publisher={'DC Comics'} />
        </>
    );
};
