import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
    const err = useRouteError();
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-code">{err.status}: {err.statusText}</h1>
                <p className="error-message">Oops! The page you are looking for does not exist.</p>
                <button className="go-home-btn" onClick={() => window.location.href = '/'}>
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default Error;
