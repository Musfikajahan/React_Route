import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
            <p className="text-xl mt-4">Sorry, an unexpected error has occurred.</p>
            <p className="text-gray-500 mt-2">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className="btn btn-primary mt-8">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;
