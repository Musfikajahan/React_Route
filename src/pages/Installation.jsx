import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

const getInstalledApps = () => {
    const installed = localStorage.getItem('installed-apps');
    return installed ? JSON.parse(installed) : [];
};

const Installation = () => {
    const allApps = useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    useEffect(() => {
        const installedIds = getInstalledApps();
        const apps = allApps.filter(app => installedIds.includes(app.id));
        setInstalledApps(apps);
    }, [allApps]);
        const handleUninstall = (appId, appTitle) => {
        const currentInstalled = getInstalledApps();
        const updatedInstalled = currentInstalled.filter(id => id !== appId);
        localStorage.setItem('installed-apps', JSON.stringify(updatedInstalled));
                setInstalledApps(prevApps => prevApps.filter(app => app.id !== appId));
        toast.error(`${appTitle} has been uninstalled.`);
    };
    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortOrder === 'high-low') {
            return b.downloads - a.downloads;
        }
        if (sortOrder === 'low-high') {
            return a.downloads - b.downloads;
        }
        return 0; 
    });

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">My Installation</h1>
                <p className="text-lg text-gray-500 mt-2">Manage all your installed applications.</p>
            </div>

            {installedApps.length > 0 ? (
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-700">
                            {installedApps.length} App{installedApps.length > 1 ? 's' : ''} Installed
                        </h2>
                        <select
                            className="border rounded-lg py-2 px-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="">Sort by Downloads</option>
                            <option value="high-low">High-Low</option>
                            <option value="low-high">Low-High</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        {sortedApps.map(app => (
                            <div 
                                key={app.id} 
                                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-center">
                                    <img src={app.image} alt={app.title} className="w-16 h-16 rounded-lg object-cover" />
                                    <div className="ml-4">
                                        <h2 className="text-xl font-bold text-gray-800">{app.title}</h2>
                                        <p className="text-sm text-gray-500">{app.downloads.toLocaleString()} Downloads</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => handleUninstall(app.id, app.title)}
                                    className="bg-red-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center py-16">
                    <h2 className="text-2xl font-semibold">No Apps Installed</h2>
                    <p className="text-gray-500 mt-2">Go to the 'Apps' page to install some!</p>
                </div>
            )}
        </div>
    );
};

export default Installation;

