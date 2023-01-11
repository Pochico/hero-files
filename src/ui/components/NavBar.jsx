import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
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
                        <p>{user?.name}</p>
                    </li>
                    <li>
                        <button onClick={() => onLogout()}>Logout</button>
                    </li>
                </ul>
            </nav>
        </>
    );
};
