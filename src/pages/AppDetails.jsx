import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import toast from 'react-hot-toast';

const getInstalledApps = () => {
    const installed = localStorage.getItem('installed-apps');
    return installed ? JSON.parse(installed) : [];
};

const AppDetails = () => {
    const allAppsData = useLoaderData();
    const { id } = useParams();
    const numericId = parseInt(id, 10);
    const app = allAppsData.find(app => app.id === numericId);
    const [isInstalled, setIsInstalled] = useState(false);
    useEffect(() => {
        const installedIds = getInstalledApps();
        setIsInstalled(installedIds.includes(numericId));
    }, [numericId]);
    const handleInstall = () => {
        const installedIds = getInstalledApps();
        if (installedIds.includes(numericId)) return;

        const updatedInstalledIds = [...installedIds, numericId];
        localStorage.setItem('installed-apps', JSON.stringify(updatedInstalledIds));
        setIsInstalled(true);
        toast.success(`${app.title} has been installed successfully!`);
    };

    if (!app) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold text-gray-700">App Not Found</h1>
                <p className="text-gray-500 mt-2">The app you are looking for does not exist.</p>
            </div>
        );
    }

    const { title, image, rating, downloads, reviews, description, review_data } = app;

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 flex items-center">
                    <img src={image} alt={title} className="w-32 h-32 rounded-3xl object-cover flex-shrink-0" />
                    <div className="flex-grow mx-8">
                        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
                        <div className="flex items-center space-x-4 text-gray-500 mt-2">
                            <span>⭐ {rating}</span>
                            <span className="text-gray-300">&bull;</span>
                            <span>{downloads.toLocaleString()} Downloads</span>
                            <span className="text-gray-300">&bull;</span>
                            <span>{reviews.toLocaleString()} Reviews</span>
                        </div>
                    </div>
                    <button
                        onClick={handleInstall}
                        disabled={isInstalled}
                        className="flex-shrink-0 py-3 px-8 rounded-lg font-semibold text-white transition-all duration-300 disabled:bg-green-500 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        {isInstalled ? '✓ Installed' : 'Install'}
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Review Snapshot</h2>
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <LineChart data={review_data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="reviews" name="Monthly Reviews" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
                        <p className="text-gray-600 leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;

