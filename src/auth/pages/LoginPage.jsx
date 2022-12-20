import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/', { replace: true });
    };

    return (
        <>
            <h1>Login</h1>

            <hr />

            <form className="login-form">
                <input type="text" name="user" placeholder="Username" />
                <input type="password" name="pass" placeholder="Password" />
            </form>

            <button className="login-btn" onClick={onLogin}>
                Login
            </button>
        </>
    );
};
