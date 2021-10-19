import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="notFound">
            <Link to="/" className="backToHome">Back To Home</Link>
            <img src="https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png" alt="error"/>
        </div>
    )
}

export default NotFound
