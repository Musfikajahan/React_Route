import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppCard from '../components/AppCard';

const AllApps = () => {
    const allAppsData = useLoaderData();
    const [apps, setApps] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        let processedApps = [...allAppsData];

        // 1. Filter by search term
        if (searchTerm) {
            processedApps = processedApps.filter(app =>
                app.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // 2. Sort the filtered apps
        if (sortOrder === 'high-low') {
            processedApps.sort((a, b) => b.downloads - a.downloads);
        } else if (sortOrder === 'low-high') {
            processedApps.sort((a, b) => a.downloads - b.downloads);
        }
        
        setApps(processedApps);

    }, [searchTerm, sortOrder, allAppsData]);


    return (
        <div className="container mx-auto px-4 py-8">
            {/* Title Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">All Apps</h1>
                <p className="text-gray-500 mt-2">Browse our extensive collection of applications.</p>
            </div>

            {/* Search and States */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <p className="font-semibold text-lg">{apps.length} Apps Found</p>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search apps..."
                        className="border rounded-md py-2 px-4 w-full md:w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="border rounded-md py-2 px-4"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="">Sort by Downloads</option>
                        <option value="high-low">High-Low</option>
                        <option value="low-high">Low-High</option>
                    </select>
                </div>
            </div>

            {/* App Section */}
            {apps.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {apps.map(app => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-2xl text-gray-500">No App Found</p>
                    <p className="text-gray-400 mt-2">Try adjusting your search or filter.</p>
                </div>
            )}
        </div>
    );
};

export default AllApps;

