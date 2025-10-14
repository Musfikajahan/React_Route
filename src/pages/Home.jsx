import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import AppCard from '../components/AppCard';

const Home = () => {
    const apps = useLoaderData();
    const topApps = apps.slice(0, 8);

    return (
        <div>
            {/* Banner Section */}
            <div className="hero min-h-[60vh] bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Welcome to AppVerse</h1>
                        <p className="py-6">Your one-stop destination for the best and latest apps. Discover, install, and manage your applications seamlessly.</p>
                        <div className="space-x-4">
                             <a href="#" className="btn btn-primary">App Store</a>
                             <a href="#" className="btn btn-secondary">Play Store</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="stats shadow w-full my-12 rounded-lg bg-gradient-to-l from-[#9F62F2] via-purple-500 to-[#632EE3] text-white">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31M</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div className="stat">
                     <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Apps Published</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>


            {/* Top Apps Section */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Top Apps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {topApps.map(app => <AppCard key={app.id} app={app} />)}
                </div>
                 <div className="text-center mt-12">
                    <Link to="/apps" className="btn btn-wide btn-outline">Show All</Link>
                </div>
            </div>

        </div>
    );
};

export default Home;
