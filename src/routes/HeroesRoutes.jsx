import { Routes, Route, Navigate } from 'react-router-dom';

import { DcPage, HeroPage, MarvelPage, SearchPage } from '../heroes/pages';
import { NavBar } from '../ui/components';

export const HeroesRoutes = () => {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />

                {/* Search Hero by ID */}

                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </>
    );
};
