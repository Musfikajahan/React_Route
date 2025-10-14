import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppCard from '../components/AppCard';
import toast from 'react-hot-toast';

const getInstalledApps = () => {
    const installed = localStorage.getItem('installed-apps');
    return installed ? JSON.parse(installed) : [];
};

const Installation = () => {
    const allApps = useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const installedIds = getInstalledApps();
        const apps = allApps.filter(app => installedIds.includes(app.id));
        setInstalledApps(apps);
    }, [allApps]);

    const handleUninstall = (appId, appName) => {
        const currentInstalled = getInstalledApps();
        const updatedInstalled = currentInstalled.filter(id => id !== appId);
        localStorage.setItem('installed-apps', JSON.stringify(updatedInstalled));
        
        // Update the state to re-render the UI
        setInstalledApps(prevApps => prevApps.filter(app => app.id !== appId));
        toast.error(`${appName} has been uninstalled.`);
    };


    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">My Installed Apps</h1>
                <p className="text-lg text-gray-500 mt-2">Manage all the applications you have installed.</p>
            </div>

            {installedApps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {installedApps.map(app => (
                        <div key={app.id} className="relative">
                            <AppCard app={app} />
                             <button 
                                onClick={() => handleUninstall(app.id, app.name)}
                                className="btn btn-sm btn-error absolute top-4 right-4"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}
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
