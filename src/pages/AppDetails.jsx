import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import toast from 'react-hot-toast';

// Utility to get installed apps from localStorage
const getInstalledApps = () => {
    const installed = localStorage.getItem('installed-apps');
    return installed ? JSON.parse(installed) : [];
};

// Utility to save an app to localStorage
const saveInstalledApp = (id) => {
    const installed = getInstalledApps();
    if (!installed.includes(id)) {
        installed.push(id);
        localStorage.setItem('installed-apps', JSON.stringify(installed));
    }
};


const AppDetails = () => {
    const allApps = useLoaderData();
    const { id } = useParams();
    const [isInstalled, setIsInstalled] = useState(false);
    
    const app = allApps.find(app => app.id === parseInt(id));

    useEffect(() => {
        const installedApps = getInstalledApps();
        if (installedApps.includes(parseInt(id))) {
            setIsInstalled(true);
        }
    }, [id]);

    const handleInstall = () => {
        saveInstalledApp(parseInt(id));
        setIsInstalled(true);
        toast.success(`${app.name} has been installed!`);
    };

    if (!app) {
        return (
            <div className="text-center py-20">
                <h2 className="text-3xl font-bold">App Not Found</h2>
                <p className="text-gray-500 mt-4">Sorry, we couldn't find the app you're looking for.</p>
            </div>
        )
    }

    const { name, image, downloads, rating, reviews, description, review_data } = app;

    return (
        <div className="container mx-auto px-4 py-12">
            {/* App Information Section */}
            <div className="flex flex-col md:flex-row gap-12 mb-16">
                <div className="md:w-1/3">
                    <img src={image} alt={name} className="w-full h-auto rounded-2xl shadow-lg" />
                </div>
                <div className="md:w-2/3">
                    <h1 className="text-4xl font-bold mb-4">{name}</h1>
                    <div className="flex items-center gap-6 text-lg mb-6">
                        <span className="font-semibold">⭐ {rating} ({reviews} reviews)</span>
                        <span className="font-semibold">{downloads} Downloads</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8">{description}</p>
                    <button 
                        onClick={handleInstall}
                        disabled={isInstalled}
                        className="btn btn-primary btn-wide disabled:btn-success"
                    >
                        {isInstalled ? 'Installed' : 'Install'}
                    </button>
                </div>
            </div>

            {/* App Review Chart */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Review Analysis</h2>
                <div style={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer>
                        <BarChart
                            data={review_data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="reviews" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

             {/* App Description */}
            <div>
                 <h2 className="text-3xl font-bold mb-4">Full Description</h2>
                 <div className="prose max-w-none">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
                     <p>Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.</p>
                 </div>
            </div>
        </div>
    );
};

export default AppDetails;
