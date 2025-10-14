import React from 'react';
import { Link } from 'react-router-dom';

const AppCard = ({ app }) => {
    const { id, name, image, downloads, rating } = app;

    return (
        <Link to={`/app/${id}`} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
                <img src={image} alt={name} className="rounded-xl h-40 w-40 object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="flex justify-between w-full mt-2 text-sm text-gray-500">
                    <span>{downloads} Downloads</span>
                    <span>⭐ {rating}</span>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;
