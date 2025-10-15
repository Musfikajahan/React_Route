import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../assets/Error-404.png'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

export default function ErrorPage() {
    const error = useRouteError?.() || {};

    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-250px)] bg-gray-50 flex items-center justify-center">
                <div className="max-w-md mx-auto px-4 py-10 text-center">
                    <div className="mx-auto w-full">
                        <img
                            src={errorImage} 
                            alt="404 Page Not Found"
                            className="w-full h-auto select-none"
                        />
                    </div>
                    <h1 className="mt-8 text-3xl md:text-4xl font-bold text-slate-800">
                        Oops, page not found!
                    </h1>
                    <p className="mt-3 text-slate-500">
                        The page you are looking for does not exist or has been moved.
                    </p>
                    {error?.statusText || error?.message ? (
                        <p className="mt-2 text-xs text-slate-400 bg-slate-100 p-2 rounded">
                            Error: {error.statusText || error.message}
                        </p>
                    ) : null}
                    <div className="mt-8">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                        >
                            Go Back Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

