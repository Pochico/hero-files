import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', { replace: true });
    };

    return (
        <>
            <nav>
                <h2>Hero Files</h2>

                <NavLink
                    to="/search"
                    className={(args) => {
                        args.isActive && 'active';
                    }}
                >
                    Search
                </NavLink>

                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={(args) => {
                                args.isActive && 'active';
                            }}
                        >
                            Marvel Heroes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dc"
                            className={(args) => {
                                args.isActive && 'active';
                            }}
                        >
                            DC Heroes
                        </NavLink>
                    </li>

                    <li>
                        <p>Julen</p>
                    </li>
                    <li>
                        <button onClick={onLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </>
    );
};
